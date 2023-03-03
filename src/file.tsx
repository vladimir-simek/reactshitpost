import React from "react";
import {useState} from "react";

function File(){

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    //@ts-ignore
    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        console.log(event.target.files[0].name)
        //setIsSelected(true);
    };

    const handleSubmission = () => {
    };

    return(
        <div>
            <input type="file" name="file" onChange={changeHandler} />
            <div>
                <button onClick={handleSubmission}>Submit</button>
            </div>
        </div>
    )
}

export default File
