import React from "react";
import "./Story.css";

function Story(props) {
    return (
        <div className={"story " + props.pos}>
            <img
                className={"story_image" + props.pos}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1E5SKljnQvLKVwFk1dcOTKNBVGvbyDNl_qA&usqp=CAU"
                alt="img"
            />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
      </p>
        </div>
    );
}

export default Story;
