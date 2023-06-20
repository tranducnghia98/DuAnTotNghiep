import classNames from "classnames/bind"
import styles from './Store.module.scss'
import Image from "~/Component/Images";
import images from "~/assets/images";
import Button from "~/Component/Button";
import { Link, useParams } from "react-router-dom";

const cx = classNames.bind(styles)
function StoreItem({ storeId, storeName, image, address, phone, cartStore }) {
    return (
        <div className={cx('storeItem-container')}>
            <Image className={cx('image')} src={image ? (image) : (images.image3)}></Image>
            <h2>{storeName}</h2>
            <h2>{address}</h2>
            <h2>{phone}</h2>
            <h2>{cartStore}</h2>
            <Button primary to={`/managerStore/${storeId}`} >Manager Store</Button>
        </div>
    );
}

export default StoreItem;