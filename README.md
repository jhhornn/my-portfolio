# Backend Developer Portfolio

A professional terminal-themed portfolio website built with Next.js 14, featuring interactive animations and a distinctive Linux terminal aesthetic.

## 🚀 Features

- **Terminal UI**: Authentic Linux terminal interface with command-line navigation
- **Boot Sequence**: System boot animation on initial load
- **Interactive Animations**: Typewriter effects, glitch animations, and smooth transitions
- **Matrix Rain**: Dynamic background effect with falling characters
- **Fully Responsive**: Mobile-friendly design that adapts to all screen sizes
- **Snake Game**: Playable terminal-based mini-game
- **Real Contact Form**: Functional email delivery via Web3Forms
- **Dynamic Footer**: Rotating tech quotes and live uptime counter
- **Real Projects**: Showcases actual projects with live demos and GitHub links
- **Enhanced Skills**: Comprehensive skills display including DevOps, AI tools, and multi-tenant architecture

## 📦 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: JetBrains Mono (monospace)
- **Language**: TypeScript
- **Email Service**: Web3Forms API
- **Form Handling**: React hooks with async/await

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

3. **Set up environment variables** (for contact form):
   ```bash
   # Create .env.local file in project root
   echo "NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here" > .env.local
   ```
   
   See [SETUP_EMAIL.md](./SETUP_EMAIL.md) for detailed email setup instructions.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
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
   - Change name in the TypewriterText component (line 101)
   - Update tagline (currently: "Backend Engineer")
   - Modify description to reflect your expertise

2. **About Page** (`app/about/page.tsx`):
   - Update bio paragraphs (lines 56-72)
   - Modify skills array (lines 9-17) with your expertise areas
   - Adjust skill levels (0-100%)

3. **Projects** (`app/projects/page.tsx`):
   - Replace projects array (lines 9-125) with your projects
   - Include: name, description, tech stack, features, links, status
   - Supported statuses: "COMPLETED", "IN PROGRESS", "MAINTAINED"

4. **Contact** (`app/contact/page.tsx`):
   - Update email (line 133): awosiseo@gmail.com
   - Update GitHub link (line 137): @jhhornn
   - Update LinkedIn (line 141): jhhornn
   - Update X/Twitter (line 145): @jhhornn

5. **Footer** (`app/layout.tsx`):
   - Add/modify tech quotes in the rotation (lines 32-41)
   - Update launch date for uptime counter (line 47)

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

## 🔐 Environment Variables

For the contact form to work, you need to set up Web3Forms:

```bash
# .env.local
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_access_key
```

**Setup Steps:**
1. Sign up at [Web3Forms](https://web3forms.com) (free)
2. Verify your email
3. Copy your Access Key
4. Add to `.env.local` file in project root
5. Restart dev server

See [SETUP_EMAIL.md](./SETUP_EMAIL.md) for detailed instructions.

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variable in Vercel dashboard:
   - Key: `NEXT_PUBLIC_WEB3FORMS_KEY`
   - Value: Your Web3Forms access key
4. Deploy automatically

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- **Netlify**: Add env vars in Site settings → Environment variables
- **AWS Amplify**: Add in Environment variables section
- **Railway**: Add in Variables tab
- **Render**: Add in Environment section

**Important:** Always add the `NEXT_PUBLIC_WEB3FORMS_KEY` environment variable for the contact form to work in production.

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Acknowledgments

- Terminal design inspired by Linux CLI
- Matrix rain effect adapted from classic Matrix screen savers
- Built with modern web technologies for optimal performance
