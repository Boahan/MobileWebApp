import Img from '../assets/2.jpeg'

export default function Courses() {
  return (
    <div className='flex flex-col justify-center m-6 py-5'>
        <h2 className='text-2xl font-medium py-3'>Popular Courses</h2>
        <div className="border flex p-3 bg-gray-100 rounded-md" >
          <img src={Img} alt="" className='size-70'/>
          <div className='flex flex-col p-4'>
          </div>
          </div>
          <h2 className='text-2xl font-medium py-3'>How Wealth Is Created</h2>
          <h5 className='font-medium'>1 hr 10 class</h5>
      </div>
  )
}
