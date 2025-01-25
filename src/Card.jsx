import "./index.css";
import img_1 from "./assets/1.svg";
import img_2 from "./assets/2.svg";
import img_3 from "./assets/3.svg";
import img_4 from "./assets/4.svg";
import img_5 from "./assets/5.svg";
import img_6 from "./assets/6.svg";

const Card = () => {
  return (
    <>
      <div className="feature">
        <div className="box">
          <img src={img_1} alt="" style={{width: "50px"}} className="" />
          <h3 className="feature-header">Containerized macOS.</h3>
          <p className="feature-para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            eaque voluptate odio? Veritatis rerum quam est molestiae, nemo
            nostrum. Obcaecati ipsam laborum praesentium et earum quos libero
            nam expedita! Exercitationem!
          </p>
        </div>
        <div className="box">
          <img src={img_2} alt="" style={{width: "50px"}} />
          <h3 className="feature-header">Developer focused.</h3>
          <p className="feature-para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            eaque voluptate odio? Veritatis rerum quam est molestiae, nemo
            nostrum. Obcaecati ipsam laborum praesentium et earum quos libero
            nam expedita! Exercitationem!
          </p>
        </div>
        <div className="box">
          <img src={img_3} alt="" style={{width: "50px"}} />
          <h3 className="feature-header">Leverage Kubernetes.</h3>
          <p className="feature-para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            eaque voluptate odio? Veritatis rerum quam est molestiae, nemo
            nostrum. Obcaecati ipsam laborum praesentium et earum quos libero
            nam expedita! Exercitationem!
          </p>
        </div>
        <div className="box">
          <img src={img_4} alt="" style={{width: "50px"}} />
          <h3 className="feature-header">Learn more.</h3>
          <p className="feature-para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            eaque voluptate odio? Veritatis rerum quam est molestiae, nemo
            nostrum. Obcaecati ipsam laborum praesentium et earum quos libero
            nam expedita! Exercitationem!
          </p>
        </div>
        <div className="box">
          <img src={img_5} alt="" style={{width: "50px"}} />
          <h3 className="feature-header">Start a demo.</h3>
          <p className="feature-para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            eaque voluptate odio? Veritatis rerum quam est molestiae, nemo
            nostrum. Obcaecati ipsam laborum praesentium et earum quos libero
            nam expedita! Exercitationem!
          </p>
        </div>
        <div className="box">
          <img src={img_6} alt="" style={{width: "50px"}} />
          <h3 className="feature-header">Read the docs.</h3>
          <p className="feature-para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            eaque voluptate odio? Veritatis rerum quam est molestiae, nemo
            nostrum. Obcaecati ipsam laborum praesentium et earum quos libero
            nam expedita! Exercitationem!
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
