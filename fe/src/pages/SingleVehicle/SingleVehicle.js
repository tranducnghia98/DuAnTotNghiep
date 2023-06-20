import classNames from "classnames/bind"
import styles from './SingleVehicle.module.scss'
import { Link, useParams } from 'react-router-dom';

import { useState, useEffect } from "react";
import axiosClient from "~/scrips/healper/axiosClient";
import Image from "~/Component/Images";
import images from "~/assets/images";
import VehicleWithBrand from "./VehicleWithBrand/VehicleWithBrand";

const cx = classNames.bind(styles)

function SingleVehicle() {
    const { vehicleId } = useParams();

    const [products, setProducts] = useState({})
    const [searchParams, setSearchParams] = useState([])

    useEffect(() => {
        axiosClient.get(`http://localhost:8080/vehicle/getOne/${vehicleId}`)
            .then((response) => {
                const data = response;
                console.log("thue xe");
                setProducts(data);
            })
            .catch(() => {
                console.log("looi");

            });
    }, [searchParams]);


    console.log(vehicleId)
    return (

        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {/* {products.vehicleId}
                {products.vehicleName}
                {products.image}
                <Link to={`/hireVehicle/${products.vehicleId}`}>
                    <button>Thuê Xe</button>
                </Link> */}
                <div className={cx('card')}>

                    <nav>
                        <h1>Detail Vehicle</h1>

                    </nav>
                    <div className={cx('photo')}>
                        <Image src={images.image1}></Image>
                        {/* {products.image} */}
                        {/* <img src="https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg"> */}
                    </div>
                    <div className={cx('description')}>

                        <h2>Name: {products.vehicleName}</h2>

                        <h3>Price: {products.rentByDay}</h3>
                       
                        <p>Decripstion: {products.description}</p>
                        <Link to={`/hireVehicle/${products.vehicleId}`}>
                            <button>Thuê Xe</button>
                        </Link>

                        <button>Cancle</button>
                    </div>
                    
                </div>
            </div>
        </div >
    )
}

export default SingleVehicle;