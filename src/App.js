import "./App.css";
import { useState } from "react";
import data from "./component/data";
import SingleContent from "./component/SingleContent";

function App() {
  const [content, setContent] = useState(data);
  return (
    <>
      <main>
        <div className='container'>
          <h3>Content Lorem</h3>
          <section>
            {content.map((data) => {
              return (
                <>
                  <SingleContent key={data.id} {...data} />
                </>
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
