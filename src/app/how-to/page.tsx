'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CoreMechanism from "@/components/CoreMechanism";

export default function HowToPage() {
  return (
    <main className="flex flex-col gap-8 items-center max-w-7xl mx-auto px-4 py-8">
   
      <div className="w-full space-y-8">
        <Card className="border-0 bg-transparent shadow-none">
         
          <CardContent>
            <CoreMechanism />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}