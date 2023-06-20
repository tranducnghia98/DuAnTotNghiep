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
import { changeBackgroundimage } from "~/Component/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faUsers } from "@fortawesome/free-solid-svg-icons";

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
      <div className={cx('profile-header')}>
        <div className={cx("profile-banner")}>
          <div className={cx('profile-user')}>
            <div className={cx('profile-user-avatar')}>
              <div className={cx('avatar')}>
                <Image className={cx('avatar-img')} src={customer.image ? (customer.image) : (images.image2)} />
              </div>
            </div>
            <div className={cx('username')}>
              <span>{customer.fullname}</span>
            </div>
          </div>
          <div className={cx('btn-change-background')}>
            <FontAwesomeIcon fontSize={20} icon={faCamera} />
            Update cover photo
          </div>
        </div>
        <div className={cx('profile-container')}>
          <section className={cx('body-row')}>
            <section className={cx('body-col')}>
              <div className={cx('content-left')}>
              <div className={cx('box-wrapper')}>
                <h3 className={cx('title')}>Giới thiệu</h3>
                <div className={cx('box-wrapper-item')}>
                <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                <span className={cx('title-about')}>khách hàng tiềm năng của Mikaa</span>
              </div>
              </div>
              
              <div className={cx('')}>
                
              </div>
            </div>
            </section>
            <section className={cx('body-col')}></section>
          </section>
        </div>
      </div>
      {/* <Image className={cx("profile-img")} src={customer.image ? (customer.image) : (images.image1)}></Image> */}
      {/* 
        <div >
          <Image className={cx("profile-img")}  src={images.image1}></Image>

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
        </div> */}

    </div>
  )
}

export default Profile;