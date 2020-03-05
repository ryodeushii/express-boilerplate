import morgan from 'morgan';

export const configureMorgan = (app) => app.use(morgan('[:date[clf]] :remote-user :method :url :status :res[content-length] - :response-time ms'));
