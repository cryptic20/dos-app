import React from 'react'
import { QueryRenderer } from '@cubejs-client/react'
import { cubeJsApi } from '../../modules/api/'
import { useSelector } from 'react-redux'
import { renderChart, barRender } from '../components/Chart'

function TotalLbsPerBin () {
  const state = useSelector((state) => state.userInfo)
  const values = [state.email]
  return (
    <QueryRenderer
      query={{
        measures: ['UsersCompletedpickup.count', 'UsersPickupinfo.totalLbs'],
        timeDimensions: [],
        order: {
          'UsersPickupinfo.totalLbs': 'desc'
        },
        dimensions: ['UsersPickupinfo.binType'],
        filters: [
          {
            dimension: 'UsersCustomuser.email',
            operator: 'equals',
            values: values
          }
        ]
      }}
      cubejsApi={cubeJsApi}
      render={renderChart(barRender, {
        x: ['UsersPickupinfo.binType'],
        y: ['measures'],
        fillMissingDates: true
      })}
    />
  )
}
export default TotalLbsPerBin
