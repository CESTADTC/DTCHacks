import { FC } from 'react';
import SocialButton from './SocialButton';

const SocialWrapper: FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 py-16 md:flex-nowrap md:gap-10 md:pb-20 md:pt-48">
      <SocialButton
        text="Github"
        href="http://github.com/ishqdehlvi"
        className={{
          x: 'md:-translate-x-16',
          y: 'md:-translate-y-36',
          size: 'w-32 md:w-60',
        }}
      />
      <SocialButton
        text="LinkedIn"
        href="https://www.linkedin.com/in/ishqdehlvi"
        className={{
          x: 'md:-translate-x-12',
          y: 'md:translate-y-16',
          size: 'w-32 md:w-44',
        }}
      />
      <SocialButton
        text="Mail"
        href="mailto:inzemamhaq05@gmail.com"
        className={{
          x: 'md:-translate-x-10',
          y: 'md:-translate-y-36',
          size: 'w-32 md:w-40',
        }}
      />
      <SocialButton
        text="Twitter"
        href="https://twitter.com/c0nd0r1n3e94"
        className={{
          x: 'md:-translate-x-20',
          y: 'md:translate-y-20',
          size: 'w-32 md:w-56',
        }}
      />
    </div>
  );
};

export default SocialWrapper;
