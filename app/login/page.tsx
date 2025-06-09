import { signIn } from '@/auth'
import { login, signup } from './actions'

export default function LoginPage() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("google", { redirectTo: "/" })
            }}>
            <button type="submit">Signin with Google</button>
        </form>
        // <form
        //     className={'flex flex-row min-h-screen justify-center items-center flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white space-y-4 md:space-y-6'}>
        //     <h1 className="lg:text-5xl text-3xl font-bold mb-2">Teachers-Pet.ai</h1>
        //     <h2 className="text-xl font-bold mb-10">Sign in to your account</h2>
        //     <input
        //         className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block lg:w-2/6 md:w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 mb-4"
        //         id="email" placeholder="Email" name="email" type="email"/>
        //     <input
        //         className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block lg:w-2/6 md:w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 mb-4"
        //         id="password" placeholder="password" name="password" type="password"/>

        //     <button
        //         className="lg:w-2/6 md:w-1/3 text-white bg-gradient-to-r from-blue-400 to-purple-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        //         formAction={login}>Log in
        //     </button>
        //     <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        //         Don’t have an account yet?
        //         <button formAction={signup}
        //                 className="font-medium text-primary-600 hover:underline dark:text-primary-500">
        //             Sign up
        //         </button>
        //     </p>
        // </form>
    )
}
