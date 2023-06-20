import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import Image from "~/Component/Images";
import images from "~/assets/images";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Tippy, { tippy } from "@tippyjs/react";
import { useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";
import Button from "~/Component/Button";

const cx = classNames.bind(styles);

function ProductItem({
  edit,
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
        {/* <div>

                    <Image className={cx('image')} src={images.image2}></Image>
                </div> */}
        <Link to={`/singleVehicle/${vehicleId}`} >
          <Image className={cx("image")} src={image?(image):(images.image2)}></Image>
        </Link>
        <div className={cx("card-body")}>
          <h4 className={cx("vehicleName")}>{vehicleName}</h4>
          <div>
            <h4 className={cx("price")}>
              {" "}
              <span>Price: </span> {renByDay} <span>$</span>
            </h4>
            <h4 className={cx("price")}>
              {" "}
              <span>Start: </span> {renByDay} <span>$</span>
            </h4>
          </div>
          {edit?(<Button small primary>Edit</Button>):null}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
