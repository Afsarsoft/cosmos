## About the code
- Based on https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-nodejs-get-started
- Node.js console application that connects to Azure Cosmos DB with the SQL API
- It basically shows how to use Mode.js to work with Cosmos DB

## detail Step by step instruction:
https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-nodejs-get-started

## Summary, to build a template
1. Create Azure Cosmos DB account
2. Setup Node.js application in windows as follow:
Note: the following commands create empty JavaScript files:
- fsutil file createnew app.js 0
- fsutil file createnew config.js 0
- md data
- fsutil file createnew data\databaseContext.js 0

3. Create and initialize a package.json file.
- npm init -y

4. Install the @azure/cosmos module via npm
- npm install @azure/cosmos --save

5. Copy the code in this project or from
https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-nodejs-get-started

6. In config.js file update the following:
endpoint : "~URI of Cosmos DB account, look in Keys~"
key : "~Primary key of Cosmos DB account, look in Keys~"
databaseId: "~DatabaseName~"
containerId: "~ContainerName~"

7. to run the solution and see the output, perform as follow:
node app.js

## More information
- [Azure Cosmos DB](https://docs.microsoft.com/azure/cosmos-db/introduction)
- [Azure Cosmos DB: SQL API](https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-introduction)
- [Azure Cosmos DB Node.js SDK](https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-sdk-node)
