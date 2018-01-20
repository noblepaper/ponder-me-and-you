import React from "react";
import glamorous from "glamorous";
import { colors, mediaQueries } from "../../styles/global";

export default function Thumbnail(props) {
    ///////// STYLES \\\\\\\\\\
    const MemeThumbnail = glamorous.img({
        display: "inline",
        height: "250px",
        width: "250px",
        border: `5px solid ${colors.cream}`,
        [mediaQueries.medium]: {
            height: "300px",
            width: "300px",
        },
        // [mediaQueries.small]: {
        //     height: "300px",
        //     width: "300px",
        // }

    });
    ////////////////////////////////
    return (
        <MemeThumbnail src={props.meme.pictureUrl}/>
    );
}
