import React , {useState} from 'react'
import './page.css'

const Login = () => {
  const[auth, setAuth] = useState(true)
  return (
    <div className='page_bg h-screen text-white flex justify-center items-center'>
      {auth ? <div className=''>
                  <div class="flex flex-col justify-center rounded-xl bg-white px-10 py-12 lg:px-8" style={{height:"60vh"}}>
                  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 class="mt-10 text-center text-2xl font-bold leading-4 tracking-tight text-emerald-600">Sign in to your account</h2>
                  </div>
                  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form class="space-y-6" method="POST">
                      <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div class="mt-1">
                          <input name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-emerald-300 placeholder:px-3 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"/>
                        </div>
                      </div>

                      <div>
                        <div class="flex items-center justify-between">
                          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                          <div class="text-sm">
                            <a href="#" class="font-semibold text-emerald-600 hover:text-emerald-600">Forgot password?</a>
                          </div>
                        </div>
                        <div class="mt-2">
                          <input name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-emerald-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"/>
                        </div>
                      </div>

                      <div>
                        <button type="submit" class="flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                      </div>
                    </form>

                    <p class="mt-10 text-center text-sm text-gray-500">
                      Not a member?
                      <span class="font-semibold leading-6 text-emerald-400 hover:text-emerald-500" onClick={()=>setAuth(false)}>Create an account</span>
                    </p>
                  </div>
                </div>
             </div> : 
             <div>
               <div class="flex flex-col justify-center rounded-xl bg-white px-10 py-12 lg:px-8" style={{height:"60vh"}}>
                  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 class="mt-10 text-center text-2xl font-bold leading-4 tracking-tight text-emerald-600">Create an account</h2>
                  </div>
                  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form class="space-y-6" method="POST">
                      <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div class="mt-1">
                          <input name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-emerald-300 placeholder:px-3 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"/>
                        </div>
                      </div>

                      <div>
                        <div class="flex items-center justify-between">
                          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                          <div class="text-sm">
                            <a href="#" class="font-semibold text-emerald-600 hover:text-emerald-600">Forgot password?</a>
                          </div>
                        </div>
                        <div class="mt-2">
                          <input name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-emerald-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"/>
                        </div>
                      </div>

                      <div>
                        <button type="submit" class="flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                      </div>
                    </form>

                    <p class="mt-10 text-center text-sm text-gray-500">
                      already a member?
                      <span class="font-semibold leading-6 text-emerald-400 hover:text-emerald-500" onClick={()=>setAuth(true)}>sign in</span>
                    </p>
                  </div>
                </div>
             </div>
      }
    </div>
  )
}

export default Login