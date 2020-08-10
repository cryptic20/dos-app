import withRoot from '../../modules/style/withRoot'
import React from 'react'
import AppBarViews from '../../modules/views/AppBarViews'
import AppFooterViews from '../../modules/views/AppFooterViews'
import LandingHero from '../../modules/views/LandingHero'
import LandingValues from '../../modules/views/LandingValues'

function LandingPage () {
  return (
    <React.Fragment>
      <AppBarViews />
      <LandingHero />
      <LandingValues />
      <AppFooterViews />
    </React.Fragment>
  )
}
export default withRoot(LandingPage)
