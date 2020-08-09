import { gql } from '@apollo/client'

export const LOG_IN = gql`
  mutation TokenAuth($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      success
      errors
      token
      refreshToken
      user {
        email
        username
        firstName
        lastName
        verified
        phoneNumber
        type
        address {
          addressLine1
          addressLine2
          city
          state
          zipCode
          country
        }
      }
    }
  }
`
