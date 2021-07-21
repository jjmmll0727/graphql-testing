import {gql} from 'apollo-server-express';

const typeDefs = gql`
type Users {
    id : Int!,
    name : String!,
    age : Int!
}

type Query {
    showUser : [Users!]!
}

type Mutation {
    addUser(id : Int!, name : String!, age : Int!) : Users!
}
`

export default typeDefs;