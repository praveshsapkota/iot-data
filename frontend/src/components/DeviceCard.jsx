const DeviceCard = ({ image, name, current, voltage, temp, values }) => {
    return (
        <div className="card" style={{
            backgroundColor: "white", maxHeight: "450px", Width: "800px",
            display: "flex", flexDirection: "column",
            padding: "10px",
            margin: "5px",
            borderRadius: "5px",
            textAlign: "center"
        }}>
            <img src={image} width={200} height={200}></img>
            <span style={{ color: 'black', margin: "5px 0px" }}>Device name : <span style={{ fontWeight: "bold" }}>{name}</span></span>
            <div style={{ display: "flex", justifyContent: "space-evenly", padding: "2px", marginBottom: "2px" }}>
                <span style={{ color: 'black' }}>Current : <span style={{ fontWeight: "bold" }}>{Math.floor(current + Math.random() * 6)}</span></span>
                <span style={{ color: 'black' }}>Voltage : <span style={{ fontWeight: "bold" }}>{Math.floor(voltage + Math.random() * 5)}</span></span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly", padding: "2px", marginBottom: "2px" }}>
                <span style={{ color: 'black' }}>Temperature : <span style={{ fontWeight: "bold" }}>{Math.floor(temp + Math.random() * 12)}</span></span>
                <span style={{ color: 'black' }}>Values : <span style={{ fontWeight: "bold" }}>{Math.floor(values + Math.random() * 20)}</span></span>
            </div>
        </div>
    )
}

export default DeviceCard