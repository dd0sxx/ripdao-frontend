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
        <h1>RIPDAO</h1>
        {/* <div onClick={connect} className='address'>{
            address ?
            `${address.slice(0,6)}...${address.slice(-4)}` :
            'connect wallet'
        }</div> */}
        </div>
    )
}

export default Header
