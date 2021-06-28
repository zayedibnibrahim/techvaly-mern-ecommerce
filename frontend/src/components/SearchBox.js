import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function SearchBox() {
  const [keyword, setKeyword] = useState('')

  const history = useHistory()
  const submitHandle = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }
  return (
    <Form onSubmit={submitHandle} className='d-flex'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search...'
        className='mr-sm-2 ms-sm-5'
      ></Form.Control>
      <Button type='submit' variant='outline-light' className='p-2'>
        Search
      </Button>
    </Form>
  )
}
