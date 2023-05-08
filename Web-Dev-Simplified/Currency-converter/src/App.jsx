import React from 'react'
import CurrencyRow from './CurrencyRow'


const App = () => {
  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow />
      <div className='equals'>=</div>
      <CurrencyRow />
    </>
  )
}

export default App


// https://api.exchangeratesapi.io/v1/latest
//     ? access_key = API_KEY