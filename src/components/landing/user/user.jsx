import EditIcon from "@/components/svg/edit-icon";
import { useState } from "react";

const mobileFormater = (movil) =>
  movil
    ? `+57 ${movil?.slice(0, 3)} ${movil?.slice(3, 6)} ${movil?.slice(6, 10)}`
    : "";

export default function User({
  nombre,
  cedula,
  email,
  estado,
  movil,
  area,
  cargo,
  imagen,
}) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <aside className="w-[clamp(350px,50vw,700px)] h-[clamp(450px,40vh,600px)] rounded-md shadow-xl overflow-hidden  snap-start shrink-0 py-8 px-6 bg-green-600 flex flex-col items-center justify-center gap-3 transition-all duration-300 relative">
      {nombre != null && (
        <EditIcon
          className={`absolute right-4 top-4 ${
            isEditing ? "bg-green-900 stroke-white" : "stroke-green-900"
          }`}
          onClick={() => setIsEditing(!isEditing)}
        />
      )}
      <section className="capitalize text-center leading-none z-40">
        <p className="text-black font-semibold text-xs font-serif">{nombre}</p>
      </section>
      <img
        src="_blank"
        alt="user image"
        className="img w-[180px] aspect-square bg-gray-100 z-40 rounded-md"
      />
      <section className="flex flex-wrap gap-4 justify-center w-[clamp(400px,60%,500px)] ">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 bg-white rounded-full p-1"
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
          <p className="font-semibold text-xs text-white">{cedula}</p>
        </div>
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7 bg-white rounded-full p-1"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
            <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
          </svg>
          <p className="font-semibold text-xs text-white lowercase">{email}</p>
        </div>
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7 bg-white rounded-full p-1"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
            <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
            <path d="M9 14l2 2l4 -4" />
          </svg>
          <p className="font-semibold text-xs text-white uppercase">{estado}</p>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7 bg-white p-1 rounded-full"
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
          <p className="font-semibold text-xs text-white">
            {mobileFormater(movil)}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7 bg-white p-1 rounded-full"
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
          <p className="font-semibold text-xs text-white">{cargo}</p>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7 bg-white p-1 rounded-full"
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
          <p className="font-semibold text-xs text-white">{area}</p>
        </div>
      </section>
    </aside>
  );
}
