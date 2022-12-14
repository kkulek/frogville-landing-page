import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { isDesktop } from "react-device-detect";

export default function TeamCard({ item, index }) {
	const [isItDesktop, setIsItDesktop] = useState(true);

	useEffect(() => {
		isDesktop ? setIsItDesktop(true) : setIsItDesktop(false);
	}, []);

	const body = (
		<div className="space-y-6 xl:space-y-6">
			<div className="mx-auto rounded-full h-56 w-56 bg-gray-800 shadow-2xl hover:scale-105 transition-all duration-500">
				<img
					className="mx-auto rounded-full h-56 w-56 object-cover"
					src={`/images/${item.photo}`}
					alt={`FrogVille ${item.name} ${item.position}`}
				/>
			</div>
			<div className="space-y-2 text-center">
				<div className="space-y-1 text-lg font-medium leading-6">
					<h3 className="text-white text-xl">{item.name}</h3>
					<p className="text-rose-500">{item.position}</p>
				</div>
			</div>
		</div>
	);

	const staticContainer = (
		<div className="rounded-lg bg-gray-900 py-10 px-6 text-center xl:px-10 xl:text-left mb-6 sm:mb-0 shadow-md shadow-gray-900">
			{body}
		</div>
	);

	const animatedContainer = (
		<motion.div
			initial={{ opacity: 0, scale: 0, x: "-100" }}
			animate={{ opacity: 1, scale: 1, x: 0 }}
			transition={{ duration: 0.5, delay: 0.1 * index }}
			className="rounded-lg bg-gray-900 py-10 px-6 text-center xl:px-10 xl:text-left mb-6 sm:mb-0 shadow-md shadow-gray-900"
		>
			{body}
		</motion.div>
	);

		

	return <>{isItDesktop ? animatedContainer : staticContainer}</>;
}
