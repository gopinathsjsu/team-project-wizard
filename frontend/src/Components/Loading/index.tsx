import { Loader } from '@mantine/core';
import React from 'react';


function Loading() {
  return (
    <div style={{width:"100%", height:"50vh", display:"flex", justifyContent:"center", alignItems:"center" }}>
      <Loader size={36} />
    </div>
  )
}

export default Loading