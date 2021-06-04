/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const policies = [
  {
    name: "Biden Administration Plan",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "CRES Climate Agenda",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "SBA Green Recovery Fund",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Green New Deal",
    href: "#",
    icon: RefreshIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description: "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description: "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description: "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  { name: "Security", description: "Understand how we take your privacy seriously.", href: "#", icon: ShieldCheckIcon },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  { id: 2, name: "How to use search engine optimization to drive traffic to your site", href: "#" },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RepeatHeader() {
  return (
    <Popover className="fixed w-screen top-0 border-t-8 border-black bg-black bg-opacity-75">
      {({ open }) => (
        <>
          <div className="container max-w-screen-lg mx-auto pt-4 md:px-1 sm:px-6">
            <div className="flex justify-between items-center md:pt-6 pb-4 md:justify-start md:space-x-10">
              <div className="flex justify-start pl-2 md:pl-0 lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="text-repeat text-xl font-bold">REPEAT</span>
                  <span className="text-repeat-light text-xs md:text-sm md:pl-3 md:inline-block block">
                    Rapid Energy Policy Evaluation and Analysis Toolkit
                  </span>
                </a>
              </div>
              <div className="pr-2 -mt-4 md:hidden">
                <Popover.Button className="p-2 inline-flex items-center justify-center text-repeat hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <a
                  href="#"
                  className="text-base font-medium border-b-4 border-transparent text-white hover:border-b-4 hover:border-repeat"
                >
                  About
                </a>
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open
                            ? "text-white"
                            : "font-medium border-b-4 border-transparent text-white hover:border-b-4 hover:border-repeat",
                          "group inline-flex items-center text-base font-medium hover:text-white focus:outline-none"
                        )}
                      >
                        <span>Policies</span>
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-xs sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        >
                          <div className="overflow-hidden">
                            <div className="relative grid gap-3 bg-white px-3 py-3 sm:gap-4 sm:p-4">
                              {policies.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 p-3 flex items-start hover:bg-repeat-light"
                                >
                                  {/* <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" /> */}
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-black">{item.name}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <a
                  href="#"
                  className="text-base font-medium border-b-4 border-transparent text-white hover:border-b-4 hover:border-repeat"
                >
                  Media
                </a>
                <a
                  href="#"
                  className="text-base font-medium border-b-4 border-transparent text-white hover:border-b-4 hover:border-repeat"
                >
                  NZAP
                </a>
              </Popover.Group>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-repeat text-xl font-bold">REPEAT</span>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white p-2 inline-flex items-center justify-center text-repeat hover:text-gray-500 hover:bg-gray-100 focus:outline-none ">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {policies.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 px-3 py-2 flex items-center hover:bg-gray-50"
                        >
                          {/* <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" /> */}
                          <span className="text-base font-medium text-gray-900">{item.name}</span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
