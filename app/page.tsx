import SideBar from "@/components/SideBar";
import TranslateFromApi from "@/components/translate";

import RecordingComponent from "@/components/RecordingComponent";


export default function Home() {

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
