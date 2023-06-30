import BoxModel1 from "./Model/BoxModel1";
import BoxModel2 from "./Model/BodyModel2";
import data from "../../../../utils/data";

export default function Body3() {
  return (
    <>
      <div>
        {/* <BoxModel1
          year="2023"
          descrip="Khai trương Văn phòng Đại diện tại Hàn Quốc • Đồng hành cùng xây
          dựng Thành phố Buôn Ma Thuột trở thành Thành phố Cà phê của thế giới
          • Ra mắt tổ hợp khách sạn “La Forêt en ville” và trung tâm hội nghị
          “The world coffee center”, động thổ xây dựng khu trường học “Loving”
          và “Happy” tại khu đô thị Thành phố Cà phê • Kỷ niệm 20 năm thương
          hiệu G7 chinh phục toàn cầu."
          line={img0}
          pic="https://cdn.trungnguyenlegend.com/wp-content/uploads/2022/01/2021.webp"
        ></BoxModel1> */}
      </div>
      {data.map((data, index) => {
        if ((index + 2) % 2 == 0) {
          return (
            <>
              <BoxModel1
                year={data.year}
                descrip={data.descrip}
                line={data.line}
                pic={data.pic}
              ></BoxModel1>
            </>
          );
        }else {
          return(
            <>
              <BoxModel2
                year={data.year}
                descrip={data.descrip}
                line={data.line}
                pic={data.pic}
              ></BoxModel2>
            </>
          )
        }
      })}
    </>
  );
}
