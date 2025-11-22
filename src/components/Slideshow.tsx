import React,{useState,useEffect} from 'react'
export default function Slideshow({images}:{images:string[]}) {
  const [i,setI]=useState(0)
  useEffect(()=>{const t=setInterval(()=>setI(x=>(x+1)%images.length),2500);return()=>clearInterval(t)},[])
  return (
    <div className="z-[-1] relative w-full max-w-md mx-auto" style={{aspectRatio:'1/1'}}>
      {images.map((src,idx)=>(
        <img key={idx} src={src} style={{ objectPosition: 'center 75%' }} className={"absolute inset-0 w-full h-full object-cover transition-opacity "+(i===idx?"opacity-100":"opacity-0")} />
      ))}
    </div>
  )
}
