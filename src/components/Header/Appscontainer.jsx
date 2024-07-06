import React from 'react'

function Appscontainer({children , className}) {
  return (
    <div className={`${className} flex overflow-y-scroll h-[53vh] justify-center flex-wrap`}>
        {children}
    </div>
  )
}

export default Appscontainer