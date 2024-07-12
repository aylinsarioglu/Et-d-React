const Card = (props) => {
 return (
    <div className="card">
     <img src={props.item.image} />     

     <div className="body">
        <h4>{props.item.title} </h4>
        <h3> {props.item.category} </h3>
     </div>
    </div>
 );
};

export default Card;