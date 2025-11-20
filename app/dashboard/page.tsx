import { auth, signOut } from "../../auth";
import { Button } from "../ui/button";

export default async function DashboardPage() {
  const session = await auth();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="mb-4">You are logged in as {session?.user?.email}</p>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button type="submit">Sign out</Button>
        </form>
      </div>
    </div>
  );
}
