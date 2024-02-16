import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  return <div>{JSON.stringify(session)}</div>;
};

export default DashboardPage;
