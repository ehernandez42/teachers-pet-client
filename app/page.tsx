import SideBar from "@/components/SideBar";
import TranslateFromApi from "@/components/translate";

import RecordingComponent from "@/components/RecordingComponent";
import { auth } from "@/auth";


export default async function Home() {
    const session = await auth()
    if (!session?.user) {
        return (
            <div className={"flex flex-row min-h-screen justify-center items-center flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white space-y-4 md:space-y-6"}>
                <h1 className="lg:text-5xl text-3xl font-bold mb-2">Teachers-Pet.ai</h1>
                <h2 className="text-xl font-bold mb-10">Please sign in to access the app</h2>
            </div>
        )
    }

    return (
        <div>
            <SideBar />
            <div>
                <TranslateFromApi />
                <RecordingComponent />
            </div>

        </div>
    )
}
