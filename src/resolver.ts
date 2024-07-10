export const resolvers = {
    Query: {
        starships: (parent, args, { dataSources }) => dataSources.starshipAPI.getStarships(),
        starship: (parent, args, { dataSources }) => dataSources.starshipAPI.getStarshipById(args.id),
        crewMembers: (parent, args, { dataSources }) => dataSources.starshipAPI.getCrewMembers(),
        crewMember: (parent, args, { dataSources }) => dataSources.starshipAPI.getCrewMemberById(args.id)
    },
    Mutation: {
        addStarship: (parent, args, { dataSources }) => dataSources.starshipAPI.addStarship(args),
        addCrewMember: (parent, args, { dataSources }) => dataSources.starshipAPI.addCrewMember(args),
        deleteStarship: (parent: any, args: any, { dataSources }: { dataSources: any }) => dataSources.starshipAPI.deleteStarship(args.id),
        deleteCrewMember: (parent: any, args: any, { dataSources }: { dataSources: any }) => dataSources.starshipAPI.deleteCrewMember(args.id)
    },
    Starship: {
        crew: (parent, args, { dataSources }) => parent.crew.map(id => dataSources.starshipAPI.getCrewMemberById(id))
    },
    CrewMember: {
        starship: (parent, args, { dataSources }) => dataSources.starshipAPI.getStarshipById(parent.starshipId)
    }
};