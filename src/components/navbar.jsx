import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

const Navbar = () => {
  const location = useRouter();

  const isCurrentPath = (path) => path === location?.pathname;

  const navigation = [
    {
      name: "Home",
      href: "/",
      current: isCurrentPath("/"),
    },
    {
      name: "Exchange",
      href: "/exchange",
      current: isCurrentPath("/exchange"),
    },
    {
      name: "Store",
      href: "/store",
      current: isCurrentPath("/store"),
    },
  ];

  return (
    <nav className="fixed w-screen z-40  bg-gradient-to-l from-slate-900 via-transparent to-black backdrop-blur-md  border-b-[1px] border-slate-400">
      <div className="flex justify-center md:justify-between px-8 py-1">
        <Link className="hidden md:flex flex-shrink-0 items-center gap-2" href="/">
          <span
            className={classNames(
              navigation[0].current ? "text-white" : "text-gray-400",
              "hover:text-white font-bold text-2xl"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </span>
        </Link>

        <div>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                "transition-colors duration-200",
                item.current
                  ? "text-white underline underline-offset-2"
                  : "text-gray-400 hover:text-white hover:shadow-lg font-semibold",
                "px-3 py-2 rounded-md text-sm font-medium"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
