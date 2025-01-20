'use client'
import {useState} from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
                <nav className="container sticky top-0 mx-auto p-6 flex justify-between items-center">
                    <div className="text-2xl font-bold">Teachers-Pet.ai</div>
                    <div className="md:hidden relative">
                        <button className="text-white focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                        {menuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-10">
                                <a href="#features"
                                   className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Features</a>
                                {/* <a href="#pricing" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Pricing</a> */}
                                <a href="#contact"
                                   className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Contact</a>
                            </div>
                        )}
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <a href="#features" className="hover:text-blue-400">Features</a>
                        {/* <a href="#pricing" className="hover:text-blue-400">Pricing</a> */}
                        <a href="#contact" className="hover:text-blue-400">Contact</a>
                    </div>
                </nav>

                <header className="container mx-auto text-center py-20">
                    <h1 className="text-5xl font-bold mb-4">Give your weekly notes home a <span
                        className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">modern personal touch</span>
                    </h1>
                    <p className="text-xl mb-8 px-3">Teachers-Pet.ai is revolutionizing the way teachers can report on
                        their
                        students' growth.
                        Using modern AI tools, you can focus on what matters most and
                        let us handle automated reporting, personalized, consistent messages for each parent,
                        while you foster student growth and be the best teacher you can be.</p>
                    <Link target="_blank" href="https://forms.gle/i1qTRFumB91smkPL7"
                          className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-4 px-8 rounded mr-4">
                        Join the wait-list
                    </Link>
                    <Link href="/translate"
                          className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-4 px-8 rounded mr-4">
                        Translate ➡️
                    </Link>
                </header>

                <section id="features" className="container mx-auto py-20">
                    <h2 className="text-3xl font-bold text-center mb-10">How Translate works:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                        <div className="text-center flex flex-col">
                            <div>
                                Step 1: Enter your prompt
                            </div>
                            <div>this will be a animation where there is text being entered into a textbox</div>
                        </div>
                        <div className="text-center">

                        </div>
                        <div className="text-center">

                        </div>
                    </div>
                </section>

                {/* For when you start charging a sub price:
            <section id="pricing" className="container mx-auto py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-700 rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold mb-4">Basic</h3>
            <p className="text-4xl font-bold mb-6">$29<span className="text-xl font-normal">/mo</span></p>
            <ul className="mb-6 space-y-2">
              <li>Core AI features</li>
              <li>5 user accounts</li>
              <li>8/5 support</li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Choose Plan
            </button>
          </div>
          <div className="border border-blue-500 rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold mb-4">Pro</h3>
            <p className="text-4xl font-bold mb-6">$79<span className="text-xl font-normal">/mo</span></p>
            <ul className="mb-6 space-y-2">
              <li>Advanced AI features</li>
              <li>Unlimited user accounts</li>
              <li>24/7 priority support</li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Choose Plan
            </button>
          </div>
          <a href="https://tally.so/r/your-form-id" target="_blank" rel="noopener noreferrer" className="block">
            <div className="border border-gray-700 rounded-lg p-6 text-center hover:bg-gray-800 transition-colors duration-300">
              <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
              <p className="text-4xl font-bold mb-6">Custom</p>
              <ul className="mb-6 space-y-2">
                <li>Custom AI solutions</li>
                <li>Dedicated account manager</li>
                <li>On-premise deployment</li>
              </ul>
              <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Contact Sales
              </span>
            </div>
          </a>
        </div>
      </section> */}

                <footer id="contact" className="bg-gray-900 py-10">
                    <div className="container mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                        <p className="mb-4">Have questions? Reach out to us!</p>
                        <a href="mailto:eleazartheedtechengineer@gmail.com"
                           className="text-blue-400 hover:text-blue-300">
                            eleazartheedtechengineer@gmail.com
                        </a>
                    </div>
                </footer>
            </main>
        </>

    );
}
