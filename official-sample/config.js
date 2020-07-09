// @ts-check

const config = {
  endpoint: "https://task.documents.azure.com:???????",
  key: "O7bkryfqrnLOyfoFzVJr4rdFTutg531XF2EO2?????????",
  databaseId: "TestDB",
  containerId: "TestItems",
  partitionKey: { kind: "Hash", paths: ["/category"] }
};

module.exports = config;
