import Flowers from "../models/instum.js";

export const getFlowers=async (req,res)=>{
    try {
        const products=await Flowers.find({})
        res.json(products)
    } catch (error) {
        res.status(500).json({message:error})
    }
}
// post 
export const createFlowers=async (req,res)=>{
    try {
        const product= Flowers({
            image:req.body.image,
            title: req.body.title, 
            price:req.body.price,
        })
        await product.save()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

// delete 
export const deleteFlowers=async (req,res)=>{
    try {
        const {id}=req.params
        const product=await Flowers.findByIdAndDelete(id)
        
        res.status(200).json("deleteed")
    } catch (error) {
        res.status(500).json({message:error})
    }
}
// getid 
export const getFlowersById=async (req,res)=>{
    try {
        const {id}=req.params
        const product=await Flowers.findById(id)
        res.json(product)
    } catch (error) {
        res.status(500).json({message:error})
    }
}