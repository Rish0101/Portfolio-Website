# Amrish Rajeev — Portfolio

This is my personal portfolio website, built to present my experience as an AI Automation Engineer and Full-Stack Developer. It highlights my professional background, technical skills, certifications, and selected work in AI-powered document processing, NLP, cloud infrastructure, and full-stack development.

The project section intentionally uses text-based case studies instead of screenshots or source-code links because some of the work was completed under confidentiality agreements.

## Technology Stack

- React
- Vite
- Framer Motion
- Lucide React
- CSS

## Features

- Responsive layout for desktop, tablet, and mobile
- Animated page transitions and scroll effects
- Text-based, NDA-safe project descriptions
- Centralized portfolio content for straightforward updates
- LinkedIn, email, and phone contact options
- Netlify-ready production configuration
- Reduced-motion support for accessibility

## Running the Project Locally

Make sure Node.js and npm are installed, then run:

```bash
npm install
npm run dev
```

Vite will display the local development address in the terminal.

## Updating the Content

My personal details, project descriptions, skills, experience, education, and certifications are stored in:

```text
src/content.js
```

Keeping this information in one file makes the portfolio easier to maintain without changing the component structure.

## Adding or Replacing the Photo

1. Add the image to the `public` folder, for example `public/me.jpg`.
2. Update the `photo` property in `src/content.js`:

```js
photo: '/me.jpg'
```

## Production Build

Create and verify the optimized production build with:

```bash
npm run build
```

The generated website will be placed in the `dist` directory.

## Netlify Deployment

The repository includes a `netlify.toml` file with the required build settings:

- Build command: `npm run build`
- Publish directory: `dist`

After connecting the repository to Netlify, the site can be deployed without additional build configuration.

## Contact

**Amrish Fernan V. Rajeev**  
AI Automation Engineer | Full-Stack Developer  
[LinkedIn](https://www.linkedin.com/in/rajeevamrish/) · [Email](mailto:rajeevamrish@gmail.com)
