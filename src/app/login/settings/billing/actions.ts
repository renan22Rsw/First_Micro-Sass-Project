"use server";

import { auth } from "@/services/auth";
import { createCheckoutSession } from "@/services/stripe";
import { redirect } from "next/navigation";

export const createCheckoutSessionAction = async () => {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Not authorized");
  }

  const checkoutSession = await createCheckoutSession(
    session.user.id as string,
    session.user.email as string,
    session.user.stripeSubscriptionId as string,
  );
  if (!checkoutSession.url) return;
  redirect(checkoutSession.url);
};
