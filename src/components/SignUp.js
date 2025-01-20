/* eslint-disable no-unused-vars */
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { MdErrorOutline, MdOutlineMailOutline } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import * as Yup from "yup";
import { FaRegUser } from "react-icons/fa";
import { LuLockKeyhole } from 'react-icons/lu';


const SignUp = () => {

    const [fireBaseErorr, setFireBaseErorr] = useState();
    const [loading, setLoading] = useState(false);
    const [succMessg, setSuccMessg] = useState("");
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            rePassword: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
            email: Yup.string().email("Invalid Email").required("Required"),
            password: Yup.string().min(6, "Must be at least 6 characters").required("Required"),
            rePassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Required"),
        }),
        onSubmit: (values, { resetForm }) => {

            const { name, email, password } = values;
            setLoading(true);
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name,
                    });
                    setSuccMessg("Account Created Successfully!");
                    setTimeout(() => {
                        navigate('/signin');
                    }, 2000)
                })
                .catch((error) => {
                    setLoading(false);
                    if (error.code.includes("auth/email-already-in-use")) {
                        setFireBaseErorr("Email Already In Use, try another one");
                        resetForm();
                    }
                });
        }
    });

    const handleFocus = () => {
        setFireBaseErorr("")
    }

    return (
        <div className='relative flex h-screen bg-[#E5EDEC]'>
            <div className='shadow-[0_0_20px_5px_rgba(173,216,230,0.9)] bg-white pt-[80px] pb-[60px] rounded-2xl px-7 xs:w-[315px] sm:w-[375px] sml:w-[375px] mdl:w-[375px] md:w-[375px] lg:w-[375px] xl:w-[375px] lxl:w-[375px] lgl:w-[375px] w-[375px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <h1 className='font-Playwrite text-center text-[35px] font-semibold mb-3 text-[#005E55]'>Sign Up</h1>
                <p className='text-center text-[14px] mb-[70px]'>Create your account</p>
                <form className='flex flex-col' onSubmit={formik.handleSubmit}>
                    <div className='mb-4'>
                        <div className='flex items-center mx-auto w-[100%] h-[50px] bg-[#E5EDEC] rounded-lg'>
                            <FaRegUser className='text-[27px] text-[#005E55] ml-4' />
                            <input
                                className='autofill:shadow-[inset_0_0_0_1000px_theme(colors.autofillBg1)] autofill:text-autofillText1 focus:outline-none w-[100%] h-[100%] px-3 bg-transparent placeholder:text-[#005E55]'
                                type='text'
                                name='name'
                                placeholder='Username'
                                autoComplete='on'
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                onFocus={handleFocus}
                                onBlur={formik.handleBlur} />
                            {formik.touched.name && formik.errors.name ? (
                                <>
                                    <MdErrorOutline className='text-[27px] text-[#005E55] mr-3' />
                                </>
                            ) :
                                formik.touched.name &&
                                !formik.errors.name && (
                                    <>
                                        <FaCheck className='text-[27px] text-[#005E55] mr-3' />
                                    </>
                                )
                            }
                        </div>
                        {formik.touched.name && formik.errors.name ? (
                            <>
                                <div className='mt-2 text-[#ff2828]'>{formik.errors.name}</div>
                            </>
                        ) :
                            formik.touched.name &&
                            !formik.errors.name && (
                                <>
                                </>
                            )
                        }
                    </div>
                    <div className='mb-4'>
                        <div className='flex items-center mx-auto w-[100%] h-[50px] bg-[#E5EDEC] rounded-lg'>
                            <MdOutlineMailOutline className='text-[30px] text-[#005E55] ml-4' />
                            <input
                                className='autofill:shadow-[inset_0_0_0_1000px_theme(colors.autofillBg1)] autofill:text-autofillText1 focus:outline-none w-[100%] h-[100%] px-3 bg-transparent placeholder:text-[#005E55]'
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
                                    <MdErrorOutline className='text-[27px] text-[#005E55] mr-3' />
                                </>
                            ) :
                                formik.touched.email &&
                                !formik.errors.email && (
                                    <>
                                        <FaCheck className='text-[27px] text-[#005E55] mr-3' />
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
                        <div className='flex items-center mx-auto w-[100%] h-[50px] bg-[#E5EDEC] rounded-lg'>
                            <LuLockKeyhole className='text-[30px] text-[#005E55] ml-4' />
                            <input
                                className='autofill:shadow-[inset_0_0_0_1000px_theme(colors.autofillBg1)] autofill:text-autofillText1 focus:outline-none w-[100%] h-[100%] px-3 bg-transparent placeholder:text-[#005E55]'
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
                                    <MdErrorOutline className='text-[27px] text-[#005E55] mr-3' />
                                </>
                            ) :
                                formik.touched.password &&
                                !formik.errors.password && (
                                    <>
                                        <FaCheck className='text-[27px] text-[#005E55] mr-3' />
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
                    <div className='mb-4'>
                        <div className='flex items-center mx-auto w-[100%] h-[50px] bg-[#E5EDEC] rounded-lg'>
                            <LuLockKeyhole className='text-[30px] text-[#005E55] ml-4' />
                            <input
                                className='autofill:shadow-[inset_0_0_0_1000px_theme(colors.autofillBg1)] autofill:text-autofillText1 focus:outline-none w-[100%] h-[100%] px-3 bg-transparent placeholder:text-[#005E55]'
                                type='password'
                                name='rePassword'
                                placeholder='Confirm password'
                                autoComplete='on'
                                onChange={formik.handleChange}
                                onFocus={handleFocus}
                                value={formik.values.rePassword}
                                onBlur={formik.handleBlur} />
                            {formik.touched.rePassword && formik.errors.rePassword ? (
                                <>
                                    <MdErrorOutline className='text-[27px] text-[#005E55] mr-3' />
                                </>
                            ) :
                                formik.touched.rePassword &&
                                !formik.errors.rePassword && (
                                    <>
                                        <FaCheck className='text-[27px] text-[#005E55] mr-3' />
                                    </>
                                )
                            }
                        </div>
                        {formik.touched.rePassword && formik.errors.rePassword ? (
                            <>
                                <div className='mt-2 text-[#ff2828]'>{formik.errors.rePassword}</div>
                            </>
                        ) :
                            formik.touched.rePassword &&
                            !formik.errors.rePassword && (
                                <>
                                </>
                            )
                        }
                    </div>
                    <button className='text-[#F2F6F5] my-4 mx-auto transition-all duration-300 text-[20px] font-medium py-[8px] hover:bg-[#0e443f] bg-[#005E55] rounded-full w-[70%]'
                        type='submit' disabled={loading}>
                        {loading ? "Processing..." : "Sign Up"}
                    </button>
                    <p className='text-center'>Already have an account?
                        <Link className='ml-2 text-[#005E55] font-medium hover:font-bold' to='/signin'>Sign In</Link>
                    </p>
                    {succMessg && <p className='mt-3 text-[17px] font-medium text-center text-[#005E55]'>{succMessg}</p>}
                    {fireBaseErorr && <p className='mt-3 text-[17px] font-medium text-center text-[#ff2828]'>{fireBaseErorr}</p>}
                </form>
            </div>
        </div>
    )
}

export default SignUp