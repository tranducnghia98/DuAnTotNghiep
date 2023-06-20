import classNames from "classnames/bind";
import styles from './Profile.module.scss'
import { useState, useEffect } from 'react'
import axiosClient from "~/scrips/healper/axiosClient";
import Image from "~/Component/Images";
import images from "~/assets/images";
import Button from "~/Component/Button";
import { Link,useParams } from "react-router-dom";



const cx = classNames.bind(styles)




function Profile() {
  const [customer, setCustomer] = useState({})
  const [store, setStore] = useState({})


  const username = 'leminh';
  useEffect(() => {
    axiosClient.get(`http://localhost:8080/customers/findById/${username}`)
      .then((response) => {
        const data = response;
        setCustomer(data);
      })
      .catch(() => {
        console.log('không tìm thấy user')
      });
  }, []);

  //tìm kiếm store theo username
  useEffect(() => {
    axiosClient.get(`http://localhost:8080/store/findByCustomer/${username}`)
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
    <div className={cx('wrapper')}>
      <div className={cx('profile-content')}>
        <Image className={cx("profile-img")} src={customer.image ? (customer.image) : (images.image1)}></Image>
      </div>
      <h2>Username: <span>{customer.cusUsername}</span></h2>
      <h2>Fullname: <span>{customer.fullname}</span></h2>
      <h2>Email: <span>{customer.email}</span></h2>
      <h2>gender: </h2> <input type="radio" name="gender" value="male" checked={customer.gender===true}/>Male
      <input type="radio" name="gender" value="female" defaultChecked={customer.gender===false}/>Female
      <h2>Phone: <span>{customer.phone}</span></h2>

      <div className={cx('profile-action')}>
      {store.length === 0 ? 
      (<Link to={`/changeToStore/${customer.cusUsername}`} >
        <Button primary >Convert to a business account</Button>
          
        </Link>
        ):(<Link to={`/store/${customer.cusUsername}`} >
        <Button primary >Go to store</Button>
          
        </Link>)}
      </div>

    </div>
  )
}

export default Profile;