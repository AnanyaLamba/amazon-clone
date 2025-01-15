import React from "react";
import AmazonLogo from "./AmazonLogo";
import Delivery from "./Delivery";
import SearchBar from "./SearchBar";
import Language from "./Language";
import AccountList from "./AccountList";
import ReturnOrder from "./ReturnOrder";
import Cart from "./Cart";

const Header = () => {
    return (
        <div className="bg-[#232f3e] text-white flex items-center justify-between h-20 w-full gap-2 px-3">
            <AmazonLogo />
            <Delivery />
            <SearchBar />
            <Language />
            <AccountList />
            <ReturnOrder />
            <Cart />
        </div>
    );
};

export default Header;