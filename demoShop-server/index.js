require('dotenv').config()
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Starts 
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@crudnodejs.33uff.mongodb.net/?retryWrites=true&w=majority&appName=crudNodeJs`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // DB Collections
    const userCollection = client.db("pha10").collection("users");
    const categoryCollection = client.db("pha10").collection("category");
    const equipmentCollection = client.db("pha10").collection("equipments");
    const testimonialCollection = client.db("pha10").collection("testimonial");
    // Routes GET ... POST ... PATCH/PUT ... DELETE
    //User Routes
    //Get All Users
    //Add New User
    app.post('/users', async(req,res)=>{
      const newUser = req.body;
      console.log(`New User Added to Mongo DB`);
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });
    // Update Login info Using Patch
    app.patch('/users',async (req,res)=>{
      const {  lastSignInTime,email, name,photo } = req.body;
      const filter = { email };
      const updatedUserInfo = {
        $set: {}
      };
      //if data provided then update
      if (name) {
        updatedUserInfo.$set.name = name;
      }
      if (photo) {
        updatedUserInfo.$set.photo = photo;
      }
      if (lastSignInTime) {
        updatedUserInfo.$set.lastSignInTime = lastSignInTime;
      }
      //
      const result = await userCollection.updateOne(filter,updatedUserInfo);
      console.log('Updated Info of User',updatedUserInfo.$set);
      res.send(result);
    })
    //Delete User
    //Category Routes
    app.get('/category', async(req,res)=>{
      const cursor = categoryCollection.find();
      const result = await cursor.toArray();
      console.log(`All Categories Fetched!`);
      res.send(result);
    });
    //View Category
    app.get('/category/:id',async (req,res)=>{
      const id = req.params.id;
      // const query = { _id: id };
      const query = { _id: new ObjectId(id) };
      const result = await categoryCollection.findOne(query);
      console.log('View Category',result);
      // console.log(query._id);
      res.send(result);
    })
    //Equipments Routes
    //Get Simillar Category Equipments Data
    app.get('/equipmentsSimillar/:id', async(req,res)=>{
      const categoryId = parseInt(req.params.id);
      const result = await equipmentCollection.find({ categoryId}).limit(3).toArray();
      console.log(`Simillar Category Equipments Fetched!`);
      res.send(result);
    });
    //Get Simillar Category Equipments Data
    app.get('/equipmentsSameCategory/:id', async(req,res)=>{
      const categoryId = parseInt(req.params.id);
      const result = await equipmentCollection.find({ categoryId}).sort({ _id: -1 }).toArray();
      console.log(`Simillar Category Equipments Fetched!`);
      res.send(result);
    });
    //Get 6 Equipments Data
    app.get('/equipmentsLatest', async(req,res)=>{
      const cursor = equipmentCollection.find().sort({ _id: -1 }).limit(6);
      const result = await cursor.toArray();
      console.log(`Latest 6 Equipments Fetched!`);
      res.send(result);
    });
    //Top 6 Popular Equipments by Sold Quantity
    app.get('/equipmentsPopular', async (req, res) => {
      const result = await equipmentCollection.find().sort({ soldQuantity: -1 }).limit(6).toArray();
      console.log(`Top 6 Popular Equipments Fetched (by Sold Quantity)!`);
      res.send(result);
    });
    //Get All Testimonial Data
    app.get('/testimonials', async(req,res)=>{
      const result = await testimonialCollection.find().toArray();
      console.log(`All Testimonial Fetched!`);
      res.send(result);
    });
    //Get All Sports Equipments Category Data
    app.get('/equipmentsSports', async(req,res)=>{
      const result = await categoryCollection.find({ main:'Sports' }).toArray();
      console.log(`All Sports Category Fetched!`);
      res.send(result);
    });
    //Get All Equipments Data
    app.get('/equipments', async(req,res)=>{
      const cursor = equipmentCollection.find();
      const result = await cursor.toArray();
      console.log(`All Equipment Fetched!`);
      res.send(result);
    });
    //View Equipment
    app.get('/equipments/:id',async (req,res)=>{
      const id = req.params.id;
      // const query = { _id: id };
      const query = { _id: new ObjectId(id) };
      const result = await equipmentCollection.findOne(query);
      console.log('View Equipment',id);
      console.log(query._id);
      res.send(result);
    })
    //Add New Equipment
    app.post('/equipments', async(req,res)=>{
      const newUser = req.body;
      console.log(`New Equipment Added to Mongo DB`);
      const result = await equipmentCollection.insertOne(newUser);
      res.send(result);
    });
    //Update Equipment
    app.put('/equipments/:id',async (req,res)=>{
      const id = req.params.id;
      // Identify the data
      const filter = { _id: new ObjectId(id) };
      // Set the upsert option to insert a document if no documents match the filter
      const options = { upsert: true };
      const equipment = req.body;
      console.log('Update Equipment',id)
      // Specify the update to set a value for the plot field
      const updatedEquipment = {
        $set: {
          image: equipment.updatedimage,
          itemName: equipment.updateditemName,
          categoryId: equipment.updatedcategoryId,
          category: equipment.updatedcategory,
          description: equipment.updateddescription,
          price: equipment.updatedprice,
          rating: equipment.updatedrating,
          customization: equipment.updatedcustomization,
          processingTime: equipment.updatedprocessingTime,
          stockStatus: equipment.updatedstockStatus,
          soldQuantity: equipment.updatedsoldQuantity,
          brand: equipment.updatedbrand,
        }
      };
      // Update the defined document into the "Equipment" collection
      const result = await equipmentCollection.updateOne(filter,updatedEquipment,options);

      res.send(result);
    })
    //Get Users Equipments Data
    app.post('/equipmentsUser', async(req,res)=>{
      const { email } = req.body;
      const cursor = equipmentCollection.find({ userEmail:email });
      const result = await cursor.toArray();
      console.log(`All User Equipment Fetched!`);
      // console.log(result);
      res.send(result);
    });
    //Delete Equipment
    app.delete('/equipments/:id',async (req,res)=>{
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await equipmentCollection.deleteOne(query);
      console.log('Delete Equipment',query);
      res.send(result);
    })

  } finally {
    // Ensures that the client will close when you finish/error
    // console.log("Finally Executed!");
  }
}
run().catch(console.dir);
// MongoDB Ends

// Initial Setup
app.get('/', (req,res)=>{res.send(`PHA10 Server is Running!`)})
app.listen(port, ()=>{console.log(`PHA10 Server is Running on Port : ${port}`)})