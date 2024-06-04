/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRegisterMutation } from '../slices/userApiSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCredentials } from '../slices/userSlice'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'
import { BACKEND_URL } from '../constants'

export default function LoginScreen() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [register, { isLoading }] = useRegisterMutation()

    const handleRegister = async e => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert("Passwords do not match")
        } else {
            try {
                const res = await register({ name, email, password }).unwrap()
                dispatch(setCredentials({ ...res }))
                navigate("/")
                toast.success("Register Successful")
            } catch (error) {
                toast.error(error?.data?.message || error?.error)
            }
        }
    }

    const handleGoogleAuth = () => {
        try {
            window.location.href = `${BACKEND_URL}/auth/google/callback`
        } catch (err) {
            toast.error(err?.data?.message || err.error)

        }
    }

    return (
        <div className="container mx-auto mt-8 mb-28 p-4 max-w-md ">
            <h2 className="text-2xl font-semibold mb-4">Sign up</h2>
            <form onSubmit={handleRegister}>
                <div className="mb-4">
                    <label htmlFor="name" className="text-gray-700">Name:</label>
                    <input
                        type="name"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="bg-white border border-gray-300 p-2 rounded-md mt-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="text-gray-700">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="bg-white border border-gray-300 p-2 rounded-md mt-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="text-gray-700">Password:</label>
                    <input
                        type="password"
                        id="password"
                        className="bg-white border border-gray-300 p-2 rounded-md mt-2 w-full"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="text-gray-700">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="bg-white border border-gray-300 p-2 rounded-md mt-2 w-full"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button
                    type='submit'
                    className="bg-[#FF7A1A] hover:bg-[#FF5A1A] text-white mt-2 w-full py-2 rounded-md mt-4"
                    onClick={handleRegister}
                    disabled={isLoading}
                    style={{ width: "100%" }} // Add this style to make the button the same width as input fields
                >
                    Continue
                </button>
                <button
                    type='button'
                    className="bg-white text-gray-800 hover:bg-[#e5e5e5] mt-2 w-full py-2 rounded-md mt-4 border border-gray-300 flex items-center justify-center"
                    onClick={handleGoogleAuth}
                    style={{ width: "100%", height: "3rem" }} // Add this style to make the button the same width and height as the login button
                >
                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        <path d="M1 1h22v22H1z" fill="none"/>
                    </svg>
                    Sign up with Google
                </button>

                {isLoading && <Spinner />}
            </form>
            <p className="mt-4">
                Already have an account? <Link to="/login" className="text-[#FF7A1A]">Sign In</Link>.
            </p>
        </div>
    )
}


// /* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */
// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { useRegisterMutation } from '../slices/userApiSlice'
// import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { setCredentials } from '../slices/userSlice'
// import { toast } from 'react-toastify'
// import Spinner from '../components/Spinner'

// export default function LoginScreen() {
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [confirmPassword, setConfirmPassword] = useState("")

//     const [register, { isLoading }] = useRegisterMutation()

//     const handleRegister = async e => {
//         e.preventDefault()
//         if (password !== confirmPassword) {
//             alert("Passwords do not match")
//         } else {
//             try {
//                 const res = await register({ name, email, password }).unwrap()
//                 dispatch(setCredentials({ ...res }))
//                 navigate("/")
//                 toast.success("Register Successful")
//             } catch (error) {
//                 toast.error(error?.data?.message || error?.error)
//             }
//         }
//     }

//     const handleGoogleAuth = () => {
//         try {
//             window.location.href = `${BACKEND_URL}/auth/google/callback`
//         } catch (err) {
//             toast.error(err?.data?.message || err.error)

//         }
//     }

//     return (
//         <div className="container mx-auto mt-8 mb-28 p-4 max-w-md ">
//             <h2 className="text-2xl font-semibold mb-4">Register</h2>
//             <form onSubmit={handleRegister}>
//                 <div className="mb-4">
//                     <label htmlFor="name" className="text-gray-700">Name:</label>
//                     <input
//                         type="name"
//                         id="name"
//                         value={name}
//                         onChange={e => setName(e.target.value)}
//                         className="bg-white border border-gray-300 p-2 rounded-md mt-2 w-full"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="email" className="text-gray-700">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={e => setEmail(e.target.value)}
//                         className="bg-white border border-gray-300 p-2 rounded-md mt-2 w-full"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="password" className="text-gray-700">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         className="bg-white border border-gray-300 p-2 rounded-md mt-2 w-full"
//                         value={password}
//                         onChange={e => setPassword(e.target.value)}
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="confirmPassword" className="text-gray-700">Confirm Password:</label>
//                     <input
//                         type="password"
//                         id="confirmPassword"
//                         className="bg-white border border-gray-300 p-2 rounded-md mt-2 w-full"
//                         value={confirmPassword}
//                         onChange={e => setConfirmPassword(e.target.value)}
//                     />
//                 </div>
//                 <button
//                     type='submit'
//                     className="bg-[#FF7A1A] hover:bg-[#FF5A1A] text-white px-4 py-2 rounded-md mt-4"
//                     onClick={handleRegister}
//                     disabled={isLoading}
//                 >
//                     Register
//                 </button>
//              <button
//     type='button'
//     className="bg-white text-gray-800 px-4 py-2 rounded-md mt-4 ml-3 hover:bg-gray-100 flex items-center border border-gray-300"
//     onClick={handleGoogleAuth}
// >
//     <span className="mr-2">
//         <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
//             <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
//             <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
//             <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
//             <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
//             <path d="M1 1h22v22H1z" fill="none"/>
//         </svg>
//     </span>
//     Sign up with Google
// </button>

//                 {isLoading && <Spinner />}
//             </form>
//             <p className="mt-4">
//                 Already have an account? <Link to="/login" className="text-blue-500">Sign In</Link>.
//             </p>
//         </div>
//     )
// }

