import React from "react";
import Bottom from "./Bottom";

type ChatMessageProps = {
	user: string;
	isReceived: boolean;
	message: string;
	time: string;
};

function Chat_message({ user, isReceived, message, time }: ChatMessageProps) {
	const userClass = isReceived ? "" : "text-end";
	const timeClass = isReceived ? "text-end mr-2" : "text-start ml-2";
	const side = isReceived ? "" : "ml-auto";
	const messageClass = isReceived
		? "font-semibold bg-purple-600 p-3 rounded-xl rounded-tl-sm"
		: "font-semibold bg-green-600 p-3 rounded-xl rounded-tr-sm";

	return (
		<div>
			<div className={`w-3/4 ${side}`}>
				<div className={`text-sm font-extralight ${userClass}`}>{user}</div>
				<div className={`break-words ${messageClass}`}>
					<p>{message}</p>
				</div>
				<p className={`text-xs font-extralight ${timeClass}`}>{time}</p>
			</div>
		</div>
	);
}

export default Chat_message;
