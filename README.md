# AzphireHR

![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js 16](https://img.shields.io/badge/Next.js-16-black)
![React 19](https://img.shields.io/badge/React-19-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)
![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-4-38bdf8)

A marketing website for AzphireHR, a concept AI-native hiring platform for the Philippines. It is a front-end design demo: product pages, solutions, pricing, FAQ and company pages, with animated 3D hero visuals. Product names, statistics, testimonials and logos on the site are illustrative placeholder content, and there is no backend.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion, three.js with React Three Fiber / drei, lucide-react.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Structure

- `src/app/` - routes (home, products, solutions, pricing, about, careers, contact, docs, legal pages)
- `src/components/ui/` - reusable UI components
- `src/components/three/` - 3D scenes (hero, Philippines map, floating icons)
- `src/data/site.ts` - all site copy and configuration

## License

[MIT](LICENSE)
