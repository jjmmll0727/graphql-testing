import Users from '../database/user.js'
import bookConfig from '../../config/aws/Books.js'
import AWS from "aws-sdk";

const resolvers = {
    Query : {
        showUser : async() => {
            AWS.config.update(bookConfig.aws_iam_info);
            const docClient = new AWS.DynamoDB.DocumentClient();
            const params = {
                TableName : bookConfig.aws_table_name
            }
            const result = await docClient.scan(params).promise()
            return result
        }
    },

    Mutation : {
        addUser : (_, {id, name, age}) => {
            if (Users.find(user => user.name === name)) return null
            const newUser = {
                id : id,
                name : name, 
                age : age
            }
            Users.push(newUser);
            return newUser;
        },
        
        addUser2 : (_, {input}) => {
            if (Users.find(user => user.name === input.name)) return null
            const user = {
                input
            }
            console.log(user)
            Users.push(user.input);
            console.log(Users)
            return user.input;
        },
        addStudent : (_, {id, name, age, grade}) => {
            const newStudent = {
                id : id,
                name : name,
                age : age,
                grade : grade
            }

            return newStudent
        }
    }
}

export default resolvers;