import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/dashboard";

const Login = async () => {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Tarefas</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain>
        <h1>Tarefas</h1>
      </DashboardPageMain>
    </DashboardPage>
  );
};

export default Login;
