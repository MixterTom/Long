import mainimg from "../../assets/img/1.jpg";
import { useNavigate } from "react-router-dom";
import banner from "../../assets/img/2.png";
import blog1 from "../../assets/img/3.jpg";
import blog2 from "../../assets/img/4.jpg";
import blog3 from "../../assets/img/5.jpg";
import blog4 from "../../assets/img/6.jpg";
import blog5 from "../../assets/img/7.jpg";
import blog6 from "../../assets/img/8.jpg";
import blog7 from "../../assets/img/9.jpg";
import blog8 from "../../assets/img/10.jpg";
import blog9 from "../../assets/img/11.jpg";
import blog10 from "../../assets/img/12.jpg";
import img13 from "../../assets/img/13.jpg";
import img14 from "../../assets/img/14.jpg";
import img15 from "../../assets/img/15.jpg";
import mobile from "../../assets/img/SLIDE-TT-m.jpg";
import "./L_Body.scss";
export default function L_Body() {
  const navigate = useNavigate();
  return (
    <body>
      <div className="row">
        <div className="col-12 col-lg-12 col-xl-0 none-desktop ipad-none">
          <img className="mobile-img" src={mobile} alt="" />
        </div>
        <div className="col-0 col-lg-0 col-xl-12 none-mobile">
          <img className="main-img" src={mainimg} alt="" />
        </div>
        <div className="col-0 col-lg-0 col-xl-12 none-mobile">
          <img className="banner-img" src={banner} alt="" />
        </div>
      </div>
      <div className="row">
        <p className="line"></p>
        <div className="col-0 col-lg-1"></div>
        <div className="col-12 col-lg-10 ">
          <div className="middle-text">
            <p className="middle-text-info">CÀ PHÊ TRIẾT ĐẠO</p>
          </div>
        </div>
        <div className="col-0 col-lg-1"></div>
      </div>

      {/* Big Blog content */}
      <div className="row">
        <div className="col-0 col-lg-1 col-xl-1"></div>
        <div className="col-12 col-lg-7 col-xl-7">
          <div className="row list-big-blog">
            <div className="col-12 col-lg-5 col-xl-5">
              <img className="blog-img" src={blog1} alt="" />
            </div>
            <div className="col-12 col-lg-6 col-xl-6 blog-container">
              <div className="row">
                <div className="col-0 col-lg-12 col-xl-12 link-text-title">
                  <a className="link-text-name" href="#">
                    Cà Phê Triết Đạo
                  </a>
                  <p className="stand">|</p>
                  <a className="link-text-date" href="#">
                    23/05/2023
                  </a>
                </div>
                <div className="col-8 col-lg-12 col-xl-12">
                  <a className="link-text-big" href="#">
                    Kỳ 96: Cà phê và sự hình thành các trường phái nghệ thuật
                  </a>
                </div>
                <div className="col-10 col-lg-12 col-xl-12">
                  <div className="link-text-content">
                    <a className="link-text-content-info" href="">
                      Trong lịch sử phát triển nghệ thuật, cà phê luôn song
                      hành, trở thành nguồn năng...
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-12 col-xl-12">
                  <button
                    className="link-text-button"
                    onClick={() =>
                      navigate(
                        "/ky-96-ca-phe-va-su-hinh-thanh-cac-truong-phai-nghe-thuat"
                      )
                    }
                  >
                    <p className="button-text">XEM THÊM</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row list-big-blog">
            <div className="col-12 col-lg-5 col-xl-5">
              <img className="blog-img" src={blog2} alt="" />
            </div>
            <div className="col-12 col-lg-6 col-xl-6 blog-container">
              <div className="row">
                <div className="col-0 col-lg-12 col-xl-12 link-text-title">
                  <a className="link-text-name" href="#">
                    Cà Phê Triết Đạo
                  </a>
                  <p className="stand">|</p>
                  <a className="link-text-date" href="#">
                    25/04/2023
                  </a>
                </div>
                <div className="col-8 col-lg-12 col-xl-12">
                  <a className="link-text-big" href="#">
                    Kỳ 95: Dorothy Day – Vì một xã hội tốt đẹp hơn bằng tình yêu
                    thương
                  </a>
                </div>
                <div className="col-10 col-lg-12 col-xl-12">
                  <div className="link-text-content">
                    <a className="link-text-content-info" href="">
                      Cà phê và hàng quán cà phê là năng lượng và nơi chốn tái
                      cấu trúc...
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-12 col-xl-12">
                  <button
                    className="link-text-button"
                    onClick={() =>
                      navigate(
                        "/ky-95-dorothy-day-vi-mot-xa-hoi-tot-dep-hon-bang-tinh-yeu-thuong/"
                      )
                    }
                  >
                    <p className="button-text">XEM THÊM</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row list-big-blog">
            <div className="col-12 col-lg-5 col-xl-5">
              <img className="blog-img" src={blog3} alt="" />
            </div>
            <div className="col-12 col-lg-6 col-xl-6 blog-container">
              <div className="row">
                <div className="col-0 col-lg-12 col-xl-12 link-text-title">
                  <a className="link-text-name" href="#">
                    Cà Phê Triết Đạo
                  </a>
                  <p className="stand">|</p>
                  <a className="link-text-date" href="#">
                    22/03/2023
                  </a>
                </div>
                <div className="col-8 col-lg-12 col-xl-12">
                  <a className="link-text-big" href="#">
                    Kỳ 94: Hàng quán cà phê thúc đẩy sự phát triển của xã hội
                  </a>
                </div>
                <div className="col-10 col-lg-12 col-xl-12">
                  <div className="link-text-content">
                    <a className="link-text-content-info" href="">
                      Với đặc tính kết nối, hàng quán cà phê đã trở thành không
                      gian lý tưởng...
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-12 col-xl-12">
                  <button
                    className="link-text-button"
                    onClick={() =>
                      navigate(
                        "/ky-94-hang-quan-ca-phe-thuc-day-su-phat-trien-cua-xa-hoi/"
                      )
                    }
                  >
                    <p className="button-text">XEM THÊM</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row list-big-blog">
            <div className="col-12 col-lg-5 col-xl-5">
              <img className="blog-img-l" src={blog4} alt="" />
            </div>
            <div className="col-12 col-lg-6 col-xl-6 blog-container">
              <div className="row">
                <div className="col-0 col-lg-12 col-xl-12 link-text-title">
                  <a className="link-text-name" href="#">
                    Cà Phê Triết Đạo
                  </a>
                  <p className="stand">|</p>
                  <a className="link-text-date" href="#">
                    14/02/2023
                  </a>
                </div>
                <div className="col-8 col-lg-12 col-xl-12">
                  <a className="link-text-big" href="#">
                    Kỳ 93: Nghi thức cà phê trong hành trình kiến tạo tương lai
                  </a>
                </div>
                <div className="col-10 col-lg-12 col-xl-12">
                  <div className="link-text-content">
                    <a className="link-text-content-info" href="">
                      Được hình thành từ những trải nghiệm thực tiễn và khát
                      vọng cuộc sống, các nghi...
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-12 col-xl-12">
                  <button
                    className="link-text-button"
                    onClick={() =>
                      navigate(
                        "/ky-93-nghi-thuc-ca-phe-trong-hanh-trinh-kien-tao-tuong-lai/"
                      )
                    }
                  >
                    <p className="button-text">XEM THÊM</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row list-big-blog">
            <div className="col-12 col-lg-5 col-xl-5">
              <img className="blog-img-l" src={blog5} alt="" />
            </div>
            <div className="col-12 col-lg-6 col-xl-6 blog-container">
              <div className="row">
                <div className="col-0 col-lg-12 col-xl-12 link-text-title">
                  <a className="link-text-name" href="#">
                    Cà Phê Triết Đạo
                  </a>
                  <p className="stand">|</p>
                  <a className="link-text-date" href="#">
                    16/01/2023
                  </a>
                </div>
                <div className="col-8 col-lg-12 col-xl-12">
                  <a className="link-text-big" href="#">
                    Kỳ 92: Hàng quán cà phê và sự hình thành các thiết chế xã
                    hội
                  </a>
                </div>
                <div className="col-10 col-lg-12 col-xl-12">
                  <div className="link-text-content">
                    <a className="link-text-content-info" href="">
                      Không chỉ là nơi thưởng thức cà phê, hàng quán cà phê còn
                      là không gian...
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-12 col-xl-12">
                  <button
                    className="link-text-button"
                    onClick={() =>
                      navigate(
                        "/ky-92-hang-quan-ca-phe-va-su-hinh-thanh-cac-thiet-che-xa-hoi/"
                      )
                    }
                  >
                    <p className="button-text">XEM THÊM</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row list-big-blog">
            <div className="col-12 col-lg-5 col-xl-5">
              <img className="blog-img-l" src={blog6} alt="" />
            </div>
            <div className="col-12 col-lg-6 col-xl-6 blog-container">
              <div className="row">
                <div className="col-0 col-lg-12 col-xl-12 link-text-title">
                  <a className="link-text-name" href="#">
                    Cà Phê Triết Đạo
                  </a>
                  <p className="stand">|</p>
                  <a className="link-text-date" href="#">
                    17/12/2022
                  </a>
                </div>
                <div className="col-8 col-lg-12 col-xl-12">
                  <a className="link-text-big" href="#">
                    Kỳ 91: John Broadus Watson và văn hóa “coffee break” biểu
                    dương lối sống sáng tạo
                  </a>
                </div>
                <div className="col-10 col-lg-12 col-xl-12">
                  <div className="link-text-content">
                    <a className="link-text-content-info" href="">
                      Văn hóa “coffee break” đóng vai trò quan trọng trong việc
                      phát triển kinh tế và...
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-12 col-xl-12">
                  <button
                    className="link-text-button"
                    onClick={() =>
                      navigate(
                        "/ky-91-john-broadus-watson-va-van-hoa-coffee-break-bieu-duong-loi-song-sang-tao/"
                      )
                    }
                  >
                    <p className="button-text">XEM THÊM</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row list-big-blog">
            <div className="col-12 col-lg-5 col-xl-5">
              <img className="blog-img-l" src={blog7} alt="" />
            </div>
            <div className="col-12 col-lg-6 col-xl-6 blog-container">
              <div className="row">
                <div className="col-0 col-lg-12 col-xl-12 link-text-title">
                  <a className="link-text-name" href="#">
                    Cà Phê Triết Đạo
                  </a>
                  <p className="stand">|</p>
                  <a className="link-text-date" href="#">
                    31/10/2022
                  </a>
                </div>
                <div className="col-8 col-lg-12 col-xl-12">
                  <a className="link-text-big" href="#">
                    Kỳ 90: Hàng quán cà phê và hành trình truy cầu hạnh phúc
                    đích thực
                  </a>
                </div>
                <div className="col-10 col-lg-12 col-xl-12">
                  <div className="link-text-content">
                    <a className="link-text-content-info" href="">
                      Trong tiến trình lịch sử, hàng quán cà phê là môi trường
                      lý tưởng cho quá...
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-12 col-xl-12">
                  <button
                    className="link-text-button"
                    onClick={() =>
                      navigate(
                        "/ky-90-hang-quan-ca-phe-va-hanh-trinh-truy-cau-hanh-phuc-dich-thuc/"
                      )
                    }
                  >
                    <p className="button-text">XEM THÊM</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row list-big-blog">
            <div className="col-12 col-lg-5 col-xl-5">
              <img className="blog-img-l" src={blog8} alt="" />
            </div>
            <div className="col-12 col-lg-6 col-xl-6 blog-container">
              <div className="row">
                <div className="col-0 col-lg-12 col-xl-12 link-text-title">
                  <a className="link-text-name" href="#">
                    Cà Phê Triết Đạo
                  </a>
                  <p className="stand">|</p>
                  <a className="link-text-date" href="#">
                    06/09/2022
                  </a>
                </div>
                <div className="col-8 col-lg-12 col-xl-12">
                  <a className="link-text-big" href="#">
                    Kỳ 89: Cà phê – Nguồn năng lượng tuyệt vời cho thần trí và
                    thể chất
                  </a>
                </div>
                <div className="col-10 col-lg-12 col-xl-12">
                  <div className="link-text-content">
                    <a className="link-text-content-info" href="">
                      Chiếm vị trí quan trọng trong xã hội loài người hơn 12 thế
                      kỷ qua, cà...
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-12 col-xl-12">
                  <button
                    className="link-text-button"
                    onClick={() =>
                      navigate(
                        "/ky-89-ca-phe-nguon-nang-luong-tuyet-voi-cho-than-tri-va-the-chat/"
                      )
                    }
                  >
                    <p className="button-text">XEM THÊM</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row list-big-blog">
            <div className="col-12 col-lg-5 col-xl-5">
              <img className="blog-img-l" src={blog9} alt="" />
            </div>
            <div className="col-12 col-lg-6 col-xl-6 blog-container">
              <div className="row">
                <div className="col-0 col-lg-12 col-xl-12 link-text-title">
                  <a className="link-text-name" href="#">
                    Cà Phê Triết Đạo
                  </a>
                  <p className="stand">|</p>
                  <a className="link-text-date" href="#">
                    16/08/2022
                  </a>
                </div>
                <div className="col-8 col-lg-12 col-xl-12">
                  <a className="link-text-big" href="#">
                    Kỳ 88: Cà phê trong triết lý y học phương Đông
                  </a>
                </div>
                <div className="col-10 col-lg-12 col-xl-12">
                  <div className="link-text-content">
                    <a className="link-text-content-info" href="">
                      Theo những chuyến hành hương, viễn du thám hiểm, những con
                      đường thương mại quốc tế...
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-12 col-xl-12">
                  <button
                    className="link-text-button"
                    onClick={() =>
                      navigate(
                        "/ky-88-ca-phe-trong-triet-ly-y-hoc-phuong-dong/"
                      )
                    }
                  >
                    <p className="button-text">XEM THÊM</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row list-big-blog">
            <div className="col-12 col-lg-5 col-xl-5">
              <img className="blog-img-l" src={blog10} alt="" />
            </div>
            <div className="col-12 col-lg-6 col-xl-6 blog-container">
              <div className="row">
                <div className="col-0 col-lg-12 col-xl-12 link-text-title">
                  <a className="link-text-name" href="#">
                    Cà Phê Triết Đạo
                  </a>
                  <p className="stand">|</p>
                  <a className="link-text-date" href="#">
                    20/06/2022
                  </a>
                </div>
                <div className="col-8 col-lg-12 col-xl-12">
                  <a className="link-text-big" href="#">
                    Kỳ 87: Avicenna Bukhara – Cà phê tăng cường sinh lực và sức
                    mạnh tinh thần
                  </a>
                </div>
                <div className="col-10 col-lg-12 col-xl-12">
                  <div className="link-text-content">
                    <a className="link-text-content-info" href="">
                      Ngay khi được phát hiện tại Ethiopia, cà phê đã được đón
                      nhận như một thảo...
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-12 col-xl-12">
                  <button
                    className="link-text-button"
                    onClick={() =>
                      navigate(
                        "/ky-87-avicenna-bukhara-ca-phe-tang-cuong-sinh-luc-va-suc-manh-tinh-than/"
                      )
                    }
                  >
                    <p className="button-text">XEM THÊM</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Latest News content */}
        <div className="col-12 col-lg-12 col-xl-3 side-container">
          <div className="row">
            <div className="col-12 col-lg-12 holder-side">
              <img className="side-img" src={img13} alt="" />
              <div className="blog-text">
                <p className="blog-text-side">LATEST NEWS</p>
                <p className="text-side-line"></p>
              </div>
              <div className="row">
                <div
                  className="col-12 col-lg-12 small-container-list"
                  onClick={() =>
                    navigate(
                      "/ky-96-ca-phe-va-su-hinh-thanh-cac-truong-phai-nghe-thuat"
                    )
                  }
                >
                  <div className="row small-list-blog">
                    <div className="col-3 col-lg-2">
                      <div className="hover-border">
                        <img className="side-small-img" src={blog1} alt="" />
                      </div>
                    </div>
                    <div className="col-9 col-lg-9">
                      <div className="small-side-cartory">
                        <div className="small-side-date">
                          <i class="bi bi-calendar3 small-side-time-icon"></i>
                          <p className="small-side-time">23/05/2023</p>
                        </div>
                        <p className="col-10 col-lg-0 side-time-text">
                          Kỳ 96: Cà phê và sự hình thành các trường phái nghệ
                          thuật
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-12 small-container-list">
                  <div className="row small-list-blog">
                    <div className="col-3 col-lg-2">
                      <div className="hover-border">
                        <img className="side-small-img" src={blog2} alt="" />
                      </div>
                    </div>
                    <div className="col-9 col-lg-10">
                      <div className="small-side-cartory">
                        <div className="small-side-date">
                          <i class="bi bi-calendar3 small-side-time-icon"></i>
                          <p className="small-side-time"> 25/04/2023</p>
                        </div>
                        <p className="col-10 col-lg-0 side-time-text">
                          Kỳ 95: Dorothy Day – Vì một xã hội tốt đẹp hơn bằng
                          tình yêu thương
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-12 small-container-list">
                  <div className="row small-list-blog">
                    <div className="col-3 col-lg-2">
                      <div className="hover-border">
                        <img className="side-small-img" src={blog3} alt="" />
                      </div>
                    </div>
                    <div className="col-9 col-lg-10">
                      <div className="small-side-cartory">
                        <div className="small-side-date">
                          <i class="bi bi-calendar3 small-side-time-icon"></i>
                          <p className="small-side-time">22/03/20233</p>
                        </div>
                        <p className="col-10 col-lg-0 side-time-text">
                          Kỳ 94: Hàng quán cà phê thúc đẩy sự phát triển của xã
                          hội
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-12 small-container-list">
                  <div className="row small-list-blog">
                    <div className="col-3 col-lg-2">
                      <div className="hover-border">
                        <img className="side-small-img" src={blog4} alt="" />
                      </div>
                    </div>
                    <div className="col-9 col-lg-10">
                      <div className="small-side-cartory">
                        <div className="small-side-date">
                          <i class="bi bi-calendar3 small-side-time-icon"></i>
                          <p className="small-side-time"> 14/02/2023</p>
                        </div>
                        <p className="col-10 col-lg-0 side-time-text">
                          Kỳ 93: Nghi thức cà phê trong hành trình kiến tạo
                          tương lai
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-12 col-xl-12">
              <img className="side-img2" src={img14} alt="" />
            </div>
            <div className="col-12 col-lg-12 col-xl-12">
              <img className="side-img3" src={img15} alt="" />
            </div>
          </div>
        </div>
        <div className="col-0 col-lg-1 col-xl-1"></div>
      </div>
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-3">
          <div className="page-redirect">
            <span className="page-redirect-main">1</span>
            <span className="page-redirect-sub" onClick={() => navigate("/2")}>
              2
            </span>
            <span className="page-redirect-sub">3</span>
            <span className="redirect-next">
              <i class="bi bi-caret-right-fill"></i>
            </span>
            <span className="redirect-last">
              <p className="redirect-last-text">
                Trang Cuối
                <span className="redirect-last-icon-first">
                  <i class="bi bi-caret-right-fill"></i>
                </span>
                <span className="redirect-last-icon-second">
                  <i class="bi bi-caret-right-fill"></i>
                </span>
              </p>
            </span>
          </div>
        </div>
        <div className="col-0 col-lg-6"></div>
      </div>
    </body>
  );
}
