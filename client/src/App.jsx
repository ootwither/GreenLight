/* eslint-disable react/prop-types */
// import { useState } from 'react'
import items from './assets/items'

import './App.css'

function ButtonGrid({items}) {
  return (
    <>
    {items.map(item => <button key={item.id}>{item.short}</button>
        )}
    </>
  )
}

function App() {

  return (
    <>
    <ButtonGrid items={items}/>
    </>
  )
}

export default App
