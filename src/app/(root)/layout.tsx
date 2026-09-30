import React from 'react'
import Nav from '../components/shared/Nav'

function Rootlaout({children}:{children:React.ReactNode}) {
  return (
    <div>
        <Nav/>
        {children}
    
    </div>
  )
}

export default Rootlaout