import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import { add, remove } from '../redux/Slices/CartSlice'

const Product = ({ post }) => {

    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item added to Cart 🛒👍")
    }

    const removeFromCart = () => {
        dispatch(remove(post.id));            // TODO: post -> item
        toast.error("Item removed from Cart 🛒ℹ️🥸")
    }

    return (
        <div className='flex flex-col items-center justify-between gap-3 p-4 mt-10 rounded-xl outline
                hover:scale-110 transition-all duration-300 ease-in shadow-[rgba(0, 0, 0, 0.4), 0px, 30px, 90px]
            '>
            <div>
                <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>
                    {post.title}
                </p>
            </div>
            <div>
                <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>
                    {post.description.split(' ').slice(0, 10).join(' ') + '...'}
                </p>
            </div>
            <div className='h-[180px]'>
                <img src={post.image} alt='' className='h-full w-full' />
            </div>
            <div className='flex justify-between gap-12 items-center w-full mt-5'>
                <div>
                    <p className='text-green-600 font-semibold'>
                        ${post.price}
                    </p>
                </div>
                {
                    cart.some((p) => p.id === post.id)
                        ?
                        (
                            <button
                                className='text-gray-700 border-2 border-gray-700 rounded-full
                                    font-semibold text-[12px] p-1 px-3 uppercase
                                    hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in'
                                onClick={removeFromCart}>
                                Remove Item
                            </button>
                        )
                        :
                        (
                            <button 
                            className='text-gray-700 border-2 border-gray-700 rounded-full
                            font-semibold text-[12px] p-1 px-3 uppercase
                            hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in'
                                onClick={addToCart}>
                                Add To Cart
                            </button>
                        )
                }

                {/* <button>
                {
                    // false
                    //     ?
                    // (
                    //     <div>
                    //         <p>Remove Item</p>
                    //     </div>
                    // )
                    //     :
                    // (
                    //     <div>
                    //         <p>Add To Cart</p>
                    //     </div>
                    // )
                }
            </button> */}
            </div>
        </div>
    )
}

export default Product