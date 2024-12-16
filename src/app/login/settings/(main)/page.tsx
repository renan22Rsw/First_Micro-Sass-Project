import { auth } from "@/services/auth";
import ProfileForm from "../settings/_components/form";

const Settings = async () => {
  const session = await auth();

  return <ProfileForm defaultValues={session?.user} />;
};

export default Settings;
