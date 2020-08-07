import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  header: {
    padding: 8
  }
}))

function AvatarComponent () {
  const classes = useStyles()
  const userInfo = useSelector((state) => state.userInfo)

  return (
    <div className={classes.header}>
      <Grid container direction="column" alignItems="center">
        <Avatar alt="Sherwin Wyco" className={classes.large} />
        <div style={{ paddingBottom: 16 }} />
        <Typography variant="h6" noWrap>
          {userInfo.username}
        </Typography>
        <Typography variant="subtitle1" noWrap gutterBottom>
          {userInfo.email}
        </Typography>
      </Grid>
    </div>
  )
}

export default AvatarComponent
