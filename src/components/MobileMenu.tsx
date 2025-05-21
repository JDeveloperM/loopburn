'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

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
            <a href="/token" className="text-2xl font-semibold hover:text-primary">
              Token
            </a>
            <a href="/how-to" className="text-2xl font-semibold hover:text-primary">
              How To
            </a>
           
          </nav>
        </div>
      )}
    </div>
  );
}