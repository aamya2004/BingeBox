import React from 'react'
 

const ProductionHouse = () => {
    const ProductionHouseList = [
        {
            id:1,
            image:'src/assets/Images/disney.png',
            video:'src/assets/Videos/disney.mp4'
        },
        {
            id:2,
            image:'src/assets/Images/marvel.png',
            video:'src/assets/Videos/marvel.mp4'
        },
        {
            id:3,
            image:'src/assets/Images/nationalG.png',
            video:'src/assets/Videos/national-geographic.mp4'
        },
        {
            id:4,
            image:'src/assets/Images/pixar.png',
            video:'src/assets/Videos/pixar.mp4'
        },
        {
            id:5,
            image:'src/assets/Images/starwar.png',
            video:'src/assets/Videos/star-wars.mp4'
        },
    ]
  return (
    <div className='flex gap-2 md:gap-5 py-2 px-5 md:px-16'>
        {ProductionHouseList.map((item) =>(
            <div className='border-[2px] border-gray-600 rounded-lg
            hover:scale-110 hover:border-[2px] hover:border-yellow-600 transition-all duration-300 ease-in-out cursor-pointer
            relative shadow-xl shadow-black
            '>
                <video src={item.video} autoPlay loop playsInline
                className='absolute top-0 rounded-md z-0 opacity-0 
                hover:opacity-50'></video>
                <img src={item.image} className='w-full z-[1] '/>
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse