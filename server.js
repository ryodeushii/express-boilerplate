/* eslint-disable import/first */
// noinspection ES6ConvertRequireIntoImport
require('@babel/register');


import express from 'express';
import { config, configureMiddlewares } from 'config';

const app = express();


configureMiddlewares(app);

const listen = async (port = 3000) => {
  app.listen(port, () => {
    console.log('Server is listening on port ', port);
  });
};


listen(config.port);
