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
    <nav className="bg-slate-900">
      <div className="flex justify-between px-8 py-1">
        <Link className="flex flex-shrink-0 items-center gap-2" href="/">
          <span className="text-white font-bold text-2xl">Home</span>
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
