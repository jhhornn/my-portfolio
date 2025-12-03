# Backend Developer Portfolio

A professional terminal-themed portfolio website built with Next.js 14, featuring interactive animations and a distinctive Linux terminal aesthetic.

## 🚀 Features

- **Terminal UI**: Authentic Linux terminal interface with command-line navigation
- **Boot Sequence**: System boot animation on initial load
- **Interactive Animations**: Typewriter effects, glitch animations, and smooth transitions
- **Matrix Rain**: Dynamic background effect with falling characters
- **Fully Responsive**: Mobile-friendly design that adapts to all screen sizes
- **Snake Game**: Playable terminal-based mini-game
- **Contact Form**: Interactive terminal-style contact interface

## 📦 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: JetBrains Mono (monospace)
- **Language**: TypeScript

## 🛠️ Installation

### Prerequisites

- Node.js 18+ and npm

### Setup

1. **Clone or navigate to the repository:**
   ```bash
   cd /Users/oluwaseun/Documents/my-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   
   If you encounter network timeout issues, try:
   ```bash
   npm install --registry=https://registry.npmjs.org
   # or
   npm install --prefer-offline
   # or install packages individually
   npm install framer-motion lucide-react clsx tailwind-merge
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── about/
│   │   └── page.tsx          # About Me section
│   ├── certifications/
│   │   └── page.tsx          # Certifications list
│   ├── contact/
│   │   └── page.tsx          # Contact form
│   ├── game/
│   │   └── page.tsx          # Snake game
│   ├── projects/
│   │   └── page.tsx          # Projects showcase
│   ├── globals.css           # Global styles & terminal theme
│   ├── layout.tsx            # Root layout with navigation
│   └── page.tsx              # Hero/Landing page
├── components/
│   ├── BlinkingCursor.tsx    # Animated cursor component
│   ├── MatrixRain.tsx        # Background matrix effect
│   ├── Navigation.tsx        # Terminal-style nav menu
│   ├── TerminalWindow.tsx    # Reusable terminal container
│   └── TypewriterText.tsx    # Typewriter animation
├── lib/
│   ├── animations.ts         # Framer Motion variants
│   └── utils.ts              # Utility functions (cn)
└── public/                   # Static assets
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`app/page.tsx`):
   - Change name in the TypewriterText component
   - Update tagline and description

2. **About Page** (`app/about/page.tsx`):
   - Modify bio text
   - Update skills and percentages

3. **Projects** (`app/projects/page.tsx`):
   - Add/remove projects in the `projects` array
   - Update links, tech stack, and descriptions

4. **Certifications** (`app/certifications/page.tsx`):
   - Add/edit certifications in the `certifications` array

5. **Contact** (`app/contact/page.tsx`):
   - Update social media links
   - Configure email address

### Color Scheme

Terminal colors are defined in `app/globals.css`:

```css
--terminal-black: #0a0a0a;
--terminal-green: #00ff41;
--terminal-amber: #ff9800;
--terminal-red: #ff5555;
--terminal-blue: #8be9fd;
```

## 🎮 Game Controls

**Snake Game** (`/game`):
- Arrow Keys or WASD to move
- Avoid walls and self-collision
- Eat red blocks to grow

## 📱 Navigation

The site uses terminal-style commands for navigation:

- `$ home` - Hero/Landing page
- `$ about` - About Me section
- `$ projects` - Projects showcase
- `$ certs` - Certifications
- `$ contact` - Contact form
- `$ game` - Snake game

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Acknowledgments

- Terminal design inspired by Linux CLI
- Matrix rain effect adapted from classic Matrix screen savers
- Built with modern web technologies for optimal performance
