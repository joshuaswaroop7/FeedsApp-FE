import React from 'react'
import { Button } from 'react-bootstrap'

function UserComponent() {
  return (
    <div>
       <h1>Your Feeds</h1>
       <div className='space_buttons'>
       <Button>Create Post</Button><br></br>
       </div>
       <div className='space_buttons'>
       <Button>View My Post</Button><br></br>
       </div>
       <div className='space_buttons'>
       <Button>View Other User Post</Button>
       </div>
    </div>
    
  )
}

export default UserComponent