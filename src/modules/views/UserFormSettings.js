import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import MenuItem from '@material-ui/core/MenuItem'
import CardContent from '@material-ui/core/CardContent'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import MuiPhoneInput from 'material-ui-phone-number'
import { updateUserInfo } from '../redux/actions/'
import { useMutation } from '@apollo/client'
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_USER } from '../../modules/api/'

const accountType = [
  {
    value: 'INDIVIDUAL',
    label: 'INDIVIDUAL'
  },
  {
    value: 'BULK',
    label: 'BULK'
  },
  {
    value: 'COMMERCIAL',
    label: 'COMMERCIAL'
  },
  {
    value: 'INDUSTRIAL',
    label: 'INDUSTRIAL'
  }
]
export default function AddressForm () {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }
  const { register, handleSubmit } = useForm()
  const state = useSelector((state) => state.userInfo)
  const dispatch = useDispatch()
  const [numberState, setNumberState] = useState({ phone: state.phoneNumber })
  const [type, setType] = useState(state.type)
  const handleChange = (event) => {
    setType(event.target.value)
  }
  const handleNumberOnChange = (value) => {
    setNumberState({
      phone: value
    })
  }
  const [updateUser] = useMutation(UPDATE_USER)
  const onSubmit = (data) => {
    const variables = {
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: numberState.phone.replace(/[- )(]/g, ''),
      type: type
    }
    updateUser({
      variables: variables
    }).then((res) => {
      if (res.data.updateAccount.success) {
        handleClick()
        dispatch(updateUserInfo(variables))
      } else {
        console.log(res.data.updateAccount.errors.messages)
      }
    })
  }
  return (
    <React.Fragment>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity="success"
        >
          changes succesfully saved!
        </Alert>
      </Snackbar>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              User Settings
            </Typography>
            <Grid container spacing={2} justify="space-evenly">
              <Grid item xs={12} sm={6} align="center">
                <TextField
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="given-name"
                  inputRef={register}
                  defaultValue={state ? state.firstName : ''}
                />
              </Grid>
              <Grid item xs={12} sm={6} align="center">
                <TextField
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="family-name"
                  inputRef={register}
                  defaultValue={state ? state.lastName : ''}
                />
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={2} justify="space-evenly">
              <Grid item xs={12} sm={6}>
                <MuiPhoneInput
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  defaultCountry="us"
                  onlyCountries={['us']}
                  onChange={handleNumberOnChange}
                  value={state.phoneNumber}
                />
              </Grid>
              <Grid item xs={12} sm={6} align="center">
                <TextField
                  id="type"
                  select
                  name="type"
                  label="Type"
                  value={type}
                  onChange={handleChange}
                >
                  {accountType.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <br />
            <Grid item xs={12} sm={6} align="center">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                save
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </React.Fragment>
  )
}
