'use client';

import TokenInformation from "@/components/TokenInformation";
import CoreMechanism from "@/components/CoreMechanism";

export default function TokenPage() {
  return (
    <main className="flex flex-col gap-8 items-center max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold">Token Information</h1>
      <div className="space-y-4">
              
                <p className="text-center text-muted-foreground">
                  LoopBurn implements a systematic burn mechanism that reduces supply over time <br></br>through automated LP farming rewards conversion, creating sustainable deflationary pressure.
                </p>
              </div>
      <div className="w-full space-y-8">
        <TokenInformation />
 
      </div>
    </main>
  );
}