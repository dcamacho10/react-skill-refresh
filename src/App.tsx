import { FC, useState } from 'react';
import groceryIcon from './assets/grocery-icon.png';
import GroceryItem from './components/GroceryItem';
import Header from './components/Header';

type Item = {
  name: string;
  recurrent?: boolean;
  id: number;
};

export const App: FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const handleAddItem = () => {
    setItems((prevItems) => {
      const newItem: Item = {
        id: Math.random(),
        name: 'Pão',
        recurrent: true,
      };
      return [...prevItems, newItem];
    });
  };
  return (
    <>
      <Header
        image={{ src: groceryIcon, alt: 'Go to the grocery shop!' }}
        color='gray'
      >
        Grocery
      </Header>
      <button onClick={handleAddItem}>Add item</button>
      <ul>
        {items.map(({ name, id, recurrent }) => (
          <li key={id}>
            <GroceryItem recurrent={recurrent}>
              <p>{name}</p>
            </GroceryItem>
          </li>
        ))}
      </ul>
    </>
  );
};
