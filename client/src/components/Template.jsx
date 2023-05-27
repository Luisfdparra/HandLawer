import { Sidebar } from "./Sidebar";


function Template({ children }) {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <main className="max-w flex-1">{children}</main>
    </div>
  );
}

export default Template;
