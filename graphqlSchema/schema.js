const Profile = require("../models/Profile");
const User = require("../models/User");
const Team = require("../models/Team");
const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

const profiles = [
  { _id: "1", firstName: "Adam", lastName: "Weil", teamId: "1" },
  { _id: "2", firstName: "Bill", lastName: "Hen", teamId: "1" },
  { _id: "3", firstName: "Will", lastName: "Chafe", teamId: "1" }
];
const users = [
  { _id: "1", email: "adam@adam.weil" },
  { _id: "2", email: "bill@bill.weil", profileId: "1" },
  { _id: "3", email: "chi@chi.weil" }
];
const teams = [
  { _id: "1", teamName: "Name 1", teamDescription: "descript 1" },
  { _id: "2", teamName: "Name 2", teamDescription: "descript 2" },
  { _id: "3", teamName: "Name 3", teamDescription: "descript 3" }
];

const ProfileType = new GraphQLObjectType({
  name: "Profile",
  fields: () => ({
    _id: { type: GraphQLID },
    user: {
      type: UserType,
      resolve(parent, args) {
        console.log(parent);
        return _.find(users, { _id: parent.userId });
      }
    },
    team: {
      type: TeamType,
      resolve(parent, args) {
        return _.find(teams, { _id: parent.teamId });
      }
    },
    profileId: { type: GraphQLID },
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
    _id: { type: GraphQLID },
    profile: {
      type: ProfileType,
      resolve(parent, args) {
        console.log(parent);
        return _.find(profiles, { _id: parent.profileId });
      }
    },
    userId: { type: GraphQLID },
    email: { type: GraphQLString },
    terms: { type: GraphQLBoolean },
    password: { type: GraphQLString },
    username: { type: GraphQLString }
  })
});

const TeamType = new GraphQLObjectType({
  name: "Team",
  fields: () => ({
    _id: { type: GraphQLID },
    profiles: {
      type: new GraphQLList(ProfileType),
      resolve(parent, args) {
        return _.filter(profiles, { _id: parent.profiles });
      }
    },

    teamId: { type: GraphQLID },
    teamName: { type: GraphQLString },
    teamDescription: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    profile: {
      type: ProfileType,
      args: { _id: { type: GraphQLID } },
      resolve(parent, args) {
        // Code to get data from db
        return _.find(profiles, { _id: args._id });
      }
    },
    user: {
      type: UserType,
      args: { _id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db
        return _.find(users, { _id: args._id });
      }
    },
    team: {
      type: TeamType,
      args: { _id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db
        // return _.find(teams, { _id: args._id });
      }
    },
    profiles: {
      type: new GraphQLList(profiles),
      resolve(parent, args) {
        return profiles;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
