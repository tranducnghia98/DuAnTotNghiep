import Header from "~/layouts/components/Header";
import classNames from "classnames/bind";
import styles from './HeaderOnly.module.scss'
import Footer from "../components/Footer/Footer";

const cx = classNames.bind(styles)

function HeaderOnly({children}) {
    return ( 
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    {children}
                </div>
              
            </div>
           
            {/* <Footer></Footer> */}
        </div>
     );
}

export default HeaderOnly;