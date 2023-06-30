import classNames from "classnames/bind";
import styles from './ProductItem.module.scss'
import { Link } from "react-router-dom";
import Image from "../Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function ProductItem({vehicle}) {
    return ( 
        <Link to={`/singleVehicle/${vehicle.vehicleId}`} className={cx('vehicle-item')}>
            <div className={cx('item-box')}>
              {/* <Image src={vehicle.image?(vehicle.image):(images.bannerStore2)}></Image> */}
              <div className={cx('item-img')}>
                <div className={cx('fix-img')}>
                  <Image src={`../../../images/${vehicle.image}`} className={cx('img-cover')}></Image> 
                </div>
                <span className={cx('label-post')}>
                  <span className={cx('rent')}>Vừa cập nhật
                    <freeHire />
                  </span>
                </span>
              </div>
              <div className={cx('desc-car')}>
                <div className={cx('desc-tag')}>
                  <span className={cx('tag-item-tranmision')}>
                    Số tự động
                  </span>
                  <span className={cx('tag-item-delivery')}>
                    Giao xe tận nơi
                  </span>
                </div>
                <div className={cx('desc-name')}>
                  <p className={cx('desc-nameVehicle')}>{vehicle.vehicleName}</p>
                </div>
                <div className={cx('desc-info')}>
                  <div className={cx('start-number')}>
                    <FontAwesomeIcon className={cx('start-rating')} icon={faStar} />
                  </div>
                  <span className={cx('start-number')}>5</span>
                  <FontAwesomeIcon className={cx('svg-char')} icon={faChartSimple} />
                  <span className={cx('start-number')}>{vehicle.slThue} lượt thuê</span>
                </div>
                <div className={cx('line')}></div>
                <div className={cx('address-price')}>
                  <div className={cx('address')}>
                    <div className={cx('address-svg')}>
                      <FontAwesomeIcon className={cx('svg-location')} icon={faLocationDot} />

                    </div>
                    <p className={cx('address-inf')}>{vehicle.address}</p>
                  </div>
                  <div className={cx('price')}>
                    <span className={cx('price-inf')}>{vehicle.rentByDay}K</span>
                  </div>
                </div>

              </div>

            </div>
          </Link>
     );
}

export default ProductItem;