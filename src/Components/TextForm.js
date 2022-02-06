import React,{useState} from 'react'
export default function TextForm(props) {
    const [text, setText]=useState('');
    const handleUpClick = ()=>{
        // console.log("Upper Case was clicked "+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case!!","success");
    }
    const handleLowClick = ()=>{
        // console.log("lower Case was clicked "+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case!!","success");
    }
    const handleExtraSpaces= ()=>{
        // console.log("On Change");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces are Removed !!","success");
        
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);

    }
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="Mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your text have</h2>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p> {0.008*text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox to have a preview"}</p>
        </div>
       </> 
    )
}
