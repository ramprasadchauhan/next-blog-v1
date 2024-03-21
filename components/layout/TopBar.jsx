"use client";
import { SignIn, SignOutButton } from "@clerk/nextjs";
import { Add, Logout, Search } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TopBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  return (
    <div className="flex justify-between items-center mt-6">
      <div className="relative">
        <input
          type="text"
          className="search-bar"
          placeholder="Search posts, people, ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="search-icon" onClick={() => {}} />
      </div>
      <button
        className="create-post-btn"
        onClick={() => router.push("/create-post")}
      >
        <Add /> <span>Create a Post</span>
      </button>
      <div className="flex gap-3">
        <SignIn>
          <SignOutButton>
            <div className="flex cursor-pointer md:hidden items-center">
              <Logout sx={{ color: "white", fontSize: "32px" }} />
            </div>
          </SignOutButton>
        </SignIn>
      </div>
      <Link href="/">
        <Image
          src="/assets/phucmai.png"
          alt="profile photo"
          width={50}
          height={50}
          className="rounded-full md:hidden"
        />
      </Link>
    </div>
  );
};

export default TopBar;
