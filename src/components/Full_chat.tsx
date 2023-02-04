import React from "react";
import Bottom from "./Bottom";
import Chat from "./Chat";
import Top from "./Top";

function Full_chat() {
	return (
		<div className=" max-w-sm lg:max-w-5xl flex flex-col h-full">
			<Top></Top>
			<Chat></Chat>
		</div>
	);
}

export default Full_chat;
