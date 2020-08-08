import React from 'react'
import { QueryRenderer } from '@cubejs-client/react'
import { cubeJsApi } from '../../modules/api/'
import { useSelector } from 'react-redux'
import { renderChart, lineRender } from '../components/Chart'

function CompletedDateChart () {
  const state = useSelector((state) => state.userInfo)
  const values = [state.email]
  return (
    <QueryRenderer
      query={{
        measures: ['UsersCompletedpickup.count'],
        timeDimensions: [
          {
            dimension: 'UsersCompletedpickup.pickUpDate',
            granularity: 'day'
          }
        ],
        order: {
          'UsersCompletedpickup.pickUpDate': 'asc'
        },
        dimensions: [],
        filters: [
          {
            dimension: 'UsersCustomuser.email',
            operator: 'equals',
            values: values
          }
        ]
      }}
      cubejsApi={cubeJsApi}
      render={renderChart(lineRender, {
        x: ['measures'],
        y: ['UsersCompletedpickup.pickUpDate.day'],
        fillMissingDates: true
      })}
    />
  )
}

export default CompletedDateChart
