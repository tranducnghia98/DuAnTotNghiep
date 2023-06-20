import classNames from "classnames/bind";
import { Link, useParams } from "react-router-dom";
import styles from './Store.module.scss'
import { useEffect, useState } from "react";
import axiosClient from "~/scrips/healper/axiosClient";
import StoreItem from "./StoreItem";

const cx = classNames.bind(styles)


function ListStore() {
  const { cusUsername } = useParams();
  console.log(cusUsername)

  const [store, setStore] = useState([])


  //tìm kiếm store theo username
  useEffect(() => {
    axiosClient.get(`http://localhost:8080/store/findByCustomer/${cusUsername}`)
      .then((response) => {
        const data = response;
        setStore(data);
        console.log(data);
      })
      .catch(() => {
        console.log('không tìm thấy user')
      });
  }, []);


  return (
    <div className={cx('container')}>
      {store.map((store, index) => {
        return (
          <StoreItem key={index}
            storeId={store.storeId}
            storeName={store.storeName}
            address={store.address}
            image={store.image}
            phone={store.phone}
            cartStore={store.cartStore}
          />
        );

      })}


    </div>
  );
}

export default ListStore;