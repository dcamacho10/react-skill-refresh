import { FC, PropsWithChildren } from 'react';

type HeaderType = PropsWithChildren<{
  color: string;
  image: { src: string; alt: string };
}>;

const Header: FC<HeaderType> = ({ children, color, image }) => {
  return (
    <header>
      <img className='logo' alt={image.alt} src={image.src} />
      <h2 style={{ color }} className='title'>
        {children}
      </h2>
      <div className='buttons'>
        <button>Home</button>
        <button>Alerts</button>
        <button>Settings</button>
      </div>
    </header>
  );
};

export default Header;
