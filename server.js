
//1. Be Polite, Greet the User

const express = require('express')
const app = express()

// app.get('/', (req, res) => {
//   res.send('hello Matilda')
// });

// app.get('/', (req, res) => {
//     res.send('What a delight it is to see you once more, Mathilda')
//   });


// app.listen(3000)


// //2. Rolling the Dice
// app.get('/roll/:number', (req, res) => {
//     const number = req.params.number;

    
//     if (isNaN(number)) {
//         res.send("You must specify a number.");
//     } else {
       
//         const max = parseInt(number, 10);
       
//         const randomNumber = Math.floor(Math.random() * (max + 1));
//         res.send(`You rolled a ${randomNumber}.`);
//     }
// });
// app.listen(3000)

//3.I Want THAT One!
//  const collectibles = [
//     { name: 'shiny ball', price: 5.95 },
//     { name: 'autographed picture of a dog', price: 10 },
//     { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
//   ];




//4. Filter Shoes by Query Parameters
const express = require('express')
const app = express()
const PORT = 3000

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


app.get('/shoes', (req, res,) => {
    req.query object => req: { query: { 'max-price': 100 } }
      }
       if (req.query['min-price']) {
        const filteredShoes = shoes.filter(shoe => shoe.price >= req.query['min-price'])
        res.send(filteredShoes)
    }
    if (req.query['max-price']) {
        const filteredShoes = shoes.filter(shoe => shoe.price <= req.query['max-price'])
        res.send(filteredShoes)
    }
    if (req.query.type) {
        const filteredShoes = shoes.filter(shoe => shoe.type === req.query.type)
        res.send(filteredShoes)
    }
