const express = require('express');
const express_qraphql = require('express-graphql');
const { buildSchema } = require('graphql');
const app = express();

// GraphQL schema
const schema = buildSchema(`
    type Query {
        message: String,
        hello: String
    }
`);

// Root resolver
const root = {
    message: () => 'Hello World!',
    hello: () => 'Hola!'
};

// Create a GraphQL endpoint 
app.use('/graphql', express_qraphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server is running on port 4000'));
