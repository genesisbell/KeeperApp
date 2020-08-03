import React, { useState } from "react"
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";

function App(){

    const [notes, setNotes] = useState([]);

    function addNote(inputText){
        setNotes(prevValue => {
            return[...prevValue, inputText]
        })

    }

    function deleteNote(id){
        setNotes(prevValue => {
            return notes.filter((note, index) => {
                return (index !== id)
            })
        })
    }


    return(
        <div>
            <Header />
            <CreateNote addNote={addNote}/>
            {notes.map((note, index) => (
                <Note 
                key={index} 
                id={index}
                title={note.title} 
                content={note.content}
                handleDelete={deleteNote}
                />
            ))}
            <Footer />
        </div>
    )
}

export default App;