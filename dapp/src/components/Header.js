import {useEffect, useState} from 'react';
import { ethers } from 'ethers';
import '../style/header.css'

function Header ({address, connect, sortOptions, setSortBy}) {

    function setSort (e) {
        sortOptions.forEach((item, i) => {
            if (e.target.value === item) setSortBy(i)
        })
    }

    return (
        <div className='header flex-centered'>
        <h1 className='z-10 p-10'>RIPDAO</h1>
        <nav className='z-10 w-1/6 p-10 flex justify-between'>
            <div>about</div>
            <div>twitter</div>
            <div>discord</div>
        </nav>
        {/* <div onClick={connect} className='address'>{
            address ?
            `${address.slice(0,6)}...${address.slice(-4)}` :
            'connect wallet'
        }</div> */}
        </div>
    )
}

export default Header
