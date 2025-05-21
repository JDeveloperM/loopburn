'use client';

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ActionButtons() {
  return (
    <TooltipProvider>
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              size="lg" 
              className="w-full sm:w-auto border-2 border-primary/30 hover:bg-primary/10 text-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 px-4 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl opacity-50 cursor-not-allowed"
              onClick={(e) => e.preventDefault()}
              aria-disabled="true"
            >
              Execute Loop
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Coming soon!</p>
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-primary/30 hover:bg-primary/10 hover:text-white text-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 px-4 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl opacity-50 cursor-not-allowed"
              onClick={(e) => e.preventDefault()}
              aria-disabled="true"
            >
              Trade on ShadowDex
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Coming soon!</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}