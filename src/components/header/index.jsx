import Logo from '../../images/logo-2.png'
import {Link}  from 'react-router-dom'
import MobileMenu from '../MobileMenu'
import min1 from '../../images/shop/mini-cart/img-1.jpg'
import min2 from '../../images/shop/mini-cart/img-2.jpg'
import './style.css'

const Header = (props) => {
    const SubmitHandler = (e) =>{
        e.preventDefault()
     }

     const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(	
        <div className="middle-header">
            <div className={`header-style-3 ${props.hClass}`}>
                <div className="container-fluid">
                    <div className="header-content">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4">
                            <div className="logo">
                                <Link onClick={ClickHandler} to="/home" title=""><img src={Logo} alt=""/></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-8 d-lg-block d-none">
                            <nav>
                                <ul>
                                    <li><Link onClick={ClickHandler} className="active" to="/home" title="">Home +</Link>
                                        <ul>
                                            <li><Link onClick={ClickHandler} className="active" to="/home">Home style 1</Link></li>
                                            <li><Link onClick={ClickHandler} to="/home2">Home style 2</Link></li>
                                            <li><Link onClick={ClickHandler} to="/home3">Home style 3</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link onClick={ClickHandler} to="/room" title="">Room +</Link>
                                        <ul>
                                            <li><Link onClick={ClickHandler} to="/room" title="">Room</Link></li>
                                            <li><Link onClick={ClickHandler} to="/room-single" title="">Room Single</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link onClick={ClickHandler} to="/destination" title="">Destination</Link></li>
                                    <li><Link onClick={ClickHandler} to="/home" title="">Pages +</Link>
                                        <ul>
                                            <li><Link onClick={ClickHandler} to="/about" title="">About</Link></li>
                                            <li><Link onClick={ClickHandler} to="/faq" title="">Faq</Link></li>
                                            <li><Link onClick={ClickHandler} to="/404" title="">Error 404</Link></li>
                                            <li><i className="fa fa-angle-right"></i><Link onClick={ClickHandler} to="/" title="">Shop</Link>
                                                <ul>
                                                    <li><Link onClick={ClickHandler} to="/shop" title="">Shop</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/shop-single" title="">Shop Single</Link></li>
                                                </ul>
                                            </li>
                                            <li><i className="fa fa-angle-right"></i><Link onClick={ClickHandler} to="/" title="">Auth Page</Link>
                                                <ul>
                                                    <li><Link onClick={ClickHandler} to="/login" title="">Login Page</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/signup" title="">Signup Page</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/forgot-password" title="">Forgot Password</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link onClick={ClickHandler} to="/service" title="">Service +</Link>
                                        <ul>
                                            <li><Link onClick={ClickHandler} to="/service" title="">Service</Link></li>
                                            <li><Link onClick={ClickHandler} to="/service-single" title="">Service Single</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link onClick={ClickHandler} to="/blog">Blog +</Link>
                                        <ul>
                                            <li><Link onClick={ClickHandler} to="/blog">Blog</Link></li>
                                            <li><Link onClick={ClickHandler} to="/blog-left">Blog Left sidebar</Link></li>
                                            <li><Link onClick={ClickHandler} to="/blog-fullwidth">Blog full width</Link></li>
                                            <li><i className="fa fa-angle-right"></i><Link onClick={ClickHandler} to="/blog-details" title="">Blog Details</Link>
                                                <ul>
                                                    <li><Link onClick={ClickHandler} to="/blog-details" title="">Blog single</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/blog-details-left" title="">Blog single Left sidebar</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/blog-details-fullwidth" title="">Blog single full width</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link onClick={ClickHandler} to="/contact" title="">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-xl-3 get-q">
                            <div className="get-quote">
                                <Link to="/contact"><i className="fi flaticon-support-1"></i>Call : +0123-456-789</Link>
                            </div>
                        </div>
                        <div className="col-xl-1 col-lg-1 col-md-6 col-sm-6 col-6">
                            <div className="contact">
                                <div className="cart-search-contact">
                                    <div className="header-search-form-wrapper">
                                        <button className="search-toggle-btn"><i className="fi flaticon-search"></i></button>
                                        <div className="header-search-form">
                                            <form onSubmit={SubmitHandler}>
                                                <div>
                                                    <input type="text" className="form-control" placeholder="Search here..."/>
                                                    <button type="submit"><i className="ti-search"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="mini-cart">
                                        <button className="cart-toggle-btn"> <i className="fi flaticon-shopping-cart"></i> <span className="cart-count">02</span></button>
                                        <div className="mini-cart-content">
                                            <div className="mini-cart-items">
                                                <div className="mini-cart-item clearfix">
                                                    <div className="mini-cart-item-image">
                                                        <Link onClick={ClickHandler} to="/shop"><img src={min1} alt=""/></Link>
                                                    </div>
                                                    <div className="mini-cart-item-des">
                                                        <Link onClick={ClickHandler} to="/shop">Hoodi with zipper</Link>
                                                        <span className="mini-cart-item-price">$20.15</span>
                                                        <span className="mini-cart-item-quantity">x 1</span>
                                                    </div>
                                                </div>
                                                <div className="mini-cart-item clearfix">
                                                    <div className="mini-cart-item-image">
                                                        <Link onClick={ClickHandler} to="/shop"><img src={min2} alt=""/></Link>
                                                    </div>
                                                    <div className="mini-cart-item-des">
                                                        <Link onClick={ClickHandler} to="/shop">Ninja T-shirt</Link>
                                                        <span className="mini-cart-item-price">$13.25</span>
                                                        <span className="mini-cart-item-quantity">x 2</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mini-cart-action clearfix">
                                                <span className="mini-checkout-price">$215.14</span>
                                                <Link onClick={ClickHandler} to="/shop" className="view-cart-btn theme-btn">View Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 col-2">
                            <MobileMenu/>
                        </div>
                    </div>
                    
                        <div className="clearfix"></div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Header;