import withRoot from '../../modules/style/withRoot'
import React from 'react'
import AppBarViews from '../../modules/views/AppBarViews'
import AppFooterViews from '../../modules/views/AppFooterViews'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

function VerifyEmail () {
  return (
    <React.Fragment>
      <AppBarViews />
      <Typography>Pleae verify your email!</Typography>
    </React.Fragment>
  )
}

export default withRoot(VerifyEmail)
