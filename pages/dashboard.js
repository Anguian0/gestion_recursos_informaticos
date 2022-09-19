import Cabecera from "/components/cabecera";
import Head from "next/head";
import Link from "next/link";

export default function Dashboard() {
    return (
        <>
            <Head>
                <title>Dashboard</title>
                <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" />
            </Head>
            <Cabecera />

            <div className="bg-slate-300 m-6 rounded-lg p-2.5 lg:px-6 px-4 flex justify-between">
                <Link href="/inicio">
                    <div className="self-center bg-gray-100 lg:p-2 lg:px-4 p-3 px-4 rounded-lg flex cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>

                        Regresar
                    </div>
                </Link>
                <div className="px-4 rounded-lg flex py-2 justify-evenly bg-gray-100 right-0">
                    <Link href="/dashboard">
                        <img
                            className="inline-block h-7  w-7 rounded-full ring-2 ring-slate-300 cursor-pointer"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                    </Link>
                    <Link href="/dashboard">
                        <p className="self-center lg:px-5 px-2 cursor-pointer">Julio C.</p>
                    </Link>
                    <Link href="/">
                        <svg
                            className="w-6 h-6 self-center cursor-pointer"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            ></path>
                        </svg>
                    </Link>
                </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 text-center mx-6">
                <div className="p-6 bg-slate-300 rounded-lg">1</div>
                <div className="p-6 bg-slate-300 rounded-lg">1</div>
                <div className="p-6 bg-slate-300 rounded-lg">1</div>
                <div className="p-6 bg-slate-300 rounded-lg">1</div>

                
<button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" class="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white" type="button">
    <span class="sr-only">Open user menu</span>
    <img class="mr-2 w-8 h-8 rounded-full" src="/mouse.webp" alt="user photo"/>
    Bonnie Green
    <svg class="w-4 h-4 mx-1.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>

<div id="dropdownAvatarName" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"  data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
    <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
      <div class="font-medium ">Pro User</div>
      <div class="truncate">name@flowbite.com</div>
    </div>
    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div class="py-1">
      <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
    </div>
</div>


            </div>

        </>
    )
}