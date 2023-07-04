import mainimg from "../../assets/img/1.jpg";
import banner from "../../assets/img/2.png";
import blog1 from "../../assets/img/3.jpg";
import blog2 from "../../assets/img/4.jpg";
import blog3 from "../../assets/img/5.jpg";
import blog4 from "../../assets/img/6.jpg";
import blog10 from "../../assets/img/cafe-thu-thiet.jpg";
import img13 from "../../assets/img/13.jpg";
import img14 from "../../assets/img/14.jpg";
import img15 from "../../assets/img/15.jpg";
import mobile from "../../assets/img/SLIDE-TT-m.jpg";

import GrayFrame from "../frame/GrayFrame/GrayFrame";
import "./L_Seemore.scss";
const L_Seemore = (article) => {
  const { page } = article;
  const { begining, text } = page;
  return (
    <body>
      <div className="row">
        <div className="col-12 col-lg-0 col-xl-0 none-desktop ipad-none">
          <img className="mobile-img" src={mobile} alt="" />
        </div>
        <div className="col-0 col-lg-12 col-xl-12 none-mobile">
          <img className="main-img" src={mainimg} alt="" />
        </div>
        <div className="col-0 col-lg-12 col-xl-12 none-mobile">
          <img className="banner-img" src={banner} alt="" />
        </div>
      </div>

      {/* title-part */}
      <div className="row middle-container-more">
        <div className="col-12 col-lg-12 col-xl-12">
          <div className="row">
            <div className="col-0 col-lg-3 col-xl-3"></div>
            <div className="col-5 col-lg-2 col-xl-2">
              <div className="middle-text-more">
                <p className="middle-text-news">TIN TỨC – SỰ KIỆN</p>
              </div>
              <p className="line-big-more"></p>
            </div>
            <div className="col-1 col-lg-2 col-xl-2">
              <div className="middle-text-more">
                <p className="middle-text-video">VIDEO</p>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-xl-2">
              <div className="middle-text-more">
                <p className="middle-text-product">CÔNG BỐ SẢN PHẨM</p>
              </div>
            </div>
            <div className="col-0 col-lg-3 col-xl-3"></div>
          </div>
          <p className="line-more"></p>
        </div>
      </div>

      {/* Big Blog content */}
      <div className="row">
        <div className="col-0 col-lg-1 col-xl-1"></div>
        <div className="col-12 col-lg-7 ipad-pro">
          <div className="row see-more-container">
            <p className="col-12 col-lg-10 col-xl-10 header-1">
              {begining.title}
            </p>
            <div className="col-12 col-lg-10 col-xl-10">
              <p className="line-s"></p>
              <div className="col-12 col-lg-12 col-xl-12 header-sub">
                <div className="header-sub-time">
                  <i class="bi bi-calendar3 sub-time-icon"></i>
                  <p className="sub-time-text">{begining.date}</p>
                </div>
                <div className="header-sub-view">
                  <i class="bi bi-eye sub-view-icon"></i>
                  <p className="sub-view-text">{begining.views}</p>
                </div>
              </div>
              <p className="line-s"></p>
              <p className="col-11 col-lg-0 col-xl-0 body-text-more">
                {begining.quote}
              </p>
              <img className="blog-img-h" src={begining.titleImg} alt="" />
              {begining.frameText === true ? <GrayFrame /> : ""}
              <div className="col-12 col-lg-12">
                <h3 className="body-title-more">{begining.title}</h3>
                {text.map((part) => {
                  const paragraphs = part.paragraphs;
                  return (
                    <>
                      <p className="col-11 col-lg-0 body-text-more">
                        {part.content}
                      </p>

                      {paragraphs.map((paragraph) => {
                        return (
                          <p className="col-11 col-lg-0 body-text-more">
                            {paragraph.subImg === "none" ? (
                              ""
                            ) : (
                              <img
                                src={paragraph.subImg}
                                style={{
                                  width: "100%",
                                  marginBottom: "14px",
                                }}
                              />
                            )}
                            {paragraph.content}
                            <p className="col-11 col-lg-0 body-title-more-2">
                              {paragraph.subtitle === "none"
                                ? ""
                                : paragraph.subtitle}
                            </p>
                          </p>
                        );
                      })}
                    </>
                  );
                })}

                <iframe
                  src="https://www.youtube.com/embed/4OX6jmFq6Xk"
                  title="CÀ PHÊ TRIẾT ĐẠO | Đại Văn Hào Johann Wolfgang Von Goethe – Cà Phê Là Thức Uống Tuyệt Vời Nhất!"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="video-frame"
                ></iframe>
                <p className="col-11 col-lg-0 body-text-link-more">
                  Thân mời bạn đọc đón xem loạt video Cà Phê Triết Đạo đã được
                  đăng tải trên kênh
                  <a href="https://www.youtube.com/channel/UC_E90Cb30GAwe7k6aUC8H8Q">
                    https://bit.ly/caphetrietdao
                  </a>
                </p>
                <img
                  className="col-11 col-lg-0 foot-img-more"
                  src={blog10}
                  alt=""
                />
                <p className="col-11 col-lg-0 foot-text-1-more">
                  Đón đọc kỳ sau: Hoạt động nghệ thuật trong không gian hàng
                  quán cà phê
                </p>
                <p className="line-m"></p>
                <div className="row">
                  <p className="col-6 col-lg-3 foot-icon-more">
                    <div className="icon-more-cover">
                      <i class="bi bi-facebook"></i>
                    </div>
                    <div className="icon-more-cover">
                      <i class="bi bi-google "></i>
                    </div>
                    <div className="icon-more-cover">
                      <i class="bi bi-twitter "></i>
                    </div>
                    <div className="icon-more-cover">
                      <i class="bi bi-linkedin "></i>
                    </div>
                    <div className="icon-more-cover">
                      <i class="bi bi-envelope-fill "></i>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Latest News content */}
        <div className="col-12 col-lg-3 side-container-more">
          <div className="row">
            <div className="col-12 col-lg-12 holder-side-more">
              <img className="side-img-more" src={img13} alt="" />
              <div className="blog-text-more">
                <p className="blog-text-side-more">LATEST NEWS</p>
              </div>
              <div className="row">
                <div className="col-9 col-lg-12 small-container-list-more">
                  <div className="row small-list-blog-more">
                    <div className="col-3 col-lg-3">
                      <div className="hover-border-more">
                        <img
                          className="side-small-img-more"
                          src={blog1}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-9 col-lg-9">
                      <div className="small-side-cartory-more">
                        <div className="small-side-date-more">
                          <i class="bi bi-calendar3 small-side-time-icon-more"></i>
                          <p className="small-side-time-more">23/05/2023</p>
                        </div>
                        <p className="side-time-text-more">
                          Kỳ 96: Cà phê và sự hình thành các trường phái nghệ
                          thuật
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-9 col-lg-12 small-container-list-more">
                  <div className="row small-list-blog-more">
                    <div className="col-3 col-lg-3">
                      <div className="hover-border-more">
                        <img
                          className="side-small-img-more"
                          src={blog2}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-9 col-lg-9">
                      <div className="small-side-cartory-more">
                        <div className="small-side-date-more">
                          <i class="bi bi-calendar3 small-side-time-icon-more"></i>
                          <p className="small-side-time-more"> 25/04/2023</p>
                        </div>
                        <p className="side-time-text-more">
                          Kỳ 95: Dorothy Day – Vì một xã hội tốt đẹp hơn bằng
                          tình yêu thương
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-9 col-lg-12 small-container-list-more">
                  <div className="row small-list-blog-more">
                    <div className="col-3 col-lg-3">
                      <div className="hover-border-more">
                        <img
                          className="side-small-img-more"
                          src={blog3}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-9 col-lg-9">
                      <div className="small-side-cartory-more">
                        <div className="small-side-date-more">
                          <i class="bi bi-calendar3 small-side-time-icon-more"></i>
                          <p className="small-side-time-more">22/03/20233</p>
                        </div>
                        <p className="side-time-text-more">
                          Kỳ 94: Hàng quán cà phê thúc đẩy sự phát triển của xã
                          hội
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-9 col-lg-9 small-container-list-more">
                  <div className="row small-list-blog-more">
                    <div className="col-3 col-lg-3">
                      <div className="hover-border-more">
                        <img
                          className="side-small-img-more"
                          src={blog4}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-9 col-lg-9">
                      <div className="small-side-cartory-more">
                        <div className="small-side-date-more">
                          <i class="bi bi-calendar3 small-side-time-icon-more"></i>
                          <p className="small-side-time-more"> 14/02/2023</p>
                        </div>
                        <p className="side-time-text-more">
                          Kỳ 93: Nghi thức cà phê trong hành trình kiến tạo
                          tương lai
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-12">
              <img className="side-img2-more" src={img14} alt="" />
            </div>
            <div className="col-12 col-lg-12">
              <img className="side-img3-more" src={img15} alt="" />
            </div>
          </div>
        </div>
        <div className="col-0 col-lg-1"></div>
      </div>
    </body>
  );
};

export default L_Seemore;
