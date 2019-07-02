import React from 'react';
import Schedule from './Schedule';
import Header from './Header';
import SeasonalProduce from './SeasonalProduce';


function App() {
  return (
    <div>
      <style global jsx>{`
        h2 {
          text-align: center;
        }
        span {
          text-align: center;
        }
      `}</style>
      <Header />
      <Schedule />
      <SeasonalProduce />
    </div>
  );
}

export default App;