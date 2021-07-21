import Users from '../database/user.js'

const resolvers = {
    Query : {
        showUser : () => Users
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
        }
    }
}

export default resolvers;