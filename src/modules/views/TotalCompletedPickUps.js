import React from 'react'
import { QueryRenderer } from '@cubejs-client/react'
import { cubeJsApi } from '../../modules/api/'
import { useSelector } from 'react-redux'
import { renderChart, numberRender } from '../components/Chart'

function TotalCompleted () {
  const state = useSelector((state) => state.userInfo)
  const values = [state.email]

  return (
    <QueryRenderer
      query={{
        measures: ['UsersCompletedpickup.count'],
        timeDimensions: [
          {
            dimension: 'UsersCompletedpickup.pickUpDate'
          }
        ],
        order: {},
        filters: [
          {
            dimension: 'UsersCustomuser.email',
            operator: 'equals',
            values: values
          }
        ]
      }}
      cubejsApi={cubeJsApi}
      render={renderChart(numberRender, {
        x: [],
        y: ['measures'],
        fillMissingDates: true
      })}
    />
  )
}

export default TotalCompleted
