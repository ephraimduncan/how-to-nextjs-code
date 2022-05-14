import Header from "../components/Header";
import { useRouter } from "next/router";

export default function DynamicPage() {
  const router = useRouter();

  return (
    <div>
      <Header title="Dynamic Page" />
      <p>{router.query.id}</p>
    </div>
  );
}
