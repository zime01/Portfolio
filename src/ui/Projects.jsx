import travelList from "../assets/travel-list-main_ss.png";
import expenseTracker from "../assets/expense-tracker-ss.png";
import pizzaApp from "../assets/pizza-app-ss.png";
import wildOasis from "../assets/wild-oasis-ss.png";
import { IoLogoGithub } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="my-0 mx-auto max-w-[62.5rem] mt-20 mb-10">
      <p className="text-[var(--color-text-primary)] text-3xl text-center ">
        My recent{" "}
        <span className="text-[var(--color-text-h)] font-semibold">works</span>
      </p>
      <div className="mt-32 grid grid-cols-[1fr] md:grid-cols-[1fr,1fr] lg:grid-cols-[1fr,1fr,1fr] gap-5">
        <div className="p-6 border-[1px] border-[var(--color-text-h)] rounded-lg ">
          <img src={travelList} className="rounded-lg" />
          <h1 className="mt-6 mb-2 text-center text-[var(--color-text-primary)] text-base">
            Travel List
          </h1>
          <p className="text-[var(--color-text-primary)] text-sm tracking-wide">
            The Travel List app helps users organize their packing for trips. It
            allows you to create a checklist of items to pack, ensuring you
            don't forget anything important. You can add, edit, or remove items
            from your list as needed.
          </p>
          <div className="my-4 flex items-center justify-center gap-5">
            <Link to="https://github.com/zime01/travel-list">
              <div className="flex items-center justify-around gap-3 bg-[var(--color-text-h)] py-1 px-2 rounded-md">
                <IoLogoGithub className="w-6 h-6 text-[var(--color-link)] rounded-full" />
                <span className="text-[var(--color-link)] text-sm">Github</span>
              </div>
            </Link>
            <Link to="https://travel-list-z01.netlify.app/">
              <div className="flex items-center justify-around gap-3 bg-[var(--color-text-h)] py-1 px-2 rounded-md">
                <IoCheckmarkCircle className="w-6 h-6 text-[var(--color-link)] rounded-full" />
                <span className="text-[var(--color-link)] text-sm">Demo</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="p-6 border-[1px] border-[var(--color-text-h)] rounded-lg ">
          <img
            src={expenseTracker}
            className="rounded-lg w-[270px] h-[130px] "
          />
          <h1 className="mt-6 mb-2 text-center text-[var(--color-text-primary)] text-base">
            Expense Tracker
          </h1>
          <p className="text-[var(--color-text-primary)] text-sm tracking-wide">
            The Expense Tracker app is a simple, easy-to-use tool for tracking
            personal expenses. It allows users to add, edit, and remove
            transactions, helping to monitor and manage finances. This app is
            great for practicing basic React skills while creating a functional
            tool for everyday budgeting.
          </p>
          <div className="my-4 flex items-center justify-center gap-5">
            <Link to="https://github.com/zime01/epxense-tracker">
              <div className="flex items-center justify-around gap-3 bg-[var(--color-text-h)] py-1 px-2 rounded-md">
                <IoLogoGithub className="w-6 h-6 text-[var(--color-link)] rounded-full" />
                <span className="text-[var(--color-link)] text-sm">Github</span>
              </div>
            </Link>
            <Link to="https://expense-tracker-z01.netlify.app/">
              <div className="flex items-center justify-around gap-3 bg-[var(--color-text-h)] py-1 px-2 rounded-md">
                <IoCheckmarkCircle className="w-6 h-6 text-[var(--color-link)] rounded-full" />
                <span className="text-[var(--color-link)] text-sm">Demo</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="p-6 border-[1px] border-[var(--color-text-h)] rounded-lg ">
          <img src={pizzaApp} className="rounded-lg" />
          <h1 className="mt-6 mb-2 text-center text-[var(--color-text-primary)] text-base">
            Pizza App
          </h1>
          <p className="text-[var(--color-text-primary)] text-sm tracking-wide">
            It's designed to showcase basic React functionality, such as
            handling user input and displaying dynamic content. The app focuses
            on providing a seamless experience for ordering pizza, making it a
            good practice project for front-end development.
          </p>
          <div className="my-4 flex items-center justify-center gap-5">
            <Link to="https://github.com/zime01/fast-pizza-react-app">
              <div className="flex items-center justify-around gap-3 bg-[var(--color-text-h)] py-1 px-2 rounded-md">
                <IoLogoGithub className="w-6 h-6 text-[var(--color-link)] rounded-full" />
                <span className="text-[var(--color-link)] text-sm">Github</span>
              </div>
            </Link>
            <Link to="https://mini-pizza-order-react-app-z01.netlify.app/">
              <div className="flex items-center justify-around gap-3 bg-[var(--color-text-h)] py-1 px-2 rounded-md">
                <IoCheckmarkCircle className="w-6 h-6 text-[var(--color-link)] rounded-full" />
                <span className="text-[var(--color-link)] text-sm">Demo</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="p-6 border-[1px] border-[var(--color-text-h)] rounded-lg lg:col-[2/3] ">
          <img src={wildOasis} className="rounded-lg" />
          <h1 className="mt-6 mb-2 text-center text-[var(--color-text-primary)] text-base">
            The wild oasis
          </h1>
          <p className="text-[var(--color-text-primary)] text-sm tracking-wide">
            The "Wild Oasis" app includes a dashboard that presents
            user-specific data and insights over the last 90 days. This
            feature-rich interface is designed to track and analyze relevant
            metrics, offering a seamless way for users to stay informed and
            engaged. The project highlights the practical use of React and
            dynamic data visualization. Explore the app
          </p>
          <div className="my-4 flex items-center justify-center gap-5">
            <Link to="https://github.com/zime01/the-wild-oasis">
              <div className="flex items-center justify-around gap-3 bg-[var(--color-text-h)] py-1 px-2 rounded-md">
                <IoLogoGithub className="w-6 h-6 text-[var(--color-link)] rounded-full" />
                <span className="text-[var(--color-link)] text-sm">Github</span>
              </div>
            </Link>
            <Link to="https://wild-oasis-z01.netlify.app">
              <div className="flex items-center justify-around gap-3 bg-[var(--color-text-h)] py-1 px-2 rounded-md">
                <IoCheckmarkCircle className="w-6 h-6 text-[var(--color-link)] rounded-full" />
                <span className="text-[var(--color-link)] text-sm">Demo</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
