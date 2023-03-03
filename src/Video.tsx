import React, {useEffect, useState} from "react";

function Video(){



    const [showNum, SetShowNum] = useState(0);

    useEffect(() => {
        console.log("running useEffect");
        let i = 0;

        let interval = setInterval(increment, 1000);

        const stop = 10;

        function increment() {
            i = i + 1;

            if (i === stop) {
                //@ts-ignore
                i = "stop";
            }

            console.log(i);
            SetShowNum(i);
        }
    }, []);

    const handleEnded = () => {
        SetShowNum(10)
    }

    return(
        <div>
        <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            autoPlay
            muted={true}
            onEnded={handleEnded}
        />
        <a>{showNum}</a>
        </div>
    )
}

export default Video
