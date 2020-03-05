export const configureErrorHandler = (app) => {
  app.use((err, req, res, next) => {
    if (err) {
      console.error(err)
      return res.status(200)
        .json({
          error: err.message,
          raw: err.stack,
        });
    }
    next();
  });
};
