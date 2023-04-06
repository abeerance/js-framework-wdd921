import Head from "next/head";

const WebappHead: React.FC = () => {
  return (
    <>
      <Head>
        <title>aesthete online shop</title>
        <meta
          name='description'
          content='aesthete is an aesthetic online shop'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  );
};

export default WebappHead;
