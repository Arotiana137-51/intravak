
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown (props) {
  return (
    <Menu as="div" className="relative  text-left">
      <div>
        <Menu.Button className="inline-flex w-full   px-4 py-2 text-sm font-medium text-black md:text-white bg-transparent  hover:text-orange-500 focus:ring-2 focus:ring-orange-700 focus:ring-offset-2 focus:ring-offset-gray-100">
        {props.title}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-orange-900 shadow-lg ring-1 ring-orange-900 ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg--orange-900 text-orange-500' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Notes de service
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href={'/frontoffice'}><a
                 
                  className={classNames(
                    active ? 'bg-orange-900 text-orange-500' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Arrêté
                </a></Link>
                
              )}
            </Menu.Item>
           
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
};
