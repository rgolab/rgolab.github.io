# Rafał Gołąb - Professional CV Website

A modern, responsive CV/Portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Clean, professional design with dark/light theme toggle
- 📱 Fully responsive layout
- ⚡ Fast loading with Next.js optimization
- 🔧 Easy to customize - just edit the data files
- 📊 Visual skill proficiency indicators
- 📅 Timeline view for work experience
- 📧 Contact form
- 🎯 Smooth scrolling navigation

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn

### Installation

1. Install dependencies:
```bash
cd rafal-cv
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Updating Content

All content is stored in easily editable TypeScript files in the `data/` directory:

- `data/profile.ts` - Contains all personal information, projects, experience, skills, education, and certifications

To update your information:
1. Open `data/profile.ts`
2. Update the relevant sections with your information
3. Save the file and the website will automatically update

### Adding New Sections

Each section is a separate component in `components/sections/`:
- `hero.tsx` - Home/intro section
- `projects.tsx` - Projects showcase
- `experience.tsx` - Work experience timeline
- `skills.tsx` - Technical skills with proficiency
- `education.tsx` - Educational background
- `certifications.tsx` - Professional certifications
- `contact.tsx` - Contact form and information

### Styling

- The website uses Tailwind CSS for styling
- Theme colors can be customized in `tailwind.config.ts`
- Global styles are in `app/globals.css`

## Building for Production

```bash
npm run build
npm run start
```

## Deployment

The site can be deployed to any platform that supports Next.js:

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the project to Vercel
3. Deploy with default settings

### Other Platforms
- Netlify
- AWS Amplify
- Railway
- Render

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **next-themes** - Dark mode support

## Project Structure

```
rafal-cv/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── navigation.tsx  # Navigation bar
│   ├── theme-provider.tsx
│   └── sections/       # Page sections
├── data/
│   └── profile.ts      # All content data
├── public/             # Static assets
└── package.json        # Dependencies
```

## License

MIT License - feel free to use this template for your own CV website!