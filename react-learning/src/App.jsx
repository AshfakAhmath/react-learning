import Button from "./Button/Button";
import Button1 from "./Button1";
import Card from "./Card";
import Food from "./Food";
import Footer from "./Footer";
import Header from "./Header";
import Student from "./Student";

function App() {
  return (
    <>
      <Header />
      <Food />
      <Card />
      <Card />
      <Card />
      <Card />
      <Button />
      <Button1 />
      <Footer />
      <Student name="Ashfak Ahmath" age={22} isStudent={true} />
      <Student name="Sahi" age={23} isStudent={false} />
      <Student name="Aasik" age={21} isStudent={true} />
    </>
  );
}

export default App;
