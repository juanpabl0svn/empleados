export default function Modal({ children, className, onClick }) {
  return (
    <aside
      className={`fixed top-0 left-0 w-full h-screen z-50 bg-[rgba(0,0,0,.45)] transition-all ease-in-out duration-200 grid place-content-center${
        className || ""
      }`}
      onClick={onClick}
    >
      <article onClick={(e) => e.stopPropagation()} className="show">
        {children}
      </article>
    </aside>
  );
}
