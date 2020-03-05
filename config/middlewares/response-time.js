import responseTime from 'response-time';

export const configureResponseTime = (app) => app.use(responseTime());
