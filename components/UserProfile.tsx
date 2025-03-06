import {createClient} from "@/utils/supabase/client";
import RecordingComponent from "@/components/RecordingComponent";

export const supabase = createClient()

export async function getAudioFiles() {
    const {data, error} = await supabase
        .storage
        .from("recordings")
        .list(
            "generated_audio"
        )

    return (
        <div
            className={"w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"}>
            <RecordingComponent />
            <button>
                {data?.map((file) => (
                    <p className={"hover:border-gray-600 w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600"}
                       key={file.id}>{file.name}</p>
                ))}
            </button>

        </div>
    )
}

export default async function UserProfile() {

    const {data, error} = await supabase
        .from('profiles')
        .select()

    const userName = data![0]["username"]


    const files = await getAudioFiles();

    return (
        <div
            className="max-w-sm mx-auto overflow-hidden shadow-lg px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            {error ? <p>Something went wrong.</p> :
                <div>
                    Welcome back, {userName}
                    <section>
                        <p className={'text-2xl font-bold'}>Prompts:</p>
                        {files}
                    </section>

                </div>
            }
        </div>
    )
}
