import Nav from "./Nav";
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="dark:bg-black dark:text-white min-h-[100vh] py-[64px] lg:px-9 md:px-6 px-4">
        {children}
      </main>
    </>
  );
};

export default Layout;
