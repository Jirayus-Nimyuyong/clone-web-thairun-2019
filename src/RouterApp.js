import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Homepage from '../src/components/page/homepage/homePage'
import Photo from '../src/components/page/datepages/PhotoSearch'
import Race from '../src/components/page/datepages/Race'
import Follow from '../src/components/page/datepages/Follow'
import Cer from '../src/components/page/datepages/Cer'
import Pic from '../src/components/page/datepages/Pic'
import Shop from '../src/components/page/datepages/Shop'
import Pricing from '../src/components/page/datepages/Pricing'
import privacy from '../src/components/page/datepages/Pricing_Policy'
 
const RouterApp = () => (
  <Switch>
      <Route exact name="homepage" path="/" component={Homepage} />
      <Route exact name="datepages" path="/photo" component={Photo} />
      <Route exact name="datepages" path="/race" component={Race}/>
      <Route exact name="datepages" path="/followme" component={Follow} />
      <Route exact name="datepages" path="/ecer" component={Cer} />
      <Route exact name="datepages" path="/pic2face" component={Pic} />
      <Route exact name="datepages" path="/shop" component={Shop} />
      <Route exact name="datepages" path="/pricing" component={Pricing} />
      <Route exact name="datepages" path="/privacy-policy" component={privacy} />
  </Switch>
)

export default RouterApp;