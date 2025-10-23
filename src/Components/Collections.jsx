export default function Collection({jolli}) {
    return(
        <div className="collection-container">
            <div className="trophy">
                <img src={jolli.image} width={300} height={300}></img>
                <h1>{jolli.name}</h1>
            </div>
        </div>
    )
}