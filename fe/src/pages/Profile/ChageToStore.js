import classNames from 'classnames/bind';
import styles from './Profile.module.scss'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useParams } from "react-router-dom";
import axiosClient from "~/scrips/healper/axiosClient";
import Button from '~/Component/Button';

const cx = classNames.bind(styles)
function ChangeToStore() {

  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [nameStore, setNameStore] = useState('')
  const [customer, setCustomer] = useState({})


  const { cusUsername } = useParams();

  //tìm kiếm customer bằng cusUsername
  useEffect(() => {
    axiosClient.get(`http://localhost:8080/customers/findById/${cusUsername}`)
      .then((response) => {
        const data = response;
        setCustomer(data);
      })
      .catch(() => {
        console.log('không tìm thấy user')
      });
  },[] );

   //lưu dữ liệu vào bảng thuê xe
   const submitChang = () => {
    const storeData = {
      nameStore: nameStore,
      address: address,
      cartStore:customer.cart,
      phone: phone,
      customer: customer
    }
    console.log(storeData)



    axiosClient.post(`http://localhost:8080/store/add`, storeData)
      .then((response) => {
        const data = response;
        console.log(data)
        alert('chuyển đổi thành công')
      })
      .catch((error) => {
        console.log('error')
        console.log(error)
      });
  }

  const handleChangeNameStore = (e) => {
    const searchValue = e.target.value;

    if(!searchValue.startsWith(' ')){
      setNameStore(searchValue)
    }
  }

  const handleChangeAddress = (e) => {
    const searchValue = e.target.value;

    if(!searchValue.startsWith(' ')){
      setAddress(searchValue)
    }
  }

  const handleChangePhone = (e) => {
    const searchValue = e.target.value;

    if(!searchValue.startsWith(' ')){
      setPhone(searchValue)
    }
  }


  return (
    <div classNames={cx('container-change')}>
        <div classNames={cx('mb-3')}>
          
          <input
              value={nameStore}
              type="text"
              placeholder="Name Store"
              spellCheck={false}
              onChange={handleChangeNameStore}
          />
        </div>
        <div classNames={cx('mb-3')}>
          
          <input
              value={address}
              type="text"
              placeholder="Address"
              spellCheck={false}
              onChange={handleChangeAddress}
          />
        </div>
        <div classNames={cx('mb-3')}>
          
          <input
              value={phone}
              type="text"
              placeholder="Phone"
              spellCheck={false}
              onChange={handleChangePhone}
          />
        </div>
        <div classNames={cx('mb-3')}>
          
          <input
              value={cusUsername}
              disabled
              type="text"
              spellCheck={false}
              onChange={handleChangeNameStore}
          />
        </div>
        <Button onClick={submitChang} primary small>Submit</Button>
    </div>
  );
}

export default ChangeToStore;