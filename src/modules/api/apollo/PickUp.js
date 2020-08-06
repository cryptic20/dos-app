import { gql } from '@apollo/client'

export const GET_PICKUP_DATA = gql`
  query {
    me {
      pickupinfoSet {
        edges {
          node {
            id
            binType
            lbs
            instructions
          }
        }
      }
    }
  }
`

const CREATE_PICKUP_DATA = gql`
  query {
    me {
      pickupinfoSet {
        edges {
          node {
            id
            binType
            lbs
            instructions
          }
        }
      }
    }
  }
`
