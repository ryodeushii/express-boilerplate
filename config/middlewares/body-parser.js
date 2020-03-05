import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';


export const configureBodyParser = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());
};
