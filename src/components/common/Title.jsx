import React from "react";

export default function Title(props){
    const { isSubtitle, children } = props;
    const titleElement = isSubtitle ? "h2" : "h1";

    return React.createElement(titleElement, undefined, ...children);
}