import classNames from "classnames/bind"
import styles from './Store.module.scss'

const cx = classNames.bind(styles)
function StoreItem({storeId, storeName,address,phone,cartStore}) {
    return ( 
        <div className={cx('storeItem-container')}>
            <h2>{storeId}</h2>
            <h2>{storeName}</h2>
            <h2>{address}</h2>
            <h2>{phone}</h2>
            <h2>{cartStore}</h2>
        </div>
     );
}

export default StoreItem;