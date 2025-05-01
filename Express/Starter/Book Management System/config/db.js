const {MongoClient}=require("mongodb");
let connectDB=async()=>{
  //! create a connection
  let client= await MongoClient.connect("mongodb://localhost:27017/bookDB");
  //! create a datbase
  let database=client.db("Booksdata");
  //!create acollection
  let collection= database.createCollection("books");
  return collection;
};

module.exports={connectDB};