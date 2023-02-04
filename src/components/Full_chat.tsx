import React from "react";
import Bottom from "./Bottom";
import Chat from "./Chat";
import Top from "./Top";

function Full_chat() {
	return (
		<div className="min-w-[320px] max-w-[365px] sm:max-w-3xl lg:max-w-5xl flex flex-col h-full">
			<Top></Top>
			<Chat></Chat>
		</div>
	);
}

export default Full_chat;
