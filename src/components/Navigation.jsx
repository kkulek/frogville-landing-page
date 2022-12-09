import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline/index.js";

const navigation = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Games", href: "#games" },
	{ name: "Team", href: "#team" },
	{ name: "Contact", href: "#footer" },
];

export default function Navigation() {
	return (
		<>
			<Popover className="fixed z-10 w-full top-0 py-4 bg-gray-800 shadow-md">
				<nav
					className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
					aria-label="Global"
				>
					<div className="flex flex-1 items-center">
						<div className="flex w-full items-center justify-between md:w-auto">
							<a href="#">
								<span className="sr-only">FrogVille</span>
								<img className="w-auto h-12" src="./images/logo.png" alt="" />
							</a>
							<div className="-mr-2 flex items-center md:hidden">
								<Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white">
									<span className="sr-only">Open main menu</span>
									<Bars3Icon className="h-8 w-8" aria-hidden="true" />
								</Popover.Button>
							</div>
						</div>
						<div className="hidden space-x-10 md:ml-10 md:flex">
							{navigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="block font-medium text-white hover:text-rose-500 text-left"
								>
									{item.name}
								</a>
							))}
						</div>
					</div>
				</nav>

				<Transition
					as={Fragment}
					enter="duration-150 ease-out"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="duration-100 ease-in"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<Popover.Panel
						focus
						className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
					>
						<div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
							<div className="flex items-center justify-between px-5 pt-4">
								<div>
									<img className="h-12 w-auto" src="./images/logo.png" alt="" />
								</div>
								<div className="-mr-2">
									<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
										<span className="sr-only">Close menu</span>
										<XMarkIcon className="h-8 w-8" aria-hidden="true" />
									</Popover.Button>
								</div>
							</div>
							<Popover.Button className="space-y-4 px-2 pt-2 pb-3 mt-10">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="block rounded-md px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 text-left"
									>
										{item.name}
									</a>
								))}
							</Popover.Button>
						</div>
					</Popover.Panel>
				</Transition>
			</Popover>
		</>
	);
}
