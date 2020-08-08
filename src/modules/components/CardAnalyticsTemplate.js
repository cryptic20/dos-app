import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(1, 1, 2),
    minWidth: 250
  },
  title: {
    fontSize: 14
  }
}))

export default function SimpleCard (props) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        {props.icon}
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.chartName}
        </Typography>
        {props.chart}
      </CardContent>
    </Card>
  )
}
