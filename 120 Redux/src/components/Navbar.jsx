import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {

    const count = useSelector((state) => state.counter.value)
  return (
    <div>this is navbar and count is {count}</div>
  )
}

export default Navbar