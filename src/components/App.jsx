import React, {useState} from "react";
import Note from "./Note.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CreateArea from "./CreateArea.jsx";


function App(){

    const [noteItems, updateNoteItems] = useState([]);


    function addNote(note){
        if(note.title){
            updateNoteItems((prevNoteItems) => {
                return [...prevNoteItems, note];
            })
        }
    }


    function delNote(id){
        updateNoteItems((prevNoteItems) => {
           return prevNoteItems.filter((item, index) => {
                return index !== id;
            })
        })
    }

    

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {noteItems.map((noteItem, index) => <Note onDel={delNote} key={index} id={index} title={noteItem.title} content={noteItem.content}/>)}

            <Footer />
        </div>
    );
}


export default App;

