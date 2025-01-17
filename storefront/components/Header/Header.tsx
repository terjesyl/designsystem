import classes from './Header.module.css';
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Hamburger, Close } from '@navikt/ds-icons';
import { useState } from 'react';
import cn from 'classnames';

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const menu = [
    {
      name: 'God praksis',
      url: '/god-praksis',
    },
    {
      name: 'Grunnleggende',
      url: '/grunnleggende',
    },
    {
      name: 'Mønstre',
      url: '/monstre',
    },
    {
      name: 'Komponenter',
      url: 'https://digdir.github.io/designsystem',
    },
  ];

  return (
    <header className={classes.header}>
      <Container
        className={classes.container}
        fluid
      >
        <div className={classes.left}>
          <Link href='/'>
            <img
              className={classes.logo}
              src='/img/logo-positive.svg'
              alt='Logo'
            />
          </Link>
        </div>
        <div className={classes.right}>
          <button
            className={classes.toggle}
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open && (
              <Close
                fontSize={26}
                color='#1E2B3C'
              />
            )}
            {!open && (
              <Hamburger
                fontSize={26}
                color='#1E2B3C'
              />
            )}
          </button>
          <ul className={cn(classes.menu, { [classes.active]: open })}>
            {menu.map((item, index) => (
              <li
                className={classes.item}
                key={index}
              >
                <Link
                  href={item.url}
                  className={cn(
                    router.pathname == item.url ? classes.active : '',
                    classes.link,
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
