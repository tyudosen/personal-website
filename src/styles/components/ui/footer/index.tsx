"use client";

import { trackEvent } from "fathom-client";
import { Button } from "../button";

export default function Footer() {
  const handleClick = () => {
    trackEvent('contact-me-link-click');
  };

  return <footer className="flex gap-4">
    {/* <Button className="font-black" variant="link">
        Projects
    </Button> */}
    <Button asChild variant="link" onClick={handleClick}>
    <a href="mailto:tyudosen@yahoo.com" className="font-black" rel="noopener noreferrer" target="_blank">Contact Me</a>
    </Button>
  </footer>;
}
