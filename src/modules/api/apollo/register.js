import { gql } from '@apollo/client'

export const REGISTER_USER = gql`
  mutation RegisterUser(
    $username: String!
    $email: String!
    $password1: String!
    $password2: String!
  ) {
    register(
      username: $username
      email: $email
      password1: $password1
      password2: $password2
    ) {
      success
      errors
      token
    }
  }
`
