import React, { useState, useMemo } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { useSelector } from 'react-redux'
import MaterialTable from 'material-table'
import Alert from '@material-ui/lab/Alert'
import {
  GET_PICKUP_DATA,
  CREATE_PICKUP_DATA,
  UPDATE_PICKUP_DATA,
  DELETE_PICKUP_DATA
} from '../../modules/api/'
import { setPickUpData } from '../../modules/redux/actions/'
import { store } from '../../modules/redux/storage'

export default function Table () {
  const { loading, error, data } = useQuery(GET_PICKUP_DATA)
  const [successAlert, setSuccessAlert] = useState(false)
  const [createPickup] = useMutation(CREATE_PICKUP_DATA, {
    onCompleted: (data) => {
      if (data.createPickup.success) {
        setSuccessAlert(true)
      } else {
        console.log(data)
        setSuccessAlert(false)
      }
    }
  })
  const [updatePickup] = useMutation(UPDATE_PICKUP_DATA, {
    onCompleted: (data) => {
      if (data.updatePickup.success) {
        setSuccessAlert(true)
      } else {
        setSuccessAlert(false)
      }
    }
  })
  const [deletePickup] = useMutation(DELETE_PICKUP_DATA, {
    onCompleted: (data) => {
      if (data.deletePickup.success) {
        setSuccessAlert(true)
      } else {
        setSuccessAlert(false)
      }
    }
  })

  const pickUpDataMemo = useMemo(() => {
    if (data) {
      return data.me.pickupinfoSet.edges.map(({ __typename, ...item }) => item)
    }
    return []
  }, [data])

  const completedPickUpDataMemo = useMemo(() => {
    if (data) {
      return data.me.completedpickupSet.edges.map(
        ({ __typename, ...item }) => item
      )
    }
    return []
  }, [data])

  const initialData = useSelector((state) => state.pickUpData)
  if (initialData.length < 1) {
    store.dispatch(setPickUpData(pickUpDataMemo))
  }
  const columns = [
    { title: 'id', field: 'node.id', type: 'numeric', editable: 'never' },
    {
      title: 'Bin Type',
      field: 'node.binType',
      lookup: {
        Compost: 'Compost',
        Landfill: 'Landfill',
        Wood: 'Wood',
        Metal: 'Metal',
        'Paper/Cardboard': 'Paper/Cardboard',
        'Plastic Wrap': 'Plastic Wrap',
        'Plastic Bottles/Containers': 'Plastic Bottles/Containers',
        'Glass Bottles/Containers': 'Glass Bottles/Containers',
        'Aluminum Cans/Containers': 'Aluminum Cans/Containers',
        'E-waste': 'E-waste'
      }
    },
    {
      title: 'lbs',
      field: 'node.lbs',
      type: 'numeric',
      validate: (rowData) =>
        rowData && rowData.node && rowData.node.lbs < 0
          ? { isValid: false, helperText: 'lbs must be more than 0' }
          : true
    },
    { title: 'instructions', field: 'node.instructions' }
  ]

  if (loading) return <div>loading...</div>
  if (error) return <div>error: {error.message}</div>
  return (
    <React.Fragment>
      <p>{successAlert && <Alert severity="success">Success!</Alert>}</p>
      <MaterialTable
        title="Pick Up Info"
        data={initialData}
        columns={columns}
        options={{
          exportButton: true
        }}
        editable={{
          onRowAdd: async (newData) => {
            await createPickup({
              variables: {
                binType: newData.node.binType,
                lbs: newData.node.lbs,
                instructions: newData.node.instructions
              }
            }).then(() => {
              store.dispatch(setPickUpData([...initialData, newData]))
            })
          },
          onRowUpdate: async (newData, oldData) => {
            await updatePickup({
              variables: {
                id: oldData.node.id,
                binType: newData.node.binType,
                lbs: newData.node.lbs,
                instructions: newData.node.instructions
              }
            }).then(() => {
              const dataUpdate = [...initialData]
              const index = oldData.tableData.id
              dataUpdate[index] = newData
              store.dispatch(setPickUpData([...dataUpdate]))
            })
          },
          onRowDelete: async (oldData) =>
            await deletePickup({
              variables: {
                id: oldData.node.id
              }
            }).then(() => {
              const dataDelete = [...initialData]
              const index = oldData.tableData.id
              dataDelete.splice(index, 1)
              store.dispatch(setPickUpData([...dataDelete]))
            })
        }}
      />
      <br />
      <MaterialTable
        title="Completed Pick Ups"
        data={completedPickUpDataMemo}
        columns={[
          { title: 'pickup id', field: 'node.pickUpInfo.id', type: 'numeric' },
          { title: 'pickup date', field: 'node.pickUpDate', type: 'datetime' },
          { title: 'bin type', field: 'node.pickUpInfo.binType' },
          { title: 'lbs', field: 'node.pickUpInfo.lbs' },
          { title: 'instructions', field: 'node.pickUpInfo.instructions' }
        ]}
        options={{
          exportButton: true
        }}
      />
    </React.Fragment>
  )
}
