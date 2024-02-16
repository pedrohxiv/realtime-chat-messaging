import { redirect } from "next/navigation";

const RootPage = async () => {
  return redirect("/dashboard");
};

export default RootPage;
