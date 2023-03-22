import React from "react";
import { Link } from "react-router-dom";


function FindMe() {
  return(
    <div>
      <Link to="https://github.com/MarceloFerreiraTrybe23B" target="_blank">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github icon" width="50px" />
      </Link>
      <Link to="https://www.linkedin.com/in/devmarceloferreira/" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png" alt="linkedin icon" width="40px"/>
      </Link>
    </div>
  )
}

export default FindMe;