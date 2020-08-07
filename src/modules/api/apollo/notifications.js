import { gql } from '@apollo/client'
export const GET_ALL_NOTIFICATIONS = gql`
  query {
    me {
      id
      usernotificationSet {
        edges {
          node {
            id
            notificationType
            message
            seen
          }
        }
      }
    }
  }
`
