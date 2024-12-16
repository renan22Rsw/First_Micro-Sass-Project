export const config = {
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
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
