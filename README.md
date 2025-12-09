# Martin Delory - CV Website

A modern, single-page CV website built with React and Vite, featuring a dark mode aesthetic, animated backgrounds, and smooth navigation.

## Project Setup

To set up the project in a new environment, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd cv-website
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Useful Commands

### Running Locally
To start the development server and view the website locally:
```bash
npm run dev
```
The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production
To build the application for production deployment:
```bash
npm run build
```
This command creates a `dist` folder with the optimized assets.

### Previewing Production Build
To preview the production build locally:
```bash
npm run preview
```

## Deployment

### GitHub Pages
This project is ready to be deployed to GitHub Pages.

1.  **Update `vite.config.js`:**
    Ensure the `base` property is set to your repository name (e.g., `/cv-website/`).

2.  **Deploy:**
    You can use the `gh-pages` package to deploy.
    ```bash
    npm install gh-pages --save-dev
    ```
    Add a deploy script to `package.json`:
    ```json
    "scripts": {
      "deploy": "gh-pages -d dist"
    }
    ```
    Then run:
    ```bash
    npm run build
    npm run deploy
    ```

## Technologies Used
- **React**: UI Library
- **Vite**: Build tool
- **Lucide React**: Icons
- **HTML5 Canvas**: Particle background animation
