import './App.css';
import { useState } from 'react';
import Caret from './icon/Caret';

function App() {

  const [sort, setSort] = (useState({keyToSort: "MAKE", direction: "asc"}))

   const data = [
     {
       id: 1,
       MAKE: "Nissan",
       MODEL: "Skyline R34",
       YEAR: 1959,
       HORSEPOWER: 280,
       COLOR: "Sliver",
     },
     {
       id: 2,
       MAKE: "Ferrai",
       MODEL: "Newton R34",
       YEAR: 1989,
       HORSEPOWER: 230,
       COLOR: "Sliver",
     },
     {
       id: 3,
       MAKE: "Dustin",
       MODEL: "BLG R34",
       YEAR: 1999,
       HORSEPOWER: 210,
       COLOR: "Sliver",
     },
     {
       id: 4,
       MAKE: "Perck",
       MODEL: "RLI R34",
       YEAR: 1919,
       HORSEPOWER: 290,
       COLOR: "Sliver",
     },
   ];
  const headers = [
    {
      id: 1,
      KEY: "MAKE",
      LABEL: "Make",
    },
    {
      id: 2,
      KEY: "MODEL",
      LABEL: "Model",
    },
    {
      id: 3,
      KEY: "HORSEPOWER",
      LABEL: "Horsepower",
    },
    {
      id: 4,
      KEY: "YEAR",
      LABEL: "Year",
    },
  ];

  const handleHeaderClick = (header) => {
    setSort({
      keyToSort:header.KEY,
      direction: header.KEY === sort.keyToSort ? sort.direction === 'asc' ? 'desc' : 'asc' : 'dsc'
    })
   }

   const getSortedArr = (arrToSort) => {
    if (sort.direction === 'asc') {
      //sort asc
      return arrToSort.sort((a,b) => (a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1));
      
          }
          //sort dsc
        return arrToSort.sort((a,b) => (a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1));

   }
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} onClick={() => handleHeaderClick(header)}>
                <span>{header.LABEL}</span>
                {header.KEY === sort.keyToSort && (
                  <Caret
                    direction={
                      sort.keyToSort === header.KEY ? sort.direction : "asc"
                    }
                  />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {getSortedArr(data).map((row, index) => (
            <tr key={index}>
              {headers.map((header, index) => {
                return <td key={index}>{row[header.KEY]}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
