import Image from "next/image";
import Reveal from "../shared/Reveal";

const Card = ({ image, imgAlt, width, height, text }: any) => {
	return (
		<div className="flex-shrink-0 flex flex-col items-center">
			<Image
				src={image}
				alt={imgAlt}
				width={width}
				height={height}
			/>
			<Reveal>
				<p className="md:max-w-[350px] text-lg md:text-xl font-medium mt-5">
					{text}
				</p>
			</Reveal>
		</div>
	);
};

export default Card;
