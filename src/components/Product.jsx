import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { toast } from 'react-hot-toast'
import {add, remove} from '../redux/Slices/CartSlice'

const Product = ({post}) => {

    const {cart} = useSelector((state)=> state);
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
        <div>
            <div>
                <p>{post.title}</p>
            </div>
            <div>
                <p>{post.description}</p>
            </div>
            <div>
                <img src={post.image}  alt=''/>
            </div>
            <div>
                <p>{post.price}</p>
            </div>
            {
                cart.some((p) => p.id === post.id)
                            ?
                (
                    <button onClick={removeFromCart}>
                        Remove Item
                    </button>
                )
                            :
                (
                    <button onClick={addToCart}>
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
    )
}

export default Product