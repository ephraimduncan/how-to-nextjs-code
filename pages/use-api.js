import Header from "../components/Header.js";

export default function StaticPage({ data }) {
  return (
    <div>
      <Header title="Static Generation To Use API" />
      <p>{data.hello}</p>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3000/api/hello");
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
