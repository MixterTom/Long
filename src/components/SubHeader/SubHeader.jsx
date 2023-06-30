import bannerImage from "../../assets/img/backgroundHeader.png";

export default function SubHeader() {
  return (
    <>
      <div style={{ position: "relative", paddingBottom: "60px" }}>
        <img
          src="//cdn.trungnguyenlegend.com/wp-content/uploads/2018/03/fobn1.png"
          alt=""
          decoding="async"
          title="fobn1"
          srcSet="//cdn.trungnguyenlegend.com/wp-content/uploads/2018/03/fobn1.png 1920w, //cdn.trungnguyenlegend.com/wp-content/uploads/2018/03/fobn1-300x47.png 300w, //cdn.trungnguyenlegend.com/wp-content/uploads/2018/03/fobn1-768x120.png 768w, //cdn.trungnguyenlegend.com/wp-content/uploads/2018/03/fobn1-1024x159.png 1024w, //cdn.trungnguyenlegend.com/wp-content/uploads/2018/03/fobn1-500x78.png 500w"
          style={{
            position:"absolute",
            bottom: -10
          }}
        ></img>
        <div>
          <img
            src={bannerImage}
            alt=""
            style={{ width: "100vw", top: "-100px" }}
          />
        </div>
      </div>
    </>
  );
}
