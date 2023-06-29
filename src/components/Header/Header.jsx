
import logonew from "../../img/new-logo.jpg";
import "./Header.scss";
import { useEffect, useState } from "react";

function Header() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const option1 = document.querySelector(".dashboard-nav-dropdown1");
  const option2 = document.querySelector(".dashboard-nav-dropdown2");
  const option3 = document.querySelector(".dashboard-nav-dropdown3");
  const option4 = document.querySelector(".dashboard-nav-dropdown4");
  const option5 = document.querySelector(".dashboard-nav-dropdown5");
  const option6 = document.querySelector(".dashboard-nav");
  
  useEffect(() => {
    const scrollTrigger = 60;
    window.onscroll =function(){
      const header = document.querySelector(".header-img-logo");
      console.log(header)
      if(window.scrollY >= scrollTrigger)
      {
        header.classList.add("inverted")
      }else{
        header.classList.remove("inverted")
      }
    }
  })
  function inputShow() {
    setShow6(!show6);
    if (show6) {
      option6.classList.add("show");
      option6.classList.add("dropdown");
    } else {
      option6.classList.remove("show");
    }
  }

  function inputShow1() {
    setShow1(!show1);
    if (show1) {
      option1.classList.add("show");
      option1.classList.add("dropdown");
      option2.classList.remove("show");
      option3.classList.remove("show");
      option4.classList.remove("show");
      option5.classList.remove("show");
    } else {
      option1.classList.remove("show");
    }
  }
  function inputShow2() {
    setShow2(!show2);
    if (show2) {
    
      option2.classList.add("show");
      option2.classList.add("dropdown");
      option1.classList.remove("show");
      option3.classList.remove("show");
      option4.classList.remove("show");
      option5.classList.remove("show");
    } else {
      option2.classList.remove("show");
    }
  }
  function inputShow3() {
    setShow3(!show3);
    if (show3) {
 
      option3.classList.add("show");
      option3.classList.add("dropdown");
      option2.classList.remove("show");
      option1.classList.remove("show");
      option4.classList.remove("show");
      option5.classList.remove("show");
    } else {
      option3.classList.remove("show");
    }
  }
  function inputShow4() {
    setShow4(!show4);
    if (show4) {
   
      option4.classList.add("show");
      option4.classList.add("dropdown");
      option2.classList.remove("show");
      option3.classList.remove("show");
      option1.classList.remove("show");
      option5.classList.remove("show");
    } else {
      option4.classList.remove("show");
    }
  }
  function inputShow5() {
    setShow5(!show5);
    if (show5) {
      option5.classList.add("show");
      option5.classList.add("dropdown");
      option2.classList.remove("show");
      option3.classList.remove("show");
      option4.classList.remove("show");
      option1.classList.remove("show");
    } else {
      option5.classList.remove("show");
    }
  }

  return (
    <>
      <header className="header">
        <div className="header-menu">
          <i
            onClick={() => {
              inputShow();
            }}
            className="bi bi-list"
          ></i>
          <div className="dashboard">
            <div className="dashboard-nav">
              <i
                style={{
                  position: "absolute",
                  right: "4%",
                  color: "#fff",
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  marginTop: "10px",
                  marginRight: "10px",
                }}
                onClick={() => {
                  inputShow();
                }}
                className="bi bi-x-lg"
              ></i>
              <div
                style={{ border: "1px solid #fff", marginLeft: "-2px" }}
                className="dashboard-nav-list"
              >
                <a
                  style={{
                    marginLeft: "-30px",
                    borderRight: "1px solid #fff",
                    width: "321px",
                  }}
                  href="/homepage"
                  className="dashboard-nav-item"
                >
                  TRANG CHỦ{" "}
                </a>

                <div
                  onClick={() => {
                    inputShow1();
                  }}
                  className="dashboard-nav-dropdown1"
                >
                  <a
                    href="#!"
                    style={{ borderRight: "1px solid #fff" }}
                    className="dashboard-nav-item"
                  >
                    VỀ CHÚNG TÔI{" "}
                    <i className="dashboard-icon bi bi-caret-down-fill"></i>
                  </a>{" "}
                  <div className="dashboard-nav-dropdown-menu">
                    <a
                      style={{ borderRight: "1px solid #fff", width: "320px" }}
                      href="#"
                      className="dashboard-nav-dropdown-item"
                    >
                      THÔNG ĐIỆP NHÀ SÁNG LẬP
                    </a>
                    <a
                      style={{ borderRight: "1px solid #fff", width: "320px" }}
                      href="#"
                      className="dashboard-nav-dropdown-item"
                    >
                      TẦM NHÌN - XỨ MẠNG - GIÁ TRỊ CỐT LÕI
                    </a>
                  </div>
                </div>
                <div
                  onClick={() => {
                    inputShow2();
                  }}
                  className="dashboard-nav-dropdown2"
                >
                  <a
                    href="#!"
                    style={{ borderRight: "1px solid #fff" }}
                    className="dashboard-nav-item "
                  >
                    {" "}
                    HÀNH TRÌNH LẬP CHÍ VĨ ĐẠI - KHỞI NGHIỆP KIẾN QUỐC{" "}
                    <i className="dashboard-icon bi bi-caret-down-fill"></i>
                  </a>
                  <div className="dashboard-nav-dropdown-menu">
                    <a
                      href="#"
                      style={{ borderRight: "1px solid #fff", width: "320px" }}
                      className="dashboard-nav-dropdown-item"
                    >
                      HÀNH TRÌNH TỪ TRÁI TIM
                    </a>
                  </div>
                </div>
                <div>
                  <a
                    style={{
                      marginLeft: "-30px",
                      borderRight: "1px solid #fff",
                      width: "321px",
                    }}
                    href="#"
                    className="dashboard-nav-item active"
                  >
                    {" "}
                    CÀ PHÊ TRIẾT ĐẠO
                  </a>
                  <div
                    style={{
                      marginLeft: "-30px",
                      borderBottom: "1px solid #fff",
                      width: "380px",
                      height: "1px",
                    }}
                    className="ss"
                    href=""
                  ></div>
                  <a
                    style={{
                      marginLeft: "-30px",
                      borderRight: "1px solid #fff",
                      width: "321px",
                    }}
                    href="/loi-song-tinh-thuc"
                    className="dashboard-nav-item"
                  >
                    {" "}
                    LỐI SỐNG TỈNH THỨC{" "}
                  </a>
                </div>
                <div
                  onClick={() => {
                    inputShow3();
                  }}
                  className="dashboard-nav-dropdown3"
                >
                  <a
                    href="#!"
                    style={{ borderRight: "1px solid #fff" }}
                    className="dashboard-nav-item"
                  >
                    {" "}
                    CÀ PHÊ NĂNG LƯỢNG - CÀ PHÊ ĐỔI ĐỜI{" "}
                    <i className="dashboard-icon bi bi-caret-down-fill"></i>
                  </a>
                  <div className="dashboard-nav-dropdown-menu">
                    <a
                      href="trung-nguyen-legend"
                      style={{ borderRight: "1px solid #fff", width: "320px" }}
                      className="dashboard-nav-dropdown-item"
                    >
                      TRUNG NGUYÊN LEGEND
                    </a>
                    <a
                      href="/trung-nguyen"
                      style={{ borderRight: "1px solid #fff", width: "320px" }}
                      className="dashboard-nav-dropdown-item"
                    >
                      TRUNG NGUYÊN
                    </a>
                    <a
                      href="/g7"
                      style={{ borderRight: "1px solid #fff", width: "320px" }}
                      className="dashboard-nav-dropdown-item"
                    >
                      {" "}
                      G7
                    </a>
                  </div>
                </div>
                <div
                  onClick={() => {
                    inputShow4();
                  }}
                  className="dashboard-nav-dropdown4"
                >
                  <a
                    href="#"
                    style={{ borderRight: "1px solid #fff" }}
                    className="dashboard-nav-item"
                  >
                    KHÔNG GIAN CÀ PHÊ NĂNG LƯỢNG{" "}
                    <i className="dashboard-icon bi bi-caret-down-fill"></i>
                  </a>
                  <div className="dashboard-nav-dropdown-menu">
                    <a
                      href="/trungnguyenecoffee"
                      style={{ borderRight: "1px solid #fff", width: "320px" }}
                      className="dashboard-nav-dropdown-item"
                    >
                      TRUNG NGUYÊN E-COFFEE
                    </a>
                    <a
                      href="/khong-gian-trung-nguyen-legend-cafe"
                      style={{ borderRight: "1px solid #fff", width: "320px" }}
                      className="dashboard-nav-dropdown-item"
                    >
                      TRUNG NGUYÊN LEGEND CAFE
                    </a>
                  </div>
                </div>
                <div
                  onClick={() => {
                    inputShow5();
                  }}
                  className="dashboard-nav-dropdown5"
                >
                  <a
                    href="#!"
                    style={{ borderRight: "1px solid #fff" }}
                    className="dashboard-nav-item "
                  >
                    LIÊN KẾT
                    <i className="dashboard-icon bi bi-caret-down-fill"></i>
                  </a>
                  <div className="dashboard-nav-dropdown-menu">
                    <a
                      href="#"
                      style={{ borderRight: "1px solid #fff", width: "320px" }}
                      className="dashboard-nav-dropdown-item"
                    >
                      THẾ GIỚI CÀ PHÊ
                    </a>
                    <a
                      href="#"
                      style={{ borderRight: "1px solid #fff", width: "320px" }}
                      className="dashboard-nav-dropdown-item"
                    >
                      TRUNG NGUYÊN HEALING
                    </a>
                    <a
                      style={{ borderRight: "1px solid #fff", width: "320px" }}
                      href="#"
                      className="dashboard-nav-dropdown-item"
                    >
                      THÀNH PHỐ CÀ PHÊ
                    </a>
                    <a
                      style={{ borderRight: "1px solid #fff", width: "320px" }}
                      href="#"
                      className="dashboard-nav-dropdown-item"
                    >
                      BẢO TÀNG THẾ GIỚI CÀ PHÊ
                    </a>
                  </div>
                </div>
              </div>
              <div className="dashboard-social">
                <a href="https://www.facebook.com/trungnguyenlegend/">
                <i className="bi bi-facebook"></i>
                </a>
                <a href="https://plus.google.com/+trungnguyen">
                <i className="bi bi-google"></i>
                  </a>
                  <a href="https://www.youtube.com/user/TapDoanTrungNguyen">
                  
                <i className="bi bi-youtube"></i>
                  </a>
    
              
                
              </div>
            </div>
          </div>
        </div>
        <div className="header-img">
          <a href="">
            <img className="header-img-logo" src={logonew} alt="" />
          </a>
        </div>
        <div className="header-language">VI/ EN /CH /KO</div>
      </header>
    </>
  );
}
export default Header;
