import Img from '../assets/5.jpeg'
import Img1 from '../assets/4.jpeg'

export default function List() {
  return (
    <div className="flex w-full py-4 justify-evenly">
        <div className="border flex p-3 w-2/5 justify-evenly" >
            <div>
                <span className='text-gray-500 text-sm'>Nifty 50</span>
                <h2 className='font-bold'>1999</h2>
                <span className='text-red-400'>Nifty 50</span>
            </div>
            <img src={Img} alt="" className='size-16'/>
        </div>
        <div className="border flex p-3 w-2/5 justify-evenly">
            <div>
                <span className='text-gray-500 text-sm'>Nifty 50</span>
                <h2 className='font-bold'>1999</h2>
                <span className='text-green-400'>Nifty 50</span>
            </div>
            <img src={Img1} alt="" className='size-16'/>
        </div>
    </div>
  )
}
