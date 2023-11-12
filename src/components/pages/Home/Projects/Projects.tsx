import Image from 'next/image';
import { FC, useState } from 'react';
import {
  AltIcon,
  GithubIcon,
  GlobeIcon,
  LeftArrowIcon,
} from '../../../../Icons';
import useElementOnSecreen from '../../../../lib/hooks/useElementOnSecreen';
import AnimatedText from '../../../widget/AnimatedText';
import Heading2 from '../../../widget/Headings/Heading2';
import styles from './Project.module.css';
const projectList = ['filpire'];

const Projects: FC = () => {
  const [isVisible, containerRef] = useElementOnSecreen();
  const [currentproject, setCurrentproject] = useState(1);
  return (
    <section
      id="myportfolio"
      ref={containerRef}
      className={`relative mx-auto mt-10 transition-transform duration-500 ease-linear lg:mt-52 ${
        isVisible ? 'translate-y-0' : 'translate-y-36 opacity-0'
      }`}
    >
      <div className="flex items-center justify-center">
        <Heading2>
          {isVisible ? <AnimatedText text="Tracks" setMinWidth={false} /> : ''}
        </Heading2>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:py-16">
        <div className="w-full">
          <figure
            className={`${styles.projectImg} group relative mx-auto aspect-square h-[20rem] rounded-full lg:h-[30rem]`}
          >
            <Image
              src="/assets/images/social-wellbeing.jpg"
              alt="HeroImg"
              className="rounded-full object-cover "
              layout="fill"
            />
            <div className="absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4" />
            <div
              className={`${styles.projectImgRing} absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4`}
            />
            <div
              className={`${styles.projectImgRing} ${styles.projectImgRing_1} absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4`}
            />
            <div
              className={`${styles.projectImgRing} ${styles.projectImgRing_2} absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4`}
            />
            <div
              className={`${styles.projectImgRing} ${styles.projectImgRing_3} absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4`}
            />
          </figure>
        </div>
        <div className="relative block w-full py-7 pl-10 pr-3 before:absolute before:left-0 before:-translate-y-full before:text-base before:font-normal before:not-italic before:text-base-200 before:content-['<h3>'] after:absolute after:bottom-0 after:left-0 after:text-base after:font-normal after:not-italic after:text-base-200 after:content-['</h3>'] md:text-4xl md:before:text-lg md:after:text-lg lg:pr-0">
          <span className="block text-center font-RobotoCondensed text-5xl font-bold tracking-wider text-primary lg:text-left lg:text-7xl">
            Social Wellbeing (Healthcare, Environment, and Energy)
          </span>
          <p className="mt-5 text-xl leading-relaxed lg:text-2xl">
            Dive into the realm of impact with our Social Wellbeing track.
            Whether you're passionate about revolutionizing healthcare,
            addressing environmental challenges, or innovating in the energy
            sector,this track is your canvas. Let your ideas spark positive
            change and contribute to a better world.
          </p>
          <span className="mb-10 mt-5 flex flex-wrap gap-4 text-sm text-primary lg:text-xl">
            {['text', 'text', 'text', 'text'].map((tool) => (
              <span
                key={tool}
                className="rounded-lg border border-primary p-2 px-3 font-bold capitalize hover:bg-primary hover:text-base-100"
              >
                {tool}
              </span>
            ))}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:py-16">
        <div className="w-full">
          <figure
            className={`${styles.projectImg} group relative mx-auto aspect-square h-[20rem] rounded-full lg:h-[30rem]`}
          >
            <Image
              src="/assets/images/innovation.jpg"
              alt="HeroImg"
              className="rounded-full object-cover"
              layout="fill"
            />
            <div className="absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4" />
            <div
              className={`${styles.projectImgRing} absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4`}
            />
            <div
              className={`${styles.projectImgRing} ${styles.projectImgRing_1} absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4`}
            />
            <div
              className={`${styles.projectImgRing} ${styles.projectImgRing_2} absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4`}
            />
            <div
              className={`${styles.projectImgRing} ${styles.projectImgRing_3} absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4`}
            />
          </figure>
        </div>
        <div className="relative block w-full py-7 pl-10 pr-3 before:absolute before:left-0 before:-translate-y-full before:text-base before:font-normal before:not-italic before:text-base-200 before:content-['<h3>'] after:absolute after:bottom-0 after:left-0 after:text-base after:font-normal after:not-italic after:text-base-200 after:content-['</h3>'] md:text-4xl md:before:text-lg md:after:text-lg lg:pr-0">
          <span className="block text-center font-RobotoCondensed text-5xl font-bold tracking-wider text-primary lg:text-left lg:text-7xl">
            Open Innovation
          </span>
          <p className="mt-5 text-xl leading-relaxed lg:text-2xl">
            Unleash your creativity and problem-solving skills in the Open
            Innovation track. Here, there are no limits—your imagination is the
            only boundary. From groundbreaking apps to revolutionary algorithms,
            this track welcomes all innovations that redefine the way we live,
            work, and connect.
          </p>
          <span className="mb-10 mt-5 flex flex-wrap gap-4 text-sm text-primary lg:text-xl">
            {['text', 'text', 'text', 'text'].map((tool) => (
              <span
                key={tool}
                className="rounded-lg border border-primary p-2 px-3 font-bold capitalize hover:bg-primary hover:text-base-100"
              >
                {tool}
              </span>
            ))}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:py-16">
        <div className="w-full">
          <figure
            className={`${styles.projectImg} group relative mx-auto aspect-square h-[20rem] rounded-full lg:h-[30rem]`}
          >
            <Image
              src="/assets/images/blockchain.png"
              alt="HeroImg"
              className="rounded-full object-cover "
              layout="fill"
            />
            <div className="absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4" />
            <div
              className={`${styles.projectImgRing} absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4`}
            />
            <div
              className={`${styles.projectImgRing} ${styles.projectImgRing_1} absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4`}
            />
            <div
              className={`${styles.projectImgRing} ${styles.projectImgRing_2} absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4`}
            />
            <div
              className={`${styles.projectImgRing} ${styles.projectImgRing_3} absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4`}
            />
          </figure>
        </div>
        <div className="relative block w-full py-7 pl-10 pr-3 before:absolute before:left-0 before:-translate-y-full before:text-base before:font-normal before:not-italic before:text-base-200 before:content-['<h3>'] after:absolute after:bottom-0 after:left-0 after:text-base after:font-normal after:not-italic after:text-base-200 after:content-['</h3>'] md:text-4xl md:before:text-lg md:after:text-lg lg:pr-0">
          <span className="block text-center font-RobotoCondensed text-5xl font-bold tracking-wider text-primary lg:text-left lg:text-7xl">
            Blockchain and Web 3.0
          </span>
          <p className="mt-5 text-xl leading-relaxed lg:text-2xl">
            Embark on a journey into the decentralized future with our
            Blockchain and Web 3.0 track. Explore the possibilities of
            blockchain technology and the next generation of the web. Whether
            you're a blockchain enthusiast or a web development wizard, this
            track invites you to shape the digital landscape.
          </p>
          <span className="mb-10 mt-5 flex flex-wrap gap-4 text-sm text-primary lg:text-xl">
            {['text', 'text', 'text', 'text'].map((tool) => (
              <span
                key={tool}
                className="rounded-lg border border-primary p-2 px-3 font-bold capitalize hover:bg-primary hover:text-base-100"
              >
                {tool}
              </span>
            ))}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:py-16">
        <div className="w-full">
          <figure
            className={`${styles.projectImg} group relative mx-auto aspect-square h-[20rem] rounded-full lg:h-[30rem]`}
          >
            <Image
              src="/assets/images/fintech.png"
              alt="HeroImg"
              className="rounded-full object-cover "
              layout="fill"
            />
            <div className="absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4" />
            <div
              className={`${styles.projectImgRing} absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4`}
            />
            <div
              className={`${styles.projectImgRing} ${styles.projectImgRing_1} absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4`}
            />
            <div
              className={`${styles.projectImgRing} ${styles.projectImgRing_2} absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4`}
            />
            <div
              className={`${styles.projectImgRing} ${styles.projectImgRing_3} absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4`}
            />
          </figure>
        </div>
        <div className="relative block w-full py-7 pl-10 pr-3 before:absolute before:left-0 before:-translate-y-full before:text-base before:font-normal before:not-italic before:text-base-200 before:content-['<h3>'] after:absolute after:bottom-0 after:left-0 after:text-base after:font-normal after:not-italic after:text-base-200 after:content-['</h3>'] md:text-4xl md:before:text-lg md:after:text-lg lg:pr-0">
          <span className="block text-center font-RobotoCondensed text-5xl font-bold tracking-wider text-primary lg:text-left lg:text-7xl">
            Tech to Modernize (Edtech, Fintech)
          </span>
          <p className="mt-5 text-xl leading-relaxed lg:text-2xl">
            Join the wave of technological modernization in our Edtech and
            Fintech track. Revolutionize education with innovative solutions or
            reshape the financial landscape with cutting-edge fintech ideas.
            It's time to bring tech to the forefront of modernization in these
            crucial sectors
          </p>
          <span className="mb-10 mt-5 flex flex-wrap gap-4 text-sm text-primary lg:text-xl">
            {['text', 'text', 'text', 'text'].map((tool) => (
              <span
                key={tool}
                className="rounded-lg border border-primary p-2 px-3 font-bold capitalize hover:bg-primary hover:text-base-100"
              >
                {tool}
              </span>
            ))}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:py-16">
        <div className="w-full">
          <figure
            className={`${styles.projectImg} group relative mx-auto aspect-square h-[20rem] rounded-full lg:h-[30rem]`}
          >
            <Image
              src="/assets/images/ai.png"
              alt="HeroImg"
              className="rounded-full object-cover "
              layout="fill"
            />
            <div className="absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4" />
            <div
              className={`${styles.projectImgRing} absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4`}
            />
            <div
              className={`${styles.projectImgRing} ${styles.projectImgRing_1} absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4`}
            />
            <div
              className={`${styles.projectImgRing} ${styles.projectImgRing_2} absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4`}
            />
            <div
              className={`${styles.projectImgRing} ${styles.projectImgRing_3} absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4`}
            />
          </figure>
        </div>
        <div className="relative block w-full py-7 pl-10 pr-3 before:absolute before:left-0 before:-translate-y-full before:text-base before:font-normal before:not-italic before:text-base-200 before:content-['<h3>'] after:absolute after:bottom-0 after:left-0 after:text-base after:font-normal after:not-italic after:text-base-200 after:content-['</h3>'] md:text-4xl md:before:text-lg md:after:text-lg lg:pr-0">
          <span className="block text-center font-RobotoCondensed text-5xl font-bold tracking-wider text-primary lg:text-left lg:text-7xl">
            Gen-AI and AI/ML
          </span>
          <p className="mt-5 text-xl leading-relaxed lg:text-2xl">
            Step into the future with our Gen-AI and AI/ML track. From
            artificial intelligence to machine learning, this track is for those
            fascinated by the power of algorithms. Explore the possibilities of
            AI in shaping industries, solving complex problems, and pushing the
            boundaries of what's achievable.
          </p>
          <span className="mb-10 mt-5 flex flex-wrap gap-4 text-sm text-primary lg:text-xl">
            {['text', 'text', 'text', 'text'].map((tool) => (
              <span
                key={tool}
                className="rounded-lg border border-primary p-2 px-3 font-bold capitalize hover:bg-primary hover:text-base-100"
              >
                {tool}
              </span>
            ))}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between px-5 lg:m-20 lg:px-16 xl:px-32">
        <button
          disabled
          onClick={() =>
            setCurrentproject((p) => {
              if (p === 0) {
                return projectList.length - 1;
              } else {
                return p - 1;
              }
            })
          }
          className="hidden w-max rounded-full border-2 border-base-content p-5 transition-all duration-300 hover:scale-125 active:scale-110 disabled:opacity-50 disabled:hover:scale-100 md:p-10 lg:block"
        >
          <span className="text-primary">
            <span className="inline-block w-12">
              <LeftArrowIcon />
              <span className="sr-only">Previous Project</span>
            </span>
          </span>
        </button>

        <div className="relative mx-auto h-2 w-[35vw] overflow-hidden rounded-3xl bg-primary/20">
          <div
            className="absolute left-0 top-0 h-full bg-primary transition-all duration-300"
            style={{
              width: `${((currentproject + 1) / projectList.length) * 100}%`,
            }}
          />
        </div>

        <button
          disabled
          className="hidden w-max rounded-full border-2 border-base-content p-5 transition-all duration-300 hover:scale-125 active:scale-110 disabled:opacity-50 disabled:hover:scale-100 md:p-10 lg:block"
          onClick={() => setCurrentproject((p) => (p + 1) % projectList.length)}
        >
          <span className="text-primary">
            <span className="inline-block h-full w-12 rotate-180">
              <span className="sr-only">Next Project</span>
              <LeftArrowIcon />
            </span>
          </span>
        </button>
      </div>
      <div className="absolute -bottom-[20rem] left-[48%] -z-10 hidden outline-none lg:block">
        <ProjectCurve />
      </div>
    </section>
  );
};

