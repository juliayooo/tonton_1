import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [open,setOpen]=useState(false)
  const ref=useRef(null)

  useEffect(()=>{
    const c = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', c)
    return () => document.removeEventListener('click', c)
  },[])

  return (
    <header className="fixed z-0 bg-e2e2e2 top-0 left-0 w-full px-4 py-2 flex items-start justify-between">
      
      <div className="flex flex-col flex-1">
        <Link to="/home">
          <h1 className="text-4xl font-bold" style={{ fontFamily: 'IntroRust' }}>
            TONTON
          </h1>
        </Link>
        <h2 style={{ fontFamily: 'Garet' }}>
          MATCHA AND COFFEE
        </h2>
      </div>

      <div className="relative">
        <button
          onClick={e => {
            e.stopPropagation()
            setOpen(!open)
          }}
        >
          <img
            style={{ width: '40px', height: '40px' }}
            src="/assets/hamburger.png"
            alt="Menu"
          />
        </button>

        {open && (
          <nav ref={ref} className="z-100 w-[20vw] border-2 border-gray-300 absolute right-0 opacity-60 bg-grey-250 rounded-xl">
            <Link to="/home" className="text-center block p-2" style={{fontFamily: 'Garet'}} >HOME</Link>
            <Link to="/menu" style={{fontFamily: 'Garet'}} className="text-center block p-2">MENU</Link>
            <a className="text-center block p-2" style={{fontFamily: 'Garet'}} target="_blank"href="https://gosnappy.io/owa/r/tonton-matcha-coffee/4908/menu_664/?skipBeforeEnter=true">ORDER AHEAD</a>
          </nav>
        )}
      </div>
    </header>
  )
}
