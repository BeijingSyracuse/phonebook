import "./styles.css";
import { useState } from "react";

const phonebook = [
  { name: "aijie", number: "234567" },
  { name: "dasf", number: "567890" },
  { name: "aigfhjie", number: "234567" },
  { name: "jht", number: "987654" },
  { name: "fgd", number: "456873" }
];

export default function App() {
  const [userNumber, setUserNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [list, setList] = useState(phonebook);

  const [ascNumber, setAscnumber] = useState(false);

  const handleInputName = (e) => {
    setUserName(e.target.value);
  };

  const handleInputNumber = (e) => {
    setUserNumber(e.target.value);
  };

  const handleSubmit = () => {
    setList([...list, { name: userName, number: userNumber }]);
    //console.log(list);
  };

  const hanldeDelete = (e) => {
    setList(list.filter((val, index) => index.toString() !== e.target.id));
  };

  const handleSortedNumber = () => {
    if (!ascNumber) {
      setList(list.sort((a, b) => a.number - b.number));
      setAscnumber(true);
    } else {
      setList(list.sort((a, b) => b.number - a.number));
      setAscnumber(false);
    }
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <label>Name:</label>
      <input
        type="text"
        placeholder="enter your name"
        onChange={(e) => handleInputName(e)}
        value={userName}
      />

      <br />
      <label>Phone:</label>
      <input
        type="number"
        placeholder="enter your phone"
        value={userNumber}
        onChange={(e) => handleInputNumber(e)}
      />

      <br />

      <button onClick={handleSubmit}>Submit</button>

      <br />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th onClick={handleSortedNumber}>Phone</th>
            <th>action</th>
          </tr>
        </thead>

        <tbody>
          {list.length !== 0 &&
            list.map((val, index) => {
              return (
                <tr key={index}>
                  <td>{val.name}</td>
                  <td>{val.number}</td>
                  <td>
                    <button id={index} onClick={(e) => hanldeDelete(e)}>
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

//edit delete sorted
