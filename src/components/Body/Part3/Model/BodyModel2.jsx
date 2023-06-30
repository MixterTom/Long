/* eslint-disable react/prop-types */
export default function BoxModel2(props) {
  return (
    <>
      <div className="not-for-small">
        <div className="row" style={{ width: "100%" }}>
          <div className="col-lg-1" style={{ marginLeft: "50px" }}></div>

          <div className="col-lg-4 fadeInUp animated delay-0 wpb_start_animation wpb_animate_when_almost_visible wpb_start_animation">
            <div style={{ width: "100%" }}>
              <img
                src={props.pic}
                alt=""
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            </div>
          </div>
          <div className="col-lg-2 ">
            <div>
              <img src={props.line} alt="" />
            </div>
          </div>

          <div
            className="col-lg-3 fadeInUp animated delay-0 wpb_start_animation wpb_animate_when_almost_visible wpb_start_animation"
            style={{ paddingTop: "40px" }}
          >
            <h1>
              <em>{props.year}</em>
            </h1>
            <p style={{ wordBreak: "break-word", width: "440px" }}>
              {props.descrip}
            </p>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
      <div className="for-Ipad">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className="row" style={{ height: "165px" }}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={props.pic} alt="" style={{}} />
              </div>
            </div>
            <div
              className="row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h1 style={{ display: "flex", justifyContent: "center" }}>
                <em>{props.year}</em>
              </h1>
              <p
                style={{
                  wordBreak: "break-word",
                  width: "700px",
                  borderBottom: "1px solid #DEDEDE",
                  padding:"0 20px 30px"
                }}
              >
                {props.descrip}
              </p>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </>
  );
}
