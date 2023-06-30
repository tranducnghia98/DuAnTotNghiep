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
    const [address, setAddress] = useState(null);

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
        // if (event.target.files && event.target.files[0]) {
        //     setImage(URL.createObjectURL(event.target.files[0]));
        // }

        const file = event.target.files[0];
        const imageName = file.name;

        
            setImage(imageName)
        console.log(image)
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

    const handleAddress = (e) => {
        const inputValue = e.target.value;
        if (!inputValue.startsWith(' ')) {
            setAddress(inputValue)
        }
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
            brand: brand,
            address: address
        }

        console.log(vehicle)



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
            <div className={cx("module-register")}>
                <div className={cx("m-container")}>
                    <div className={cx("main-title")}>
                        <h4 className={cx("main-title-inf")}>Đăng Ký Xe</h4>
                    </div>
                </div>
                <div className={cx("register-container")}>
                    <div className={cx("content-register")}>

                        <div className={cx("group-form-detail")}>
                            <h6 className={cx("license")}>Biển số xe</h6>
                            <p className={cx("pl")}>
                                <span className={cx("note")}>Lưu ý: Biển số sẽ không thể thay đổi sau khi đăng kí.</span>
                            </p>
                            <div className={cx("col-left")}>
                                <div className={cx("line-form")}>
                                    <div className={cx("wrap-input")}>
                                        <input type="text" className={cx("input")}></input>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx("group-form-detail")}>
                            <h6 className={cx("license")}>Mô tả</h6>
                            <textarea className={cx('description')} value={description} onChange={handleDescription}></textarea>
                        </div>

                        <div className={cx("group-form-detail")}>
                            <h6 className={cx("license")}>Tên xe</h6>
                            <div className={cx("wrap-input")}>
                                <input type="text" className={cx("input")} value={vehicleName} onChange={handleVehicleName}></input>
                            </div>
                        </div>

                        <div className={cx("group-form-detail")}>
                            <h6 className={cx("license")}>Giá thuê theo ngày</h6>
                            <div className={cx("wrap-input")}>
                                <input type="text" className={cx("input")} value={rentByDay} onChange={handleRenByDay}></input>
                            </div>
                        </div>

                        <div className={cx("group-form-detail")}>
                            <h6 className={cx("license")}>Địa chỉ</h6>
                            <div className={cx("wrap-input")}>
                                <input type="text" className={cx("input")} value={address} onChange={handleAddress}></input>
                            </div>
                        </div>

                        <div className={cx("group-form-detail")}>
                            <h6 className={cx("license")}>Hãng xe</h6>
                            <div className={cx("wrap-input")}>
                                <select className={cx("input")} onChange={handleBrand}>
                                    {brands.map((br, index) => {
                                        return (
                                            <option key={index} value={br.brandId}>{br.nameBrand}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>

                        <div className={cx("group-form-detail")}>
                            <h6 className={cx("license")}>Hình ảnh</h6>
                            <div className={cx("wrap-input")}>
                                <input type="file" className={cx("input")} onChange={onImageChange}></input>
                            </div>
                            <div className={cx("wrap-input")}>
                                <input type="file" className={cx("input")}></input>
                            </div>
                            <div className={cx("wrap-input")}>
                                <input type="file" className={cx("input")}></input>
                            </div>
                        </div >


                    </div>
                    <div className={cx("btn-register-group")}>
                        <Button onClick={submitAddVehicle} className={cx("btn-register")} primary green large>Đăng Kí</Button>
                    </div>
                </div>

            </div>
            {/* <div classNames={cx("mb-3")}>
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
            </Button> */}
        </div>
    );
}

export default AddVehicle;
