import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toyoabasi Udosen",
  description: "Software Engineer, scalable and efficient systems, AWS",
};

export default function Home() {
  return (
    <main className="flex-1">
      <p className="pt-8 w-[50%]">
        I am a <strong>software engineer</strong> with a passion for{" "}
        <strong>building beautiful, scalable and efficient</strong> systems.
      </p>
    </main>
  );
}
