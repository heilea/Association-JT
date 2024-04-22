import './HomePage.scss';
import peiture from '../../assets/peiture.jpg';


export const HomePage: React.FC = () => {

    return (
     <div className="HomePage">
        <img src={peiture} alt="peiture" />
         <h1>Something</h1>   
     </div>
    )
}