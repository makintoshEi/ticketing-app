import { GoogleSignIn } from "./(components)/authentication";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <GoogleSignIn />
    </div>
  );
};

export default Page;
