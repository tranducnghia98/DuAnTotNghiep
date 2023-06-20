
import images from '~/assets/images';
// import '../../../node_modules/bootstrap/dist/js/bootstrap'

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ListProduct from './ListProduct';
import Carousel from './Carousel/Carousel';
import Footer from '~/layouts/components/Footer/Footer';


const cx = classNames.bind(styles)




function Home() {
    return (

        <div className={cx('wrapper')}>
            <Carousel></Carousel>
            <div className={cx('container')}>
                <div className={cx('title-1')}>
                    <span>Top vehicle Hiring</span> <span className={cx('top')}>Top</span>
                </div>
 
            </div>
            <ListProduct></ListProduct>

        </div >



    );
}

export default Home;