import './HomePage.scss';
import panini from '../../liste.json';


export type CardPlayer = {
    id: string
    joueur: string
    categorie: string
    picture: string //mettre string[] quand on ajoute plusieur photo
    descriptiom: string 

}
export const HomePage: React.FC = () => {

    return (
     <div className="HomePage">
        
            <h1>Squad</h1>  
         
         <div className="cards-container">
                {panini.map((panini:CardPlayer) =>(
                    <div className="card_player">
                        <img src={panini.picture} alt="Photo du joueur" />
                        <h2>{panini.joueur}</h2>
                    </div>
                ))
                
                }
         </div>
    </div>
    )
}