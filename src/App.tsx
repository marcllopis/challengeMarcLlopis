import { useEffect, useState } from "react";
import "./App.css";
import { API_URL } from "./utils/constants";
import { ILoompa } from "./utils/interfaces";
import Card from "./components/Card/Card";
import { ListWrapper, Header } from "./App.styles";

function App() {
  const [loompas, setLoompas] = useState<ILoompa[]>([]);
  const [selectedLoompas, setSelectedLoompas] = useState<ILoompa[]>([]);
  const [apiLoaded, setApiLoaded] = useState<boolean>(false);
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const orderedLoompas = data.results.sort((a: ILoompa, b: ILoompa) =>
          a["first_name"].localeCompare(b["first_name"])
        );
        setApiLoaded(true);
        setLoompas(orderedLoompas);
      });
  }, []);

  const handleSelectedLoompas = (loompaId: number, isChosenActive: boolean) => {
    const addLoompas = () => {
      const loompasToAdd = loompas.filter((loompa) => loompa.id === loompaId);
      setSelectedLoompas([...selectedLoompas, ...loompasToAdd]);
    };
    const removeLoompas = () => {
      const loompasToRemove = selectedLoompas.filter(
        (loompa) => loompa.id !== loompaId
      );
      setSelectedLoompas([...loompasToRemove]);
    };

    isChosenActive ? removeLoompas() : addLoompas();
  };

  return (
    <div>
      <Header>
        <h1>Oompa Loompa's</h1>
      </Header>
      <div>
        {selectedLoompas.length > 0 && (
          <>
            <p>Selected oompas:</p>
            <ul>
              {selectedLoompas.map((loompa) => (
                <li key={loompa.id}>{loompa["first_name"]}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <ListWrapper>
        {apiLoaded ? (
          loompas.map((oompa: ILoompa) => (
            <Card
              key={oompa.id}
              id={oompa.id}
              firstName={oompa["first_name"]}
              profession={oompa.profession}
              email={oompa.email}
              action={handleSelectedLoompas}
              song={oompa.favorite.song}
            />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </ListWrapper>
    </div>
  );
}

export default App;
