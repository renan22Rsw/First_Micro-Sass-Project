import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/dashboard";

const Settings = () => {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Configurações</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain>
        <h1>Configurações</h1>
      </DashboardPageMain>
    </DashboardPage>
  );
};

export default Settings;
