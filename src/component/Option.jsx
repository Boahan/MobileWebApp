import Img1 from '../assets/o1.jpeg'
import Img2 from '../assets/o2.jpeg'
import Img3 from '../assets/o3.jpeg'
import Img4 from '../assets/o4.jpeg'
import Img5 from '../assets/o5.jpeg'
import Img6 from '../assets/o6.jpeg'
import Img7 from '../assets/o7.jpeg'
import Img8 from '../assets/o8.jpeg'

export default function Option() {
  return (
    <div className='m-4'>
        <h1 className='m-8 text-2xl font-semibold'>All Investment Options</h1>
        <div className='flex flex-row justify-evenly'>
            <div>
                <img src={Img1} alt="" className='size-20'/>
                <h3>Stocks</h3>
            </div>
            <div>
                <img src={Img2} alt="" className='size-20'/>
                <h3>Gold Bond</h3>
            </div>
            <div>
                <img src={Img3} alt="" className='size-20'/>
                <h3>Mutual Funds</h3>
            </div>
            <div>
                <img src={Img4} alt="" className='size-20'/>
                <h3>NPS</h3>
            </div>
        </div>
        <div className='flex flex-row justify-evenly'>
            <div>
                <img src={Img5} alt="" className='size-20'/>
                <h3>EFTs</h3>
            </div>
            <div>
                <img src={Img6} alt="" className='size-20'/>
                <h3>Liquid Funds</h3>
            </div>
            <div>
                <img src={Img7} alt="" className='size-20'/>
                <h3>Portfolio</h3>
            </div>
            <div>
                <img src={Img8} alt="" className='size-20'/>
                <h3>Bonds</h3>
            </div>
        </div>
    </div>
  )
}
