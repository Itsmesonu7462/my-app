import React, {useState} from 'react'
let heading= 'hello'
export default function TexthtmlForm(props) {
const handleclick=()=>{
    console.log('uppper case is clicked' + text);
    let newText =text.toUpperCase();
    setText(newText);
}  
const handleOnChange=(event)=>{
    console.log('on change');
    setText(event.target.value);
}
const handleloClick=()=>{
  let newText2 = text.toLowerCase();
  setText(newText2);
}
    const [text, setText ] = useState('enter text here');
    const removeExtraSpc=()=>{
      let NewText = text.split(/[' ']+/);
      setText(NewText.join(' '));
    }
  return (
   <> <div>
    <form>
  <div className='container my-3'>
    <label htmlFor='MyMail' className='htmlForm-label'><h1>{heading}</h1> </label> <br />
    <input type='textArea' className='text' value= {text } onChange={handleOnChange} />
   
  </div>
  <button className='btn btn-primary mx-2' onClick ={handleclick} >UPPER CASE</button> 
  <button className='btn btn-primary mx-2' onClick ={handleloClick} >LOWER CASE</button> 
  <button className='btn btn-primary mx-2' onClick ={removeExtraSpc} >REMOVE EXTRA SPACE</button> 
</form>
</div>
<div className='container my-4'>
  <h1>text summary</h1>
  <p>{text.length} characters in it including space and {text.split(' ').length} words in it</p>
  <p>{0.008 * text.split(' ').length} minutes read. </p>
  <h2>preview</h2>
  <p>{text}</p>
</div>
    </>
  )
}
