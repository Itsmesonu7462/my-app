import React, {useState} from 'react'

export default function TexthtmlForm(props) {
const handleclick=()=>{
    console.log("uppper case is clicked" + text);
    let newText =text.toUpperCase();
    setText(newText);
}
const handleOnChange=(event)=>{
    console.log("on change");
    setText(event.target.value);
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
