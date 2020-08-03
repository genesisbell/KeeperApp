import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateNote(props){

    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });

    const [isOpen, setOpen] = useState(false)

    function handleChange(event){
        const {name, value} = event.target;
        setInputText(prevValue => {
            return{
                ...prevValue,
                [name]: value
            }
        })
    }

    function handleSumbit(event){
        event.preventDefault();
    }

    function handleIsOpen(){
        setOpen(true)
    }

    return(
        <div>
            <form onSubmit={handleSumbit} className="create-note">
                <input name="title" placeholder="Title" onChange={handleChange} value={inputText.title} autoComplete="off" type={isOpen ? "text" : "hidden"}/>
                <textarea name="content" placeholder="Take a note..." rows={isOpen ? "3" : "1"} onChange={handleChange} onClick={handleIsOpen} value={inputText.content}/>
                <Zoom in={isOpen}>
                    <Fab onClick={() =>{ 
                        props.addNote(inputText);
                        setInputText({title: "", content: ""});
                    }} ><AddIcon/></Fab>
                </Zoom>                
            </form>
        </div>
    );
}

export default CreateNote;