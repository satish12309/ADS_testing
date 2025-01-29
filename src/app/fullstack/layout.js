import NavbarHome from "../components/home/navbar/NavbarHome";

export default function CourseLayout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <NavbarHome isDSA={true} DSAdownloadBrochure={true}/>
        </nav>
      </header>

      <main>
        <div className="content">
          {children}{" "}
        </div>
      </main>

      {/* <footer>
        <p>© 2024 Your Course Platform. All rights reserved.</p>
      </footer> */}
    </div>
  );
}
