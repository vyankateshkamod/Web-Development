import React from 'react'
import { useEffect } from 'react'
function Navbar({color}) {
  //Case 1:Run on every render
  useEffect(() => {
    alert("Hey I will run on every render")
  },)

  // Case 2:run only on first render
  useEffect(() => {
    alert("Hey I will run on first render")
  }, [])

  //Case 3:runs only when certain value is changed
  useEffect(() => {
    alert("Hey I will run when certain value is changed")
  }, [color])

  //Example of cleanup function
  useEffect(() => {
    alert("Hey this is clean up function")
    return()=>{
      alert("Component is unmounted")
    }
  }, [])
  return (
    <div>I am navbar of color{color}</div>
  )
}

export default Navbar