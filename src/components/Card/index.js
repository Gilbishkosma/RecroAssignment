import './index.css'


// component to display the data
const DataDisplay = ({title,value}) => <>
    <h3 className="heading">{title}</h3>
    <p className="paragraph">{value}</p>
    </>


const Card = ({userId,id,title}) => {
    return <div className="card">
    <DataDisplay title="Count: " value={id} />
    <DataDisplay title="UserId: " value={userId} />
    <DataDisplay title="Title: " value={title} />
    </div>
}


export default Card