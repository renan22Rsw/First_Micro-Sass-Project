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
import { auth } from "@/services/auth";
import { getUserCurrentPlan } from "@/services/stripe";

const Billing = async () => {
  const session = await auth();
  const plan = await getUserCurrentPlan(session?.user.id as string);

  return (
    <form action={createCheckoutSessionAction}>
      <Card>
        <CardHeader className="border-b border-border">
          <CardTitle>Plan Usage</CardTitle>
          <CardDescription>
            You are currently on the{" "}
            <span className="font-bold uppercase text-white">{plan.name}.</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-2">
            <header className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {plan.quota.TASKS.current}/{plan.quota.TASKS.available}
              </span>
              <span className="text-sm text-muted-foreground">
                {plan.quota.TASKS.usage}%
              </span>
            </header>
            <main>
              <Progress value={plan.quota.TASKS.usage} />
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
