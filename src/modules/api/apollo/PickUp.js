import { gql } from '@apollo/client'

export const GET_PICKUP_DATA = gql`
  query {
    me {
      id
      username
      email
    }
  }
`
