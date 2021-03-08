const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = { 
  Query: {
    getUser: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne( { _id: context.user._id })
          .select(
            "-__v -password"
          );
          return user;
      }
    },
    books: async () => {
      return Book.find();
    },
    book: async (parent, { title }) => {
      return Book.findOne({ title });
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addBook: async (parent, args) => {
      const book = await Book.create(args);
      return book;
    }
  },
}

module.exports = resolvers;
