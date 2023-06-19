import classNames from "classnames/bind";
import { Link, useParams } from "react-router-dom";
import styles from './Store.module.scss'
import { useEffect, useState } from "react";
import axiosClient from "~/scrips/healper/axiosClient";
import StoreItem from "./StoreItem";

const cx = classNames.bind(styles)


function Store() {
    const {cusUsername} = useParams();
    const [store,setStore] = useState([])


    useEffect(() => {
        axiosClient.get(`http://localhost:8080/store/findByCustomer/${cusUsername}`)
          .then((response) => {
            const data = response;
            setStore(data);
            console.log(data);
          })
          .catch(() => {
            console.log('error')
          });
      }, []);
    

    return ( 
        <div className={cx('wrapper')}>
            {store.map((store,index) => {
                return (
                    <StoreItem
                        key={index}
                        storeId ={store.storeId}
                        nameStore ={store.nameStore}
                        address ={store.address}
                        cartStore ={store.cartStore}
                        phone ={store.phone}

                    ></StoreItem>
                )
            })}
        </div>
     );
}

export default Store;