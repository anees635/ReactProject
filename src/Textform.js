import React, {useState} from 'react'
import './Textarea.css';

export default function Textarea(props) {
    const changeToUp= ()=>{
       
        let newText= text.toUpperCase();
        setText(newText);
        props.makealert("Converted to Uppercase", "success")
    };
    const changeTolower= ()=>{
        
        let newText1= text.toLowerCase();
        setText(newText1);
        props.makealert("Converted to Lowercase", "success")
    };
    const toSentenceCase= ()=> {
        let newText2= text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(newText2);
        props.makealert("Converted to Sentencecase", "success")
      }
    const funconChange= (event)=>{
        setText(event.target.value);
    };
    const clearAllText = ()=>{
         let newtext ="";
         setText(newtext);
         props.makealert("Clear All text", "success")
    }
    const clearText = ()=>{
      let newtext =text.slice(0,(text.length-1));
      setText(newtext);
       props.makealert("Clear character", "success")
 }
    let count="true";
    const strikeThroughall =()=>{
       
        let textarea = document.querySelector(".text");
        if(count === "true"){
           textarea.classList.add("strikeThrough");
           count="false";
        }
        else{
          textarea.classList.remove("strikeThrough");
          count="true";
        }
       
    }
    const [text, setText] =useState("");

  return (
    <>
       <div > 
         <div class="form-check form-switch modeBtn">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.func}/>
            <label className="form-check-label" for="flexSwitchCheckDefault">{props.btntext}</label>
        </div>
       </div>
    
      <div className="mb-3 container my-3 " style={props.style}>
        <h1>{props.heading}</h1>
         <textarea className="text container" style={props.style} value={text} onChange={funconChange} id="Textarea1" placeholder='Enter text..' rows="8" cols="100" ></textarea>
         <div>
         <button className="btn btn-primary" onClick={changeToUp}>Convert to Uppercase</button>
         <button className="btn btn-primary mx-3" onClick={changeTolower}>Convert to Lowercase</button>
         <button className="btn btn-primary " onClick={toSentenceCase}>Convert to ScentenceCase</button>
         <button className="btn btn-primary mx-3" onClick={clearAllText}>Clear All Text</button>
         <button className="btn btn-primary " onClick={clearText}>Clear Text</button>
         <button className="btn btn-primary my-3" onClick={strikeThroughall}>Strike Through all text</button>
         </div>
         <div>
         
         </div>
      </div>
      <div className='container' style={props.style}>
         <h2>Summary Of your Text</h2>
         <p>{text.split(" ").length-1} words</p>
         <p>{text.length} characters</p>
         <p>{0.008 * text.split(" ").length} Minutes to read</p>
         <h2>Preview</h2>
         <p className='container preview' style={props.border} >{text}</p>
      </div>
      <div>
        
      </div>
      
    </>
  )
}
