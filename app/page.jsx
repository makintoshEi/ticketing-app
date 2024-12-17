import { GoogleSignIn } from "./(components)/authentication";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const Page = () => {
  return <GoogleSignIn />;
};

export default Page;
