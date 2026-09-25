import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/home",
    submenu: [
      { id: 11, title: "Home style 1", link: "/home" },
      { id: 12, title: "Home style 2", link: "/home2" },
      { id: 13, title: "Home style 3", link: "/home3" },
    ],
  },
  {
    id: 2,
    title: "Room",
    link: "/room",
    submenu: [
      { id: 21, title: "Room", link: "/room" },
      { id: 22, title: "Room Single", link: "/room-single" },
    ],
  },
  { id: 9, title: "Destination", link: "/destination" },
  {
    id: 7,
    title: "Pages",
    link: "/",
    submenu: [
      { id: 71, title: "About", link: "/about" },
      { id: 75, title: "FAQ", link: "/faq" },
      { id: 79, title: "Error 404", link: "/404" },
      { id: 87, title: "Shop Page", link: "/shop" },
      { id: 88, title: "Shop Single Page", link: "/shop-single" },
      { id: 80, title: "Login Page", link: "/login" },
      { id: 81, title: "Signup Page", link: "/signup" },
      { id: 82, title: "Forgot Password", link: "/forgot-password" },
    ],
  },
  {
    id: 3,
    title: "Service",
    link: "/service",
    submenu: [
      { id: 31, title: "Service", link: "/service" },
      { id: 32, title: "Service Single", link: "/service-single" },
    ],
  },
  {
    id: 5,
    title: "Blog",
    link: "/blog",
    submenu: [
      { id: 51, title: "Blog", link: "/blog" },
      { id: 52, title: "Blog Left sidebar", link: "/blog-left" },
      { id: 53, title: "Blog full width", link: "/blog-fullwidth" },
      { id: 54, title: "Blog single", link: "/blog-details" },
      { id: 55, title: "Blog single Left sidebar", link: "/blog-details-left" },
      { id: 56, title: "Blog single Fullwidth", link: "/blog-details-fullwidth" },
    ],
  },
  { id: 88, title: "Contact", link: "/contact" },
];

export default class MobileMenu extends Component {
  state = {
    isMenuShow: false,
    isOpen: 0,
  };

  menuHandler = () => {
    this.setState({ isMenuShow: !this.state.isMenuShow });
  };

  setIsOpen = (id) => () => {
    this.setState({ isOpen: id === this.state.isOpen ? 0 : id });
  };

  ClickHandler = () => {
    window.scrollTo(10, 0);
    this.setState({ isMenuShow: false });
  };

  render() {
    const { isMenuShow, isOpen } = this.state;

    return (
      <div>
        <div className={`mobileMenu ${isMenuShow ? "show" : ""}`}>
          <ul className="responsivemenu">
            {menus.map((item) => (
              <li key={item.id}>
                {item.submenu ? (
                  <>
                    <p
                      onClick={this.setIsOpen(item.id)}
                      className="d-flex justify-content-between align-items-center"
                      aria-expanded={item.id === isOpen}
                    >
                      {item.title}
                      <i className="fa fa-angle-right" />
                    </p>

                    {/* BOOTSTRAP COLLAPSE */}
                    <div
                      className={`collapse ${
                        item.id === isOpen ? "show" : ""
                      }`}
                    >
                      <ul>
                        {item.submenu.map((submenu) => (
                          <li key={submenu.id}>
                            <Link
                              onClick={this.ClickHandler}
                              to={submenu.link}
                            >
                              {submenu.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link onClick={this.ClickHandler} to={item.link}>
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="showmenu" onClick={this.menuHandler}>
          <i className="fa fa-bars" />
        </div>
      </div>
    );
  }
}
