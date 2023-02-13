import React from 'react'

const Landing = ({dispatch, next}) => {
  return (
    <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
        {/*Left*/}
        <div className='bg-gradient-to-br from-cyan-800
      to-rose-500 lg:col-span-4'>
            <div className='flex flex-col items-center 
            justify-center py-2 lg:min-h-screen'>
                <div className='bg-gradient-to-br from-yellow-400
                 to-purple-600 p-2 rounded-xl'>
                     <img className=' w-44 rounded-xl object-cover
                     lg:h-96 lg:w-72' 
                     src={'https://links.papareact.com/8sg'} />
                </div>
               
                <div className='text-center p-5 space-y-2'>
                    <h1 className='text-4xl font-bold text-white'>
                        Real Bored Apes
                    </h1>
                    <h2 className='text-xl text-gray-300'>
                       We are association of high performance individuals 
                        who happends to be interested in coding and NFT
                    </h2>
                </div>
            </div>
        </div>

        {/*Right*/}
        <div className='flex flex-1 flex-col p-12 lg:col-span-6' >
            {/*Header*/}
            <header className='flex items-center justify-between'>
                <h1 className='w-52 cursor-pointer text-xl 
                font-extralight sm:w-88'>
                    Absolutely {' '}
                  <span className='font-extrabold underline decoration-pink-600/50'>
                     Not Scammer
                  </span>{' '}
                  group of people in this amazing realm of web3  :)
                </h1>
                <button className='rounded-full bg-rose-400 text-white
                px-4 py-2 text-xs lg:px-5 lg:py-3 lg:text-base' onClick={()=>{alert('Send us your cv first ;)')}}>Sign in</button>
            </header>
            <hr className='my-3 border'/>
            {/*Content*/}
            <div className='mt-10 flex flex-1 flex-col items-center 
            space-y-6 text-center lg:space-y-0 lg: justify-center'>
                <img className='w-80 object-cover pb-10 
                lg:h-40'
                 src="https://links.papareact.com/bdy"
                  alt=""/>
                  <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>
                    Generate your cv from scratch | Tell us about yourself
                  </h1>
                  <p className='pt-6 text-xl text-green-500'>
                     Take a first step
                    </p>
            </div>
            {/*Mint Button */}
             <button className='h-16 w-full bg-red-600 text-white rounded-full mt-10 '
             onClick={()=>dispatch(next())}>
                Start
             </button>
        </div>
    </div>
  )
}

export default Landing