"use client"
import React from 'react'

function Details({params}) {
  console.log(params.details);
  return (
    <>
    {params.details === "1" && <p>name: 'Yash', role: 'Senior Developer</p>}
    {params.details === "2" && <p> name: 'Vaibhav', role: 'Backend Developer</p>}
    {params.details === "3" && <p>name: 'Suresh', role: 'Frontend Developer</p>}
      
    </>
  )
}

export default Details;
