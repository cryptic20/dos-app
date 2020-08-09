import { gql } from '@apollo/client'

export const UPDATE_USER = gql`
  mutation UpdateAccount(
    $firstName: String
    $lastName: String
    $phoneNumber: String
    $type: String
  ) {
    updateAccount(
      firstName: $firstName
      lastName: $lastName
      phoneNumber: $phoneNumber
      type: $type
    ) {
      success
      errors
    }
  }
`
