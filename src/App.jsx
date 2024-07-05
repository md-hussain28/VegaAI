import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Mainbar from './mainbar/Mainbar'

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Mainbar />
    </div>
  )
}

export default App

