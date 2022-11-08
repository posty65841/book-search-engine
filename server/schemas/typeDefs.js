const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User{
    _id: ID
    userName: String!
    email: String!
    password: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
  bookId: String!
  authors: [String]
  description: String!
  title: String!
  image: String
  link: String
  
  }

  type Auth {
    token: ID!
    user: User
  }
  type Query {
    getAllUsers: [User]!
    getOneUser(userId: ID!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(userId: ID, authors: [String]!, description: String!, title: String!, bookId: String!, image: String!, link: String!): User
   
    removeBook(userId: ID!, bookId: String!): User
  }
`;

module.exports = typeDefs;
