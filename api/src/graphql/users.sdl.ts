export const schema = gql`
  type User {
    id: Int!
    email: String!
    firstName: String!
    avatar: String!
    lastName: String!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    firstName: String!
    lastName: String!
  }

  input UpdateUserInput {
    email: String
    firstName: String
    lastName: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
