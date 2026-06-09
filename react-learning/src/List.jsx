function List() {
  const fruits = [
    { id: 1, name: "Mango", calories: 95 },
    { id: 2, name: "Banana", calories: 25 },
    { id: 3, name: "Pineapple", calories: 40 },
    { id: 4, name: "Apple", calories: 55 },
  ];

  fruits.sort();
  
  const newList = fruits.map((fruit) => <li key={fruit.id}>{fruit.name}:&nbsp; <b>{fruit.calories}</b></li>);
  return <ol>{newList}</ol>;
}

export default List;
