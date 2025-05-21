'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"; // adjust import as needed

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm">
          <nav className="fixed inset-0 flex flex-col items-center justify-center space-y-8">
            <a href="/" className="text-2xl font-semibold hover:text-primary">
              Home
            </a>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="#"
                    onClick={e => e.preventDefault()}
                    className="text-2xl font-semibold opacity-50 cursor-not-allowed"
                    aria-disabled="true"
                  >
                    Explorer
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Coming soon!</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="#"
                    onClick={e => e.preventDefault()}
                    className="text-2xl font-semibold opacity-50 cursor-not-allowed"
                    aria-disabled="true"
                  >
                    Yield Reactor
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Coming soon!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
        </div>
      )}
    </div>
  );
}
