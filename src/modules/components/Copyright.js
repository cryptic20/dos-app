import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'

export default function Copyright () {
  const history = useHistory()
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
