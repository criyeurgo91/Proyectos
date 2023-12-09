import React from 'react'

const Layout_comp = ({ children }) => {
  return (
    <div className='flex flex-col justify-center items-center mt-8'>
      {children}
    </div>
  )
}

export default Layout_comp
