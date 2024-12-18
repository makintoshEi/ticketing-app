"use client";
import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/app/(context)/auth-context";
import { auth } from "@/app/(lib)/firebase";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const user = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return user?.uid ? (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/ticket-page/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Image
          src={user.photoURL}
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
        <p className="text-default-text space-x-4">{user.email}</p>
        <button type="button" onClick={handleSignOut}>
          <p className="text-default-text">Log out</p>
        </button>
      </div>
    </nav>
  ) : null;
};

export default Navigation;
