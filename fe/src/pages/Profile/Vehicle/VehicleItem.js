import classNames from "classnames/bind";
import styles from './VehicleItem.module.scss'
import { Link } from "react-router-dom";
import Image from "~/Component/Images";
import images from "~/assets/images";

const cx = classNames.bind(styles)
function VehicleItem({value}) {
    return ( 
        <div className={cx('vehicle-item')}>
            <Link className={cx('vehicle-thumb')}>
                <Image className ={cx('vehicle-img')} src={images.image3}></Image>
            </Link>
            <div className={cx('vehicle-info')}>
                <h3 className={cx('vehicle-name')}>{value.vehicleName}</h3>
                <h4 className={cx('vehicle-price')}>{value.rentByDay}đ/24h</h4>
                <p className={cx('vehicle-description')}>{value.description}</p>
            </div>
        </div>
     );
}

export default VehicleItem;