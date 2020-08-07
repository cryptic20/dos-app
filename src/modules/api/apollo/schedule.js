import { gql } from '@apollo/client'

export const GET_SCHEDULE_DATA = gql`
  query {
    me {
      id
      scheduleSet {
        edges {
          node {
            start
            end
            event {
              info {
                binType
                lbs
                instructions
              }
            }
            nextEvent
            repeat
            repeatUntil
          }
        }
      }
    }
  }
`
export const CREATE_SCHEDULE_DATA = gql`
  mutation {
    createSchedule(
      scheduleData: {
        start: "2020-12-11T05:48:11.023255+00:00"
        event: {
          info: { binType: "Compost", lbs: 333333, instructions: "test create" }
        }
      }
    ) {
      success
      schedule {
        start
        end
        repeat
        repeatUntil
        nextEvent
        event {
          info {
            binType
            lbs
            instructions
          }
        }
      }
    }
  }
`
