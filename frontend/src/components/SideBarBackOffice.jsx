import React from 'react'
import logo from '../assets/logo-matchroom.png'

export default function Sidebar() {
    return (
        <aside className="bg-white w-20 md:w-56 h-screen flex flex-col items-center py-6 shadow-md">
            {/* Logo */}
            <div className="mb-10">
                <img src={logo} alt="Logo" className="w-10 md:w-16" />
            </div>

            {/* Navigation */}
            <nav className="flex flex-col items-center md:items-start w-full gap-10 px-2 md:px-4">
                <a
                    href="#"
                    className="flex flex-col md:flex-row items-center md:justify-start gap-1 md:gap-3 text-purple-900 hover:text-purple-700"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v10H3V11zm2 2v6h14v-6H5z" />
                    </svg>
                    <span className="hidden md:inline">Planning</span>
                </a>

                <a
                    href="#"
                    className="flex flex-col md:flex-row items-center md:justify-start gap-1 md:gap-3 text-purple-900 hover:text-purple-700"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 2v2h3.59L12 8.59 7.41 4H11V2H4v7h2V5.41l5 5L6.41 16H4v7h7v-2H7.41l5-5 5 5H13v2h7v-7h-2v2.59l-5-5 5-5V9h2V2h-7z" />
                    </svg>
                    <span className="hidden md:inline">Négociation</span>
                </a>

                <a
                    href="#"
                    className="flex flex-col md:flex-row items-center md:justify-start gap-1 md:gap-3 text-purple-900 hover:text-purple-700"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.14 12.936a7.954 7.954 0 000-1.873l2.036-1.59a.5.5 0 00.12-.65l-1.928-3.338a.5.5 0 00-.607-.22l-2.396.96a8.12 8.12 0 00-1.618-.938l-.36-2.54A.5.5 0 0014.89 2h-3.78a.5.5 0 00-.495.425l-.36 2.54a8.089 8.089 0 00-1.618.938l-2.396-.96a.5.5 0 00-.607.22L2.704 8.823a.5.5 0 00.12.65l2.036 1.59a7.954 7.954 0 000 1.873l-2.036 1.59a.5.5 0 00-.12.65l1.928 3.338a.5.5 0 00.607.22l2.396-.96c.5.37 1.047.69 1.618.938l.36 2.54a.5.5 0 00.495.425h3.78a.5.5 0 00.495-.425l.36-2.54c.571-.247 1.118-.567 1.618-.938l2.396.96a.5.5 0 00.607-.22l1.928-3.338a.5.5 0 00-.12-.65l-2.036-1.59zM12 15a3 3 0 110-6 3 3 0 010 6z" />
                    </svg>
                    <span className="hidden md:inline">Paramètre</span>
                </a>
            </nav>

            {/* Footer */}
            <div className="mt-auto mb-4 text-[10px] text-gray-400 hidden md:block">
                ©2025 MATCHROOM ALL RIGHT
            </div>
        </aside>
    )
}
