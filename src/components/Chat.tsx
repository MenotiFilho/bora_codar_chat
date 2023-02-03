import React, { useEffect, useRef } from "react";
import Chat_message from "./Chat_message";

function Chat() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
		}
	}, []);

	return (
		<div
			ref={containerRef}
			className="flex flex-col flex-grow overflow-auto scrollbar-hide max-h-screen "
		>
			<div className="self-center">Hoje 11:30</div>

			<div className=" mt-5 flex flex-col">
				<Chat_message
					user="Cecília"
					message="Mensagem aleatória que a Cecília me enviou."
					isReceived={false}
					time="13:28"
				/>
				<Chat_message
					user="Você"
					message="Mensagem aleatória que a Cecília me enviou."
					isReceived
					time="13:30"
				/>
			</div>
		</div>
	);
}

export default Chat;
