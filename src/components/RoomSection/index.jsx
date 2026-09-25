import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

import rm1 from "../../images/room/img-1.jpg";
import rm2 from "../../images/room/img-2.jpg";
import rm3 from "../../images/room/img-3.jpg";
import rm4 from "../../images/room/img-9.jpg";
import rm5 from "../../images/room/img-10.jpg";
import rm6 from "../../images/room/img-11.jpg";

const RoomSection = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const Room = [
    {
      RoomImg: rm1,
      RoomHeading: "Lake view Room",
      RoomCount: "Twin Room",
      Des:
        "If you are going to use a passage Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      Price: "$142",
      Link: "/room-single",
    },
    {
      RoomImg: rm2,
      RoomHeading: "Queen Room Balcony",
      RoomCount: "Twin Room",
      Des:
        "If you are going to use a passage Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      Price: "$142",
      Link: "/room-single",
    },
    {
      RoomImg: rm3,
      RoomHeading: "Apartment",
      RoomCount: "Twin Room",
      Des:
        "If you are going to use a passage Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      Price: "$142",
      Link: "/room-single",
    },
  ];

  const Room2 = [
    {
      RoomImg: rm4,
      RoomHeading: "Lake view Room",
      RoomCount: "Twin Room",
      Des:
        "If you are going to use a passage Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      Price: "$142",
      Link: "/room-single",
    },
    {
      RoomImg: rm5,
      RoomHeading: "Queen Room Balcony",
      RoomCount: "Twin Room",
      Des:
        "If you are going to use a passage Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      Price: "$142",
      Link: "/room-single",
    },
    {
      RoomImg: rm6,
      RoomHeading: "Apartment",
      RoomCount: "Twin Room",
      Des:
        "If you are going to use a passage Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      Price: "$142",
      Link: "/room-single",
    },
  ];

  return (
    <section className={`Room-area section-padding ${props.rClass || ""}`}>
      <div className="Room-section">
        <div className="container">
          <div className="col-12">
            <div className="wpo-section-title">
              <span>Our Rooms</span>
              <h2>Discover Our Rooms</h2>
            </div>
          </div>

          <div className="row">
            <div className="col col-xs-12 sortable-gallery">
              {/* ===== BOOTSTRAP NAV TABS ===== */}
              <div className="gallery-filters">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === "1" ? "active" : ""}`}
                      onClick={() => toggle("1")}
                      type="button"
                    >
                      Classic
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === "2" ? "active" : ""}`}
                      onClick={() => toggle("2")}
                      type="button"
                    >
                      Budget
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === "3" ? "active" : ""}`}
                      onClick={() => toggle("3")}
                      type="button"
                    >
                      Luxury
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === "4" ? "active" : ""}`}
                      onClick={() => toggle("4")}
                      type="button"
                    >
                      Double
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === "5" ? "active" : ""}`}
                      onClick={() => toggle("5")}
                      type="button"
                    >
                      Single
                    </button>
                  </li>
                </ul>
              </div>

              {/* ===== BOOTSTRAP TAB CONTENT ===== */}
              <div className="gallery-container tab-content">
                <div
                  className={`tab-pane fade ${
                    activeTab === "1" ? "show active" : ""
                  }`}
                >
                  {Room.map((room, rm) => (
                    <div className="grid" key={rm}>
                      <div className="room-item">
                        <img
                          src={room.RoomImg}
                          alt=""
                          className="img img-responsive"
                        />
                        <div className="room-text-show">
                          <h2>{room.RoomHeading}</h2>
                        </div>
                        <div className="room-text-hide">
                          <h2>{room.RoomHeading}</h2>
                          <span>{room.RoomCount}</span>
                          <p>{room.Des}</p>
                          <small>
                            From: <span>{room.Price}</span> / Night
                          </small>
                          <Link className="theme-btn-s2" to={room.Link}>
                            Check Availability
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className={`tab-pane fade ${
                    activeTab === "2" ? "show active" : ""
                  }`}
                >
                  {Room2.map((room, rm) => (
                    <div className="grid" key={rm}>
                      <div className="room-item">
                        <img
                          src={room.RoomImg}
                          alt=""
                          className="img img-responsive"
                        />
                        <div className="room-text-show">
                          <h2>{room.RoomHeading}</h2>
                        </div>
                        <div className="room-text-hide">
                          <h2>{room.RoomHeading}</h2>
                          <span>{room.RoomCount}</span>
                          <p>{room.Des}</p>
                          <small>
                            From: <span>{room.Price}</span> / Night
                          </small>
                          <Link className="theme-btn-s2" to={room.Link}>
                            Check Availability
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className={`tab-pane fade ${
                    activeTab === "3" ? "show active" : ""
                  }`}
                >
                  {Room.map((room, rm) => (
                    <div className="grid" key={rm}>
                      <div className="room-item">
                        <img
                          src={room.RoomImg}
                          alt=""
                          className="img img-responsive"
                        />
                        <div className="room-text-show">
                          <h2>{room.RoomHeading}</h2>
                        </div>
                        <div className="room-text-hide">
                          <h2>{room.RoomHeading}</h2>
                          <span>{room.RoomCount}</span>
                          <p>{room.Des}</p>
                          <small>
                            From: <span>{room.Price}</span> / Night
                          </small>
                          <Link className="theme-btn-s2" to={room.Link}>
                            Check Availability
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className={`tab-pane fade ${
                    activeTab === "4" ? "show active" : ""
                  }`}
                >
                  {Room2.map((room, rm) => (
                    <div className="grid" key={rm}>
                      <div className="room-item">
                        <img
                          src={room.RoomImg}
                          alt=""
                          className="img img-responsive"
                        />
                        <div className="room-text-show">
                          <h2>{room.RoomHeading}</h2>
                        </div>
                        <div className="room-text-hide">
                          <h2>{room.RoomHeading}</h2>
                          <span>{room.RoomCount}</span>
                          <p>{room.Des}</p>
                          <small>
                            From: <span>{room.Price}</span> / Night
                          </small>
                          <Link className="theme-btn-s2" to={room.Link}>
                            Check Availability
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className={`tab-pane fade ${
                    activeTab === "5" ? "show active" : ""
                  }`}
                >
                  {Room.map((room, rm) => (
                    <div className="grid" key={rm}>
                      <div className="room-item">
                        <img
                          src={room.RoomImg}
                          alt=""
                          className="img img-responsive"
                        />
                        <div className="room-text-show">
                          <h2>{room.RoomHeading}</h2>
                        </div>
                        <div className="room-text-hide">
                          <h2>{room.RoomHeading}</h2>
                          <span>{room.RoomCount}</span>
                          <p>{room.Des}</p>
                          <small>
                            From: <span>{room.Price}</span> / Night
                          </small>
                          <Link className="theme-btn-s2" to={room.Link}>
                            Check Availability
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* END TAB CONTENT */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomSection;
