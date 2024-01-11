import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const WishlistContext=createContext()

export const WishlistProvider=({children})=>{
const [wishlist, setWishlist] = useLocalStorage("wishlist")

function addWish(product){
    const existWish=wishlist.findIndex(x=>x._id===product._id)
    if(existWish===-1){
setWishlist([...wishlist,{...product}])
    }
}

function deleteWish(product){
    const deletedWish=wishlist.filter(x=>x._id!==product._id)
   setWishlist(deletedWish)
}
const data={
    wishlist,
    setWishlist,
    addWish,
    deleteWish
}
return(
     <WishlistContext.Provider value={data}>
        {children}
    </WishlistContext.Provider>
)
   
}