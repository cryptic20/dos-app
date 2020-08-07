import { gql } from '@apollo/client'

export const GET_PICKUP_DATA = gql`
  query {
    me {
      id
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

export const CREATE_PICKUP_DATA = gql`
  mutation CreatePickup(
    $binType: String!
    $lbs: Float!
    $instructions: String
  ) {
    createPickup(binType: $binType, lbs: $lbs, instructions: $instructions) {
      success
    }
  }
`

export const UPDATE_PICKUP_DATA = gql`
  mutation UpdatePickup(
    $id: ID!
    $binType: String
    $lbs: Float
    $instructions: String
  ) {
    updatePickup(
      id: $id
      binType: $binType
      lbs: $lbs
      instructions: $instructions
    ) {
      success
    }
  }
`

export const DELETE_PICKUP_DATA = gql`
  mutation DeletePickup($id: ID!) {
    deletePickup(id: $id) {
      success
    }
  }
`
