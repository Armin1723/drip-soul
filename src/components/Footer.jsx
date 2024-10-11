import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-white py-10 z-[2] md:h-screen md:flex md:flex-col md:justify-between">
            <div className="container mx-auto px-4 flex-grow justify-between">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-4">Drip Soul</h2>
                        <p className="text-gray-300 pr-6">Elevate your style with Drip Soul. Discover the latest trends in fashion and make a statement.</p>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Shop</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between mt-10">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Shipping & Returns</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
                        <p className="text-gray-300 mb-4">Subscribe to our newsletter to get the latest updates and offers.</p>
                        <form>
                            <input type="email" className="w-full p-2 mb-4 text-black" placeholder="Enter your email" />
                            <button type="submit" className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="mt-10 text-center text-gray-400">
                &copy; {new Date().getFullYear()} Drip Soul. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
