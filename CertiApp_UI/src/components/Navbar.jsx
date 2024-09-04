import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='flex flex-row justify-end p-4 gap-2'>
        <a className="bg-blue-400 p-2 rounded-md px-8 py-2  mr-2" href="/">Home</a>
        <a className="bg-blue-400 p-2 rounded-md  px-8 py-2 " href="/issue">Issue Certificate</a>
        {/* <a className="bg-blue-400 p-2 rounded-md px-8 py-2  mr-2" href="/view">View</a> */}
        
    </div>
    </>
  )
}

export default Navbar