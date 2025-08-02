# Zerish Proposal - Next.js Website

A modern, responsive website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 14** - React framework with App Router
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔧 **TypeScript** - Type-safe development
- 📱 **Responsive Design** - Mobile-first approach
- 🚀 **Fast Performance** - Optimized for speed
- 🎯 **Modern UI** - Beautiful, modern design

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zerish-proposal
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
zerish-proposal/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout
│       ├── page.tsx        # Home page
│       └── globals.css     # Global styles
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **ESLint** - Code linting

## Development

The project uses the Next.js App Router with TypeScript. The main page is located at `src/app/page.tsx` and the layout at `src/app/layout.tsx`.

### Adding New Pages

Create new pages in the `src/app` directory following the Next.js 13+ App Router conventions.

### Styling

The project uses Tailwind CSS for styling. Custom styles can be added to `src/app/globals.css`.

## Deployment

The project can be deployed to Vercel, Netlify, or any other platform that supports Next.js.

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE). 