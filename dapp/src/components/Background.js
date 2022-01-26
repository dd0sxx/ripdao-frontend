import {useEffect, useState} from 'react';
import '../style/background.css'

function Background ({address, connect, sortOptions, setSortBy}) {

    return (
        <>
        <img className='background bg-contain -z-12' src='/assets/bg/1.png' alt='ripdao background' />
        <img className='background bg-contain -z-11' src='/assets/bg/2.png' alt='ripdao background' />
        <img className='background bg-contain -z-10' src='/assets/bg/3.png' alt='ripdao background' />
        <img className='background bg-contain -z-9' src='/assets/bg/4.png' alt='ripdao background' />
        <img className='background bg-contain -z-8' src='/assets/bg/5.png' alt='ripdao background' />
        <img className='background bg-contain -z-7' src='/assets/bg/6.png' alt='ripdao background' />
        <img className='background bg-contain -z-6' src='/assets/bg/7.png' alt='ripdao background' />
        <img className='background bg-contain -z-5' src='/assets/bg/8.png' alt='ripdao background' />
        <img className='background bg-contain -z-4' src='/assets/bg/9.png' alt='ripdao background' />
        <img className='background bg-contain -z-3' src='/assets/bg/10.png' alt='ripdao background' />
        <img className='background bg-contain -z-2' src='/assets/bg/11.png' alt='ripdao background' />
        <img className='background bg-contain -z-1' src='/assets/bg/12.png' alt='ripdao background' />
        </>
    )
}

export default Background
