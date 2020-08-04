import React from 'react'
import Button from '@material-ui/core/Button'
import withRoot from '../style/withRoot'
import { useHistory } from 'react-router-dom'

function SignedOutIcons () {
  const history = useHistory()
  return (
    <React.Fragment>
      <Button color="inherit" onClick={() => history.push('/sign-in')}>
        Sign In
      </Button>
      <Button color="inherit" onClick={() => history.push('/sign-up')}>
        Sign Up
      </Button>
    </React.Fragment>
  )
}

export default withRoot(SignedOutIcons)
