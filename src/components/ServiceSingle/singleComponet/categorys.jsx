import { useState } from "react";
import cimg1 from "../../../images/service-single/img-2.jpg";
import cimg2 from "../../../images/service-single/img-3.jpg";
import cimg3 from "../../../images/service-single/img-4.jpg";
import cimg4 from "../../../images/service-single/img-5.jpg";
import cimg5 from "../../../images/service-single/img-6.jpg";
import cimg6 from "../../../images/service-single/img-7.jpg";
import cimg7 from "../../../images/service-single/img-9.jpg";
import cimg8 from "../../../images/service-single/img-8.jpg";

const Categorys = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const Ctegory = [
    {
      Id: "1",
      dse1:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamc ex ea commodo consequat. Duis aute irure dolor in repreh esse cillum dolore eu fugiat nulla pariatur.",
      dse2:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris aliquip ex ea commodo consequat.",
      dse3:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
      dse4:
        "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.",
      dImg1: cimg1,
      dImg2: cimg2,
    },
    {
      Id: "2",
      dse1:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamc ex ea commodo consequat.",
      dse2:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris aliquip ex ea commodo consequat.",
      dse3:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
      dse4:
        "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.",
      dImg1: cimg3,
      dImg2: cimg4,
    },
    {
      Id: "3",
      dse1:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamc ex ea commodo consequat.",
      dse2:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris aliquip ex ea commodo consequat.",
      dse3:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
      dse4:
        "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.",
      dImg1: cimg5,
      dImg2: cimg6,
    },
    {
      Id: "4",
      dse1:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamc ex ea commodo consequat.",
      dse2:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris aliquip ex ea commodo consequat.",
      dse3:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
      dse4:
        "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.",
      dImg1: cimg7,
      dImg2: cimg8,
    },
  ];

  return (
    <div className="tab-area">
      {/* ===== BOOTSTRAP TAB NAV ===== */}
      <div className="tablinks">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "1" ? "active" : ""}`}
              onClick={() => toggle("1")}
              type="button"
            >
              Breakfast
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "2" ? "active" : ""}`}
              onClick={() => toggle("2")}
              type="button"
            >
              Airport Taxi
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "3" ? "active" : ""}`}
              onClick={() => toggle("3")}
              type="button"
            >
              Game Room
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "4" ? "active" : ""}`}
              onClick={() => toggle("4")}
              type="button"
            >
              Spa salon
            </button>
          </li>
        </ul>
      </div>

      {/* ===== BOOTSTRAP TAB CONTENT ===== */}
      <div className="tab-content">
        {Ctegory.map((ctgry, ctg) => (
          <div
            key={ctg}
            className={`tab-pane fade ${
              activeTab === ctgry.Id ? "show active" : ""
            }`}
          >
            <p>{ctgry.dse1}</p>
            <p>{ctgry.dse2}</p>
            <div className="img-area">
              <img src={ctgry.dImg1} alt="" />
              <img src={ctgry.dImg2} alt="" />
            </div>
            <p>{ctgry.dse3}</p>
            <p>{ctgry.dse4}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorys;
