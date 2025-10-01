import React from 'react'
import { NavLink } from 'react-router-dom'

import { assets } from '../assets/assets'
import { useAppContext } from '../hooks/useAppContext'
import SearchIcon from './icons/SearchIcon'
import NavCartIcon from './icons/NavCartIcon'

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const { user, setUser, setShowUserLogin, navigate } = useAppContext();

    const logout = async () => {
        setUser(null);
        navigate('/');
    }

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <NavLink to='/' onClick={() => setOpen(false)}>
                <img src={assets.logo} alt="logo" className='hover:scale-110 transition-transform' />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink to='/' className="hover:text-primary-dull hover:scale-105 transition-transform">Home</NavLink>
                <NavLink to='/products' className="hover:text-primary-dull hover:scale-105 transition-transform">All Product</NavLink>
                <NavLink to='/' className="hover:text-primary-dull hover:scale-105 transition-transform">Contact</NavLink>

                <div className={`hidden lg:flex items-center text-sm gap-2 border px-3 rounded-full group border-gray-300 hover:border-primary-dull transition-colors focus-within:border-primary-dull focus-within:text-primary-dull`}>
                    <input
                        className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
                        type="text"
                        placeholder="Search products"
                    />
                    <SearchIcon className="w-4 h-4 transition-colors group-hover:text-primary-dull group-focus:text-primary-dull" />
                </div>

                <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
                    <NavCartIcon className="w-8 h-8 opacity-80 transition hover:text-primary-dull hover:scale-110" />
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">3</button>
                </div>

                {!user ? (<button onClick={() => setShowUserLogin(true)} className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull text-white rounded-full hover:scale-105 transition">
                    Login
                </button>)
                    :
                    (
                        <div className='relative group'>
                            <img src={assets.profile_icon} className='w-10' alt="profile" />
                            <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40'>
                                <li
                                    onClick={() => navigate("/my-orders")}
                                    className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>
                                    My Orders
                                </li>
                                <li
                                    onClick={logout}
                                    className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>
                                    Logout
                                </li>
                            </ul>
                        </div>
                    )
                }
            </div>

            <button onClick={() => setOpen(!open)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <img src={assets.menu_icon} alt="menu" className='' />
            </button>

            {/* Mobile Menu */}
            {open && (
                <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 z-30 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                    <NavLink to="/" onClick={() => setOpen(false)} className="hover:text-primary-dull hover:scale-110 transition-transform">Home</NavLink>
                    <NavLink to="/products" onClick={() => setOpen(false)} className="hover:text-primary-dull hover:scale-110 transition-transform">All Product</NavLink>
                    {user &&
                        <NavLink to="/products" onClick={() => setOpen(false)} className="hover:text-primary-dull hover:scale-110 transition-transform">My Orders</NavLink>
                    }
                    <NavLink to="/" onClick={() => setOpen(false)} className="hover:text-primary-dull hover:scale-110 transition-transform">Contact</NavLink>

                    {!user ? (
                        <button onClick={() => {
                            setOpen(false);
                            setShowUserLogin(true);
                        }} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull hover:scale-110 transition text-white rounded-full text-sm">
                            Login
                        </button>
                    ) : (
                        <button onClick={logout} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull hover:scale-110 transition text-white rounded-full text-sm">
                            Logout
                        </button>
                    )}
                </div>
            )}

        </nav>
    )
}

export default Navbar