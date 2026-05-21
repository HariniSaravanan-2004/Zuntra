function PinCard({ pin }) {

  return (

    <div className='pin-card'>

      <img src={pin.image} alt={pin.title} />

      <h3>{pin.title}</h3>

    </div>

  )

}

export default PinCard