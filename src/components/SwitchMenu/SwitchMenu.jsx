import "./SwitchMenu.scss";
import { BodyContext } from "../../../utils/BodyContext";
import { useContext, useEffect } from "react";

export default function SwitchMenu() {
  const typeBody = useContext(BodyContext);

  useEffect(() => {
    const body1 = document.querySelector(".for-body-1");
    const body2 = document.querySelector(".for-body-2");
    const body3 = document.querySelector(".for-body-3");
    if (typeBody.typeBody == "body1") {
      body1.classList.add("borderBottom");
      if (body2.classList.contains("borderBottom")) {
        body2.classList.remove("borderBottom");
      }
      if (body3.classList.contains("borderBottom")) {
        body3.classList.remove("borderBottom");
      }
    } else if (typeBody.typeBody == "body2") {
      body2.classList.add("borderBottom");
      if (body1.classList.contains("borderBottom")) {
        body1.classList.remove("borderBottom");
      }
      if (body3.classList.contains("borderBottom")) {
        body3.classList.remove("borderBottom");
      }
    } else if (typeBody.typeBody == "body3") {
      body3.classList.add("borderBottom");
      if (body1.classList.contains("borderBottom")) {
        body1.classList.remove("borderBottom");
      }
      if (body2.classList.contains("borderBottom")) {
        body2.classList.remove("borderBottom");
      }
    }
  }, [typeBody.typeBody]);
  return (
    <>
      <div
        className="row"
        style={{ position: "relative", borderTop: "1px solid #DEDEDE" }}
      >
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <ul className="switch-page-board">
            <li
              className="switch-page-option for-body-1"
              onClick={() => {
                typeBody.toggleBody("body1");
              }}
            >
              <span>THÔNG ĐIỆP NHÀ SÁNG LẬP</span>
            </li>
            <li
              className="switch-page-option for-body-2"
              onClick={() => {
                typeBody.toggleBody("body2");
              }}
            >
              <span>TẦM NHÌN - SỨ MỆNH - GIÁ TRỊ CỐT LÕI</span>
            </li>
            <li
              className="switch-page-option for-body-3"
              onClick={() => {
                typeBody.toggleBody("body3");
              }}
            >
              <span>LỊCH SỬ PHÁT TRIỂN</span>
            </li>
          </ul>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </>
  );
}
