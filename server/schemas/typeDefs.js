const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Book {
    _id: ID
    googleBookId: String
    authors: [String]
    description: String
    image: String
    link: String
    title: String

  }

  type Query {
    books: [Book]
    book(_id: ID!): Book
    getUser(username: String!, _id: ID!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addBook(googleBookId: String!, 
      authors: [String]!, 
      description: String!,
      image: String!,
      link: String!,
      title: String!): Book
  }
`;

module.exports = typeDefs;