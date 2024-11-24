# 🌿 Mate y Tradición

## 📖 About the Project

"Mate y Tradición" is a web application dedicated to exploring the cultural and social significance of **yerba mate**, a
traditional infusion deeply rooted in South American heritage. This project highlights the history, preparation, and
modern uses of mate through an interactive, minimalist, and responsive design.

The website was developed as part of the course "Problemática de la realidad contemporánea"
at [UTN INSPT](https://inspt.utn.edu.ar/).

The website is live at: [mateytradicion.netlify.app](https://mateytradicion.netlify.app)

## 🛠 Technologies used

<p align="center">
<a href="https://astro.build/"><img src="https://img.shields.io/badge/Astro-0175C2?style=for-the-badge&logo=astro&logoColor=white" /></a>
<a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" /></a>
<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" /></a>
<a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /></a>
<a href="https://www.netlify.com/"><img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" /></a>
</p>

## 📂 Project Structure

The project is structured as follows:

```plaintext
/
├── public/                  # Static assets
│   ├── mate-prep-[1-7].webp
│   └── mate.svg
├── src/                     
│   ├── components/          # Reusable UI components
│   │   ├── Benefits/
│   │   ├── MateCarousel/
│   │   ├── ModernCulture/
│   │   ├── Timeline/
│   │   └── utils/
│   ├── icons/               # SVG icons as .astro components
│   ├── images/              # Optimized .avif images
│   ├── layouts/             # Base layout for all pages
│   └── pages/               # Main pages
│       └── index.astro      # Home page
└── package.json             # Dependencies and scripts
```

## 🔧 Installation and Setup

To get a local copy up and running, follow these simple steps:

### 🛠️ Prerequisites

- IDE (VSCode, Atom, etc.)
- Node.js (v18.x)
- NPM (v9.x)

### 🔨 Installing

1. Clone the repository

```sh
git clone https://github.com/Smilari/Mateando.git
```

2. Install Dependencies

```sh
npm install
```

3. Start the development server

```sh
npm run dev
```

4. Open [localhost:4321](http://localhost:4321) in your browser to see it in action.

5. To build for production, run:

```sh
npm run build
```

6. To preview the production build, run:

```sh
npm run preview
```

## 🚀 Deployment [![Netlify Status](https://api.netlify.com/api/v1/badges/3ef781ff-0565-4e25-a78d-40a412c28511/deploy-status)](https://app.netlify.com/sites/mateytradicion/deploys)

This project is hosted on Netlify [https://mateytradicion.netlify.app](https://mateytradicion.netlify.app).

## 📐 Design

The website embraces a minimalist and responsive design approach, inspired by the natural colors of **yerba mate**. The
application features a clean and intuitive user interface, with a focus on readability and ease of use.

## 🌟 Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a
pull request on this repository.