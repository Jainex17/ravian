import Link from "next/link";
import React from "react";

const routeList = [
  {
    href: "#About",
    label: "About",
  },
  {
    href: "#Vision",
    label: "Vision",
  },
  {
    href: "#Offerings",
    label: "Offerings",
  },
  {
    href: "#Contact",
    label: "Contact",
  },
];

export const Footer = () => {
  return (
    <>
      <footer className="rounded-lg shadow m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                RAVIAN.AI
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
              {routeList.map(({ href, label }, key) => (
                <li key={key}>
                  <Link href={href} className="hover:underline me-4 md:me-6">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline">
              RAVIAN.AI™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};
