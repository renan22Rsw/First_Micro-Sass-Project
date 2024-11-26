import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/dashboard";
import { TodoDataTable } from "@/app/login/_components/todo-data-table";
import { Button } from "@/components/ui/button";
import { TodoUpsertSheet } from "./_components/todo-upsert-sheet";
import { PlusIcon } from "@radix-ui/react-icons";

const Login = async () => {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Tarefas</DashboardPageHeaderTitle>
        <DashboardPageHeader>
          <TodoUpsertSheet>
            <Button variant="outline" size="sm">
              <PlusIcon />
              Add Todo
            </Button>
          </TodoUpsertSheet>
        </DashboardPageHeader>
      </DashboardPageHeader>
      <DashboardPageMain>
        <TodoDataTable />
      </DashboardPageMain>
    </DashboardPage>
  );
};

export default Login;
