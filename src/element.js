function Element(props) {
    return (
        <div class="element">
            <h2>{props.element}</h2>
            <img src={props.image} alt={props.imageAlt}/>
            <p>{props.text}</p>
            <a href={props.link} class="btn btn-dark">Linkki projektiin</a>
        </div>);
}

export default Element;