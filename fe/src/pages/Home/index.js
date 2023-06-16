
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

        <div>
            <Carousel></Carousel>
            <div className={cx('container')}>
                <div className={cx('title-1')}>
                    <h1>Top vehicle Hiring</h1>
                </div>
                {/* <div className={cx('btn-1')}>
                <button className={cx('filter')}>Filter</button>
                <button className={cx('add')} >Add New</button>

            </div> */}

            </div>
            <ListProduct></ListProduct>
          
        </div>



    );
}

export default Home;