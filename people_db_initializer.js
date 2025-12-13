const fs=require('fs');
const mongoose=require('mongoose');
const { parse } = require('csv-parse/sync');

const csvData = fs.readFileSync('peopleData.csv', 'utf-8');  // Change filename

mongoose.connect('mongodb://localhost:27017/placeholder',{})
    .then(function(db){
        console.log("db connected");
    });

const personSchema = {
    type:Number,
    name:String,
    email:String,
    phone:String,
    desc:String,
    src:String
}
const Person=mongoose.model('Person', personSchema);

const personList = parse(csvData, {
    columns: true,
    skip_empty_lines: true
});

csvData.forEach(person=>{
    personList.push({
        'type':person.type,
        'name':person.name,
        'email':person.email,
        'phone':person.phone,
        'desc':person.desc,
        'src':person.src
    })
})

Person.insertMany(personList).then(result=>{
    mongoose.connection.close();
}).catch(err=>{
    console.log(err);
});

