'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { FaMinus, FaPlus } from 'react-icons/fa'

export default function Counter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <div className='flex items-center gap-3'>
      <Button size='icon' onClick={decrement}>
        <FaMinus />
      </Button>
      <p>Current vote: {count}</p>
      <Button size='icon' onClick={increment}>
        <FaPlus />
      </Button>
    </div>
  )
}
