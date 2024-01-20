import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";


export const BasketContext=createContext()


const BasketProvider = ({children}) => {
    const [basket, setBasket] = useLocalStorage("basket")
   
    function addBasket(product) {
        const existBasket=basket.findIndex(x=>x._id===product._id)
        if (existBasket===-1) {
            setBasket([...basket,{...product,count:1}])
            return
        }
        basket[existBasket].count++
    }
    function deleteBasket(product) {
        const deletedBasket=basket.filter(x=>x._id!==product._id)
        setBasket(deletedBasket)
    }
    function increaseBasket(product) {
        const existBasket=basket.findIndex(x=>x._id===product._id)
        if (existBasket===1) {
           basket[existBasket].count++
           setBasket([...basket])
        }
    }
    function decreaseBasket(product) {
        const existBasket=basket.findIndex(x=>x._id===product._id)
        if (existBasket===1) {
           basket[existBasket].count--
           setBasket([...basket])
        }
        if (basket[existBasket]===0) {
            deleteBasket(product)
        }
    }
    function totalPrice() {
        return basket.reduce((acc,item)=>acc+item.price * item.count,0)
    }
     const data={
        basket, setBasket,increaseBasket,decreaseBasket,deleteBasket,addBasket
    }
  return (
    <BasketContext.Provider value={data}>
        {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider