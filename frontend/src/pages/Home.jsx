import { useEffect, useState } from 'react'

import API from '../services/api'

import PinCard from '../components/PinCard'

function Home() {

  const [pins, setPins] = useState([])

  useEffect(() => {

    API.get('/pins')

      .then((res) => {

        setPins(res.data)

      })

      .catch((err) => {

        console.log(err)

      })

  }, [])

  return (

    <div className='home'>

      <div className='pin-grid'>

        {

          pins.map((pin) => (

            <PinCard key={pin._id} pin={pin} />

          ))

        }

      </div>

    </div>

  )

}

export default Home