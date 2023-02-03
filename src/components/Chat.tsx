import React, { useEffect, useRef, useState } from "react";
import Chat_message from "./Chat_message";
import { PaperPlaneRight } from "phosphor-react";

function Chat() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [messages, setMessages] = useState<string[]>([]);
	const [input, setInput] = useState<string>("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setMessages([...messages, input]);
		setInput("");
	};

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
		}
	}, [messages]);

	return (
		<div className="flex flex-col  overflow-auto h-screen">
			<div
				ref={containerRef}
				className="flex flex-col flex-grow overflow-auto scrollbar-hide h-full max-h-screen "
			>
				<div className="self-center">Hoje 11:30</div>
				<div className=" mt-5 flex flex-col">
					<Chat_message
						user="Cecília"
						isReceived
						message="Olá, tive uma idéia para um app incrível!!"
						time="13:20"
					></Chat_message>
					{messages.map((messages, key) => (
						<Chat_message
							user="Você"
							isReceived={false}
							key={key}
							message={messages.slice()}
							time="13:20"
						/>
					))}
				</div>
			</div>
			<div className=" flex flex-row items-center py-1 px-1">
				<form
					onSubmit={handleSubmit}
					className="bg-purple-600 flex w-screen rounded-full justify-between p-1 px-4 focus:outline focus-within:outline"
				>
					<input
						type="text"
						placeholder="Digite aqui"
						className="bg-transparent grow outline-none"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<button type="submit">
						<PaperPlaneRight size={32} />
					</button>
				</form>
			</div>
		</div>
	);
}

export default Chat;
