// rafc

import React from 'react'

const YoutubeForm:React.FC = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="username">Username</label>
        <input type="text" id='username' name='username' />

        <label htmlFor="email">Email</label>
        <input type="text" id='email' name='email' />

        <label htmlFor="channel">Channel</label>
        <input type="text" id='channel' name='channel' />

        <button></button>
      </form>
    </div>
  )
}

export default YoutubeForm
