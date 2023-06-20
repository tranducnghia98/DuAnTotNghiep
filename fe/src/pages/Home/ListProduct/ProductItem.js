import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import Image from "~/Component/Images";
import images from "~/assets/images";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Tippy, { tippy } from "@tippyjs/react";
import { useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaUsers } from "react-icons/fa";

const cx = classNames.bind(styles);

function ProductItem({
  vehicleId,
  renByDay,
  vehicleName,
  image,
  statusHiring,
  description,
  store,
  brand,
}) {
  return (
    <div className={cx("container")}>
      <div className={cx("card")}>
        <div className={cx("card-hover")}>
          {/* <div>

                    <Image className={cx('image')} src={images.image2}></Image>
                </div> */}

          <Image className={cx("image")} src={images.image2}></Image>
          <Link to={`/singleVehicle/${vehicleId}`} >
            <div className={cx("overlay")}>
              <h2>Thuê xe</h2>
            </div> </Link>


          <div className={cx("card-body")}>

            <h4 className={cx("vehicleName")}>{vehicleName}  <span><FaUsers/></span> </h4>
                
            <div className={cx("detail-price")}>
              <h4 className={cx("price")}>
                <span>Price: </span> {renByDay} <span>$</span>
                
              </h4>
              <h4 className={cx("price")}>
                <span>Start:  <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> </span>  
              </h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductItem;
