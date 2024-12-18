"use client";
import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
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
        <img
          src={user.photoURL}
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <p className="text-default-text">{user.email}</p>
      </div>
    </nav>
  );
};

export default Navigation;
