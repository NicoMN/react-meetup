import styleClasses from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={styleClasses.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
