import { FC, PropsWithChildren } from 'react';

type HeaderType = PropsWithChildren<{ color: string }>;

const Header: FC<HeaderType> = ({ children, color }) => {
  return <h2 style={{ color }}>{children}</h2>;
};

export default Header;
