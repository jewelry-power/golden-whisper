import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
} from "@material-tailwind/react";
import logo from "../images/logoGold.png";
import { Link } from "react-router-dom";
 
function Example() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="flex flex-col  gap-2 lg:flex-row lg:items-center max-h-13">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 neonHover "
      >
        <Link to="/">

        <p  className="flex items-center m-2 pt-12  cursor-pointer">
          Home
        </p>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 neonHover"
      >
        <p href="#" className="flex m-2 pt-12 items-center">
          Account
        </p>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 neonHover"
      >
        <p href="#" className="flex  m-2  pt-12 items-center">
          Blocks
        </p>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 neonHover"
      >
        <p href="#" className="flex m-2 pt-12 items-center">
          Docs
        </p>
      </Typography>
    </ul>
  );
 
  return (
    <>
      <Navbar className="inset-0 z-10 h-max max-w-full rounded-none  px-4 lg:px-8 lg:py-4 backgNav">
        <div className="flex items-center  text-blue-gray-900 flexNavigation">
          <Typography
            as="a"
            href="#"
            className=" cursor-pointer max-h-12"
          >
<img src={logo} className="logo"/>          </Typography>
{/* <div className="icons">
  <p>1</p>
  <p>1</p>
  <p>1</p>
</div> */}
          <div className="flex items-center ">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              variant="gradient"
            //   size="sm"
              className="hidden lg:inline-block mt-12 "
            >
              <span>Buy Now</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className=""
                  viewBox=""
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>


        <MobileNav open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </MobileNav>
      </Navbar>
     
    </>
  );
}export default  Example