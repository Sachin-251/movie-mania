import React from 'react'
import { RiMovie2Fill } from 'react-icons/ri'

type Props = {}

const Loader = (props: Props) => {
  return (
    <div className="flex-col gap-4 w-full h-[50vh] flex items-center justify-center">
        <div className="w-28 h-28 border-8 text-red text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-red rounded-full">
            <RiMovie2Fill className='text-red animate-ping'  />
        </div>
    </div>
  )
}

export default Loader