import classNames from "classnames/bind";
import styles from './Product.module.scss'

import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";
import axiosClient from "~/scrips/healper/axiosClient";


const cx = classNames.bind(styles)
function ListProduct(keyApi) {

    const [products,setProducts] = useState([])
    const [searchParams,setSearchParams] = useState([])

    useEffect(() => {
        axiosClient.get(`http://localhost:8080/vehicle/all`)
          .then((response) => {
            const data = response;
            setProducts(data);
          })
          .catch(() => {
            
          });
      }, [searchParams]);
      console.log(products);


    return ( 
        <div className={cx('container')}>
            {products.map((product, index) => {
                   
                      return (
                        <ProductItem key={index}
                        vehicleId={product.vehicleId}
                        renByDay={product.rentByDay}
                        vehicleName={product.vehicleName}
                        image={product.image}
                        statusHiring={product.statusHiring}
                        description={product.description}
                        store={product.store}
                        brand={product.brand}
                        />
                      );
                      
                    })}
                   
                  
        </div>
     );
}

export default ListProduct;