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
  mutation CreateSchedule($scheduleData: ScheduleInput!) {
    createSchedule(scheduleData: $scheduleData) {
      success
    }
  }
`
