import { FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import {Link} from "react-router";

export default function FooterView() {
    return (
        <footer className="bg-[#0D1321] text-white py-10 rounded-2xl mt-10">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                {/* Logo + Navigation */}
                <div className="flex flex-col md:flex-row items-center md:space-x-16">
                    <div className="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M5 3l14 9-14 9V3z" fill="currentColor" />
                        </svg>
                        <span className="text-xl font-semibold">Mouammar Soulé</span>
                    </div>
                    <nav className="flex space-x-8 mt-4 md:mt-0 text-sm text-gray-300">
                        <a href="https://gitlab.com/mouammar8080ni/kill_them_cold" className="hover:text-white">Kill Them Cold</a>
                        (
                        <li>
                            <Link to="/contact" className="hover:text-blue-300">Contact</Link>
                        </li>
                        <a href="https://fr.wikipedia.org/wiki/Comores_(pays)" className="hover:text-white">Skills</a>
                        <a href="https://www.facebook.com/noma.papao" className="hover:text-white">Blog</a>
                        <a href="https://www.groupe-idea.com/fr" className="hover:text-white">Travail</a>
                    </nav>
                </div>

                {/* Réseaux sociaux */}
                <div className="flex space-x-4 items-center">
                    <div className="bg-[#5B5BFF] p-2 rounded-full text-white">
                        <a href="https://x.com/Mouammar8080" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter />
                        </a>
                    </div>
                    <div className="bg-[#1F2633] p-2 rounded-full text-white hover:bg-[#2b3549]">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                    <div className="bg-[#1F2633] p-2 rounded-full text-white hover:bg-[#2b3549]">
                        <a href="https://www.linkedin.com/in/mouammar-soule-134b5423a/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                    </div>
                    <div className="bg-[#1F2633] p-2 rounded-full text-white hover:bg-[#2b3549]">
                        <a href="https://www.youtube.com/@toutcreatiftechnologique3268" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bas de page */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
                ©pagedone 2023, All rights reserved.
            </div>
        </footer>
    );
}
