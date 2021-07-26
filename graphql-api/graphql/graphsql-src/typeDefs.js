import {gql} from 'apollo-server-express';

const typeDefs = gql`
type Users {
    id : Int!,
    name : String!,
    age : Int!
}

interface school {
    id : Int!,
    name : String!,
    age : Int!
}

type newStudents {
    id : Int!,
    name : String!,
    age : Int!,
    grade : Int!
}

type student implements school {
    id : Int!,
    name : String!,
    age : Int!,
    grade : Int!
}

type teacher implements school {
    id : Int!,
    name : String!,
    age : Int!,
    subject : String!
}

input newUser {
    id : Int,
    name : String,
    age : Int
}

type Query {
    showUser : [Users!]!
}

type Mutation {
    addUser(id : Int!, name : String!, age : Int!) : Users!
    addUser2(input : newUser) : Users!
    addStudent(id : Int!, name : String!, age : Int!, grade : Int!) : newStudents!
}
`

export default typeDefs;