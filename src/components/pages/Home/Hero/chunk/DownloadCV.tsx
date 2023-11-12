// Import necessary modules and components
import { motion, useTime, useTransform } from 'framer-motion';
import { FC } from 'react';
import AnimatedText from '../../../../widget/AnimatedText';
import styles from '../Home.module.css';

// Main component
const DownloadCV: FC = () => {
  // Function to redirect to Google Forms link
  const redirectToGoogleForms = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {

    const googleFormsUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfp3PKiCkO5gIeE-zmierH5BuTt9UDnkkz_npzIZjwrN1MVwQ/viewform?pli=1';
    const newWindow = window.open(googleFormsUrl, "_blank")

    if(newWindow){
      event.preventDefault();
    }


    // onClick event preventing the default behavior, which is interfering with the new tab opening

    
    // Prevent the default behavior of the anchor tag
    // event.preventDefault();

    // // Replace 'YOUR_GOOGLE_FORM_URL' with the actual URL of your Google Form
    // window.location.href =
    //   'https://docs.google.com/forms/d/e/1FAIpQLSfp3PKiCkO5gIeE-zmierH5BuTt9UDnkkz_npzIZjwrN1MVwQ/viewform?pli=1';
  };

  // Return JSX with the "Join Us" button
  return (
    <a
      href="#"
      target="_blank"
      className="magic-puffIn"
      rel="noreferrer"
      onClick={redirectToGoogleForms}
    >
      
      <div
        className={
          'relative mx-auto mt-36 aspect-square h-56 rounded-full border-2 border-white text-primary md:mt-16 lg:mt-28 lg:h-72 xl:mt-16'
        }
      >
        {/* Background text `</>` */}
        <div className="background absolute left-0 top-0 z-10 flex h-full w-full -rotate-45 items-center justify-center text-[13rem] font-black opacity-20 ">
          {'</>'}
        </div>

        {/* Download CV btn */}
        <AnimatedText
          as="div"
          className="hoverBox 0 absolute z-50 flex h-full w-full cursor-pointer items-center justify-center text-center transition-all duration-500 "
          text={'< Register Now />'}
        />

        {/* Box that pops */}
        <div className="popBox absolute left-1/2 top-1/2 z-10 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-all duration-500"></div>

        {/* Spinner components */}
        <Arc runnong_time={2000} style={styles.arc_2} />
        <Arc runnong_time={1800} style={styles.arc_1} />
        <Arc runnong_time={1600} style={styles.arc_3} />
      </div>
    </a>
  );
};

// Arc component
type ArcProps = {
  runnong_time: number;
  style: string;
};

const Arc: FC<ArcProps> = ({ runnong_time, style }) => {
  const time = useTime();
  const rotate = useTransform(time, [0, runnong_time], [0, 360], {
    clamp: false,
  });

  return (
    <motion.div
      style={{
        rotate,
      }}
      className={`absolute rounded-full border-transparent  before:absolute before:h-3 before:w-3 before:rounded-full before:bg-base-content  after:absolute after:h-3 after:w-3 after:rounded-full after:bg-base-content ${style}`}
    />
  );
};

export default DownloadCV;
