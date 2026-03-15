import { redirect } from "next/navigation";

// Root page — middleware handles locale detection, this is a safety fallback
export default function RootPage() {
  redirect("/en");
}

