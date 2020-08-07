import { gql } from '@apollo/client'

export const GET_USER_SETTINGS = gql`
  query {
    me {
      id
      usersettings {
        id
        notify
        reminder
      }
    }
  }
`
export const EDIT_USER_SETTINGS = gql`
  mutation EditSettings($id: ID!, $notify: Boolean, $reminder: Boolean) {
    editUserSettings(id: $id, notify: $notify, reminder: $reminder) {
      success
    }
  }
`
