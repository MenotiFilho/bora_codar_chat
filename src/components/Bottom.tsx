import React, { useState } from "react";
import { PaperPlaneRight } from "phosphor-react";

function Bottom() {
	const [messages, setMessages] = useState<string[]>([]);
	const [input, setInput] = useState<string>("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setMessages([...messages, input]);
		setInput("");
	};

	return (
		<div className=" flex flex-row items-center h-fit pt-2">
			<form
				onSubmit={handleSubmit}
				className="bg-purple-600 flex w-screen rounded-full justify-between p-1 px-5"
			>
				<input
					type="text"
					placeholder="Digite aqui"
					className="bg-transparent grow px-2"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button type="submit">
					<PaperPlaneRight size={32} />
				</button>
			</form>
		</div>
	);
}

export default Bottom;
