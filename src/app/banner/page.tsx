import React from 'react'
import Slider from '@/components/Slider'
import { JogoBonitos } from "@/components/constants";


function Banner() {
  return (
    <div id='banner'>
        <Slider  sliders={JogoBonitos} />
    </div>
  )
}

export default Banner