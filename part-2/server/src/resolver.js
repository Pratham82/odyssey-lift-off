export const resolvers = {
  Query: {
    // returns array of tracks(for homepage grid)
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome()
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthors(authorId)
    },
  },
}
