import Img from '../assets/7.jpeg'

export default function Portfolio() {
  return (
    <div className='flex flex-col justify-center m-6 py-5'>
        <h2 className='text-2xl font-medium py-3'>Trending Portfolio's</h2>
        <div className="border flex p-3 bg-gray-100 rounded-md" >
          <img src={Img} alt="" className='size-28'/>
          <div className='flex flex-col p-4'>
            <h1 className='font-semibold mb-4'>Top 100 Stocks</h1>
            <div className='flex flex-row justify-between'>
                <span>
                    <h2 className='text-gray-400'>Created By :  </h2>
                    <span>RS 500</span>
                </span>
                <span>
                    <h2 className='text-gray-400'> 5YR CGR</h2>
                    <span className='text-green-400'>48.64%</span>
                </span>
            </div>
          </div>
          </div>
      </div>
  )
}
