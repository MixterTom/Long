import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.scss";
import homebanner1 from "../../img/homebanner1.jpg";
import homebanner2 from "../../img/homebanner2.jpg";
import homebanner3 from "../../img/homebanner3.jpg";
import homebannerfooter from "../../img/homebannerfooter.jpg";
import logoOld from "../../img/logo_sp_trungnguyen.jpg";
import logobody from "../../img/homeimg1.jpg";
import logoEcoffee from "../../img/logo_kg_ecoffee.jpg";
import logobodyEcoffee from "../../img/homeimg2.jpg";
import readmorelogo from "../../img/readmore2.jpg";
import homepag2footer from "../../img/fobn1-wttext.jpg";
import trungnguyen from "../../img/tn.jpg";
import g7 from "../../img/g7.jpg";
import body3 from "../../img/homebg-2.jpg";
import homepag3footer from "../../img/fobn1-wttext.jpg";
import homepage4img from "../../img/newmap.jpg";
import homepage5img1 from "../../img/lk-tgcp.jpg";
import homepage5img2 from "../../img/lk-tnl.jpg";
import homepage5img3 from "../../img/TP_CFa.jpg";
import homepage5img4 from "../../img/lk-lct.jpg";
import homepage5img5 from "../../img/lk-tne.jpg";
import homepage5img6 from "../../img/lk-bttgcp.jpg";
import homebanner1responsive from "../../img/homebanner-m1.jpg";
import homebanner2responsive from "../../img/homebanner-m2.jpg";
import homebanner3responsive from "../../img/homebanner-m3.jpg";
import footerresponsive from "../../img/footer-main-m1.jpg";
import homepage2responsive1 from "../../img/sl-e.jpg"
import homepage3footerresponsive from "../../img/footer-wttext.jpg"


