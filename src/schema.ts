export const typeDefs = `#graphql
type Starship {
    id: ID!
    name: String!
    class: String!
    registrationNumber: String!
    dateOfCommission: String!
    manufacturingPlace: String!
    crew: [CrewMember]
}

type CrewMember {
    id: ID!
    name: String!
    rank: String!
    position: String!
    starfleetSerialNumber: String!
    recognitions: [String]
    starshipId: ID!
    starship: Starship
}

type Query {
    starships: [Starship]
    starship(id: ID!): Starship
    crewMembers: [CrewMember]
    crewMember(id: ID!): CrewMember
}

type Mutation {
    addStarship(
        name: String!
        class: String!
        registrationNumber: String!
        dateOfCommission: String!
        manufacturingPlace: String!
    ): Starship

    addCrewMember(
        name: String!
        rank: String!
        position: String!
        starfleetSerialNumber: String!
        recognitions: [String]
        starshipId: ID!
    ): CrewMember
    
    deleteCrewMember(id: ID!): Boolean
    deleteStarship(id: ID!): Boolean
}`;

