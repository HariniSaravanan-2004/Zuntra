import { useState } from 'react'

import API from '../services/api'

function CreatePin() {

  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      await API.post('/pins', {

        title,
        image

      })

      alert('Pin Created Successfully')

      setTitle('')
      setImage('')

    } catch (error) {

      console.log(error)

    }

  }

  return (

    <div className='form-container'>

      <h2>Create Pin</h2>

      <form onSubmit={handleSubmit}>

        <input
          type='text'
          placeholder='Enter title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type='text'
          placeholder='Enter image URL'
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type='submit'>
          Create Pin
        </button>

      </form>

    </div>

  )

}

export default CreatePin