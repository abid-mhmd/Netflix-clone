function ReasonCard({title,description,Icon}){
    return (
        <div className="reason-card">
            <div className="reason-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            <div className="reason-icon">
                <Icon/>
            </div>
        </div>
    )
}

export default ReasonCard;