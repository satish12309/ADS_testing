import NavbarHome from "../components/home/navbar/NavbarHome";

// app/courses/layout.js
export default function CourseLayout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <NavbarHome radio={false} interstedInHide={true} dataScience={true} ADS={true}/>
        </nav>
      </header>

      <main>
        <div className="content">
          {children}{" "}
          {/* This will render the dynamic content from the child pages like [id]/page.js */}
        </div>
      </main>

      {/* <footer>
        <p>© 2024 Your Course Platform. All rights reserved.</p>
      </footer> */}

      {/* Add any additional layout elements (e.g., sidebars) here */}
    </div>
  );
}
