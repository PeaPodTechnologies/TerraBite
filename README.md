# CloudPonics
Remote config and monitoring dashboard for PeaPod systems.

[![Deploy to Firebase Hosting on merge](https://github.com/PeaPodTechnologies/CloudPonics/actions/workflows/firebase-hosting-merge.yml/badge.svg?branch=master)](https://github.com/PeaPodTechnologies/CloudPonics/actions/workflows/firebase-hosting-merge.yml)

# Architecture

## Webpage

Single-page webapp. Built with React (TypeScript), MaterialUI and Redux for state management.

## Backend

Serverless hosting via Firebase.

# Development

## Resources

- [Setting Up React w/ Firebase](https://www.youtube.com/watch?v=mwNATxfUsgI)
- [Full Tutorial](https://www.youtube.com/watch?v=m_u6P5k0vP0)
- [React w/ TypeScript Example](https://www.typescriptlang.org/play?jsx=2&esModuleInterop=true&e=196#example/typescript-with-react)
- [React TypeScript Cheat Sheet](https://react-typescript-cheatsheet.netlify.app/)

## Local Development

1. Start the Firebase local emulators with `npm run emulate`.
2. In a separate terminal, start the development server with `npm start`.

## Deployment

1. Execute `npm run deploy` to compile an optimized  build and deploy to Firebase Hosting.
