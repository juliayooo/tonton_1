import React from 'react'
import Slideshow from '../components/Slideshow'
export default function Home(){
  return (
    <div className="pt-[6rem] p-4">
      <Slideshow images={['/tonton/assets/1.jpg',
  '/tonton/assets/2.jpg',
  '/tonton/assets/3.jpg',
  '/tonton/assets/4.jpg']} />
      <h2 className="pt-5 text-center text-xl mt-4 pb-7" style={{ color: 'rgb(79, 178, 79)' }}>VISIT US</h2>
      <a target="_blank" href="https://maps.app.goo.gl/YVU3UqmREKmERHe68"><p className="text-center">1-100 Western Battery Road, Toronto</p></a>
      <h2 className="text-center text-xl mt-4 pb-7"style={{ color: 'rgb(79, 178, 79)' }}>HOURS</h2>
      <p className="text-center pb-7">Monday - Friday: 7am - 6pm <br />Saturday - Sunday: 8am - 5pm</p>
      <a href="https://www.instagram.com/tonton.matcha.coffee" target="_blank"><img className="mx-auto justify-center max-w-[5vw]" src="tonton/assets/ig.png" alt="matcha" /></a>
    </div>
  )
}
