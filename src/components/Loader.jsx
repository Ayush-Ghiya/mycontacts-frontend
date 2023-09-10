import React from 'react'
import { FallingLines, LineWave } from 'react-loader-spinner'

const Loader = () => {
  return (
  
<FallingLines
  color="#4fa94d"
  width="50"
  height="40"
  visible={true}
  ariaLabel='falling-lines-loading'
/>
  
  )
}

export default Loader
