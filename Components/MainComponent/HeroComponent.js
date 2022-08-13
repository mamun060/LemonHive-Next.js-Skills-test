import React from 'react'

const HeroComponent = () => {
  return (
    <div className='container py-16 '>
        <div className="grid grid-rows-3 grid-flow-col gap-2">
            <div className="row-span-1 bg-pink shadow-xl col-span-2">01</div>
            <div className="row-span-2 col-span-1 bg-golden shadow-md">02</div>
            <div className="row-span-2 col-span-1 bg-golden shadow-md">03</div>
            <div className="row-span-3 bg-pink shadow-xl mt-5">04</div>
        </div>
    </div>
  )
}

export default HeroComponent

