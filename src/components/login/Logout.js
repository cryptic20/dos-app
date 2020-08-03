import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

function Logout () {
  return <Redirect push to="/" />
}
export default Logout
