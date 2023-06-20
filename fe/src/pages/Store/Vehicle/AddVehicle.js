import classNames from "classnames/bind";
import styles from "./AddVehicle.module.scss";
import { useState } from "react";
import Button from "~/Component/Button";
import images from "~/assets/images";
import { useEffect } from "react";
import axiosClient from "~/scrips/healper/axiosClient";
import { Link, useParams } from "react-router-dom";
import { set } from "react-hook-form";

const cx = classNames.bind(styles);

function AddVehicle() {

    const { storeId } = useParams();
    console.log(storeId);

    const [vehicleName, setVehicleName] = useState("");
    const [rentByDay, setRentByDay] = useState("");
    const [description, setDescription] = useState("");
    const [store, setStore] = useState({});
    const [brand, setBrand] = useState({});
    const [image, setImage] = useState(null);

    const [brands, setBrands] = useState([]);
    const [brandId, setBrandId] = useState("");


    //tìm kiếm all Brand
    useEffect(() => {
        axiosClient.get(`http://localhost:8080/brands/getAll`)
            .then((response) => {
                const data = response;
                setBrands(data);
            })
            .catch(() => {
                console.log('error')
            });
    }, []);



    //tìm kiếm store
    useEffect(() => {
        axiosClient.get(`http://localhost:8080/store/getById/${storeId}`)
            .then((response) => {
                const data = response;
                setStore(data);
            })
            .catch(() => {
                console.log('error')
            });
    }, []);

    //Tìm kiếm brand theo brandId
    useEffect(() => {
        axiosClient.get(`http://localhost:8080/brands/findById/${brandId}`)
            .then((response) => {
                const data = response;
                setBrand(data);
                console.log(data);
            })
            .catch(() => {
                console.log('error')
            });
    }, [brandId]);


    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    const handleVehicleName = (e) => {
        const inputValue = e.target.value;
        if (!inputValue.startsWith(' ')) {
            setVehicleName(inputValue)
        }
    }

    const handleRenByDay = (e) => {
        const inputValue = e.target.value;
        if (!inputValue.startsWith(' ')) {
            setRentByDay(inputValue)
        }
    }

    const handleDescription = (e) => {
        const inputValue = e.target.value;
        if (!inputValue.startsWith(' ')) {
            setDescription(inputValue)
        }
    }

    const handleBrand = (e) => {
        const inputValue = e.target.value;
        if (!inputValue.startsWith(' ')) {
            setBrandId(inputValue)

        }
        console.log(brandId)

    }

    //Thực hiện thêm xe vào bảng xe
    const submitAddVehicle = () => {

        const vehicle = {
            vehicleName: vehicleName,
            rentByDay: rentByDay,
            image: image,
            statusHiring: false,
            description: description,
            store: store,
            brand: brand
        }



        axiosClient.post(`http://localhost:8080/vehicle/add`, vehicle)
            .then((response) => {
                const data = response;
                console.log(data)
                alert('Thêm sản phẩm thành công')
            })
            .catch(() => {
                console.log('error')
            });


    }

    return (
        <div className={cx("wrapper")}>
            <div classNames={cx("mb-3")}>
                <input
                    value={vehicleName}
                    type="text"
                    placeholder="Vehicle Name"
                    spellCheck={false}
                    onChange={handleVehicleName}
                />
            </div>
            <div classNames={cx("mb-3")}>
                <input
                    value={rentByDay}
                    type="number"
                    placeholder="Rent By Day"
                    spellCheck={false}
                    onChange={handleRenByDay}
                />
            </div>
            <div classNames={cx("mb-3")}>
                <input
                    value={description}
                    type="text"
                    placeholder="description"
                    spellCheck={false}
                    onChange={handleDescription}
                />
            </div>
            <div classNames={cx("mb-3")}>
                <input
                    value={store.storeId}
                    disabled
                    type="text"
                    spellCheck={false}
                />
            </div>
            <div>
                <input type="file" onChange={onImageChange} className="filetype" />
                <img alt="Vehicle Image" src={image ? (image) : (images.image1)} className={cx('image')} />
            </div>
            <div classNames={cx("mb-3")}>
                <select onChange={handleBrand}>
                    {brands.map((br, index) => {
                        return (
                            <option key={index} value={br.brandId}>{br.nameBrand}</option>
                        )
                    })}
                </select>
            </div>
            <Button primary small onClick={submitAddVehicle}>
                Submit
            </Button>
        </div>
    );
}

export default AddVehicle;
