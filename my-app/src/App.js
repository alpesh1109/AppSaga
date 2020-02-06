import React from 'react';
import Button from '../src/containers/Button';
import NewsItem from '../src/containers/NewsItem'
import Loading from '../src/containers/Loading'


let App = () => (
  <div>
    <Button />
    <Loading />
    <NewsItem />
  </div>
);

export default App;