import React from 'react'
import { motion } from "framer-motion";


export default function TeamCard({item, index}) {
  return (
		<motion.li
			initial={{ opacity: 0, scale: 0, x: "-100" }}
			animate={{ opacity: 1, scale: 1, x: 0 }}
			transition={{ duration: 0.5, delay: 0.1 * index }}
			class="rounded-lg bg-gray-900 py-10 px-6 text-center xl:px-10 xl:text-left mb-6 sm:mb-0"
		>
			<div class="space-y-6 xl:space-y-6">
				<div class="mx-auto rounded-full h-56 w-56 bg-gray-800 shadow-2xl">
					<img
						class="mx-auto rounded-full h-56 w-56 object-cover"
						src={`/images/${item.photo}`}
						alt={`FrogVille ${item.name} ${item.position}`}
					/>
				</div>
				<div class="space-y-2 text-center">
					<div class="space-y-1 text-lg font-medium leading-6">
						<h3 class="text-white text-xl">{item.name}</h3>
						<p class="text-indigo-400">{item.position}</p>
					</div>
				</div>
			</div>
		</motion.li>
	);
}