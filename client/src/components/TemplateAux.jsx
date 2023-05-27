import { SidebarAux } from "./SidebarAux";


function TemplateAux({ children }) {
  return (
    <div className="flex">
      <SidebarAux></SidebarAux>
      <main className="max-w flex-1">{children}</main>
    </div>
  );
}

export default TemplateAux;
