function Card(props) {
  return (
    <div className="col-3 card">
      <img src={props.imageUrl} className="card-img-top" alt="food"/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  )
}

export default Card;