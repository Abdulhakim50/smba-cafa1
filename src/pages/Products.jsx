 import React from 'react'
import ProductsNav from '../components/ProductsNav'
import ProductList from '../components/ProductList'
import { motion, useScroll } from "framer-motion";
 
 const Products = ({setLoggedIn}) => {
    const { scrollYProgress } = useScroll();
   return (
    <>
    <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
     <div>
        <ProductsNav setLoggedIn={setLoggedIn}/>
        <ProductList/>
     </div>
     </>
   )
 }
 
 export default Products