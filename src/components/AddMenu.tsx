"use client"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import PlusSVG from "@/assets/plus.svg"
import Image from 'next/image'

export default function AddMenu({ sections, createSection }: any) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 bg-violet-900 p-3 rounded-full hover:opacity-80 text-sm font-semibold text-gray-900 shadow-sm ">
                    <Image src={PlusSVG} alt="Add Section" className="w-6 h-6" />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-12 bottom-12 z-10 mt-2 w-56  rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="py-1">
                    {sections && sections.map((section: any, i: any) => {
                        return (
                            <MenuItem key={i}>
                                <button
                                    className="block px-4 py-2 w-full text-left text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                    onClick={() => { createSection(section) }}
                                >
                                    {section}
                                </button>
                            </MenuItem>
                        )
                    })}
                </div>
            </MenuItems>
        </Menu>
    )
}
