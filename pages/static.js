import Header from "../components/Header.js";

export default function StaticPage({ data }) {
  return (
    <div>
      <Header title="Static Generation" />
      <p>{data.message}</p>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`https://edge-functions-json-response.vercel.app/`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
