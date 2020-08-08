import React, { useState, useMemo } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { useSelector } from 'react-redux'
import MaterialTable from 'material-table'
import Alert from '@material-ui/lab/Alert'
import {
  GET_SCHEDULE_DATA,
  CREATE_SCHEDULE_DATA,
  DELETE_SCHEDULE_DATA
} from '../../modules/api/'
import { setScheduleData } from '../../modules/redux/actions/'
import { store } from '../../modules/redux/storage'

export default function Schedule () {
  const { loading, error, data } = useQuery(GET_SCHEDULE_DATA)
  const [successAlert, setSuccessAlert] = useState(false)
  const [createSchedule] = useMutation(CREATE_SCHEDULE_DATA, {
    onCompleted: (data) => {
      if (data.createSchedule.success) {
        setSuccessAlert(true)
      } else {
        setSuccessAlert(false)
      }
    }
  })
  const [deleteSchedule] = useMutation(DELETE_SCHEDULE_DATA, {
    onCompleted: (data) => {
      console.log(data)
      if (data.deleteSchedule.success) {
        setSuccessAlert(true)
      } else {
        setSuccessAlert(false)
      }
    }
  })
  const mappedData = useMemo(() => {
    if (data) {
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
    {
      title: 'end',
      field: 'node.end',
      type: 'datetime',
      validate: (rowData) =>
        rowData && rowData.node && rowData.node.start > rowData.node.end
          ? { isValid: false, helperText: 'end date must be before start date' }
          : true
    },
    {
      title: 'bin type',
      field: 'node.event.info.binType',
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
      field: 'node.event.info.lbs',
      type: 'numeric'
    },
    {
      title: 'instructions',
      field: 'node.event.info.instructions'
    },
    {
      title: 'repeat',
      field: 'node.repeat',
      lookup: {
        'RRULE:FREQ=DAILY': 'Daily',
        'RRULE:FREQ=WEEKLY': 'Weekly',
        'RRULE:FREQ=MONTHLY': 'Monthly',
        'RRULE:FREQ=YEARLY': 'Yearly'
      }
    },
    {
      title: 'repeat until',
      field: 'node.repeatUntil',
      type: 'date'
    },
    {
      title: 'next pick up date',
      field: 'node.nextEvent',
      type: 'datetime',
      editable: 'never'
    }
  ]
  if (loading) return <div>loading...</div>
  if (error) return <div>error: {error.message}</div>
  return (
    <React.Fragment>
      <p>{successAlert && <Alert severity="success">Success!</Alert>}</p>
      <MaterialTable
        title="Schedule"
        data={initialData}
        columns={columns}
        options={{
          exportButton: true
        }}
        editable={{
          onRowAdd: async (newData) => {
            await createSchedule({
              variables: {
                scheduleData: {
                  start: newData.node.start,
                  end: newData.node.end,
                  repeat: newData.node.repeat,
                  repeatUntil: newData.node.repeat,
                  event: {
                    info: {
                      binType: newData.node.event.info.binType,
                      lbs: newData.node.event.info.lbs,
                      instructions: newData.node.event.info.instructions
                    }
                  }
                }
              }
            }).then(() => {
              store.dispatch(setScheduleData([...initialData, newData]))
            })
          },
          onRowDelete: async (oldData) =>
            await deleteSchedule({
              variables: {
                id: oldData.node.id
              }
            }).then(() => {
              const dataDelete = [...initialData]
              const index = oldData.node.id
              dataDelete.splice(index, 1)
              store.dispatch(setScheduleData([...dataDelete]))
            })
        }}
      />
    </React.Fragment>
  )
}