function HomePage() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const settings2 = {
    dots: false,
    fade: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    
  };
  const settings3 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="homepage1">
        <Slider {...settings}>
          <div>
            <img
              className="home-page-banner1"
              src={homebanner1}
              alt=""
              style={{ width: "100%", height: "700px" }}
            />
            <div>
              <img
                className="home-page-footer"
                src={homebannerfooter}
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <img
              className="home-page-banner2"
              src={homebanner2}
              alt=""
              style={{ width: "100%", height: "700px" }}
            />
            <div>
              <img
                className="home-page-footer"
                src={homebannerfooter}
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <img
              className="home-page-banner3"
              src={homebanner3}
              alt=""
              style={{ width: "100%", height: "700px" }}
            />
            <div>
              <img
                className="home-page-footer"
                src={homebannerfooter}
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </Slider>
      </div>
      <div className="homepage1-responsive">
        <Slider {...settings}>
          <div>
            <img
              className="home-page-banner1-m1"
              src={homebanner1responsive}
              alt=""
            />
          </div>
          <div>
            <img
              className="home-page-banner2-m1"
              src={homebanner2responsive}
              alt=""
            />
          </div>
          <div>
            <img
              className="home-page-banner3-m1"
              src={homebanner3responsive}
              alt=""
           
            />
          </div>
        </Slider>
      </div>
      <div className="homepage2">
        <Slider {...settings2}>
          <div className="homepage2-slide1">
            <div className="slide-item-text">
              <div className="item-logo">
                <img src={logoOld} alt="" />
              </div>
              <div className="item-text">
                <h2>Không Gian Cà Phê Năng Lượng</h2>
              </div>
              <div className="item-sub-tittle">
                <p>
                  "Nơi đây chúng tôi không chỉ cung ứng những ly cà phê năng
                  lượng tuyệt hảo mà còn cung ứng những giấc mơ."
                </p>
              </div>
              <div className="item-btn">
                <div
                  className="item-readmore-img"
                  style={{ backgroundImage: `url(${readmorelogo})` }}
                ></div>
                <a className="item-readmore-img-readmore" href="/khong-gian-trung-nguyen-legend-cafe">
                  {" "}
                  Xem Thêm
                </a>
              </div>
            </div>
            <div className="item-img">
              <img style={{ width: "100%" }} src={logobody} alt="" />
            </div>
           
          </div>
          <div className="homepage2-slide1">
            <div className="slide-item-text">
              <div className="item-logo-2">
                <img src={logoEcoffee} alt="" />
              </div>
              <div className="item-btn">
                <div
                  className="item-readmore-img"
                  style={{ backgroundImage: `url(${readmorelogo})` }}
                ></div>
                <a className="item-readmore-img-readmore" href="/trungnguyenecoffee">
                  {" "}
                  Xem Thêm
                </a>
              </div>
              <div className="item-img"></div>
            </div>
            <img className="logobody2"
              style={{ width: "90%", marginTop: "35px" }}
              src={logobodyEcoffee}
              alt=""
            />
            <img className="logobody2-responsive"
              style={{ width: "90%", marginTop: "35px" }}
              src={homepage2responsive1}
              alt=""
            />
           
          </div>
        </Slider>
        <div className="homepage2-footer">
          <img
            src={homepag2footer}
            style={{ width: "100%", marginTop: "-100px" }}
            alt=""
          />
        </div>
        <div className="homepage2-footer-responsive">
          <img
            src={footerresponsive}
            style={{ width: "100%", marginTop: "-100px" }}
            alt=""
          />
        </div>
      </div>
      <div className="homepage3">
        <div className="home3-text">
          <div className="homepage3-tittle">
            <h2> CÀ PHÊ NĂNG LƯỢNG - CÀ PHÊ ĐỔI ĐỜI</h2>
            <p>
              “Dù có phải xới tung trái đất này lên cũng phải làm để tạo ra
              những tuyệt phẩm cà phê năng lượng ngon nhất thế giới
            </p>
          </div>
          <div className="homepage3-img">
            <img className="homepage3-logo" src={logoOld} alt="" />
            <img className="homepage3-trungnguyen" src={trungnguyen} alt="" />
            <img className="homepage3-g7" src={g7} alt="" />
          </div>
        </div>
        <div className="homepage3-img-body">
          <img
            className="homepage3-relative"
            src={body3}
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div className="homepage3-footer">
          <img src={homepag3footer} style={{ width: "100%" }} alt="" />
        </div>
        <div className="homepage3-footer-responsive">
          <img src={homepage3footerresponsive} style={{ width: "100%" }} alt="" />
        </div>
       
      </div>
      <div className="homepage4">
        <div className="homepage4-item-text">
          <h2>TRUNG NGUYÊN LEGEND</h2>
        </div>
        <div className="homepage4-item-sub-tittle">
          <p>TẬP ĐOÀN CHUYÊN CÀ PHÊ NĂNG LƯỢNG – CÀ PHÊ ĐỔI ĐỜI</p>
        </div>
        <div className="homepage4-item-btn">
          <div
            className="item-readmore-img"
            style={{ backgroundImage: `url(${readmorelogo})` }}
          ></div>
          <a className="item-readmore-img-readmore" href="">
            {" "}
            Xem Thêm
          </a>
        </div>
        <div className="homepage4-img">
          <img
            src={homepage4img}
            alt=""
            style={{ width: "100%", height: "100vh" }}
          />
        </div>
      </div>
      <div className="homepage5">
        <div className="homepage5-text">
          <h2>Liên Kết</h2>
        </div>
      </div>
      <div className="homepage5-frame-total">
        <Slider {...settings3}>
          <div className="homepage5-frame1">
            <div className="homepageimg1">
              <img src={homepage5img1} alt="" />
            </div>
            <div className="homepageimg-text1">
              <p>Thế Giới Cà Phê</p>
            </div>
          </div>
          <div className="homepage5-frame2">
            <div className="homepageimg2">
              <img src={homepage5img2} alt="" />
            </div>
            <div className="homepageimg-text2">
              <p>TRUNG NGUYÊN LEGEND CAFÉ</p>
            </div>
          </div>
          <div className="homepage5-frame3">
            <div className="homepageimg3">
              <img src={homepage5img3} alt="" />
            </div>
            <div className="homepageimg-text3">
              <p>THÀNH PHỐ CÀ PHÊ</p>
            </div>
          </div>
          <div className="homepage5-frame4">
            <div className="homepageimg4">
              <img src={homepage5img4} alt="" />
            </div>
            <div className="homepageimg-text4">
              <p>TRUNG NGUYÊN HEALING</p>
            </div>
          </div>
          <div className="homepage5-frame5">
            <div className="homepageimg5">
              <img src={homepage5img5} alt="" />
            </div>
            <div className="homepageimg-text5">
              <p>TRUNG NGUYÊN E-COFFEE</p>
            </div>
          </div>
          <div className="homepage5-frame6">
            <div className="homepageimg6">
              <img src={homepage5img6} alt="" />
            </div>
            <div className="homepageimg-text6">
              <p>BẢO TÀNG THẾ GIỚI CÀ PHÊ</p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
export default HomePage;
