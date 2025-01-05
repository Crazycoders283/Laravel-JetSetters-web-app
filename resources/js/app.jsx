import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import '../css/app.css';
import './bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.jsx`,
      import.meta.glob('./Pages/**/*.jsx')
    ),
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(
      <BrowserRouter> {/* Wrap your app with BrowserRouter */}
        <App {...props} />
      </BrowserRouter>
    );
  },
  progress: {
    color: '#4B5563',
  },
});
