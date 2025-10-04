import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./context"
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";


export const AppContextProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURRENCY;

    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [isSeller, setIsSeller] = useState(false)
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [products, setProducts] = useState([])

    const [cartItems, setCartItems] = useState({})
    const [searchQuery, setSearchQuery] = useState({})

    // Fetch All Products
    const fetchProducts = async () => {
        setProducts(dummyProducts)
    }

    // Add Product to Cart
    const addToCart = (itemId) => {
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }

        setCartItems(cartData)
        toast.success("Added to Cart")
    }

    // Update Cart Item Quantity
    const updateCartItem = (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData)
        toast.success('Cart Updated')
    }

    // Remove Product From Cart
    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartItems)
        if (cartData[itemId]) {
            delete cartData[itemId]
        }
        setCartItems(cartData)
        toast.success('Removed from Cart')
    }

    // Get Cart Item Count
    const getCartCount = () => {
        let totalCount = 0;
        for (const key in cartItems) {
            totalCount += cartItems[key];
        }
        return totalCount;
    };

    // Get Cart Total Amount
    const getCartAmount = () => {
        let totalAmount = 0;
        for (const key in cartItems) {
            let itemInfo = products.find((product) => product._id === key);
            if (cartItems[key] > 0) {
                totalAmount += cartItems[key] * itemInfo.offerPrice;
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    };

    useEffect(() => {
        fetchProducts()
    }, [])

    const value = {
        navigate,
        user,
        setUser,
        isSeller,
        setIsSeller,
        showUserLogin,
        setShowUserLogin,
        products,
        currency,
        cartItems,
        addToCart,
        updateCartItem,
        removeFromCart,
        searchQuery,
        setSearchQuery,
        getCartCount,
        getCartAmount,
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}