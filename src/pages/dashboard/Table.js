import React from 'react'
import MaterialTable from 'material-table'
import { client, GET_PICKUP_DATA } from '../../modules/api/'

const remoteData = (query) => {
  console.log('Query object - ', query)
  return client
    .query({
      query: GET_PICKUP_DATA,
      variables: {
        limit: query.pageSize,
        username: query.search
      }
    })
    .then((res) => {
      console.log(res)
      const map = res.data.me.pickupinfoSet.edges.map(
        ({ __typename, ...item }) => item
      )
      console.log(map)
      return {
        data: map,
        page: query.page,
        totalCount: res.data.me.pickupinfoSet.edges.length
      }
    })
}

export default function Table (props) {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Bin Type', field: 'node.binType' },
      { title: 'lbs', field: 'node.lbs', type: 'numeric' },
      { title: 'instructions', field: 'node.instructions' }
    ]
  })

  return (
    <MaterialTable
      title="Pick Up Info"
      data={remoteData}
      columns={state.columns}
      options={{
        exportButton: true
      }}
    />
  )
}
