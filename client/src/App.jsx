import React from 'react'
import DashboardTable from './components/DashboardTable'

function App() {
  return (
    <>
   
      <div className='fixed top-0 w-full shadow-md p-5 z-30  bg-green-100'>
        <h1 className='text-4xl text-center text-teal-400'>Dashboard</h1>
      </div>
<div className='fixed top-20 w-full h-full overflow-scroll overflow-y-auto'>
<DashboardTable />

</div>
     
    </>
  )
}

export default App
