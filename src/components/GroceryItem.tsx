import { FC, PropsWithChildren } from 'react';

type GroceryItem = PropsWithChildren<{
  recurrent?: boolean;
}>;

const GroceryItem: FC<GroceryItem> = ({ children, recurrent }) => {
  return (
    <article>
      <div>
        {children}
        <p>Compra recorrente? {recurrent ? `Sim` : `Não`}</p>
      </div>
    </article>
  );
};

export default GroceryItem;
