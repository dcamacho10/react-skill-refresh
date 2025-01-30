import { FC } from 'react';
import Header from './components/Header';

export const App: FC = () => {
  return (
    <>
      <Header color='gray'>This is my header</Header>
      <h1>Welcome to my app</h1>
    </>
  );
};
