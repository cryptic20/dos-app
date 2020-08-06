import { gql } from '@apollo/client'
const PICK_UP = gql`
  query Pagination($cursor: String, $rowNumber: Int) {
    me {
      pickupinfoSet(first: $rowNumber, after: $cursor) {
        edges {
          node {
            id
            binType
            lbs
            instructions
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`
