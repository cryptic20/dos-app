import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_PICKUP_DATA } from '../../modules/api/'
import Table from './Table.js'
export default function PickUp () {
  return (
    <div>
      <Table />
    </div>
  )
}
