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
        return User.findById(parent.user);
      }
    },
    team: {
      type: TeamType,
      resolve(parent, args) {
        return Team.findById(parent.team);
      }
    },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    title: { type: GraphQLString },
    bio: { type: GraphQLString }
  })
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    _id: { type: GraphQLID },
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
        return Profile.find(parent.team);
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
        return Profile.findOne(args.id);
      }
    },
    profiles: {
      type: new GraphQLList(ProfileType),
      resolve(parent, args) {
        return Profile.find();
      }
    },
    user: {
      type: UserType,
      args: { _id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findOne(args.id);
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
      }
    },
    team: {
      type: TeamType,
      args: { _id: { type: GraphQLID } },
      resolve(parent, args) {
        return Team.findOne(args.id);
      }
    },
    teams: {
      type: new GraphQLList(TeamType),
      resolve(parent, args) {
        return Team.find();
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
        return profile;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
});
