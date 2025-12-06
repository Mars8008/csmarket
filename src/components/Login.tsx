import { useState } from 'react';
import Link from 'next/link'; // If you're using Next.js

import { FaUser, FaHeart, FaShoppingBag } from 'react-icons/fa';

const Header = () => {
    const [openLoginPopup, setOpenLoginPopup] = useState(false);
    const [cartState, setCartState] = useState({
        cartArray: [] // Populate this with actual cart data
    });

    const handleLoginPopup = () => {
        setOpenLoginPopup(!openLoginPopup);
    };

    const openModalWishlist = () => {
        // Wishlist modal open logic
    };

    const openModalCart = () => {
        // Cart modal open logic
    };

    return (
        <div className="list-action flex items-center gap-4">
            <div className="user-icon flex items-center justify-center cursor-pointer">
                <FaUser size={24} color="black" onClick={handleLoginPopup} />
                <div
                    className={`login-popup absolute top-[74px] w-[320px] p-7 rounded-xl bg-white box-shadow-sm 
                        ${openLoginPopup ? 'open' : ''}`}
                >
                    <Link href="/login" className="button-main w-full text-center">Login</Link>
                    <div className="text-secondary text-center mt-3 pb-4">Don’t have an account?
                        <Link href="/register" className="text-black pl-1 hover:underline">Register</Link>
                    </div>
                    <Link href="/my-account" className="button-main bg-white text-black border border-black w-full text-center">Dashboard</Link>
                    <div className="bottom mt-4 pt-4 border-t border-line"></div>
                    <Link href="#!" className="body1 hover:underline">Support</Link>
                </div>
            </div>
            <div className="max-md:hidden wishlist-icon flex items-center cursor-pointer" onClick={openModalWishlist}>
                <FaHeart size={24} color="black" />
            </div>
            <div className="cart-icon flex items-center relative cursor-pointer" onClick={openModalCart}>
                <FaShoppingBag size={24} color="black" />
                <span className="quantity cart-quantity absolute -right-1.5 -top-1.5 text-xs text-white bg-black w-4 h-4 flex items-center justify-center rounded-full">
                    {cartState.cartArray.length}
                </span>
            </div>
        </div>
    );
};

export default Header;