export default Projects;

const ProjectCurve: FC = () => {
  const [isVisible, containerRef] = useElementOnSecreen(0.3);
  return (
    <svg
      ref={containerRef}
      xmlns="http://www.w3.org/2000/svg"
      width="667.615"
      height="616"
      viewBox="0 0 667.615 616"
      className={`${styles.projectCurve} outline-none ${
        isVisible ? styles.animate : ''
      }`}
    >
      <g id="ProjectCurve" transform="translate(-387 -45)">
        <path
          className="stroke-primary outline-none"
          d="M5659.318,68.408s2.4,98,117.736,96.807,522.587-2.609,522.587-2.609-.062,37.947-1.331,125.1-88.96,138.779-165.337,140.9-107.565-2.39-315.406,0c-100.709-1.2-157.156,44.808-158.482,114.679-.512,92.854,0,94.693,0,94.693"
          transform="translate(-5247.554 -0.356)"
        />
        <g id="ProjectCurve-Cirlce--1" transform="translate(225 -28)">
          <circle
            cx="23.5"
            cy="23.5"
            r="23.5"
            transform="translate(162 73)"
            className="fill-primary/50"
          />
          <circle
            cx="11"
            cy="11"
            r="11"
            transform="translate(175 85)"
            fill="#fff"
          />
        </g>
        <g id={styles.ProjectCurveCirlce_2} transform="translate(226 541)">
          <circle
            cx="23.5"
            cy="23.5"
            r="23.5"
            transform="translate(162 73)"
            className="fill-primary/50"
          />
          <circle
            cx="11"
            cy="11"
            r="11"
            transform="translate(175 85)"
            fill="#fff"
          />
        </g>
        <text
          id="_"
          transform="translate(690 450)"
          fill="#fff"
          fontSize="69"
          fontFamily="SegoeUI-Semibold, Segoe UI"
          fontWeight="600"
        >
          <tspan x="0" y="0">
            &lt;/&gt;
          </tspan>
        </text>
      </g>
    </svg>
  );
};
