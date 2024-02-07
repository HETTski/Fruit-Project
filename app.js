const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check data entry, no name"]
  },

  rating: {
    type:Number,
    min: 1,
    max:10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 4,
  review: "totaly overated"
});
//fruit.save();

const personSchema = new mongoose.Schema({
  name:String,
  age: Number
});
const Person = mongoose.model("Person",personSchema);
const person = new Person({
  name: "John",
  age: 37
})
person.save();

const findDocuments = function(db, callback){
  const collection = db.collection('fruits');
  collection.find({}).toArray(function(err, fruits){
    assert.equal(err,null);
    console.log("wtf");
  })
};
Fruit.find(function(err, fruits){
  if (err){
    console.log(err);
  }else{
    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});
n 
