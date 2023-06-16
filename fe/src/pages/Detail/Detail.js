import classNames from "classnames/bind"
import styles from './SingleVehicle.module.scss'
import { Link, useParams } from 'react-router-dom';

import { useState, useEffect } from "react";
import axiosClient from "~/scrips/healper/axiosClient";


const cx = classNames.bind(styles)

function SingleVehicle() {
    const { vehicleId } = useParams();

    const [products,setProducts] = useState({})
    const [searchParams,setSearchParams] = useState([])

    useEffect(() => {
        axiosClient.get(`http://localhost:8080/vehicle/getOne/${vehicleId}`)
          .then((response) => {
            const data = response;
            setProducts(data);
          })
          .catch(() => {
            
          });
      }, [searchParams]);


    console.log(vehicleId)
    return (
        
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {products.vehicleId}
                {products.vehicleName}
                {products.image}
                <Link to={`/hireVehicle/${products.vehicleId}`}>
                    <button>Thuê Xe</button>
                </Link>
                
            </div>
        </div>
    )
}

export default SingleVehicle;