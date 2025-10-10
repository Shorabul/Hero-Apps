import React from 'react';
// import { FaYoutube, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-10">
            <div className="max-w-7xl mx-auto grid grid-cols-6 gap-8">

                <aside className="flex flex-col gap-4 col-span-3 md:col-2">
                    <img
                        src="/logo.png"
                        alt="HERO.IO logo"
                        className="w-11 h-11"
                    />
                    <p className="text-sm leading-relaxed">
                        <strong>HERO Ltd.</strong><br />
                        Providing reliable tech since 2020
                    </p>
                </aside>

                <nav className="flex flex-col gap-2 col-span-3 md:col-span-1">
                    <h6 className="text-lg font-semibold mb-2">Services</h6>
                    <a href="#" className="hover:underline">UI/UX Design</a>
                    <a href="#" className="hover:underline">Responsive Web Development</a>
                    <a href="#" className="hover:underline">App Development</a>

                </nav>


                <nav className="flex flex-col gap-2 col-span-3 md:col-span-1">
                    <h6 className="text-lg font-semibold mb-2">Company</h6>
                    <a href="#" className="hover:underline">About us</a>
                    <a href="#" className="hover:underline">Contact</a>
                    <a href="#" className="hover:underline">Jobs</a>
                    <a href="#" className="hover:underline">Press kit</a>
                </nav>

                <nav className="flex flex-col gap-2 col-span-3 md:col-span-1">
                    <h6 className="text-lg font-semibold mb-2">Legal</h6>
                    <a href="#" className="hover:underline">Terms of use</a>
                    <a href="#" className="hover:underline">Privacy policy</a>
                    <a href="#" className="hover:underline">Cookie policy</a>
                </nav>
                <form className="flex flex-col gap-4 col-span-6 md:col-start-2">
                    <h6 className="text-lg font-semibold">Newsletter</h6>
                    <label htmlFor="email" className="text-sm">Enter your email address</label>
                    <div className="flex w-full max-w-xs rounded-md  shadow-sm">
                        <input
                            type="email"
                            id="email"
                            placeholder="username@gmail.com"
                            className="flex-grow px-4 py-2 text-sm text-black bg-white rounded-l-md outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-[#632EE3] hover:bg-[#4f23b5] text-white px-4 py-2 text-sm font-medium rounded-r-md"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>


            </div>
        </footer>

    );
};

export default Footer;