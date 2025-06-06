'use client';

import MobileMenu from '@/components/MobileMenu';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Header() {
  return (
    <header className="border-b bg-[#151313]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image 
            src="/loopburn-logo.png" 
            alt="LoopBurn Logo" 
            width={100} 
            height={100}
            className="w-8 h-8"
          />
          <span className="text-xl font-bold">LoopBurn</span>
        </div>

        {/* Desktop Navigation */}
        <TooltipProvider>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="hover:text-primary transition-colors opacity-50 cursor-not-allowed"
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
                  onClick={(e) => e.preventDefault()}
                  className="hover:text-primary transition-colors opacity-50 cursor-not-allowed"
                  aria-disabled="true"
                >
                  Yield Reactor
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Coming soon!</p>
              </TooltipContent>
            </Tooltip>
           
          </nav>
        </TooltipProvider>

        {/* Mobile Menu */}
        <MobileMenu />
        
        {/* Add the wallet connect button */}
        <div>
          <appkit-button />
        </div>
      </div>
    </header>
  )
}
