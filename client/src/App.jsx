/* eslint-disable react/prop-types */
// import { useState } from 'react'
import items from './assets/items'


import './App.css'

function ButtonGrid({items}) {
  return (
    <>
    {items.map(item =>
    <button key={item.id} onClick={item => item.toggle = !item.toggle}>
      <div className={item.toggle ? 'selected' : ''}>
      {item.short}
      </div>
      <div>OFF</div>
      </button>
        )}
    </>
  )
}

function ConfigurePanel() {
  return (
    <>
    <form>

    </form>

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
