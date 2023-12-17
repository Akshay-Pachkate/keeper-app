import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props){

    const [note, writeNote] = useState({
        title: "",
        content: "",
    });

    const [takingNote, setTakingNoteStatus] = useState(false);

    function handleChange(event){
        const {name, value} = event.target;
        writeNote((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        });

    }

    function handleClick(event) {
        
        props.onAdd(note);

        writeNote({title: "", content: ""});

        setTakingNoteStatus(false);
        event.preventDefault();
      }


    
    


    return (
        <div>
            <form className="create-note">
                {
                    takingNote && <input 
                    type="text" 
                    onChange={handleChange} 
                    name="title" 
                    placeholder="Title" 
                    value={note.title}
                    />
                }

                <textarea 
                onClick={() => {
                    setTakingNoteStatus(true);
                }}
                name="content" 
                onChange={handleChange} 
                placeholder="Take a note..."  
                rows={takingNote ? "3": "1"} 
                value={note.content}
                />

                <Zoom in={takingNote}>
                    <Fab 
                    type="submit" 
                    onClick={handleClick}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;