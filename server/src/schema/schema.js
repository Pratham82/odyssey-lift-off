import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    "Query to get the list of trackList for home screen"
    tracksForHome: [Track!]!
  }

  "Type is group of modules which has a specific topic to be learned"
  type Track {
    id: ID!
    "Tracks's title"
    title: String!
    "Tracks's author's name"
    author: Author!
    "Track's thumbnail"
    thumbnail: String
    "Length of the track"
    length: Int
    "Number of modules in the track"
    modulesCount: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile pic URL"
    photo: String
  }
`

export default typeDefs
