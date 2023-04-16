import React, { Fragment, useState } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { languageData } from "@/data/language.data"
import Link from "next/link"
import { useRouter } from "next/router"

export const LangSelect = () => {
  const [selected, setSelected] = useState(languageData[0].title)
  const router = useRouter()
  const path = router.route

  return (
    <div className="w-24 cursor-pointer">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-pointer focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected}</span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {languageData.map((item) => (
                <Link href={path} locale={item.locale} key={item.id}>
                  <Listbox.Option
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-4  ${
                        active ? "bg-indigo-400 text-white" : "text-indigo-900"
                      }`
                    }
                    value={item.title}
                  >
                    {({ selected }) => (
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item.title}
                      </span>
                    )}
                  </Listbox.Option>
                </Link>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
