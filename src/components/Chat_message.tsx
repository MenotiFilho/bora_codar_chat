import React from "react";

type ChatMessageProps = {
	user: string;
	isReceived: boolean;
	message: string;
	time: string;
};

function Chat_message({ user, isReceived, message, time }: ChatMessageProps) {
	const userClass = isReceived ? "text-end" : "";
	const sideClass = isReceived ? "ml-auto" : "";
	const messageClass = isReceived
		? "font-semibold bg-green-600 p-3 rounded-xl rounded-tr-sm"
		: "font-semibold bg-purple-600 p-3 rounded-xl rounded-tl-sm";

	return (
		<div>
			<div className={`w-3/4 ${sideClass}`}>
				<div className={`text-sm font-extralight ${userClass}`}>{user}</div>
				<div className={messageClass}>
					<p>{message}</p>
				</div>
				<p className="text-xs text-end font-extralight mr-2">{time}</p>
			</div>
		</div>
	);
}

export default Chat_message;
