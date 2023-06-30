import classNames from "classnames/bind";
import styles from './TopAddress.module.scss'
import { Link } from "react-router-dom";
import Image from "~/Component/Images";
import images from "~/assets/images";

const cx = classNames.bind(styles)
function TopAddress() {
    return (
        <div>
            <div className={cx('address-container')}>
                <h2 className={cx('address-container-title')}>Địa Điểm Nổi Bật</h2>
            </div>
            
            <div className={cx('address-container')}>
                <div className={cx('address-container-city')}>
                    <div className={cx('container-city-content')}>
                        {/* Hồ Chí Minh */}
                        <div className={cx('content-item-1')}>
                            <Link className={cx('item-1-Link')}>
                                <div className={cx('item-1-img')}>

                                    <Image className={cx('img-hcm')} src={images.HCM}></Image>
                                </div>
                                <p className={cx('HCM-title')}>Hồ Chí Minh
                                    <span className={cx('HCM-sl')}>150 xe</span></p>

                            </Link>
                        </div>
                         {/* Hồ Chí Minh */}
                         <div className={cx('content-item-1')}>
                            <Link className={cx('item-1-Link')}>
                                <div className={cx('item-1-img')}>

                                    <Image className={cx('img-hcm')} src={images.HaNoi}></Image>
                                </div>
                                <p className={cx('HCM-title')}>Hà Nội
                                    <span className={cx('HCM-sl')}>130 xe</span></p>

                            </Link>
                        </div>
                         {/* Hồ Chí Minh */}
                         <div className={cx('content-item-1')}>
                            <Link className={cx('item-1-Link')}>
                                <div className={cx('item-1-img')}>

                                    <Image className={cx('img-hcm')} src={images.DaNang}></Image>
                                </div>
                                <p className={cx('HCM-title')}>Đà Nẵng
                                    <span className={cx('HCM-sl')}>125 xe</span></p>

                            </Link>
                        </div>
                         {/* Hồ Chí Minh */}
                         <div className={cx('content-item-1')}>
                            <Link className={cx('item-1-Link')}>
                                <div className={cx('item-1-img')}>

                                    <Image className={cx('img-hcm')} src={images.NhaTrang}></Image>
                                </div>
                                <p className={cx('HCM-title')}>Nha Trang
                                    <span className={cx('HCM-sl')}>100 xe</span></p>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default TopAddress;