import './env';

import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import { errorHandler, notFoundHandler } from './middleware';
import { workspacesRouter } from './routes';

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 * App Configuration
 */

// Sentry
// Sentry.init({
//   dsn: process.env.SENTRY_DSN,
//   environment: process.env.NODE_ENV,
//   integrations: [
//     // enable HTTP calls tracing
//     new Sentry.Integrations.Http({ tracing: true }),
//     // enable Express.js middleware tracing
//     new Tracing.Integrations.Express({ app }),
//   ],
// });
// app.use(Sentry.Handlers.requestHandler());
// app.use(Sentry.Handlers.tracingHandler());

// Libraries
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10MB' }));

// Controllers
app.use('/api/workspaces', workspacesRouter);

// Sentry Error handler (app code should go above this)
// app.use(Sentry.Handlers.errorHandler());

// Default Error handlers
app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 */
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${PORT}`);
});
