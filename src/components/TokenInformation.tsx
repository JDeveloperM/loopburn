'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { Coins, Flame, Receipt, Lock } from "lucide-react"

export default function TokenInformation() {
  return (
    <Card className="w-4/5 mx-auto bg-transparent border-0">
      <CardContent>
        <div className="grid gap-8 mt-4">

          {/* Token Details Section - MOVED AND RESTYLED */}
          <div className="mt-4 mb-2">
            <Card> {/* Added Card component for background and border */}
              <CardContent className="py-4"> {/* Added CardContent and adjusted padding */}
                <ul className="flex flex-col sm:flex-row flex-wrap justify-around items-center gap-x-6 gap-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Coins className="h-4 w-4 text-blue-500" /> {/* Changed color */}
                    <span>1,000,000,000 LPB</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Flame className="h-4 w-4 text-red-500" /> {/* Changed color */}
                    <span>Initial Burn: 20%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Receipt className="h-4 w-4 text-green-500" /> {/* Changed color */}
                    <span>Tax: 0% Buy/Sell</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-orange-500" /> {/* Changed color */}
                    <span>LP Lock: 365 Days</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
      {/* Tokenomics Section - BAR CHARTS ONLY NOW */}
      <div className="flex flex-col justify-center items-center gap-8 mb-4"> {/* Simplified flex, items-start removed as only one child */}
        {/* Bar Chart Distribution Column - NOW FULL WIDTH */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full"> {/* Retain max-w-md for bar chart aesthetics - REMOVED max-w-md */}
            <div className="space-y-4">
              {/* Liquidity Pool - 80% */}
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Liquidity Pool</span>
                  <span>80%</span>
                </div>
                <div className="h-4 w-full bg-[rgb(128,5,135,0.2)] rounded-full overflow-hidden">
                  <div className="h-full bg-[rgb(128,5,135,0.8)] rounded-full" style={{ width: '80%' }} />
                </div>
              </div>

              {/* Marketing - 10% */}
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Marketing</span>
                  <span>10%</span>
                </div>
                <div className="h-4 w-full bg-[rgb(59,130,246,0.2)] rounded-full overflow-hidden">
                  <div className="h-full bg-[rgb(59,130,246,0.8)] rounded-full" style={{ width: '10%' }} />
                </div>
              </div>

              {/* Development - 10% */}
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Development</span>
                  <span>10%</span>
                </div>
                <div className="h-4 w-full bg-[rgb(249,115,22,0.2)] rounded-full overflow-hidden">
                  <div className="h-full bg-[rgb(249,115,22,0.8)] rounded-full" style={{ width: '10%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Information Column (Token Details Card) has been removed from here */}
      </div>
          {/* Supply Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2"> {/* Removed mt-2 as spacing is handled by parent gap */}
            <Card className="relative">
            <div className="absolute top-2 right-2">
            <Coins className="h-4 w-4 text-muted-foreground" />
              </div>
              <CardHeader className="pb-1 pt-2 px-3">
                <CardTitle className="text-xs text-muted-foreground">Circulating Supply</CardTitle>
              </CardHeader>
              <CardContent className="px-3 pb-2">
                <div className="text-lg font-bold">970,000 LPB</div>
                <p className="text-[10px] text-muted-foreground">97% of total supply</p>
              </CardContent>
            </Card>

            <Card className="relative">
              <div className="absolute top-2 right-2">
                <Flame className="h-4 w-4 text-muted-foreground" />
              </div>
              <CardHeader className="pb-1 pt-2 px-3">
                <CardTitle className="text-xs text-muted-foreground">Burned Tokens</CardTitle>
              </CardHeader>
              <CardContent className="px-3 pb-2">
                <div className="text-lg font-bold">0 LPB</div>
                <p className="text-[10px] text-muted-foreground">Updated every 8 hours</p>
              </CardContent>
            </Card>

            <Card className="relative">
            <div className="absolute top-2 right-2">
            <Lock className="h-4 w-4 text-muted-foreground" />
              </div>
              <CardHeader className="pb-1 pt-2 px-3">
                <CardTitle className="text-xs text-muted-foreground">Dev Wallet</CardTitle>
              </CardHeader>
              <CardContent className="px-3 pb-2">
                <div className="text-lg font-bold">30,000 LPB</div>
                <p className="text-[10px] text-muted-foreground">3% of total supply</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}