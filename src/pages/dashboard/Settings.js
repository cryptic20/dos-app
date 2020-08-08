import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import { GET_USER_SETTINGS, EDIT_USER_SETTINGS } from '../../modules/api/'
import { useMutation, useQuery } from '@apollo/client'

function Settings () {
  const [state, setState] = useState({
    notify: false,
    reminder: false
  })
  const { loading, error, refetch } = useQuery(GET_USER_SETTINGS, {
    onCompleted: (data) => {
      if (data) {
        setState({
          data: data,
          notify: data.me.usersettings.notify,
          reminder: data.me.usersettings.reminder
        })
      }
    }
  })
  const [editUserSettings] = useMutation(EDIT_USER_SETTINGS, {
    onCompleted: (data) => {
      if (data.editUserSettings.success) {
        refetch()
      }
    }
  })

  const handleChange = async (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
    await editUserSettings({
      variables: {
        id: state.data.me.usersettings.id,
        [event.target.name]: event.target.checked
      }
    })
  }

  if (loading) return <div>loading...</div>
  if (error) return <div>{error}</div>
  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.notify}
                      onChange={handleChange}
                      name="notify"
                    />
                  }
                  label="Notify when bin has been picked up"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.reminder}
                      onChange={handleChange}
                      name="reminder"
                      color="secondary"
                    />
                  }
                  label="Remind me when a pickup is scheduled for the following day"
                />
              </FormGroup>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Settings
