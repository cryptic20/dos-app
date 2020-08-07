import React, { useState, useMemo, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { useSelector } from 'react-redux'
import MaterialTable from 'material-table'
import Alert from '@material-ui/lab/Alert'
import { GET_SCHEDULE_DATA } from '../../modules/api/'
import { setScheduleData } from '../../modules/redux/actions/'
import { store } from '../../modules/redux/storage'

export default function Schedule () {
  const { loading, error, data } = useQuery(GET_SCHEDULE_DATA)
  const [successAlert, setSuccessAlert] = useState(false)
  // const [createSchedule] = useMutation(GET_SCHEDULE_DATA, {
  //   onCompleted: (data) => {
  //     if (data.createPickup.success) {
  //       setSuccessAlert(true)
  //     } else {
  //       console.log(data)
  //       setSuccessAlert(false)
  //     }
  //   }
  // })
  // const [updateSchedule] = useMutation(GET_SCHEDULE_DATA, {
  //   onCompleted: (data) => {
  //     if (data.createPickup.success) {
  //       setSuccessAlert(true)
  //     } else {
  //       console.log(data)
  //       setSuccessAlert(false)
  //     }
  //   }
  // })
  // const [deleteSchedule] = useMutation(GET_SCHEDULE_DATA, {
  //   onCompleted: (data) => {
  //     if (data.createPickup.success) {
  //       setSuccessAlert(true)
  //     } else {
  //       console.log(data)
  //       setSuccessAlert(false)
  //     }
  //   }
  // })

  const mappedData = useMemo(() => {
    if (data) {
      console.log(data)
      return data.me.scheduleSet.edges.map(({ __typename, ...item }) => item)
    }
    return []
  }, [data])

  const initialData = useSelector((state) => state.scheduleData)
  if (initialData.length < 1) {
    store.dispatch(setScheduleData(mappedData))
  }
  const columns = [
    {
      title: 'start',
      field: 'node.start',
      type: 'datetime'
    },
    { title: 'end', field: 'node.end', type: 'datetime' },
    {
      title: 'nextEvent',
      field: 'node.nextEvent',
      type: 'datetime',
      editable: 'never'
    },
    { title: 'repeat', field: 'node.repeat' },
    {
      title: 'repeat until',
      field: 'node.repeatUntil',
      type: 'date',
      editable: 'never'
    }
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
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                // setData([...initialData, newData])

                resolve()
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...initialData]
                const index = oldData.tableData.id
                dataUpdate[index] = newData
                // setData([...dataUpdate])

                resolve()
              }, 1000)
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...initialData]
                const index = oldData.tableData.id
                dataDelete.splice(index, 1)
                // setData([...dataDelete])

                resolve()
              }, 1000)
            })
          // onRowAdd: async (newData) => {
          //   await createSchedule({
          //     variables: {
          //       binType: newData.node.binType,
          //       lbs: newData.node.lbs,
          //       instructions: newData.node.instructions
          //     }
          //   }).then(() => {
          //     store.dispatch(setPickUpData([...initialData, newData]))
          //   })
          // },
          // onRowUpdate: async (newData, oldData) => {
          //   await updateSchedule({
          //     variables: {
          //       id: oldData.node.id,
          //       binType: newData.node.binType,
          //       lbs: newData.node.lbs,
          //       instructions: newData.node.instructions
          //     }
          //   }).then(() => {
          //     const dataUpdate = [...initialData]
          //     const index = oldData.tableData.id
          //     dataUpdate[index] = newData
          //     store.dispatch(setPickUpData([...dataUpdate]))
          //   })
          // },
          // onRowDelete: async (oldData) =>
          //   await deleteSchedule({
          //     variables: {
          //       id: oldData.node.id
          //     }
          //   }).then(() => {
          //     const dataDelete = [...initialData]
          //     const index = oldData.tableData.id
          //     dataDelete.splice(index, 1)
          //     store.dispatch(setPickUpData([...dataDelete]))
          //   })
        }}
      />
    </React.Fragment>
  )
}
