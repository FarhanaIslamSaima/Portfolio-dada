import Home from "./components/Home";
import Header from "./components/Header/Header";
import SeriesList from "./components/body/Series/SeriesList";
import UserContext from "./context/UserContext";

function App() {
  return (
   
<UserContext>

<Home/>
</UserContext>


   

  
  
  );
}

export default App;
