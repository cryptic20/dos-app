import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'

import { Line, Bar, Pie } from 'react-chartjs-2'

const COLORS_SERIES = [
  '#04c8bb',
  '#237991',
  '#0212bb',
  '#096943',
  '#c9510b',
  '#46ad49',
  '#57301a',
  '#08c64e',
  '#ffb9ad',
  '#20d2ea',
  '#0d3f94',
  '#4086a6',
  '#055c2c',
  '#51f6a7'
]
// const COLORS_SERIES = () => {
//   return '#' + (Math.random().toString(16) + '0000000').slice(2, 8)
// }

export const numberRender = ({ resultSet, pivotConfig }) => (
  <div>
    {resultSet.seriesNames().map((s) => (
      <Typography variant="h6" align="center">
        {resultSet.totalRow()[s.key]}
      </Typography>
    ))}
  </div>
)

export const lineRender = ({ resultSet }) => {
  const data = {
    labels: resultSet.categories().map((c) => c.category),
    datasets: resultSet.series().map((s, index) => ({
      label: s.title,
      data: s.series.map((r) => r.value),
      borderColor: COLORS_SERIES,
      fill: false
    }))
  }
  const options = {
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          type: 'time'
        }
      ]
    }
  }
  return <Line data={data} options={options} />
}

export const barRender = ({ resultSet }) => {
  const data = {
    labels: resultSet.categories().map((c) => c.category),
    datasets: resultSet.series().map((s, index) => ({
      label: s.title,
      data: s.series.map((r) => r.value),
      backgroundColor: COLORS_SERIES,
      fill: false
    }))
  }
  const options = {}
  return <Bar data={data} options={options} />
}

export const renderChart = (Component, pivotConfig) => ({ resultSet, error }) =>
  (resultSet && (
    <Component resultSet={resultSet} pivotConfig={pivotConfig} />
  )) ||
  (error && error.toString()) || <CircularProgress />
