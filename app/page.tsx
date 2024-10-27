import React from "react";
import { auth } from "@/server/auth";

export default async function Home() {
  const session = await auth();
  if (!session) {
    return <div>Not signed in</div>;
  }
  return <div>{JSON.stringify(session.user)}</div>;
}
