import Nav from "./Nav";
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="dark:bg-gray-800 dark:text-white min-h-[100vh]">{children}</main>
    </>
  );
};

export default Layout;
