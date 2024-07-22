import "./App.css";
import Items from "./components/Items";
import ItemDate from "./components/ItemDate";
import Card from "./components/Card"



function App() {

  // const itemNameTwo = "SurfExcel"; 
  const response = [
    {
      itemName: "Nirma",
      itemDate: "1",
      itemMonth: "jan",
      itemYear: "2022",
    },
    {
      itemName: "Nirma2",
      itemDate: "12",
      itemMonth: "jan2",
      itemYear: "20222",
    },
    {
      itemName: "Nirma3",
      itemDate: "13",
      itemMonth: "jan3",
      itemYear: "20223",
    },
  ];
  return (
    <div>
    <Card>
    <Items name={response[0].itemName} > hello jii mai aapki first item</Items>
    <ItemDate day= {response[0].itemDate} month = {response[0].itemMonth} year={response[0].itemYear} ></ItemDate>

    <Items name={response[1].itemName}>
      hello ji mai aapki second item
    </Items>
    <ItemDate day= {response[1].itemDate} month = {response[1].itemMonth} year={response[1].itemYear}></ItemDate>

    <Items name={response[2].itemName} >
      hello ji mai aapki third item
    </Items>
    <ItemDate day= {response[2].itemDate} month = {response[2].itemMonth} year={response[2].itemYear}></ItemDate>
    </Card>

    <div className="App"> Hello Vinayak</div>
    </div>

    // <div>
    // <Items name="Nirma" ></Items>
    // <ItemDate day= "01" month = "jan" year="2002"></ItemDate>

    // <Items name={itemNameTwo} ></Items>
    // <ItemDate day= "28" month = "may" year="2004"></ItemDate>

    // <Items name="555" ></Items>
    // <ItemDate day= "04" month = "sep" year="2003"></ItemDate>
    // <div className="App"> Hello Vinayak</div>
    // </div>
    
  );
}

export default App;
