import Img from '../assets/8.jpeg'
import Img1 from '../assets/9.jpeg'

export default function Stock() {
  return (
    <div >
        <h2 className='mx-8 font-semibold text-xl'>Top Stocks</h2>
        <div className="flex w-full py-4 justify-evenly">
            <div className="border flex flex-col p-3 w-2/5 justify-evenly" >
                <img src={Img} alt="" className='size-24'/>
                <span className='text-gray-500 text-sm'>Nifty 50</span>
                <h2 className='font-bold'>1999</h2>
                <span className='text-red-400'>Nifty 50</span>
            </div>
            <div className="border flex flex-col p-3 w-2/5 justify-evenly">
                <img src={Img1} alt="" className='size-24'/>
                <span className='text-gray-500 text-sm'>Nifty 50</span>
                <h2 className='font-bold'>1999</h2>
                <span className='text-green-400'>Nifty 50</span>
            </div>
        </div>
    </div>
  )
}
