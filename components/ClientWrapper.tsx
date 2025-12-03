"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/Navigation";

const MatrixRain = dynamic(
    () => import("@/components/MatrixRain").then((mod) => ({ default: mod.MatrixRain })),
    { ssr: false }
);

export function ClientWrapper({ children }: { children: React.ReactNode }) {
    return (
        <>
            <MatrixRain />
            <Navigation />
            <main className="flex-grow pt-20 px-4 pb-8 relative z-10">
                {children}
            </main>
        </>
    );
}
