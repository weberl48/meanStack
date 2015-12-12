#Basic Express Route Middleware
  Express middleware allows something to happen such as validation before a request is processed. Router middleware should be placed after your apps express instance declaration and before any defined routes.

        adminRouter.use is used to define middleware
        The next( ) argument is used to tell express to proceed with more middleware or continue
