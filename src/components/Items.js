import './Items.css';


function Items(props) {
    const itemName = props.name

    return(
    <div>
        <p className="nirma">{itemName}</p>
        {props.children}
    </div>
    
    );

    
}

export default Items;