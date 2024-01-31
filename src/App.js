import Content from "./Content";
import Faq from "./Faq";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Instructor from "./Instructor";
import OnlineCourses from "./OnlineCourses";
import OurTopCategories from "./OurTopCategories";
import Student from "./Student";


function App() {
  return (
    <div className="App">
      <Header />

      <div className="content">
        <Student />
        <div>
          <Hero />
        </div>
        <div className="online">
          <OnlineCourses />
        </div>
        <div className="topcategories">
          <OurTopCategories />
        </div>
        <div className="content">
          <Content />
        </div>
        <div className="Instructor">
          <Instructor />
        </div>
        <div className="faq">
          <Faq />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
