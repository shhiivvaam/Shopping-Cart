import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem'

const Cart = () => {

    const {cart} = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        // Reduce Function
        setTotalAmount(cart.reduce((acc, curr) => acc+ curr.price, 0));
    }, [cart])

    return (
        <div>
            {
                cart.length > 0
                    ?
                (
                    <div className='flex justify-between w-[95%]'>
                        <div>
                            {
                                cart.map((item, index) => {
                                    return (
                                        <CartItem key={item.id} item={item} itemIndex={index}/>
                                    )
                                })
                            }
                        </div>
                        <div className='flex flex-col justify-between items-center font-semibold ml-3 mr-3'>
                            <div>
                                <div className='text-green-500 uppercase
                                    outline-dashed rounded-full text-center text-sm bg-slate-500 mt-5'>
                                        Your Cart
                                </div>
                                <div>Summary :)</div>
                                <p className='text-xs flex italic'>
                                    <span>Total Items: &nbsp;</span>
                                    <span className='text-green-600'>{cart.length}</span>
                                </p>
                            </div>
                            <div className='italic'>
                                <p>Total Amount: <span className='text-green-400'>${totalAmount}</span></p>
                                <button
                                    className='border rounded-full text-center text-sm px-3 py-2 mb-4
                                        text-blue-500 bg-green-200 hover:bg-black hover:text-slate-300 transition-all duration-300'
                                    >
                                    CheckOut
                                </button>
                            </div>
                        </div>
                    </div>
                )
                    :
                (
                    <div className='flex flex-col justify-center items-center mt-52'>
                        <h1 className='font-bold mb-5 text-red-500'>Cart Empty!! Fill it Now</h1>
                        <Link to='/'>
                            <button
                                className='bg-green-500 rounded-md px-5 text-sm py-2 text-center font-semibold text-white hover:text-black hover:bg-slate-400 transition-all duration-300'
                                >
                                Shop now!!🛒🛒ℹ👍
                            </button>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default Cart