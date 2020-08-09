import React from 'react'
import Grid from '@material-ui/core/Grid'
import EcoIcon from '@material-ui/icons/Eco'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import LocalShippingIcon from '@material-ui/icons/LocalShipping'
import CompletedDateChart from '../../modules/views/CompletedDateChart'
import TotalLbsPerBin from '../../modules/views/TotalLbsPerBin'
import TotalLbs from '../../modules/views/TotalLbs'
import TotalMoneyEarned from '../../modules/views/TotalMoneyEarned'
import TotalCompletedPickUps from '../../modules/views/TotalCompletedPickUps'
import TotalWasteByCity from '../../modules/views/TotalWasteByCity'
import CardAnalyticsTemplate from '../../modules/components/CardAnalyticsTemplate'

export default function Analytics () {
  return (
    <React.Fragment>
      <Grid container spacing={4} justify="space-evenly">
        <Grid item xs={12} sm={5} md={5} lg={3} align="center">
          <CardAnalyticsTemplate
            icon={<CheckCircleIcon color="primary" />}
            title="Total Pickups Completed"
            chart={<TotalCompletedPickUps />}
          />
        </Grid>
        <Grid item xs={12} sm={5} md={5} lg={3} align="center">
          <CardAnalyticsTemplate
            icon={<EcoIcon color="primary" />}
            title="Total Waste Diverted By You"
            chart={<TotalLbs />}
          />
        </Grid>
        <Grid item xs={12} sm={5} md={5} lg={3} align="center">
          <CardAnalyticsTemplate
            icon={<MonetizationOnIcon color="primary" />}
            title="Total Money Earned"
            chart={<TotalMoneyEarned />}
          />
        </Grid>
        <Grid item xs={12} sm={5} md={5} lg={3} align="center">
          <CardAnalyticsTemplate
            icon={<LocalShippingIcon color="primary" />}
            title="Total Waste Diverted In Your City"
            chart={<TotalWasteByCity />}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} justify="space-evenly">
        <Grid item xs={12} sm={11} md={10} lg={6} align="center">
          <CardAnalyticsTemplate
            title="Total Weight (lbs) Pick Up Completed Per Bin Type"
            chart={<TotalLbsPerBin />}
          />
        </Grid>
        <Grid item xs={12} sm={11} md={10} lg={6} align="center">
          <CardAnalyticsTemplate
            title="Total Pick Ups By Date"
            chart={<CompletedDateChart />}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
