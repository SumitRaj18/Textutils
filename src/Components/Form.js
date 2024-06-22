import React,{useState} from 'react'

export default function Form(props) {
    
    const up=()=> {
        console.log("buton clicked");
        let newtext= text.toUpperCase();
        setText(newtext)
        props.showAlert("Your Text is Converted To LowerCase","Success!")

    }
    const lower=()=> {
      console.log("buton clicked");
      let newtext= text.toLowerCase();
      setText(newtext)
      props.showAlert("Your Text is Converted To LowerCase","Success!")

  }
  const clear=()=> {
    console.log("buton clicked");
    let newtext= "";
    setText(newtext)
    props.showAlert("Your Text is Cleared","Success!")

}
    const onchange=(event) => {
        setText(event.target.value)
    }
    const[text,setText]= useState('Enter Text Here')
  return (
    <div style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" id="exampleFormControlTextarea1" onChange={onchange}  style={{ backgroundColor:props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}}value={text} rows="7"></textarea>
</div>
   <button type="button" className="btn btn-primary mx-3" onClick={up}>Convert to Uppercase</button>
   <button  type="button" className="btn btn-primary mx-3" onClick={lower}>Convert to Lowercase</button>
   <button  type="button" className="btn btn-primary mx-3" onClick={clear}>Clear</button>
    <br />
    <h1>Text Summary</h1>
    <p>{ text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
    <h1>Preview</h1>
    <p>{text}</p>
    </div>
  )
}
