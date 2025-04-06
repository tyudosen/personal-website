import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toyoabasi Udosen",
  description: "Software Engineer, scalable and efficient systems, AWS",
};

export default function Home() {
  return (
    <main className="flex-1">
      <p className="pt-8 w-[50%] font-base color-base-text">
        I am a{" "}
        <strong>
          <a
            className="underline"
            href="https://www.linkedin.com/in/toyoabasi"
            target="_blank"
            rel="noopener noreferrer"
          >
            software engineer
          </a>
        </strong>{" "}
        with a passion for building beautiful, scalable and efficient systems.
      </p>
    </main>
  );
}
