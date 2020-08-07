import { gql } from '@apollo/client'

export const GET_SCHEDULE_DATA = gql`
  query {
    me {
      id
      scheduleSet {
        edges {
          node {
            id
            start
            end
            nextEvent
            repeat
            repeatUntil
          }
        }
      }
    }
  }
`
