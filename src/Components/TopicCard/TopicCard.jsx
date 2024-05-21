import React from 'react'
import Orange from "../../imgs/Orangedot.svg"
import Image from 'next/image'

const TopicCard = ({tite,number,subtitle1,subtitle2,subtitle3,subtitle4}) => {
  return (
    <div className='bg-custom-gradient w-[309px] h-[185px] md:w-[285px] md:h-[195px] gap-[13.59px] p-[16px] rounded-[20px]'>
      <div className='flex gap-[10px] items-start'>
        <div className='text-[17px] border border-custom-yellow border-0.8 rounded-[2px] p-[2px] text-[#8133F1] bg-white'>{number}
        </div>
        <div className='text-[16px] text-center font-bold'>{tite}</div>
      </div>
      <div className='gradient-border'></div>
      <div className='mt-[15px]'>
        <div className='flex items-center gap-[10px]'>
        <Image src={Orange} width={8} height={8}/>
        <p className='text-[15px] font-semibold'>{subtitle1}</p>
        </div>
        
        <div className='flex items-center gap-[10px]'>
        <Image src={Orange} width={8} height={8}/>
        <p className='text-[15px] font-semibold'>{subtitle2}</p>
        </div>

        <div className='flex items-center gap-[10px]'>
        <Image src={Orange} width={8} height={8}/>
        <p className='text-[15px] font-semibold'>{subtitle3}</p>
        </div>

        <div className='flex items-center gap-[10px]'>
        <Image src={Orange} width={8} height={8}/>
        <p className='text-[15px] font-semibold'>{subtitle4}</p>
        </div>
      </div>
    </div>
  )
}

export default TopicCard
