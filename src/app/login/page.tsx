import { auth } from "@/services/auth";
import UserInfo from "./_components/UserInfo";

const Login = async () => {
  const session = await auth();

  return (
    <div className="flex h-screen items-center justify-center">
      <UserInfo user={session?.user} />
    </div>
  );
};

export default Login;
