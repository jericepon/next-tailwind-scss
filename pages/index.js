import Head from "next/head";
import Image from "next/image";
import Api from "../config/Api";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className="text-center text-[36px] my-6">
        <span className="text-red-600">WebDev</span> News
      </h1>

      <div className="grid grid-flow-dense lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {posts.length ? (
          posts.map(({ id, userId, title, body }, idx) => (
            <div
              className="flex flex-col justify-between bg-white text-black p-4 rounded-lg"
              key={idx}
            >
              <h1 className="text-3xl mb-4">{title}</h1>
              <div>{body}</div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const res = await Api.get("/posts?_limit=10");
    const posts = res.data;
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.log("file: index.js ~ line 29 ~ error", error);
  }
};
