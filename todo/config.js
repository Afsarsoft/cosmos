// This code defines configuration settings and values needed for our application.
const config = {};

config.host = process.env.HOST || "https://task.documents.azure.com:?????????????/";
config.authKey =
  process.env.AUTH_KEY || "O7bkryfqrnLOyfoFzVJr4rdFTutg531XF2EO20ECpq7Cb6GXGuROt65iV????????";
config.databaseId = "ToDoList";
config.containerId = "Items";

if (config.host.includes("https://localhost:")) {
  console.log("Local environment detected");
  console.log("WARNING: Disabled checking of self-signed certs. Do not have this code in production.");
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  console.log(`Go to http://localhost:${process.env.PORT || '3000'} to try the sample.`);
}

module.exports = config;