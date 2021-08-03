# CloudPonics
Remote config and monitoring dashboard for PeaPod systems.

# Architecture

## Webpage

Single-page webapp. Built with React (TypeScript), MaterialUI and Redux for state management.

1. Landing page (form selection)
2. Checklist page (prerequisites, parameterized checklist generation)
3. Outcome page (success or personal doc fetch or form fill)

## Backend

Serverless hosting via Firebase.

1. Database with a table of forms with their checklists
2. Webapp hosting

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