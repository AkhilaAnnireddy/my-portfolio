import { redirect } from "next/navigation";

export default function HomeRedirect() {
  redirect("/home"); // Redirects `/` to `/home`
}
