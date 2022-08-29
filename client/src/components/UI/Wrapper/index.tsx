import React from 'react'

interface WrapperProps{
    children: ReactNode;
    customClass?: string;
}

function Wrapper() {
  return (
    <div className={``}>
        {children}
    </div>
  )
}

export default Wrapper