"use client";

import { usePostHog } from "posthog-js/react";
import { Button } from "../button";

export default function Footer() {
  const posthog = usePostHog();
  
  const handleClick = () => {
    posthog.capture('contact-me-clicked');
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
