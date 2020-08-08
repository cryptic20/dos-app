import React, { useState } from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { makeStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Badge from '@material-ui/core/Badge'

import { GET_ALL_NOTIFICATIONS } from '../../modules/api/'
import { useQuery } from '@apollo/client'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  typography: {
    padding: theme.spacing(1.5)
  }
}))

export default function Notifications () {
  const [notifications, setNotifications] = useState([])
  const [invisible, setInvisible] = useState(true)
  useQuery(GET_ALL_NOTIFICATIONS, {
    onCompleted: (data) => {
      const edges = data.me.usernotificationSet.edges
      if (edges.length === 0) {
        setInvisible(true)
        setNotifications([
          {
            node: { message: 'No notifications...' }
          }
        ])
      } else {
        setNotifications(data.me.usernotificationSet.edges)
      }
    },
    pollInterval: 5000,
    notifyOnNetworkStatusChange: true
  })
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClick = (event) => {
    setInvisible(true)
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <React.Fragment>
      <IconButton
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        <Badge color="error" variant="dot" invisible={invisible}>
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <List className={classes.root}>
          {notifications.map((node, index) => (
            <React.Fragment key={index}>
              <ListItem key={index}>
                <ListItemText key={index} primary={node.node.message} />
              </ListItem>
              <Divider key={index} />
            </React.Fragment>
          ))}
        </List>
      </Popover>
    </React.Fragment>
  )
}
