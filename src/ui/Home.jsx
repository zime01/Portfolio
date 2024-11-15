import codingImg from "../assets/pic.png";
import ja from "../assets/JA.jpg";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";
import { BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";

export default function Home() {
  return (
    <div>
      <div className="my-0 mx-auto max-w-[62.5rem] flex items-center  justify-between mt-12 pb-16 h-[75vh]  border-b-2 border-[var(--color-btn-primary)] p-4 ">
        <div className="">
          <h1 className="text-[var(--color-text-primary)] md:text-xl lg:text-3xl mb-3">
            Hello:)
          </h1>
          <p className="text-[var(--color-text-primary)] md:text-xl lg:text-3xl mb-3">
            I'am{" "}
            <span className="text-[var(--color-text-h)] font-semibold">
              Hazim Zimić
            </span>
          </p>
          <p className=" md:text-xl lg:text-3xl text-[var(--color-text-h)]">
            Front end developer
          </p>
        </div>
        <div className="">
          <img src={codingImg} alt="picture" />
        </div>
      </div>
      <div className="my-0 mx-auto max-w-[62.5rem] flex flex-col sm:flex-row items-center justify-between gap-20 pt-16 mt-16 mb-32 p-4">
        <div className="order-2">
          <h1 className="uppercase  text-[var(--color-text-primary)] md:text-xl lg:text-3xl mb-10">
            let me{" "}
            <span className="text-[var(--color-text-h)] font-semibold">
              introduce
            </span>{" "}
            myself
          </h1>
          <p className="text-[var(--color-text-primary)] md:text-base lg:text-lg pb-3">
            Software Engineering Student | Frontend Developer (React)
          </p>

          <p className="text-[var(--color-text-primary)] md:text-base lg:text-lg pb-3">
            While I have basic knowledge of C++ and C#, my main expertise lies
            in web technologies like HTML, CSS, JavaScript, and React.
          </p>
        </div>

        <div className="order-1 sm:order-2 w-[60%]">
          <img src={ja} className="rounded-[100%]     " />
        </div>
      </div>
      <div className="text-center">
        <p className="text-[var(--color-text-h)] text-2xl md:text-3xl pb-4 font-semibold">
          Find me on
        </p>
        <p className="text-[var(--color-text-primary)] text-base pb-7">
          Feel free to
          <span className="text-[var(--color-text-h)]"> connect </span>
          with me
        </p>
        <div className="flex justify-center gap-4 max-w-[62.5rem] my-0 mx-auto pb-20">
          <Link to="https://github.com/zime01">
            <IoLogoGithub className="w-8 h-8 lg:w-10 lg:h-10 text-[var(--color-btn-primary)] " />
          </Link>
          <Link to="https://www.instagram.com/zime_01/">
            <BiLogoInstagram className="w-8 h-8 lg:w-10 lg:h-10 text-[var(--color-btn-primary)]" />
          </Link>
          <Link to="https://x.com/zime_01">
            <BiLogoTwitter className="w-8 h-8 lg:w-10 lg:h-10 text-[var(--color-btn-primary)]" />
          </Link>
          <Link to="https://www.linkedin.com/in/hazim-zimic-9204751a2/">
            <BiLogoLinkedin className="w-8 h-8 lg:w-10 lg:h-10 text-[var(--color-btn-primary)]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
