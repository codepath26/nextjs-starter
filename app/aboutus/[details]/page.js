"use client"
import React from 'react'

function Details({params}) {
  console.log(params.details);
  return (
    <>
    {params.details === "1" && <p> role: 'Senior Developer</p>}
    {params.details === "2" && <p>  role: 'Backend Developer</p>}
    {params.details === "3" && <p> role: 'Frontend Developer</p>}
      
    </>
  )
}

export default Details;
