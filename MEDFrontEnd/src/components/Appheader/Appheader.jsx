import { Button, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { removeToken } from "../../helpers";
//
import React, { useContext, useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";
import { API } from "../../constant";
import { CartContext } from "../../context/CartContext";
import { SidebarContext } from "../../context/SidebarContext";
import Logo from "../../img/logo.svg";

const AppHeader = () => {
  const { user, setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    setUser(undefined);
    navigate("/signin", { replace: true });
  };
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [query, setQuery] = useState("");
  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  const getProudctByName = async () => {
    const res = await fetch(
      `${API}/plants?locale=awashagandha`
    );
    const data = await res.json();
    console.log("data", data);
  };

  useEffect(() => {
    getProudctByName();
  }, [query]);

  return (
    <Space className="header_space">
      <Button className="header_space_brand" href="/" type="link">
        <Link to={"/"}>
          <div className="w-[40px]">
            <img src={Logo} alt="" />
          </div>
        </Link>
      </Button>
      <Space className="auth_buttons">
        <input
          type="text"
          className="text-black"
          name=""
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          id=""
        />
        {user ? (
          <>
            <Link to={"/profile"}>
              <Button className="auth_button_login" type="link">
                {user.username}
              </Button>
            </Link>
            <Button
              className="auth_button_signUp"
              type="primary"
              onClick={handleLogout}
            >
              Logout
            </Button>
            <div className="container mx-auto flex items-center justify-between h-full">
              {/* cart */}
              <div className="flex gap-2 relative">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer "
                >
                  <BsBag className="text-2xl" />
                  <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                    {itemAmount}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <Link to={"signin"}>
              <Button className="auth_button_login" type="link">
                Login
              </Button>
            </Link>
            <Link to={"/signup"}>
              <Button className="auth_button_signUp" type="primary">
                SignUp
              </Button>
            </Link>

            <div className="container mx-auto flex items-center justify-between h-full">
              {/* cart */}
              <div className="flex gap-2 relative">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer "
                >
                  <BsBag className="text-2xl" />
                  <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                    {itemAmount}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Space>
    </Space>
  );
};

export default AppHeader;
