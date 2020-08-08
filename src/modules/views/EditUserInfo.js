import React from 'react'

export default function MyComponent () {
  const classes = useStyles()

  const [type, setType] = React.useState('')
  const [open, setOpen] = React.useState(false)

  const handleChange = (event) => {
    setType(event.target.value)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Type</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          name="type"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={type}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Type</em>
          </MenuItem>
          <MenuItem value="Individual">Individual</MenuItem>
          <MenuItem value="Bulk">Bulk</MenuItem>
          <MenuItem value="Commercial">Commercial</MenuItem>
          <MenuItem value="Industrial">Industrial</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
