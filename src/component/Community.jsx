import Img from '../assets/1.jpeg'

export default function Community   () {
  return (
    <div className='flex flex-col justify-center m-6 py-5'>
        <h2 className='text-2xl font-medium py-3'>Community groups to join</h2>
        <div className="border flex p-3 bg-gray-100 rounded-md" >
          <img src={Img} alt="" className='size-28'/>
          <div className='flex flex-col p-4'>
            <h1 className='font-semibold mb-4'>Tips for investing & fu..</h1>
            <div className='flex flex-row justify-between'>
                <span>
                    <h2 className='text-gray-400'></h2>
                    <span></span>
                </span>
                <span>
                    <h2 className='text-gray-400'>Join</h2>
                </span>
            </div>
          </div>
          </div>
      </div>
  )
}
