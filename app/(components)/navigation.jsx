"use client";
import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/app/(context)/auth-context";

const Navigation = () => {
  const user = useAuth();
  return (
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
          style={{
            borderRadius: "border-radius: 9999px",
            width: "2.5rem",
            height: "2.5rem",
          }}
          className="w-10 h-10 rounded-full"
        />
        <p className="text-default-text">{user.email}</p>
      </div>
    </nav>
  );
};

export default Navigation;
