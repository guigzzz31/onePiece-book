import React from 'react';


export default function Card() {
  return (
    <div className="container flex mx-auto box-border p-4 border-4 ">
      <div>
        <p className="font-serif">TITRE</p>
        <p className="font-serif">Sous titre</p>
        <p className="font-mono">Descrition</p>
      </div>
      <div className="">
        <div className="">
          <img src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-3-800x800-19201574ed51f77138a739c0452ca104.jpg" alt="..." className="shadow-lg rounded max-w-full h-auto align-middle border-none" />
        </div>
      </div>
    </div>
  )
} 