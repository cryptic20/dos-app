import { gql } from '@apollo/client'

export const GET_USER_ADDRESS = gql`
  query {
    me {
      id
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
`

export const EDIT_USER_ADDRESS = gql`
  mutation EditAddress($addressInput: AddressInput) {
    editAddress(addressInput: $addressInput) {
      success
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
`
