import React, { useState, useMemo, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { useSelector, useDispatch } from 'react-redux'
import MaterialTable from 'material-table'
import { GET_PICKUP_DATA } from '../../modules/api/'
import { setPickUpData } from '../../modules/redux/actions/'

export default function Table (props) {
  const { loading, error, data } = useQuery(GET_PICKUP_DATA)
  const dispatch = useDispatch()
  const mappedData = React.useMemo(() => {
    if (data) {
      return data.me.pickupinfoSet.edges.map(({ __typename, ...item }) => item)
    }
    return []
  }, [data])
  const intialData = useSelector((state) => state.pickUpData)
  if (!intialData) intialData = mappedData
  const [columns, setColumns] = React.useState([
    { title: 'Bin Type', field: 'node.binType' },
    { title: 'lbs', field: 'node.lbs', type: 'numeric' },
    { title: 'instructions', field: 'node.instructions' }
  ])

  if (loading) return <div>loading...</div>
  if (error) return <div>error: {error.message}</div>

  return (
    <MaterialTable
      title="Pick Up Info"
      data={mappedData}
      columns={columns}
      options={{
        exportButton: true
      }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              dispatch(setPickUpData([...intialData, newData]))

              resolve()
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...intialData]
              const index = oldData.tableData.id
              dataUpdate[index] = newData
              dispatch(setPickUpData([...dataUpdate]))

              resolve()
            }, 1000)
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...intialData]
              const index = oldData.tableData.id
              dataDelete.splice(index, 1)
              dispatch(setPickUpData([...dataDelete]))

              resolve()
            }, 1000)
          })
      }}
    />
  )
}
