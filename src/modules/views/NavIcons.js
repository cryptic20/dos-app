import React from 'react'
import { useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import SignedOutIcons from '../../modules/components/SignedOutIcons'
import SignedInIcons from '../../modules/components/SignedInIcons'

function NavIcons () {
  const isAuthenticated = useSelector((state) => state.isAuthenticated)

  return (
    <div style={{ marginLeft: 'auto' }}>
      <Grid container direction="row" justify="center" alignItems="center">
        {isAuthenticated ? <SignedInIcons /> : <SignedOutIcons />}
      </Grid>
    </div>
  )
}
export default NavIcons
