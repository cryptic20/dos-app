import withRoot from '../../modules/style/withRoot'
import React from 'react'
import AppBarViews from '../../modules/views/AppBarViews'
import AppFooterViews from '../../modules/views/AppFooterViews'

function LandingPage () {
  return (
    <React.Fragment>
      <AppBarViews />
      <AppFooterViews />
    </React.Fragment>
  )
}
export default withRoot(LandingPage)
