import {createClient} from "@/utils/supabase/client";

export const supabase = createClient()

export async function getAudioFiles() {
    const {data, error} = await supabase
        .storage
        .from("recordings")
        .list(
            "generated_audio"
        )
    //next ticket: displaying the files in such a way where the user can click and play them
    return (
        <div>
            {data?.map((file) => (
                <p key={file.id}>{file.name}</p>
            ))}
        </div>
    )
}


export default async function UserProfile() {
    const {data, error} = await supabase
        .from('profiles')
        .select()

    const userName = data![0]["username"]

    const files = await getAudioFiles()

    return (
        <div
            className="max-w-sm mx-auto overflow-hidden shadow-lg px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            {error ? <p>Something went wrong.</p> :
                <div>
                    Welcome back, {userName}
                    <section>
                        Prompts:
                        {files}
                    </section>
                </div>
            }
        </div>
    )
}
