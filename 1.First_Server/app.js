const express = require('express');
const app = express();

let arrayOfNames = [{id: 1, name: 'Fred', age: 25}, {id: 2, name: 'Bob', age: 28},{id: 3, name: 'Alice', age: 22}];

let theArray = [
    {id: '123441234',
        name: 'Joe',
        age: 21
    },
    {id: '458834',
        name: 'Steve',
        age: 28
    }
]
//ROUTES
//https://stackoverflow.com/questions/57913834/how-to-res-send-array-with-foreach
//You need to map the array instead of using a forEach loop.
// That way you can join the values and send the html string:
app.get("/", (req,res) => {

    res.send(
        arrayOfNames.map(product =>
            `<h1>${product.name}</h1>
      <h5>${product.age}</h5>
      `
        ).join(''));
});

app.listen(8080);