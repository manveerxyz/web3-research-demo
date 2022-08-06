import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import App from './App';
import { store } from './app/store';
import * as serviceWorker from './serviceWorker';

const engine = new Styletron();

if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'development') {
  Sentry.init({
    dsn: 'https://ec30ce229de74935a0ae41590dfa9529@o1186948.ingest.sentry.io/6306766',
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StyletronProvider value={engine}>
          <BaseProvider theme={LightTheme}>
            <App />
          </BaseProvider>
        </StyletronProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
