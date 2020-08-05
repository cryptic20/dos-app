import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_PICKUP_DATA } from '../../modules/api/'

export default function PickUp () {
  const { loading, error, data } = useQuery(GET_PICKUP_DATA)
  if (loading) return <div>loading...</div>
  if (error) return `Error! ${error.message}`
  console.log(data)
  return <div>pickup</div>
}
