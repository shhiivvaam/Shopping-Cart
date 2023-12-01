import React from 'react'
import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from "react-redux";
import { toast } from 'react-hot-toast';
import { remove } from '../redux/Slices/CartSlice';

const CartItem = ({item, itemIndex}) => {

    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error('Item removed 🛒🥸ℹ️');
    }

    return (
        <div>
            <div className='m-10'>
                <div className='flex justify-center'>
                    <img src={item.image} alt='' width={250}/>
                </div>
                <div className='text-center'>
                    <h1 className='font-semibold uppercase underline'>{item.title}</h1>
                    <h1 className='text-sm text-slate-400'>{item.description.split(' ').slice(0, 10).join(' ')+'...'}</h1>
                    <div className='flex justify-between m-4'>
                        <p className='text-green-500 font-bold'>$ {item.price}</p>
                        <div
                            className='border rounded-full bg-slate-200 p-2 hover:scale-50 transition-all duration-300'
                            onClick={removeFromCart}
                            >
                            <FcDeleteDatabase/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem