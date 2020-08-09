import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import { useMutation } from '@apollo/client'
import { EDIT_USER_ADDRESS } from '../../modules/api/'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserAddress } from '../redux/actions/'
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
  const dispatch = useDispatch()
  const state = useSelector((state) => state.userInfo.address)

  const [editAddress] = useMutation(EDIT_USER_ADDRESS, {
    onCompleted: (data) => {
      if (data.editAddress.success) {
        dispatch(updateUserAddress(data.editAddress.address))
        handleClick()
      }
    }
  })
  const onSubmit = async (data) => {
    await editAddress({
      variables: {
        addressInput: data
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
              Address Settings
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address1"
                  name="addressLine1"
                  label="Address line 1"
                  fullWidth
                  autoComplete="shipping address-line1"
                  inputRef={register}
                  defaultValue={state ? state.addressLine1 : ''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address2"
                  name="addressLine2"
                  label="Address line 2"
                  fullWidth
                  autoComplete="shipping address-line2"
                  inputRef={register}
                  defaultValue={state ? state.addressLine2 : ''}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                  inputRef={register}
                  defaultValue={state ? state.city : ''}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                  inputRef={register}
                  defaultValue={state ? state.state : ''}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zipCode"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="shipping postal-code"
                  inputRef={register}
                  defaultValue={state ? state.zipCode : ''}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  autoComplete="shipping country"
                  inputRef={register}
                  defaultValue={state ? state.country : ''}
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  save
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </React.Fragment>
  )
}
