import React from 'react'
import GetInTouch from '../components/GetInTouch'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
  return (
    <div>
            <Helmet>
                <title>Contact | EquiSports</title>
            </Helmet>
        <GetInTouch/>
    </div>
  )
}

export default Contact