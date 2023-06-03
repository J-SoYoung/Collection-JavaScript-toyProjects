import "./App.css";
import { data } from "./TestItem/TestData";
import TestItem from "./TestItem/TestItem";
import SortableList from "./lib/SortableList";

function App() {
  const onDropItem = (newList) => {
    console.log(newList);
  };
  const onClickItem = (index) => {
    alert(index);
  };

  return (
    <div className="App">
      <SortableList
        data={data}
        renderItem={(item, index) => {
          return <TestItem data={item} index={index} />;
        }}
        onDropItem={onDropItem}
        onClickItem={onClickItem}
      />
    </div>
  );
}

export default App;
