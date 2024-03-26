export default function User({ nombre, cedula, email, estado, movil }) {
  return (
    <aside className="product-card w-[clamp(350px,50vw,700px)] h-[clamp(450px,40vh,600px)] rounded-md shadow-xl overflow-hidden  snap-start shrink-0 py-8 px-6 bg-green-600 flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
      <div className="para uppercase text-center leading-none z-40">
        <p className="text-black font-semibold text-xs font-serif">{nombre}</p>
      </div>
      <div className="img w-[180px] aspect-square bg-gray-100 z-40 rounded-md"></div>
      <div className="btm-_container z-40 flex flex-row justify-between items-end gap-10">
        <div className="flex flex-col items-start gap-1">
          <div className="inline-flex gap-3 items-center justify-center">
            <div className="p-1 bg-white flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 15h2" />
                <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
                <path d="M11 12h6" />
                <path d="M13 9h4" />
              </svg>
            </div>
            <p className="font-semibold text-xs text-white">{cedula}</p>
          </div>
          <div className="flex flex-row gap-2">
            <div className="inline-flex gap-3 items-center justify-center">
              <div className="p-1 bg-white flex items-center justify-center rounded-full">
                <svg
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  strokeWidth="1"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="fill-gray-800 h-5 w-5 stroke-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <p className="font-semibold text-xs text-white">{email}</p>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="inline-flex gap-3 items-center justify-center">
              <div className="p-1 bg-white flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M16 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M5 20l5 -.5l1 -2" />
                  <path d="M18 20v-5h-5.5l2.5 -6.5l-5.5 1l1.5 2" />
                </svg>
              </div>
              <p className="font-semibold text-xs text-white uppercase">
                {estado}
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="inline-flex gap-3 items-center justify-center">
              <div className="p-1 bg-white flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
              </div>
              <p className="font-semibold text-xs text-white">{movil}</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
