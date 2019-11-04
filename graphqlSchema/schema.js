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

const ProfileType = new GraphQLObjectType({
  name: "Profile",
  fields: () => ({
    _id: { type: GraphQLID },
    user: {
      type: UserType,
      resolve(parent, args) {
        // console.log(parent);
        // return _.find(users, { _id: parent.user });
      }
    },
    team: {
      type: TeamType,
      resolve(parent, args) {
        // return _.find(teams, { _id: parent.team });
      }
    },
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
        // return _.find(profiles, { _id: parent.profileId });
      }
    },
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
    teamName: { type: GraphQLString },
    teamDescription: { type: GraphQLString },
    profiles: {
      type: new GraphQLList(ProfileType),
      resolve(parent, args) {
        // return _.filter(profiles, { teamId: parent._id });
      }
    }
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
        // return _.find(profiles, { _id: args._id });
      }
    },
    profiles: {
      type: new GraphQLList(ProfileType),
      resolve(parent, args) {
        // return profiles;
      }
    },
    user: {
      type: UserType,
      args: { _id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db
        // return _.find(users, { _id: args._id });
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        // return users;
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
    teams: {
      type: new GraphQLList(TeamType),
      resolve(parent, args) {
        // return teams;
      }
    }
  }
});

const Mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addProfile: {
      type: ProfileType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        team: { type: GraphQLString },
        title: { type: GraphQLString },
        bio: { type: GraphQLString }
      },
      resolve(parent, args) {
        let profile = new Profile({
          firstName: args.firstName,
          lastName: args.lastName,
          team: args.team,
          title: args.titlt,
          bio: args.bio
        });
        profile.save();
        return args.firstName;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
});
