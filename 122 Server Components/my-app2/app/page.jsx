// "use client"
// import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import fs from "fs/promises" ;

export default function Home() {
  // const [count,setCout] = useState(0) ;
  console.log("Hey I am harry") ;
  let a = fs.readFile(".gitignore") ;
  a.then(e=>{console.log(e.toString())})
  return (
    
    <div className="flex flex-col">
      <Navbar/>
      {/* {count}
      <button onClick={()=>setCout(count+1)} className="border-white border-2 w-[100px]">Click Me</button> */}
    </div>
  );
}
