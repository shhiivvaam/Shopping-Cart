import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-blue-500 '>
            <div className='flex justify-between'>
                <NavLink to='/'>
                    <div>
                        <img src="./logo.png" alt='' className='h-14'/>     //TODO : image url mai kuch dikkat hai shyd check kro
                    </div>
                </NavLink>

                <div>
                    <NavLink to='/'>
                        <p>Home</p>
                    </NavLink>
                    <NavLink to='/cart'>
                        <div>
                            <FaShoppingCart />
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

                export default Navbar