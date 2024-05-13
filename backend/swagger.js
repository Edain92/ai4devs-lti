const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'LTI API',
      version: '1.0.0',
      description: 'API for LTI project',
    },
  },
  apis: ['./server.js'], // files containing annotations for the OpenAPI Specification
};

const swaggerSpec = swaggerJsDoc(options);

function setup(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setup;