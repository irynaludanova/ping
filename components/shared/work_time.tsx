import React, { Fragment, useState } from "react"
import { useLocale } from "@/hooks"
import { Popover, Transition } from "@headlessui/react"

export const WorkTime = () => {
  const t = useLocale()
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
              ${open ? "" : "text-opacity-90"}
              group inline-flex items-center rounded-md  px-3 py-2 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span> {t.hours}</span>
            <svg
              className="w-4 mx-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-48 px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="flex flex-col items-center p-4 text-center bg-gray-50">
                  <p className="px-2 py-1 ">{t.mode}</p>
                  <p className="px-2 py-1 ">{t.time}</p>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default WorkTime
