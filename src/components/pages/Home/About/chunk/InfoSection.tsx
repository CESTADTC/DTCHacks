import { FC } from 'react';
import Heading3 from '../../../../widget/Headings/Heading3';

const InfoSection: FC = () => {
  return (
    <div className="fony-bold flex flex-1 flex-col gap-6 pb-10 pl-10 pt-3 text-lg md:text-xl">
      <Heading3 extra="-left-8">
        {' '}
        We
        <span className="not-italic"> 👋 </span>
        the<span className="text-primary"> Technical Societies </span>,{' '}
      </Heading3>
      <article className="relative space-y-5 before:block before:-translate-x-8 before:font-mono before:text-lg before:font-normal before:not-italic before:text-base-200 before:content-['<p>'] after:block after:-translate-x-10 after:font-mono after:text-lg after:font-normal after:not-italic after:text-base-200 after:content-['</p>']">
        <p>
          <span className="text-primary">Delhi Technical Campus</span> proudly
          presents its Codeathon, an event crafted
          exclusively for the ingenious minds within the campus. Organized by
          the collaborative efforts of technical societies and technical
          coordinators. This codeathon is a testament to our commitment to
          fostering innovation and technical prowess among students.
        </p>
        <p>
          Powered by Collaboration: Join us in this thrilling endeavour where
          the technical societies of DTC, namely Google Developer Student Clubs,
          Cesta and AI Renaissance with the help of Technical Coordinators,
          combine forces to create an unparalleled hackathon experience. It's
          not just a competition; it's a convergence of diverse talents and a
          celebration of collaborative innovation.
        </p>

        <p>
          This hackathon is your chance to showcase your skills, creativity, and
          problem-solving abilities. Exclusively for Students, it's a
          platform where you can connect with like-minded peers, push your
          boundaries, and embark on a journey of coding excellence. Let's code
          the future together at the Codeathon! ✨
        </p>
      </article>
    </div>
  );
};
export default InfoSection;
