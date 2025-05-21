import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownToLine, ChartBarDecreasing, Flame, RefreshCcw, Timer } from "lucide-react"

export default function CoreMechanism() {
  return (

    
    <Card className="border-0 bg-transparent">
      
      <CardHeader className="text-center relative pt-2 px-6 pb-1"> {/* Modified padding */}
       
        <CardDescription className="text-[2rem] animate-pulse text-orange-500 font-semibold relative">
          <span className="relative inline-block">
            8-Hour Automation Cycle
            <span className="absolute inset-0 bg-orange-500/20 blur-sm animate-ping rounded-lg"></span>
          </span>
        </CardDescription>
        
       
      </CardHeader>

      <CardContent className="space-y-8">
         {/* Benefits Section */}
         <Card className="bg-transparent border-0">
         
          <CardContent >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[25px] bg-transparent border-0">
              <div className="p-0 md:p-4 rounded-lg bg-[#191e29] border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.2)] flex flex-col items-center text-center">
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="h-5 w-5 text-orange-500" />
                  <h4 className="font-semibold">Supply Reduction</h4>
                </div>
                <p className="text-sm text-muted-foreground">Reduces the circulating supply of $LPB</p>
              </div>
              <div className="p-0 md:p-4 rounded-lg bg-[#191e29] border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.2)] flex flex-col items-center text-center">
                <div className="flex items-center gap-2 mb-2">
                  <ChartBarDecreasing className="h-5 w-5 text-orange-500" />
                  <h4 className="font-semibold">Volume Growth</h4>
                </div>
                <p className="text-sm text-muted-foreground">Increases trading volume</p>
              </div>
              <div className="p-0 md:p-4 rounded-lg bg-[#191e29] border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.2)] flex flex-col items-center text-center">
                <div className="flex items-center gap-2 mb-2">
                  <RefreshCcw className="h-5 w-5 text-orange-500" />
                  <h4 className="font-semibold">Yield Incentives</h4>
                </div>
                <p className="text-sm text-muted-foreground">Incentivizes yield farmers with rising APYs from fees</p>
              </div>
            </div>
          </CardContent>
        </Card>

        
        <CardTitle className="text-center text-3xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent relative">
          Token Mechanisms
        </CardTitle>
        

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center border-0">
          <Card className="text-center border-0 bg-transparent">
           
            <CardContent className="p-0 md:p-4">
              <p className="font-medium flex items-center gap-2 justify-center mt-4">
                <Card className="shadow-[0_0_15px_rgba(234,88,12,0.2)] hover:shadow-[0_0_20px_rgba(234,88,12,0.3)] transition-shadow duration-300 border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 justify-center text-base">
                      <Timer className="w-5 h-5 text-purple-500" />
                      Claims Fees
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="h-[1px] w-full bg-border mb-4" />
                    <p className="text-muted-foreground text-base">From protocol owned liquidity</p>
                  </CardContent>
                </Card>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-0">
           
            <CardContent className="p-0 md:p-4">
              <p className="font-medium flex items-center gap-2 justify-center mt-4">
                <Card className="shadow-[0_0_15px_rgba(234,88,12,0.2)] hover:shadow-[0_0_20px_rgba(234,88,12,0.3)] transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 justify-center text-base">
                      <ArrowDownToLine className="w-5 h-5 text-blue-500" />
                      Withdraws 1% POL
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="h-[1px] w-full bg-border mb-4" />
                    <p className="text-muted-foreground text-base">From Protocol Owned Liquidity</p>
                  </CardContent>
                </Card>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-0">
           
            <CardContent className="p-0 md:p-4">
              <p className="font-medium flex items-center gap-2 justify-center mt-4">
                <Card className="shadow-[0_0_15px_rgba(234,88,12,0.2)] hover:shadow-[0_0_20px_rgba(234,88,12,0.3)] transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 justify-center text-base">
                      <Flame className="w-5 h-5 text-orange-500" />
                      Burns $LPB
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="h-[1px] w-full bg-border mb-4" />
                    <p className="text-muted-foreground text-base">From withdrawn LP tokens</p>
                  </CardContent>
                </Card>
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-transparent">
           
            <CardContent className="p-0 md:p-4">
              <p className="font-medium flex items-center gap-2 justify-center mt-4">
                <Card className="shadow-[0_0_15px_rgba(234,88,12,0.2)] hover:shadow-[0_0_20px_rgba(234,88,12,0.3)] transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 justify-center text-base">
                      <RefreshCcw className="w-5 h-5 text-green-500" />
                      Recycles $wS
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="h-[1px] w-full bg-border mb-4" />
                    <p className="text-muted-foreground text-base">To buy back and recycle $LPB</p>
                  </CardContent>
                </Card>
              </p>
            </CardContent>
          </Card>
        </div>

       
      </CardContent>
    </Card>
  )
}