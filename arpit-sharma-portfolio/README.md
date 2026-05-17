
# Arpit Sharma - Futuristic Portfolio Website

Modern futuristic portfolio website built for a Network Engineer transitioning into DevOps & Cyber Security.

## Features

- Futuristic cyber-security UI
- Animated background effects
- Floating networking devices
- Real profile image integration
- Responsive design
- Dark glassmorphism theme
- Smooth animations using Framer Motion
- Mobile friendly navigation

## Tech Stack

- React
- TypeScript
- Vite
- TailwindCSS
- Framer Motion
- Lucide React

## Important Update

This project now works completely WITHOUT Google API.

No Google Maps API, Google Authentication API, or external Google services are required.

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## Folder Structure

```bash
src/
 ├── assets/
 │    └── images/
 ├── components/
 │    ├── AnimatedBackground.tsx
 │    └── CyberDevices.tsx
 ├── data/
 ├── lib/
 ├── App.tsx
 └── main.tsx
```

## Customization

You can update:
- Profile image
- Skills
- Experience
- Projects
- Social links
- Colors and animations

Main editable file:
```bash
src/data/portfolioData.ts
```

## Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

Upload the generated `dist` folder after running:

```bash
npm run build
```

## Performance

- Optimized animations
- Mobile responsive
- Lightweight UI
- Smooth scrolling
- GPU accelerated motion effects

## Author

Arpit Sharma

Network Engineer | Aspiring DevOps Engineer
