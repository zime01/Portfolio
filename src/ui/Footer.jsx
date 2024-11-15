import { BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[--color-footer]">
      <div className="my-0 mx-auto max-w-[62.5rem] flex items-center   justify-between  py-4 px-4">
        <p className="text-[var(--color-text-primary)] hidden sm:block text-sm lg:text-base">
          Developed by Hazim Zimić
        </p>
        <p className="text-[var(--color-text-primary)] text-[0.75rem] lg:text-base">
          Copyright &copy; Hazim Zimić 2024
        </p>
        <div className="flex gap-2">
          <Link to="https://github.com/zime01">
            <IoLogoGithub className="w-6 h-6 text-[var(--color-btn-primary)] " />
          </Link>
          <Link to="https://www.instagram.com/zime_01/">
            <BiLogoInstagram className="w-6 h-6 text-[var(--color-btn-primary)]" />
          </Link>
          <Link to="https://x.com/zime_01">
            <BiLogoTwitter className="w-6 h-6 text-[var(--color-btn-primary)]" />
          </Link>
          <Link to="https://www.linkedin.com/in/hazim-zimic-9204751a2/">
            <BiLogoLinkedin className="w-6 h-6 text-[var(--color-btn-primary)]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
