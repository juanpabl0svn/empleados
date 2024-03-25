export default function LogIn() {
  return (
    <main className="content-center min-h-dvh">
      <aside className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-green-500/70 mx-auto">
        <article className="text-2xl font-bold mb-2 text-[#ffffff] text-center">
          Welcome back to <span className="text-[#0e4b0f]">App</span>
        </article>
        <article className="text-sm font-normal mb-4 text-center text-[#0e4b0f]">
          Log in to your account
        </article>
        <form className="flex flex-col gap-3">
          <article className="block relative">
            <label
              htmlFor="email"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
            />
          </article>
          <article className="block relative">
            <label
              htmlFor="password"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </article>
          {/* <article>
            <a className="text-sm text-[#3c8449]" href="#">
              Forgot your password?
            </a>
          </article> */}
          <button
            type="submit"
            className="bg-[#0e4b0f] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
          >
            Ingresar
          </button>
        </form>
        {/* <article className="text-sm text-center mt-[1.6rem]">
          Don’t have an account yet?{" "}
          <a className="text-sm text-[#7747ff]" href="#">
            Sign up htmlFor free!
          </a>
        </article> */}
      </aside>
    </main>
  );
}
