# Shivam Raj — Developer Portfolio

### Building Digital Experiences with React and JavaScript

A personal developer portfolio showcasing my technical skills, full-stack projects, education, and development journey. Designed to present my work through an interactive interface, responsive layouts, and smooth animations.

**Live Website:** [shivamrajportfolios.netlify.app](https://shivamrajportfolios.netlify.app/)

**GitHub:** [singhshivamraj](https://github.com/singhshivamraj)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Featured Projects](#featured-projects)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Production Build](#production-build)
- [Deployment](#deployment)
- [What I Learned](#what-i-learned)
- [Contact](#contact)

---

## Overview

I built this portfolio to bring my development work, technical skills, and learning journey together in one place.

Rather than presenting only a list of technologies, the website highlights practical projects and the engineering concepts behind them. The interface combines React components, responsive styling, client-side routing, and motion effects to create a consistent browsing experience across screen sizes.

The portfolio is built with **React, JavaScript, Tailwind CSS, Framer Motion, and Vite**, and is deployed on Netlify.

### Goals

- Present my projects and technical skills professionally.
- Make project demos and source code easy to explore.
- Build a responsive interface for desktop and mobile devices.
- Practice component-based development and frontend architecture.
- Deploy and maintain a real-world website through Git and GitHub.

---

## Features

### Interactive User Interface

- Modern dark-themed visual design.
- Gradient typography and visual accents.
- Animated elements using Framer Motion.
- Custom cursor effects using the TubesCursor component.
- Consistent styling across portfolio sections.

### Responsive Design

- Responsive layouts for different screen sizes.
- Tailwind CSS utility classes for styling and breakpoints.
- Adaptive image and content positioning.
- Mobile navigation and layout adjustments.

### Multi-page Navigation

The portfolio uses React Router for client-side navigation between its pages.

Sections and pages include:

- Home
- About
- Projects
- Skills
- Journey
- Education
- Contact

Additional project and about-detail pages provide space for more detailed information.

### Project Showcase

- Dedicated project listing page.
- Project detail pages.
- Links to live applications and source repositories where available.
- Technology descriptions and project highlights.

### Contact

The portfolio includes a contact section for visitors who want to reach out. EmailJS environment variables are used for its email integration.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Styling and visual presentation |
| JavaScript (ES6+) | Application logic and interactions |
| React | Component-based UI development |
| Tailwind CSS | Responsive styling and utility classes |
| Framer Motion | Animations and interactive motion |
| React Router DOM | Client-side routing |
| Vite | Development server and production bundler |
| Lucide React | Interface icons |
| React Icons | Additional icon library |
| EmailJS | Contact form email integration |
| Git | Version control |
| GitHub | Source code hosting |
| Netlify | Website deployment |

**Language note:** The application uses JavaScript, not TypeScript.

---

## Featured Projects

### 1. GenZVibe — E-commerce Application

A full-stack shopping application built with the MERN stack.

**Technologies:** React, JavaScript, Node.js, Express.js, MongoDB, Razorpay, Cloudinary.

**Key implementation details:**
- User authentication and protected application flows.
- Product management and database integration.
- REST API communication between frontend and backend.
- Cloudinary image uploads.
- Razorpay payment integration.
- Backend payment-signature verification before order creation.

**Links**
- Source code: [GenZVibe on GitHub](https://github.com/singhshivamraj/GenZVibe)
- Live demo: [Add your GenZVibe live URL](YOUR_GENZVIBE_LIVE_URL)

### 2. Nestio — Property Listing Platform

A property listing application inspired by real-world accommodation discovery.

**Technologies:** Node.js, Express.js, MongoDB, Mongoose, EJS, Bootstrap, Passport.js, Cloudinary, MapLibre.

**Key implementation details:**
- Create, view, update, and delete property listings.
- Authentication and authorization.
- Reviews and ratings.
- Image upload integration.
- Listing search and category-based exploration.
- Map-based location presentation.

**Links**
- Live demo: [Nestio](https://nestio-1.onrender.com/listings/new)
- Source code: [Add your Nestio GitHub URL](YOUR_NESTIO_GITHUB_URL)

---

## Project Structure

The following is a simplified overview of the main application structure.

```text
portfolio/
├── public/
├── src/
│   ├── assets/
│   │   └── images and other static assets
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Project.jsx
│   │   ├── Skills.jsx
│   │   └── TubesCursor.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── AboutDetails.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetails.jsx
│   │   ├── Journey.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

*Note: This tree summarizes the main files and folders; it is not intended to list every file in the repository.*

---

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Install the following:

- Node.js (a current supported LTS release is recommended).
- npm.
- Git.

### 1. Clone the repository

```bash
git clone https://github.com/singhshivamraj/shivam-portfolios.git
```

### 2. Navigate to the project

```bash
cd shivam-portfolios
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root and add the required EmailJS configuration. See [Environment Variables](#environment-variables).

### 5. Start the development server

```bash
npm run dev
```

Vite will display a local URL in the terminal, usually `http://localhost:5173/`.

---

## Environment Variables

The contact form uses EmailJS configuration values.

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

Replace the placeholder values with your own EmailJS project details.

### Important Security Notes

- Never commit your local `.env` file to GitHub.
- Keep `.env` listed in `.gitignore`.
- Vite variables prefixed with `VITE_` are exposed to the browser bundle. Use only values intended to be public, such as an EmailJS public key.
- Never place private API keys, passwords, database credentials, or server secrets in frontend environment variables.
- For deployment, add the required variables through your hosting provider's environment-variable settings.

If you create a `.env.example` file, include only placeholder values—not your actual credentials.

---

## Production Build

Create an optimized production build:

```bash
npm run build
```

Vite generates the production files in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

Before deploying, verify that the build completes successfully and test the main routes, images, navigation, and contact form.

---

## Deployment

The portfolio is deployed using Netlify.

### Deployment Configuration

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Hosting platform | Netlify |
| Source control | GitHub |

### Deployment Workflow

1. Commit changes locally using Git.
2. Push the commits to the connected GitHub repository.
3. Allow Netlify to build and deploy the updated application.
4. Verify the deployment and test the live website.

**Live Portfolio:** https://shivamrajportfolios.netlify.app/

If the project uses React Router with direct page URLs, configure a Netlify single-page application redirect when needed:

```text
/*    /index.html   200
```

This rule can be placed in `public/_redirects` so that direct navigation to client-side routes falls back to the application entry point.

---

## What I Learned

Working on this portfolio helped me practice:

- Structuring applications with reusable React components.
- Managing multi-page navigation with React Router.
- Creating responsive layouts with Tailwind CSS.
- Adding animations and motion effects with Framer Motion.
- Integrating a contact form with EmailJS.
- Managing project changes with Git and GitHub.
- Building and deploying a production-ready Vite application.
- Identifying and refining UI spacing and responsive behavior.

---

## Contact

I'm a Computer Science engineering student focused on full-stack development and building practical web applications.

- **Portfolio:** [shivamrajportfolios.netlify.app](https://shivamrajportfolios.netlify.app/)
- **GitHub:** [singhshivamraj](https://github.com/singhshivamraj)
- **LinkedIn:** [Add your LinkedIn profile URL](YOUR_LINKEDIN_URL)
- **Email:** [Add your email address](YOUR_EMAIL_ADDRESS)

---

## License

This repository is a personal portfolio project. If you intend to reuse or redistribute its code, add a license that reflects your intended terms.

---

*Designed and developed by Shivam Raj.*
