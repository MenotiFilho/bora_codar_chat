import React from "react";
import { PaperPlaneRight } from "phosphor-react";

function Bottom() {
	return (
		<div className=" flex flex-row items-center h-fit pt-2">
			<form className="bg-purple-600 flex w-screen rounded-full justify-between p-1 px-5">
				<input
					type="text"
					placeholder="Digite aqui"
					className="bg-transparent grow px-2"
				/>
				<button type="reset">
					<PaperPlaneRight size={32} />
				</button>
			</form>
		</div>
	);
}

export default Bottom;
