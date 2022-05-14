import Header from "../components/Header.js";

export default function ServerPage({ data }) {
  return (
    <div>
      <Header title="Server-Side Rendering" />
      <p>{data.message}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
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
