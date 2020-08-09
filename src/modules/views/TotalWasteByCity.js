import React from 'react'
import { QueryRenderer } from '@cubejs-client/react'
import { cubeJsApi } from '../../modules/api/'
import { useSelector } from 'react-redux'
import { renderChart, numberRender } from '../components/Chart'

function TotalWasteByCity () {
  const state = useSelector((state) => state.userInfo)
  const values = [state.address.city]
  return (
    <QueryRenderer
      query={{
        measures: ['UsersPickupinfo.totalLbs'],
        timeDimensions: [],
        order: {},
        dimensions: [],
        filters: [
          {
            dimension: 'UsersAddress.city',
            operator: 'equals',
            values: values || ['Bronx']
          }
        ]
      }}
      cubejsApi={cubeJsApi}
      render={renderChart(numberRender)}
    />
  )
}

export default TotalWasteByCity
