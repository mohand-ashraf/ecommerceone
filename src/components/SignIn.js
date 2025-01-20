/* eslint-disable no-unused-vars */
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { MdErrorOutline, MdOutlineMailOutline } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import * as Yup from "yup";
import { LuLockKeyhole } from 'react-icons/lu';
import { setUser } from './redux/appSlice';
import { useDispatch } from 'react-redux';


const SignIn = () => {

    const dispatch = useDispatch();
    const [fireBaseErorr, setFireBaseErorr] = useState();
    const [loading, setLoading] = useState(false);
    const [succMessg, setSuccMessg] = useState("");
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid Email").required("Required"),
            password: Yup.string().min(6, "Must be at least 6 characters").required("Required"),
        }),
        onSubmit: (values, { resetForm }) => {

            const { email, password } = values;
            setLoading(true);
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    dispatch(setUser({
                        __id: user.uid,
                        userName: user.displayName,
                        email: user.email,
                    }));
                    localStorage.setItem('userInfo', JSON.stringify({
                        __id: user.uid,
                        userName: user.displayName,
                        email: user.email,
                    }));
                    setSuccMessg("Logged In Created Successfully!");
                    setLoading(false);
                    setTimeout(() => {
                        navigate('/');
                    }, 2000)
                })
                .catch((error) => {
                    setLoading(false);
                    if (error.code.includes("auth/wrong-password")) {
                        setFireBaseErorr("Wrong Password. Please try again.");
                    } else if (error.code.includes("auth/user-not-found")) {
                        setFireBaseErorr("No user found with this email");
                    } else {
                        setFireBaseErorr("An error occurred. Please try again");
                    }
                    resetForm();
                });
        }
    });

    const handleFocus = () => {
        setFireBaseErorr("")
    }

    return (
        <div className='relative flex h-screen bg-[#FFEEE8]'>
            <div className='bg-white pt-[80px] pb-[60px] rounded-2xl px-7 shadow-[0_0_20px_5px_rgba(255,200,180,0.9)] xs:w-[315px] sm:w-[375px] sml:w-[375px] mdl:w-[375px] md:w-[375px] lg:w-[375px] xl:w-[375px] lxl:w-[375px] lgl:w-[375px] w-[375px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <h1 className='font-Playwrite text-center text-[35px] font-semibold mb-3 text-[#604E48]'>Sign In</h1>
                <p className='text-center text-[14px] mb-[70px]'>Enter your account</p>
                <form className='flex flex-col' onSubmit={formik.handleSubmit}>
                    <div className='mb-4'>
                        <div className='flex items-center mx-auto w-[100%] h-[50px] bg-[#FFEEE8] rounded-lg'>
                            <MdOutlineMailOutline className='text-[30px] text-[#604E48] ml-4' />
                            <input
                                className='autofill:shadow-[inset_0_0_0_1000px_theme(colors.autofillBg)] autofill:text-autofillText focus:outline-none w-[100%] h-[100%] px-3 bg-transparent placeholder:text-[#604E48]'
                                type='text'
                                name='email'
                                placeholder='Email'
                                autoComplete='on'
                                onChange={formik.handleChange}
                                onFocus={handleFocus}
                                value={formik.values.email}
                                onBlur={formik.handleBlur} />
                            {formik.touched.email && formik.errors.email ? (
                                <>
                                    <MdErrorOutline className='text-[27px] text-[#604E48] mr-3' />
                                </>
                            ) :
                                formik.touched.email &&
                                !formik.errors.email && (
                                    <>
                                        <FaCheck className='text-[27px] text-[#604E48] mr-3' />
                                    </>
                                )
                            }
                        </div>
                        {formik.touched.email && formik.errors.email ? (
                            <>
                                <div className='mt-2 text-[#ff2828]'>{formik.errors.email}</div>
                            </>
                        ) :
                            formik.touched.email &&
                            !formik.errors.email && (
                                <>
                                </>
                            )
                        }
                    </div>
                    <div className='mb-4'>
                        <div className='flex items-center mx-auto w-[100%] h-[50px] bg-[#FFEEE8] rounded-lg'>
                            <LuLockKeyhole className='text-[30px] text-[#604E48] ml-4' />
                            <input
                                className='autofill:shadow-[inset_0_0_0_1000px_theme(colors.autofillBg)] autofill:text-autofillText focus:outline-none w-[100%] h-[100%] px-3 bg-transparent placeholder:text-[#604E48]'
                                type='password'
                                name='password'
                                placeholder='Password'
                                autoComplete='on'
                                onChange={formik.handleChange}
                                onFocus={handleFocus}
                                value={formik.values.password}
                                onBlur={formik.handleBlur} />
                            {formik.touched.password && formik.errors.password ? (
                                <>
                                    <MdErrorOutline className='text-[27px] text-[#604E48] mr-3' />
                                </>
                            ) :
                                formik.touched.password &&
                                !formik.errors.password && (
                                    <>
                                        <FaCheck className='text-[27px] text-[#604E48] mr-3' />
                                    </>
                                )
                            }
                        </div>
                        {formik.touched.password && formik.errors.password ? (
                            <>
                                <div className='mt-2 text-[#ff2828]'>{formik.errors.password}</div>
                            </>
                        ) :
                            formik.touched.password &&
                            !formik.errors.password && (
                                <>
                                </>
                            )
                        }
                    </div>
                    <button className='text-[#F2F6F5] my-4 mx-auto transition-all duration-300 text-[20px] font-medium py-[8px] hover:bg-[#4e403b] bg-[#604E48] rounded-xl w-[100%]'
                        type='submit' disabled={loading}>
                        {loading ? "Signing In..." : "Sign In"}
                    </button>
                    <p className='text-center'>Don't have an account?
                        <Link className='ml-2 text-[#604E48] font-medium hover:font-bold' to='/signup'>Sign Up</Link>
                    </p>
                    {succMessg && <p className='mt-3 text-[17px] font-medium text-center text-[#604E48]'>{succMessg}</p>}
                    {fireBaseErorr && <p className='mt-3 text-[17px] font-medium text-center text-[#ff2828]'>{fireBaseErorr}</p>}
                </form>
            </div>
        </div>

    )
}

export default SignIn