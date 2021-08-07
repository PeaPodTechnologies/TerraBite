# TerraBite

Order management portal for subscription-based farm-to-table vertical farming, aka "Agriculture-as-a-Service". Designed as a carbon-negative drop-in solution to supply chain unavailability, quality instability, and price fluctuations for restaurants and grocery services, and offers infinitely-variable produce selection controlled by the consumer.

Also a direct remote config and monitoring "admin dashboard" for PeaPod systems.

[![Deploy to Firebase Hosting on Merge](https://github.com/PeaPodTechnologies/CloudPonics/actions/workflows/deploy-master.yml/badge.svg)](https://github.com/PeaPodTechnologies/CloudPonics/actions/workflows/deploy-master.yml)

**Production Build**: https://www.terrabite.com

**Pre-Production Build**: https://terrabite-65296--staging-f4g9o3vo.web.app

# Architecture

## Webpage

Multi-page webapp. Built with React (TypeScript), MaterialUI and Redux for state management.

- Dashboard - produce selection and subscription management
- Account settings - payment/invoicing, shipping, etc.
- Signup Page
- Login Page
- PeaPod Cluster Admin Dashboard - "grow task" management, diagnostic monitoring, data collection and analysis

## Backend

Serverless hosting via Firebase.

- User account and subscription data
- PeaPod data (state, data, config)

# Development

## Resources

- [Setting Up React w/ Firebase](https://www.youtube.com/watch?v=mwNATxfUsgI)
- [Full Stack Tutorial](https://www.youtube.com/watch?v=m_u6P5k0vP0)
- [React w/ TypeScript Example](https://www.typescriptlang.org/play?jsx=2&esModuleInterop=true&e=196#example/typescript-with-react)
- [React TypeScript Cheat Sheet](https://react-typescript-cheatsheet.netlify.app/)

## Local Development

1. Start the Firebase local emulators with `npm run emulate`.
2. In a separate terminal, start the development server with `npm start`.

## Deployment

1. Execute `npm run deploy` to compile an optimized  build and deploy to Firebase Hosting.
