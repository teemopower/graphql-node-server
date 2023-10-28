const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://jimmykim925:02m92zsEX8HdwhZf@cluster0.0hjul0k.mongodb.net/?retryWrites=true&w=majority');

mongoose.connection.once('open', () => {
    console.log('connected to database')
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(4000, () => console.log('Server started on port 4000'));
