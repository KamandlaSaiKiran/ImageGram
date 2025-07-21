// swaggerConfig.js
// const pathToRouterfile=new URL('../routing/v1/*.js',import.meta.url).pathname;
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'IMAGEGRAM API',
      version: '1.0.0',
      description: 'A simple API documentation using Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
      },

    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  
  // Paths to files where Swagger will look for documentation
    apis: [path.join(__dirname, '../routing/**/*.js')], // adjust based on where your route files are
};

export default options;
