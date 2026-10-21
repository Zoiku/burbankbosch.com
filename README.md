# Burbank & Bosch Website

A React company website with Home, About, Technology, Sustainable Development Goals, and Team pages. It includes a contact form, Google Maps integration, animations, and analytics.

Built with React 18, Create React App, React Router, Material UI, Sass, AOS, and EmailJS.

## Local development

```sh
git clone https://github.com/Zoiku/burbankbosch.com.git
cd burbankbosch.com
npm install
npm start
```

Node.js and npm are required. The development server normally runs at `http://localhost:3000`.

## Configuration

Set the following browser-public values in a local `.env.local` file:

```dotenv
REACT_APP_EMAIL_SERVICE_ID=
REACT_APP_EMAIL_TEMPLATE_ID=
REACT_APP_EMAIL_PUBLIC_KEY=
REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID=
REACT_APP_GOOGLE_MAP_API_KEY=
```

The contact form reads the EmailJS values in `src/components/Contact.jsx`. Configure a matching EmailJS form template and verify delivery with your own account. Review `src/components/GoogleMap.jsx` for its map configuration and API-key requirements.

Restart development or rebuild after changing environment values. Never place private service credentials in frontend environment variables.

## Commands

- `npm start`: local development.
- `npm test`: Create React App test runner.
- `npm run build`: production output in `build/`.

Deploy `build/` to a static host with fallback to `index.html` for routes such as `/about` and `/team`.

## Code guide

- `src/App.jsx`: routes and analytics initialization.
- `src/pages/`: site pages.
- `src/components/`: navigation, contact form, maps, and shared UI.
- `src/styles/`, `src/index.scss`: styles.
- `src/assets/`: imagery.

Some homepage service descriptions are placeholder text and `/readmore` routes to a placeholder page. Review these alongside contact delivery, map loading, and mobile navigation before publishing.
