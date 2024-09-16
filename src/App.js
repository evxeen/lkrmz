import "./App.css";
import Header from "./components/Header/Header";
import Chapter from "./components/Chapter/Chapter";

import { chapterList } from "./components/Icons";

function App() {
  console.log(chapterList);
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="content">
          {chapterList.map((item, index) => (
            <Chapter key={index} title={item.title} Image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
