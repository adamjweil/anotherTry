const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLSchema
} = graphql;

const ProfileType = new GraphQLObjectType({
  name: "Profile",
  fields: () => ({
    _id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    team: { type: GraphQLString },
    title: { type: GraphQLString },
    bio: { type: GraphQLString }
  })
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    _id: { type: GraphQLString },
    email: { type: GraphQLString },
    terms: { type: GraphQLBoolean },
    password: { type: GraphQLString },
    username: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    profile: {
      type: ProfileType,
      args: { _id: { type: GraphQLString } },
      resolve(parent, args) {
        // Code to get data from db
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
