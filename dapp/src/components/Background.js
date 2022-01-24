import {useEffect, useState} from 'react';
import '../style/background.css'

function Background ({address, connect, sortOptions, setSortBy}) {

    return (
        <>
        <div className='background bg-contain bg-no-repeat -z-12' style={{backgroundImage: "url('/assets/bg/1.png')"}} />
        <div className='background bg-contain bg-no-repeat -z-11' style={{backgroundImage: "url('/assets/bg/2.png')"}} />
        <div className='background bg-contain bg-no-repeat -z-10' style={{backgroundImage: "url('/assets/bg/3.png')"}} />
        <div className='background bg-contain bg-no-repeat -z-9' style={{backgroundImage: "url('/assets/bg/4.png')"}} />
        <div className='background bg-contain bg-no-repeat -z-8' style={{backgroundImage: "url('/assets/bg/5.png')"}} />
        <div className='background bg-contain bg-no-repeat -z-7' style={{backgroundImage: "url('/assets/bg/6.png')"}} />
        <div className='background bg-contain bg-no-repeat -z-6' style={{backgroundImage: "url('/assets/bg/7.png')"}} />
        <div className='background bg-contain bg-no-repeat -z-5' style={{backgroundImage: "url('/assets/bg/8.png')"}} />
        <div className='background bg-contain bg-no-repeat -z-4' style={{backgroundImage: "url('/assets/bg/9.png')"}} />
        <div className='background bg-contain bg-no-repeat -z-3' style={{backgroundImage: "url('/assets/bg/10.png')"}} />
        <div className='background bg-contain bg-no-repeat -z-2' style={{backgroundImage: "url('/assets/bg/11.png')"}} />
        <div className='background bg-contain bg-no-repeat -z-1' style={{backgroundImage: "url('/assets/bg/12.png')"}} />
        </>
    )
}

export default Background
