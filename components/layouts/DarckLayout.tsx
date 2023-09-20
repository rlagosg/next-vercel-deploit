import React, { FC, PropsWithChildren } from 'react'

export const DarckLayout: FC<PropsWithChildren> = ({ children  }) => {
  return (
    <div style={{
       backgroundColor: 'orange',
       padding: '10px',
       borderRadius: '5px'
    }}>
        <h3> Darck-Layout </h3>
        { children }
    </div>
  )
}
