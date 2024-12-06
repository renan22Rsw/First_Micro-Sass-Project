export const config = {
  stripe: {
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
    webhookSecret: "",
    plans: {
      free: {
        priceId: "price_1QT2tPI6HKiK5UPYQ0zU6jiK",
        quota: {
          TASKS: 5,
        },
      },
      pro: {
        priceId: "price_1QT2tkI6HKiK5UPYBFqb4hAv",
        quota: {
          TASKS: 100, //-1 means infinite,
        },
      },
    },
  },
};
