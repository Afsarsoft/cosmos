## About the code
-Based on https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-nodejs-application
-Building a web-based application (Todo app) that allows us to create, retrieve, and complete tasks. The tasks are stored as JSON documents in Azure Cosmos DB.

## detail Step by step instruction:
https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-nodejs-application

## Prerequisites
1. Create Azure Cosmos DB account
2. Node.js from https://nodejs.org/en/
3. Express generator http://expressjs.com/en/starter/generator.html
  - Install it using
  - npm install express-generator -g

## Summary, Steps
1. generate a new application called todo.
- express todo
2. Open the todo directory and install dependencies.
- cd todo
- npm install
3. Run the new application
- npm start
4. Go to http://localhost:3000 to view it to browser "Express, welcome to Express"
5. Stop the application by using CTRL+C in the terminal window, and select y to terminate the batch job.
6. Install the @azure/cosmos module via npm.
- npm install @azure/cosmos

7. Copy the code in this project or from
https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-nodejs-application

8. update config.js file
In the config.js file, update the values of HOST and AUTH_KEY using the values found in the Keys page of your Azure Cosmos DB account on the Azure portal.

9. Run the application:
- npm start
4. Go to http://localhost:3000 to view it in browser

## More information
- [Azure Cosmos DB](https://docs.microsoft.com/azure/cosmos-db/introduction)
- [Azure Cosmos DB: SQL API](https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-introduction)
- [Azure Cosmos DB Node.js SDK](https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-sdk-node)
