import classNames from "classnames/bind";
import styles from './Profile.module.scss'
import { useState, useEffect } from 'react'
import axiosClient from "~/scrips/healper/axiosClient";
import Image from "~/Component/Images";
import images from "~/assets/images";
import Button from "~/Component/Button";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaTransgender, FaUser, FaUserTie } from 'react-icons/fa';
import { FaBeer } from 'react-icons/fa';

const cx = classNames.bind(styles)




function Profile() {
  const [customer, setCustomer] = useState({})
  const [store, setStore] = useState({})


  const username = 'testcus';
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
        {/* <Image className={cx("profile-img")} src={customer.image ? (customer.image) : (images.image1)}></Image> */}

        <div className={cx("profile-img")}>
          <Image  src={images.image1}></Image>

        </div>

        <hr className="divider" />
        <h2> <FaUser />Username : <span>{customer.cusUsername}</span></h2>
        <h2> <FaUserTie />  Fullname: <span>{customer.fullname}</span></h2>
        <h2><FaEnvelope /> Gmail: <span>{customer.email}</span></h2>
        <h2> <FaTransgender /> Gender:  <input type="radio" name="gender" value="male" checked={customer.gender === true} />Male
          <input type="radio" name="gender" value="female" defaultChecked={customer.gender === false} />Female
        </h2>
        <h2> <FaPhoneAlt /> Phone: <span>{customer.phone}</span></h2>

        <div className={cx('profile-action')}>
          {store.length === 0 ?
            (<Link to={`/changeToStore/${customer.cusUsername}`} >
              <Button primary >Convert to a business account</Button>

            </Link>
            ) : (<Link to={`/store/${customer.cusUsername}`} >
              <button className={cx('button-19')} role="button">GO TO SHOP</button>
            </Link>)}
        </div>
      </div>
    </div>
  )
}

export default Profile;