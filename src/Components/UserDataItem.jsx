
let UserDataItem = (props) => {
    return (
        <div className="user-data-item">
            <span className="title">{props.title}</span>
            <span className="value">{props.value}</span>
        </div>
    )
}

export default UserDataItem;