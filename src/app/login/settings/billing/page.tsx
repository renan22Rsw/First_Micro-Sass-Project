import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { createCheckoutSessionAction } from "./actions";

const Billing = () => {
  return (
    <form action={createCheckoutSessionAction}>
      <Card>
        <CardHeader className="border-b border-border">
          <CardTitle>Plan Usage</CardTitle>
          <CardDescription>
            You are currently on the Free plan. Current billing cycle:
            [next_due_date]
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-2">
            <header className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">1/5</span>
              <span className="text-sm text-muted-foreground">20%</span>
            </header>
            <main>
              <Progress value={20} />
            </main>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t border-border pt-6">
          <span>For a higher limit subscribe to the pro plano</span>
          <Button type="submit">Upgrade to pro</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default Billing;
