import React, {useState} from 'react'

export default function TexthtmlForm(props) {
const handleclick=()=>{
    console.log("uppper case is clicked")
    setText("you have clickd the button");
}
const handleOnChange=()=>{
    console.log("on change")
}
    const [text, setText ] = useState("enter text here");
  return (
   <> <div>
      <form>
  <div className="mb-3">
    <label htmlFor="MyMail" className="htmlForm-label">{props.heading} </label>
    <input type="text" className="text" value= {text } onChange={handleOnChange} />
    <div id="emailHelp" className="htmlForm-text">We'll never share your email with anyone else.</div>
  </div>
  <button className="btn btn primary" onClick ={handleclick} >uppper casee</button>
</form>
</div>
    </>
  )
}
