import classNames from "classnames/bind";
import { Link, useParams } from "react-router-dom";

import styles from './Store.module.scss'
import { useState, useEffect } from "react";
import axiosClient from "~/scrips/healper/axiosClient";
import ProductItem from "../Home/ListProduct/ProductItem";
import Button from "~/Component/Button";

const cx = classNames.bind(styles)
function ManagerStore() {



    const { storeId } = useParams();
    const [vehicles, setVehicles] = useState([])

    //tìm kiếm store theo username
    useEffect(() => {
        axiosClient.get(`http://localhost:8080/vehicle/findByStore/${storeId}`)
            .then((response) => {
                const data = response;
                setVehicles(data);
                console.log(data);
            })
            .catch(() => {
                console.log('error')
            });
    }, []);

    return (
        <div className={cx('Manager-store')}>
            <Button primary small to={`/addVehicle/${storeId}`}>Add new Vehicle</Button>
            <div className={cx('listProduct-store')}>
            {vehicles.map((vehicle, index) => {
                return (
                    
                    <ProductItem
                        key={index}
                        edit
                        vehicleId={vehicle.vehicleId}
                        renByDay = {vehicle.renByDay}
                        vehicleName = {vehicle.vehicleName}
                        image = {vehicle.image}
                        statusHiring = {vehicle.statusHiring}
                        description = {vehicle.description}
                        store = {vehicle.store}
                        brand = {vehicle.brand}
                    />
                   
                )
            })}
            </div>
        </div>
    );
}

export default ManagerStore;