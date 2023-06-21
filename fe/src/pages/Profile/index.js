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
import VehicleItem from "./Vehicle/VehicleItem";

const cx = classNames.bind(styles)

function Profile() {
  const [customer, setCustomer] = useState({})
  const [store, setStore] = useState({})
  const [hireVehicles, setHireVehicles] = useState([])
  const [vehicles, setVehicles] = useState([])

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
        console.log('không tìm thấy store')
      });
  }, []);

  //Tìm kiếm các lượt thuê xe theo username
  useEffect(() => {
    axiosClient.get(`http://localhost:8080/hireVehicle/findHireByCusUsername/${username}`)
      .then((response) => {
        const data = response;
        setHireVehicles(data);
        console.log(data);
      })
      .catch(() => {
        console.log('không tìm thấy hireVehicle')
      });
  }, [username]);

  //Tìm kiếm các xe đã thuê theo username
  useEffect(() => {
    axiosClient.get(`http://localhost:8080/vehicle/findVehicleByCustomerWasHire/${username}`)
      .then((response) => {
        const data = response;
        setVehicles(data);
        console.log(data);
      })
      .catch(() => {
        console.log('không tìm thấy Vehicle')
      });
  }, [username]);



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
                  <h4 className={cx('title')}>Giới thiệu</h4>
                  <div className={cx('box-wrapper-item')}>
                    <FontAwesomeIcon className={cx('box-wrapper-icon')} icon={faUsers}></FontAwesomeIcon>
                    <span className={cx('title-about')}>khách hàng tiềm năng của <span className={cx('trademark')}>Mikaa</span></span>
                  </div>
                </div>
                <div className={cx('box-wrapper')}>
                  <h4 className={cx('title')}>Thông tin</h4>
                  <div className={cx('box-wrapper-item')}>
                    <span className={cx('title-item')}>Tên đăng nhập: </span>
                    <span className={cx('title-about')}>{customer.cusUsername}</span>
                  </div>
                  <div className={cx('box-wrapper-item')}>
                    <span className={cx('title-item')}>Họ tên: </span>
                    <span className={cx('title-about')}>{customer.fullname}</span>
                  </div>
                  <div className={cx('box-wrapper-item')}>
                    <span className={cx('title-item')}>Email: </span>
                    <span className={cx('title-about')}>{customer.email}</span>
                  </div>
                  <div className={cx('box-wrapper-item')}>
                    <span className={cx('title-item')}>Số điện thoại: </span>
                    <span className={cx('title-about')}>{customer.phone}</span>
                  </div>
                  <div className={cx('box-wrapper-item')}>
                    <span className={cx('title-item')}>Địa chỉ: </span>
                    <span className={cx('title-about')}>{customer.address}</span>
                  </div>
                  <div className={cx('box-wrapper-item')}>
                    <span className={cx('title-item')}>Ví: </span>
                    <span className={cx('title-about')}>{customer.cart}</span>
                  </div>
                  <div className={cx('box-wrapper-item')}>
                    <Button primary small>Chỉnh sửa</Button>
                    <Button primary small>Đổi mật khẩu</Button>
                    {store.length===0 ?(<Button to={`/changeToStore/${customer.cusUsername}`} primary small>chuyển đổi cửa hàng</Button>)
                    :(<Button to={`/store/${customer.cusUsername}`} primary small>Cửa hàng của bạn</Button>)}

                    {/* {store.length === 0 ?
                      (<Link to={`/changeToStore/${customer.cusUsername}`} >
                        <Button primary small>chuyển đổi thành tài khoản doanh nghiệp</Button>

                      </Link>
                      ) : (<Link to={`/store/${customer.cusUsername}`} >
                        <Button primary small >cửa hàng của bạn</Button>
                      </Link>)} */}

                  </div>
                </div>
                <div className={cx('box-wrapper')}>
                  <h4 className={cx('title')}>Hoạt động gần đây</h4>
                  <div className={cx('box-wrapper-item')}>
                    {hireVehicles.map((hire, index) => {
                      return (
                        <Link className={cx('hire-item-link')}>
                          <h4 className={cx('title-about')}>Bạn Đã thuê xe vào {hire.hireDate} </h4>
                        </Link>

                      )
                    })}
                  </div>
                </div>
              </div>
            </section>
            <section className={cx('body-col-2')}>
              <div className={cx('box-wrapper')}>
                <h4 className={cx('title')}>Các sản phẩm bạn đã trải nghiệm</h4>
                <div className={cx('hireVehicle-history')}>
                  {vehicles.map((vehicle, index) => {
                    return (
                      <VehicleItem value={vehicle}></VehicleItem>
                    )
                  })}
                </div>
              </div>
            </section>
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