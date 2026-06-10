const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb://naveena_db_user:janet123@ac-arr6e6r-shard-00-00.f4rmvzw.mongodb.net:27017,ac-arr6e6r-shard-00-01.f4rmvzw.mongodb.net:27017,ac-arr6e6r-shard-00-02.f4rmvzw.mongodb.net:27017/?ssl=true&replicaSet=atlas-fd8uc3-shard-0&authSource=admin&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    await client.db("admin").command({ ping: 1 });

    console.log("✅ Connected successfully to MongoDB Atlas!");
  } catch (error) {
    console.error("❌ Connection Error:");
    console.error(error);
  } finally {
    await client.close();
  }
}

run();