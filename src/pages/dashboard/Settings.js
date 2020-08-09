import React from 'react'
import Grid from '@material-ui/core/Grid'
import UserNotifSettings from '../../modules/views/UserNotifSettings'
import AddressForm from '../../modules/views/AddressForm'
import UserFormSettings from '../../modules/views/UserFormSettings'

export default function Settings () {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <AddressForm />
        </Grid>
        <Grid item xs={6}>
          <UserFormSettings />
        </Grid>
        <Grid item xs={6}>
          <UserNotifSettings />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
