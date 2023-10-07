'use client'

import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

function LoginRegistration() {
  const { theme } = useTheme()
  const [isLogin, setIsLogin] = useState(false as boolean)
  return (
    <div className="">
      {isLogin && (
        <div className="flex flex-col md:w-[70%] mx-auto h-full justify-center items-center">
          <p className="dark:text-gray-100 text-gray-900 text-3xl sm:text-6xl font-bold tracking-[1.2px] text-center">
            Welcome Back
          </p>

          <div className="w-full space-y-2 my-8">
            <label htmlFor="email">
              <span className="text-gray-900 dark:text-gray-100 text-xl sm:text-2xl font-normal ">
                Email
              </span>
            </label>
            <input
              aria-label="Email"
              id="email"
              type="text"
              className="block w-full h-[60px] rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <div className="w-full space-y-2">
            <label htmlFor="password">
              <span className="text-gray-900 dark:text-gray-100 text-xl sm:text-2xl font-normal ">
                Password
              </span>
            </label>
            <input
              aria-label="Password"
              id="password"
              type="text"
              className="block w-full h-[60px] rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>

          <div className="w-full">
            <button
              style={{
                background:
                  theme === 'light'
                    ? ' linear-gradient(89deg, #DB6329 -7.25%, #F30B0B 107.41%, #FF308C 107.41%)'
                    : 'linear-gradient(89deg, #DB2978 -7.25%, #F30B0B 107.41%, #FF308C 107.41%)',
              }}
              className="rounded w-full mt-8 sm:mt-12 py-4  font-bold text-xl sm:text-3xl text-gray-100"
            >
              Log in
            </button>

            <button className="dark:bg-[#403B3B] bg-[#FF8080]  rounded w-full py-4 flex gap-2 items-center justify-center mt-8 ">
              <SocialIcon kind="github" href={siteMetadata.github} size={10} />
              <span className="dark:text-gray-100 text-lg md:text-[32px] font-bold">
                Log In Or Sign Up with Github
              </span>
            </button>

            <p className="mt-6 text-center">
              <span className="text-gray-900 dark:text-gray-100">Don't have an account? </span>
              <button
                onClick={() => setIsLogin(false)}
                className="text-[#DB2978] dark:text-red-500 cursor-pointer"
              >
                Register Here
              </button>
            </p>
          </div>
        </div>
      )}

      {!isLogin && (
        <div className="md:grid md:grid-cols-2  md:gap-10 md:place-content-between md:mx-10">
          {theme === 'dark' && (
            <section className="hidden md:block md:relative md:mt-[150px]">
              <Image
                width={300}
                height={300}
                src="/static/images/frame-1.png"
                alt="curved pattern"
              />

              <div className="absolute top-[170px] left-[220px]">
                <Image
                  width={300}
                  height={300}
                  src="/static/images/frame-2.png"
                  alt="curved pattern"
                />
              </div>
            </section>
          )}

          {theme !== 'dark' && (
            <section className="hidden md:block md:relative md:mt-[150px]">
              <Image
                width={300}
                height={300}
                src="/static/images/frame-dark-1.png"
                alt="curved pattern"
              />

              <div className="absolute top-[170px] left-[220px]">
                <Image
                  width={300}
                  height={300}
                  src="/static/images/frame-dark-2.png"
                  alt="curved pattern"
                />
              </div>
            </section>
          )}
          <section>
            <p className="dark:text-gray-100 text-gray-900 text-[32px] sm:text-[32px] font-bold tracking-[1.2px] text-center">
              Register Your Account
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="w-full space-y-2 mt-8">
                <label htmlFor="firstName">
                  <span className="text-gray-900 dark:text-gray-100 text-xl sm:text-2xl font-normal ">
                    First Name
                  </span>
                </label>
                <input
                  aria-label="First Name"
                  id="firstName"
                  type="text"
                  className="block w-full h-[60px] rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
                />
              </div>
              <div className="w-full space-y-2 my-8">
                <label htmlFor="lastName">
                  <span className="text-gray-900 dark:text-gray-100 text-xl sm:text-2xl font-normal ">
                    Last Name
                  </span>
                </label>
                <input
                  aria-label="Last Name"
                  id="lastName"
                  type="text"
                  className="block w-full h-[60px] rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
                />
              </div>
            </div>

            <div className="w-full space-y-2 my-8">
              <label htmlFor="email">
                <span className="text-gray-900 dark:text-gray-100 text-xl sm:text-2xl font-normal ">
                  Email
                </span>
              </label>
              <input
                aria-label="Email"
                id="email"
                type="text"
                className="block w-full h-[60px] rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
              />
            </div>

            <div className="w-full space-y-2">
              <label htmlFor="password">
                <span className="text-gray-900 dark:text-gray-100 text-xl sm:text-2xl font-normal ">
                  Password
                </span>
              </label>
              <input
                aria-label="Password"
                id="password"
                type="text"
                className="block w-full h-[60px] rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
              />
            </div>

            <div className="w-full">
              <button
                style={{
                  background:
                    theme === 'light'
                      ? ' linear-gradient(89deg, #DB6329 -7.25%, #F30B0B 107.41%, #FF308C 107.41%)'
                      : 'linear-gradient(89deg, #DB2978 -7.25%, #F30B0B 107.41%, #FF308C 107.41%)',
                }}
                className="rounded w-full mt-8 sm:mt-12 py-4 font-bold text-xl sm:text-3xl text-gray-100"
              >
                Register
              </button>

              <button className="dark:bg-[#403B3B] bg-[#FF8080] rounded w-full py-4 flex gap-2 items-center justify-center mt-8 ">
                <SocialIcon kind="github" href={siteMetadata.github} size={10} />
                <span className="dark:text-gray-100 text-xl font-bold ">
                  Log In Or Sign Up with Github
                </span>
              </button>

              <p className="mt-4 text-center">
                <span className="text-gray-900 dark:text-gray-100">Already have an account? </span>
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-[#DB2978] dark:text-red-500 cursor-pointer"
                >
                  Sign in
                </button>
              </p>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default LoginRegistration
