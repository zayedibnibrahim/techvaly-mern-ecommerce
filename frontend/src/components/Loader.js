import React from 'react'
import { Spinner } from 'react-bootstrap'
const loader = () => {
  return (
    <>
      <Spinner
        animation='grow'
        variant='light'
        style={{ height: '100px', width: '100px' }}
      />
    </>
  )
}

export default loader
