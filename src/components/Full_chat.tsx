import React from "react";
import Bottom from "./Bottom";
import Chat from "./Chat";
import Top from "./Top";

function Full_chat() {
	return (
		<div className=" flex flex-col h-full">
			<Top></Top>
			<Chat></Chat>
			<Bottom></Bottom>
		</div>
	);
}

export default Full_chat;
