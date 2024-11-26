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
import { getUserTodos } from "./actions";

const Login = async () => {
  const todos = await getUserTodos();

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
        <TodoDataTable data={todos} />
      </DashboardPageMain>
    </DashboardPage>
  );
};

export default Login;
