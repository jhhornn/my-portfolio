"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { TerminalWindow } from "@/components/TerminalWindow";
import { Play, RotateCcw, Pause } from "lucide-react";

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const GAME_SPEED = 150;

export default function Game() {
    const [snake, setSnake] = useState(INITIAL_SNAKE);
    const [food, setFood] = useState({ x: 15, y: 10 });
    const [direction, setDirection] = useState(INITIAL_DIRECTION);
    const [isPlaying, setIsPlaying] = useState(false);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [highScore, setHighScore] = useState(0);

    const gameLoopRef = useRef<NodeJS.Timeout | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const generateFood = useCallback(() => {
        return {
            x: Math.floor(Math.random() * (canvasRef.current?.width || 400) / CELL_SIZE),
            y: Math.floor(Math.random() * (canvasRef.current?.height || 400) / CELL_SIZE),
        };
    }, []);

    const resetGame = () => {
        setSnake(INITIAL_SNAKE);
        setDirection(INITIAL_DIRECTION);
        setScore(0);
        setGameOver(false);
        setIsPlaying(true);
        setFood(generateFood());
    };

    const checkCollision = (head: { x: number; y: number }) => {
        // Wall collision
        if (
            head.x < 0 ||
            head.x >= (canvasRef.current?.width || 400) / CELL_SIZE ||
            head.y < 0 ||
            head.y >= (canvasRef.current?.height || 400) / CELL_SIZE
        ) {
            return true;
        }

        // Self collision
        for (let i = 1; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                return true;
            }
        }

        return false;
    };

    const moveSnake = useCallback(() => {
        if (gameOver) return;

        const newSnake = [...snake];
        const head = { x: newSnake[0].x + direction.x, y: newSnake[0].y + direction.y };

        if (checkCollision(head)) {
            setGameOver(true);
            setIsPlaying(false);
            if (score > highScore) setHighScore(score);
            return;
        }

        newSnake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            setScore((prev) => prev + 10);
            setFood(generateFood());
        } else {
            newSnake.pop();
        }

        setSnake(newSnake);
    }, [snake, direction, food, gameOver, score, highScore, generateFood]);

    useEffect(() => {
        if (isPlaying) {
            gameLoopRef.current = setInterval(moveSnake, GAME_SPEED);
        } else {
            if (gameLoopRef.current) clearInterval(gameLoopRef.current);
        }

        return () => {
            if (gameLoopRef.current) clearInterval(gameLoopRef.current);
        };
    }, [isPlaying, moveSnake]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case "ArrowUp":
                case "w":
                case "W":
                    if (direction.y === 0) setDirection({ x: 0, y: -1 });
                    break;
                case "ArrowDown":
                case "s":
                case "S":
                    if (direction.y === 0) setDirection({ x: 0, y: 1 });
                    break;
                case "ArrowLeft":
                case "a":
                case "A":
                    if (direction.x === 0) setDirection({ x: -1, y: 0 });
                    break;
                case "ArrowRight":
                case "d":
                case "D":
                    if (direction.x === 0) setDirection({ x: 1, y: 0 });
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [direction]);

    // Touch controls for mobile
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        let touchStartX = 0;
        let touchStartY = 0;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;

            const deltaX = touchEndX - touchStartX;
            const deltaY = touchEndY - touchStartY;

            // Minimum swipe distance
            const minSwipeDistance = 30;

            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                // Horizontal swipe
                if (Math.abs(deltaX) > minSwipeDistance) {
                    if (deltaX > 0 && direction.x === 0) {
                        setDirection({ x: 1, y: 0 }); // Right
                    } else if (deltaX < 0 && direction.x === 0) {
                        setDirection({ x: -1, y: 0 }); // Left
                    }
                }
            } else {
                // Vertical swipe
                if (Math.abs(deltaY) > minSwipeDistance) {
                    if (deltaY > 0 && direction.y === 0) {
                        setDirection({ x: 0, y: 1 }); // Down
                    } else if (deltaY < 0 && direction.y === 0) {
                        setDirection({ x: 0, y: -1 }); // Up
                    }
                }
            }
        };

        canvas.addEventListener("touchstart", handleTouchStart);
        canvas.addEventListener("touchend", handleTouchEnd);

        return () => {
            canvas.removeEventListener("touchstart", handleTouchStart);
            canvas.removeEventListener("touchend", handleTouchEnd);
        };
    }, [direction]);

    // Draw game
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Clear canvas
        ctx.fillStyle = "#0a0a0a";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw snake
        ctx.fillStyle = "#00ff41";
        snake.forEach((segment) => {
            ctx.fillRect(segment.x * CELL_SIZE, segment.y * CELL_SIZE, CELL_SIZE - 2, CELL_SIZE - 2);
        });

        // Draw food
        ctx.fillStyle = "#ff5555";
        ctx.fillRect(food.x * CELL_SIZE, food.y * CELL_SIZE, CELL_SIZE - 2, CELL_SIZE - 2);

        // Grid lines (optional, subtle)
        ctx.strokeStyle = "#1a1a1a";
        ctx.lineWidth = 1;
        for (let i = 0; i <= canvas.width; i += CELL_SIZE) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, canvas.height);
            ctx.stroke();
        }
        for (let i = 0; i <= canvas.height; i += CELL_SIZE) {
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(canvas.width, i);
            ctx.stroke();
        }

    }, [snake, food]);

    return (
        <div className="max-w-2xl mx-auto">
            <TerminalWindow command="./snake_game.sh" title="jhhornn@portfolio:~/game">
                <div className="flex flex-col items-center gap-6">
                    <div className="flex justify-between w-full px-4 text-terminal-light-gray font-mono">
                        <div>SCORE: <span className="text-terminal-green">{score}</span></div>
                        <div>HIGH SCORE: <span className="text-terminal-amber">{highScore}</span></div>
                    </div>

                    <div className="relative border-2 border-terminal-dark-gray rounded overflow-hidden">
                        <canvas
                            ref={canvasRef}
                            width={600}
                            height={400}
                            className="block bg-terminal-black"
                        />

                        {gameOver && (
                            <div className="absolute inset-0 bg-black/80 flex items-center justify-center flex-col gap-4">
                                <div className="text-terminal-red text-2xl font-bold">GAME OVER</div>
                                <button
                                    onClick={resetGame}
                                    className="px-6 py-2 bg-terminal-green text-terminal-black font-bold rounded hover:bg-terminal-bright-green transition-colors flex items-center gap-2"
                                >
                                    <RotateCcw size={18} /> Try Again
                                </button>
                            </div>
                        )}

                        {!isPlaying && !gameOver && (
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                <button
                                    onClick={() => setIsPlaying(true)}
                                    className="px-8 py-3 bg-terminal-green text-terminal-black font-bold rounded hover:bg-terminal-bright-green transition-colors flex items-center gap-2"
                                >
                                    <Play size={20} /> {score > 0 ? "Resume" : "Start Game"}
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Touch Controls for Mobile */}
                    <div className="grid grid-cols-3 gap-2 md:hidden w-48">
                        <div></div>
                        <button
                            onClick={() => direction.y === 0 && setDirection({ x: 0, y: -1 })}
                            className="p-3 bg-terminal-dark-gray border border-terminal-green text-terminal-green rounded hover:bg-terminal-green hover:text-terminal-black transition-colors"
                            aria-label="Move Up"
                        >
                            ↑
                        </button>
                        <div></div>
                        <button
                            onClick={() => direction.x === 0 && setDirection({ x: -1, y: 0 })}
                            className="p-3 bg-terminal-dark-gray border border-terminal-green text-terminal-green rounded hover:bg-terminal-green hover:text-terminal-black transition-colors"
                            aria-label="Move Left"
                        >
                            ←
                        </button>
                        <button
                            onClick={() => direction.y === 0 && setDirection({ x: 0, y: 1 })}
                            className="p-3 bg-terminal-dark-gray border border-terminal-green text-terminal-green rounded hover:bg-terminal-green hover:text-terminal-black transition-colors"
                            aria-label="Move Down"
                        >
                            ↓
                        </button>
                        <button
                            onClick={() => direction.x === 0 && setDirection({ x: 1, y: 0 })}
                            className="p-3 bg-terminal-dark-gray border border-terminal-green text-terminal-green rounded hover:bg-terminal-green hover:text-terminal-black transition-colors"
                            aria-label="Move Right"
                        >
                            →
                        </button>
                    </div>

                    <div className="text-sm text-terminal-gray text-center">
                        <p className="hidden md:block">Use Arrow Keys or WASD to move</p>
                        <p className="md:hidden">Swipe or use buttons to move</p>
                        <p>Eat the red blocks to grow</p>
                    </div>
                </div>
            </TerminalWindow>
        </div>
    );
}
