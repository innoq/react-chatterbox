import React from "react";
import Title from "./common/Title";
import Subtitle from "./common/Subtitle";
import NicknameSelector from "./NicknameSelector";

export default function Chatterbox() {
    return <span>
        <Title>Chatterbox</Title>
        <Subtitle>A super fancy react chat</Subtitle>
        <NicknameSelector />
    </span>;
}