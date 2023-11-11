import { FC } from 'react';

const Footer: FC = () => {
  return (
    <p className="py-10 text-center">
      || Design by{' '}
      <a
        href="https://inzi.me"
        target="_blank"
        rel="noreferrer"
      >
        <span className="text-primary hover:underline">Inzemam</span>
      </a>{' '}
      && coded by{' '}
      <a
        href="http://github.com/ishqdehlvi"
        target="_blank"
        rel="noreferrer"
      >
        {' '}
        <span className="text-primary hover:underline">DTC Technical Team</span>
      </a>{' '}
      ||
    </p>
  );
};

export default Footer;
