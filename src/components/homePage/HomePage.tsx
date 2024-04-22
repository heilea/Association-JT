import './HomePage.scss';
import peinture from '../../assets/peinture.jpg';


export const HomePage: React.FC = () => {

    return (
     <div className="HomePage">
         <div className="tilte-padding">
            <h1 className='titlename'>Something</h1>  
            <img src={peinture} alt="peiture" />
         </div>
         <div className="card-container"></div>


     </div>
    )
}