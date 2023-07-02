import React from 'react'

type NoResultProps = {
    title: string
    message: string
  }

export default function NoDefFound(props: NoResultProps) {
  return (
    <div>
        <h1 className='text-center text-[64px] mb-[44px] mt-[132px]'>😕</h1>
        <p className='text-[20px] text-[#2D2D2D] text-center font-bold mb-[24px] dark:text-[#FFFFFF]'>{props.title}</p>
        <p className='text-[18px] text-[#757575] text-center'>{props.message}</p>
    </div>
  )
}
