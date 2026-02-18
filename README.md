# Daniel Diya - Portfolio Website

A modern, dark-themed portfolio website built with Next.js 15, Tailwind CSS v4, and Framer Motion.

## Features

✨ **Modern Design**
- Dark theme with purple accent colors
- Sophisticated two-column layout with fixed sidebar
- Bouncing avatar with glow effects

🎬 **Smooth Animations**
- Scroll-triggered animations using Framer Motion
- Hover effects on cards and buttons
- Page transitions

📱 **Fully Responsive**
- Mobile-first design
- Adapts beautifully to all screen sizes

🎯 **Key Sections**
- **About**: Introduction and services
- **Portfolio**: Project showcase with images and tech stacks
- **Resume**: Professional experience and education timeline
- **Contact**: Form with validation

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Avatar

Replace the emoji in `components/Sidebar.tsx` (line ~34) with your own image:

```tsx
<Image
  src="/your-avatar.jpg"
  alt="Your Name"
  width={160}
  height={160}
  className="rounded-3xl"
/>
```

### Upload Resume PDF

Replace the placeholder `public/resume.pdf` with your actual resume file.

### Update Content

Edit the mock data in `data/mockData.ts` to customize:
- Social links
- Services/skills
- Projects
- Work experience
- Education

### Change Colors

Modify the color variables in `app/globals.css`:

```css
:root {
  --color-accent-primary: #a855f7; /* Your primary color */
  --color-accent-secondary: #8b5cf6; /* Your secondary color */
}
```

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Project Structure

```
portfolio/
├── app/                 # Next.js app directory
│   ├── page.tsx        # About page (home)
│   ├── portfolio/      # Portfolio page
│   ├── resume/         # Resume page
│   └── contact/        # Contact page
├── components/         # React components
├── data/              # Mock data
├── lib/               # Utility functions
├── types/             # TypeScript types
└── public/            # Static assets
```

## Features to Implement

- [ ] Connect contact form to email service (e.g., EmailJS, SendGrid)
- [ ] Add more projects to portfolio
- [ ] Implement blog section
- [ ] Add dark/light mode toggle
- [ ] Connect to a CMS for content management

## License

MIT License - feel free to use this template for your own portfolio!

---

Built with ❤️ by Daniel Diya