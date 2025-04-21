import React from 'react'
import Register from './components/Register'
import View from './components/View'
import Update from './components/Update'
import Delete from './components/Delete'
import './App.css'

const App = () => {
  return (
    <div>
      <Register />
      <View />
      <Update />
      <Delete />
    </div>
  )
}

export default App