import coding from "../assets/coding.webp";

export default function About() {
  return (
    <div className="my-0 mx-auto w-[62.5rem] flex itemc-center justify-between h-[74.5vh] pt-10">
      <div>
        <p className="text-[var(--color-text-primary)] text-lg mb-3">
          Hello, I'm Hazim, a front-end developer with a strong passion for
          creating dynamic and interactive web applications. My main tool of
          choice is React, and I focus on building clean, efficient, and
          visually appealing websites that provide an excellent user experience.
        </p>
        <p className="text-[var(--color-text-primary)] text-lg mb-3">
          I’m currently in my final year of studying Software Engineering, with
          a strong focus on frontend development.
        </p>
        <p className="text-[var(--color-text-primary)] text-lg">
          I enjoy taking on new challenges and pushing myself to learn the
          latest technologies and best practices in front-end development. I’m
          passionate about building user-friendly and efficient web
          applications, constantly seeking to improve my skills and keep up with
          the latest trends.
        </p>
      </div>
      <div className="w-[100%]">
        <img src={coding} />
      </div>
    </div>
  );
}
