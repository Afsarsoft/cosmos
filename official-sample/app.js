// @ts-check
//  <ImportConfiguration>
const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("./config");
const dbContext = require("./data/databaseContext");
//  </ImportConfiguration>

//  <DefineNewItems>
const newItem1 = {
  id: "3",
  category: "fun",
  name: "Cosmos DB",
  description: "Complete Cosmos DB Node.js Quickstart ⚡",
  isComplete: false
};

const newItem2 = {
  id: "4",
  category: "Stuff",
  name: "Cosmos DB",
  description: "Complete Cosmos DB Node.js Quickstart ⚡",
  isComplete: false
};

//  </DefineNewItems>

async function main() {

  // <CreateClientObjectDatabaseContainer>
  const { endpoint, key, databaseId, containerId } = config;

  const client = new CosmosClient({ endpoint, key });

  const database = client.database(databaseId);
  const container = database.container(containerId);

  // Make sure Tasks database is already setup. If not, create it.
  await dbContext.create(client, databaseId, containerId);
  // </CreateClientObjectDatabaseContainer>

  try {
    // <QueryItems>
    console.log(`Querying container: Items`);

    // query to return all items
    const querySpec = {
      query: "SELECT * from c"
    };

    // read all items in the Items container
    const { resources: items } = await container.items
      .query(querySpec)
      .fetchAll();

    items.forEach(item => {
      console.log(`${item.id} - ${item.description}`);
    });
    // </QueryItems>

    // <CreateItem>
    /** Create new item
     * newItem is defined at the top of this file
     */
    const { resource: createdItem1 } = await container.items.create(newItem1);
    console.log(`\r\nCreated new item: ${createdItem1.id} - ${createdItem1.description}\r\n`);

    const { resource: createdItem2 } = await container.items.create(newItem2);
    console.log(`\r\nCreated new item: ${createdItem2.id} - ${createdItem2.description}\r\n`);
    // </CreateItem>

    // <UpdateItem>
    /** Update item
     * Pull the id and partition key value from the newly created item.
     * Update the isComplete field to true.
     */
    const { id, category } = createdItem1;

    createdItem1.isComplete = true;

    const { resource: updatedItem } = await container
      .item(id, category)
      .replace(createdItem1);

    console.log(`Updated item: ${updatedItem.id} - ${updatedItem.description}`);
    console.log(`Updated isComplete to ${updatedItem.isComplete}\r\n`);
    // </UpdateItem>

    // <DeleteItem>
    /**
     * Delete item
     * Pass the id and partition key value to delete the item
     */
    const { resource: result } = await container.item(id, category).delete();
    console.log(`Deleted item with id: ${id}`);
    // </DeleteItem>

  } catch (err) {
    console.log(err.message);
  }
}

main();