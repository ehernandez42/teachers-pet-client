"use client"

import Link from "next/link";
import TranslateFromApi from "@/components/translate";

export default function translate() {

    return (
        <div>
            <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
                <nav className="container sticky top-0 mx-auto p-6 flex justify-between items-center">
                    <div className="text-2xl font-bold">Teachers-Pet.ai</div>
                    <div className="flex gap-3">
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Sign
                            Up
                        </button>
                        <Link href="/"
                              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Back
                            to Main</Link>
                    </div>

                </nav>

                {/*<header className="container mx-auto text-center py-20 text-3xl">*/}
                {/*    Check out the samples below or make your own!*/}
                {/*</header>*/}

                {/*<section id="samples" className="container mx-auto py-20">*/}
                {/*    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">*/}
                {/*        <div className="text-center">*/}
                {/*            Audio Sample?*/}
                {/*        </div>*/}
                {/*        <div className="text-center">*/}
                {/*            Audio sample?*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                <section id="create_own_sample" className="container mx-auto py-40">
                    {/*this needs to have a call to the python API*/}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8 p-7">
                        <TranslateFromApi/>
                    </div>
                </section>

                <footer id="contact" className="bg-gray-900 py-10 bottom-0">
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

        </div>
    );


}
