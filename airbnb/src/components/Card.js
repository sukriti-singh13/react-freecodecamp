
import star from "../img/star.png"


export default function Card (props){

    let badgeText
    if(props.openSpots===0){
        badgeText="SOLD OUT"
    }else if(props.location==="Online"){
        badgeText="Online"
    }
    else{
        badgeText=""
    }
    return(
       
        <section className="card-section">
         {badgeText && <div className="badge">{badgeText}</div>}
            <img src={`img/${props.coverImg}`} alt="img"/>
            <div claasname="img-stats">
                <img className="star-icon" src={star}/>
                <span className="rating">{props.stats.rating}</span>
                <span className="stats">({props.stats.reviewCount})</span>
                <span className="stats">.{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p className="price-text"><b>From ${props.price}</b> / person</p>
         
        </section>
       
    )
}