import Image from 'next/image';
import { FC, useEffect } from 'react';
import { Heading2 } from '../../../widget/Headings';

const SecModal: FC<{ handleClose: () => void }> = ({ handleClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[9996] grid h-screen w-screen animate-opacity place-content-center bg-base-100/60 text-center backdrop-blur"
      tabIndex={0}
    >
      <div
        className="relative flex flex-col items-center justify-center gap-2 px-2 outline-none magic-spaceInUp"
        style={{ animationDuration: '300ms' }}
      >
        <div className="relative aspect-video w-52 md:w-96">
          <div className="relative h-full w-full">
            <Image
              src="/wow.gif"
              layout="fill"
              alt="wow"
              className="z-[9997]"
            />
          </div>
          <div className="absolute left-0 top-0 z-[9998] flex h-32 w-5 -translate-x-1/2 -translate-y-1/2 scale-75  justify-center outline-none md:scale-100">
            {Array.from('Awesome Awesome Awesome').map((char: string, i) => (
              <span
                key={`${char}${i}`}
                className="absolute left-0 top-0 inline-block h-16 w-5 origin-[bottom_center]"
                style={{ rotate: `${i * 15}deg` }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
        <Heading2>WELCOME</Heading2>
        <p className="text-primary before:text-base-200 before:content-['<p>_'] after:text-base-200 after:content-['</p>'] md:text-lg">
          You have been on these page for last 15 seconds. Thank you{' '}
        </p>
        <p className="mt-10 max-w-2xl text-sm">
          <span className="text-primary">NOTE: </span> Are you a student at DELHI TECHNICAL CAMPUS? If not, ahh sorry, you're a little bit early. We are organizing a hackathon for inter-college students in upcoming February. This Hackathon is just for the students of Delhi Technical Campus. Stay Tuned!!
          <br />
          <br />
          <a
            href="https://twitter.com/c0nd0r1n3e94"
            className="text-base text-primary underline outline-none"
          >
            twitter/c0nd0r1n3e94
          </a>
        </p>
        <button
          onClick={handleClose}
          className="fixed right-10 top-10 aspect-square w-10 transition-all duration-300 before:absolute before:left-1/2 before:top-1/2 before:h-1 before:w-full before:origin-center before:-translate-x-1/2 before:-translate-y-1/2 before:-rotate-45 before:rounded-lg before:bg-primary before:transition-all before:duration-300 after:absolute after:left-1/2 after:top-1/2 after:h-1 after:w-full after:origin-center after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:rounded-lg after:bg-primary after:transition-all after:duration-300 hover:scale-110 hover:before:rotate-45 hover:after:-rotate-45 active:scale-95 md:absolute md:right-0 md:top-0 md:-translate-y-full"
        ></button>
      </div>
    </div>
  );
};

export default SecModal;
