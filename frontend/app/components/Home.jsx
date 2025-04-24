import React, { useState } from 'react'

const Home = () => {
  const [state,setState] = useState("")

  return (
    <div>
       <h1>home</h1>
       <input onChange={(e)=>setState((pre)=>[...pre,e.target.value])} placeholder='enter name' type="text" />
       <button disabled={state == ""}>test</button>

       
        <ul data-testid="noteslist">
            {
              state && state.length > 0 ? 
                   state.map((note,i)=>{
                       return(
                         <li key={i} >{note}</li>
                       )
                   })
              : ""
            }
        </ul>
        <h1>heloo</h1>
       
    </div>
  )
}

export default Home
