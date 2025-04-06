"use client";

import { Button } from "../button";

export default function Footer() {
  return <footer className="flex gap-4">
    <Button className="font-black" variant="link">
        Projects
    </Button>
    <Button className="font-black" variant="link">
        Contact Me
    </Button>
  </footer>;
}
