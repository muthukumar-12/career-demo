import Header from "./components/Header";
import Footer from "./components/Footer";
import CareerPage from "./pages/CareerPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CareerPage />
      <Footer />
    </div>
  );
}

export default App;
