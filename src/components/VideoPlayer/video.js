import React from "react";
import Plyr from "plyr-react";
import { useRef } from "react";
import "plyr-react/plyr.css";

function Video({ video }) {
    const ref = useRef()
    return (
        <div>
            {video ? (
                <Plyr
                    // ref={ref}
                    source={{
                        type: "video",
                        sources: [
                            {
                                src: video.key,
                                provider: "youtube",
                            },
                        ],
                    }}
                />
            ) : null}
        </div>
    );
}

export default Video;