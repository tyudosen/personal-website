"use client";

import { Button } from "../button";

export default function Footer() {
  return <footer className="flex gap-4">
    {/* <Button className="font-black" variant="link">
        Projects
    </Button> */}
    <Button asChild variant="link">
    <a href="mailto:tyudosen@yahoo.com" className="font-black" rel="noopener noreferrer" target="_blank">Contact Me</a>
    </Button>
  </footer>;
}
