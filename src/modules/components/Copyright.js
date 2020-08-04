import React from 'react'
import Typography from '@material-ui/core/Typography'

export default function Copyright () {
  return (
    <React.Fragment>
      <Typography variant="body2" align="center">
        {'Copyright © '}
        DOS APP {''}
        {new Date().getFullYear()}
      </Typography>
    </React.Fragment>
  )
}
