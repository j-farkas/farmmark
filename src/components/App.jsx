import React from 'react';
import Schedule from './Schedule';
import Header from './Header';
import SeasonalProduce from './SeasonalProduce';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
    
        
        <style global jsx>{`
        h2 {
          text-align: center;
        }
        span {
          text-align: center;
        }
        `}</style>
          <Switch>
        <Route path='/schedule' component={Schedule} />
        <Route path='/seasonal-produce' component={SeasonalProduce} />
      </Switch>
    </div>
  );
}

export default App;