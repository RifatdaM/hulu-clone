import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightBulbIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex mr-0 sm:mr-8 flex-col sm:flex-row justify-between h-auto items-center">
      <div className="flex flex-grow-0 justify-evenly max-w-2xl">
        <HeaderItem Icon={HomeIcon} title="Home" />
        <HeaderItem Icon={BadgeCheckIcon} title="Varified" />
        <HeaderItem Icon={CollectionIcon} title="Collection" />
        <HeaderItem Icon={LightBulbIcon} title="Ideas" />
        <HeaderItem Icon={SearchIcon} title="Search" />
        <HeaderItem Icon={UserIcon} title="User" />
      </div>
      <Image
        className="object-contain"
        src={`/logo.png`}
        alt="Hulu logo"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
