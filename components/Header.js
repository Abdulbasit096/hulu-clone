import Image from "next/image";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-between sm:flex-row m-5 h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem Icon={HomeIcon} title="HOME" />
        <HeaderItem Icon={LightningBoltIcon} title="TRENDING" />
        <HeaderItem Icon={BadgeCheckIcon} title="VERIFIED" />
        <HeaderItem Icon={CollectionIcon} title="COLLECTIONS" />
        
        <HeaderItem Icon={SearchIcon} title="SEARCH" />
        <HeaderItem Icon={UserIcon} title="ACCOUNT" />
      </div>
      <div>
          <Image
            className="object-contain"
            src="/hulu.png"
            width={150}
            height={100}
          />
      </div>
    </header>
  );
};

Header.displayName = "Header";

export default Header;
