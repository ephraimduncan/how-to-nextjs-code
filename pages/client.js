import useSWR from "swr";
import Header from "../components/Header.js";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ClientPage() {
  const { data, error } = useSWR("/api/client", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Header title="Client-Side Rendering" />
      <p>{data.message}</p>
    </div>
  );
}
