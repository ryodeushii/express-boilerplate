import { configureCORS } from './cors';
import { configureBodyParser } from './body-parser';
import { configureResponseTime } from './response-time';
import { configureMorgan } from './morgan';

const rootEndpoint = (app) => {
  // configure default root route
  app.get('/', (req, res) => res.status(200)
    .json({ date: new Date() }));
};


export const configureMiddlewares = (app) => {
  configureResponseTime(app);
  configureMorgan(app);
  configureCORS(app);
  configureBodyParser(app);

  // should be the last one
  rootEndpoint(app);
};
