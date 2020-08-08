import React from 'react'
import { useForm } from 'react-hook-form'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export default function AddressForm () {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              User Settings
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="given-name"
                  inputRef={register}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="family-name"
                  inputRef={register}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address1"
                  name="addressLine1"
                  label="Address line 1"
                  fullWidth
                  autoComplete="shipping address-line1"
                  inputRef={register}
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
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                  inputRef={register}
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
                />
              </Grid>
              <Grid item xs={6}></Grid>
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
