"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import './shorten.css'
const Shorten = () => {
     const [url, seturl] = useState("");
     const [shorturl, setshorturl] = useState("");
     const [generated, setGenerated] = useState("");

     const generate = ()=>{
        const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) =>{
    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    seturl("")
    setshorturl("")
    
    console.log(result)
    alert(result.message)})
  .catch((error) => console.error(error));
     }
  return (
    
    <div style={{marginTop:'6em',marginLeft:'20em'}} className='min-h-screen'>
        <h1 className='mx-50 font-bold text-2xl'>Generate your short <span className='url'>URLs</span></h1>
        <div className='pt-10   flex gap-7' >
            <input style={{width:'16em',borderRadius:'10px',border:'2px solid #4caf50',}} className="input"  type="text" placeholder='Enter your URL'  value={url} onChange={e=>{seturl(e.target.value)}} />
           
            <input style={{width:'16em',borderRadius:'10px',border:'2px solid #4caf50'}} className="input" type="text" placeholder='Enter your preferred short URL text'  value={shorturl} onChange={e=>{setshorturl(e.target.value)}}/>
       
       <div  className='generate'>
       <button className="generate font-bold" onClick={generate}>Generate</button>
        </div>
        </div>
        {generated && (
        <pre style={{  marginTop: "20px", borderRadius: "5px",paddingLeft:'10em'}}>
        <span> Your Link:</span> <Link target="_blank" href={generated}>{generated}</Link>
        </pre>
        )}
    </div>
   
  )
}

export default Shorten
