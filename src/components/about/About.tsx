import "./About.scss";
import aboutBanner from "../../assets/peiture.jpg";

export const About: React.FC =() => {
    return(
        <div className="About">
            <div className="aboutBanner">
            <img src={aboutBanner} alt="Photo de montagne" />
            </div>
            <div className="content">
            
            </div>
        </div>
    )
}
