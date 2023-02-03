import React from "react";
import Avatar from "avataaars";
import { generateRandomAvatarOptions } from "../avaatars";
import { Circle, X } from "phosphor-react";

function Top() {
	return (
		<div className=" flex flex-row items-center justify-between h-fit">
			<div className=" flex flex-row items-center">
				<Avatar
					style={{ width: "3rem", height: "3rem" }}
					avatarStyle="Circle"
					{...generateRandomAvatarOptions()}
				/>
				<div className=" flex flex-col justify-center">
					<div className="font-bold text">Cecilia Sassaki</div>
					<div className=" flex items-baseline font-normal text-sm text-green-500 gap-1">
						<Circle size={9} weight="fill" />
						Online
					</div>
				</div>
			</div>
			<button>
				<X size={32} />
			</button>
		</div>
	);
}

export default Top;
