import { z } from "zod";

const themeFormSchema = z.object({
  theme: z.enum(["light", "dark"], {
    required_error: "Please select a theme.",
  }),
});

export default themeFormSchema;
