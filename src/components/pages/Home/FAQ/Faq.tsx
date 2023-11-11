import { FC, useRef } from 'react';

import AnimatedText from '../../../widget/AnimatedText';
import { Heading2 } from '@/components/widget/Headings';
import { useInView } from 'framer-motion';
import Accordion from './chunk/Accordian';

const faqs = [
  {
    id: 1,
    question: 'Q: Do we have a registration fee?',
    answer: 'A: No, it is completely free of charge.',
  },
  {
    id: 2,
    question: 'Q: Is having a female member a must for the team?',
    answer:
      'A: It is preferable but not mandatory. We encourage diverse teams, and having a female member is optional.',
  },
  {
    id: 3,
    question: 'Q: Will there be any extension to the deadline?',
    answer:
      "A: No, there won't be any extension to the deadline. Please ensure timely registration to secure your team's participation.",
  },
  {
    id: 4,
    question: 'Q: Can individuals register, or is it only for teams?',
    answer:
      'A: DTCHacks is a team-based event. Each team should comprise a minimum of 4 members, including the team leader.',
  },
  {
    id: 5,
    question:
      'Q: Are participants from different branches within the same college allowed to form a team?',
    answer:
      'A: Yes, participants from different branches within the same college or institute are encouraged to form a team.',
  },
  {
    id: 6,
    question:
      'Q: Is there a limit to the number of teams that can participate?',
    answer:
      'A: While there is no specific limit, we recommend early registration as participation slots are limited.',
  },
  {
    id: 7,
    question: 'Q: Can I change my team members after registration?',
    answer:
      'A: Team composition changes are not allowed after registration, so choose your team wisely during the registration process.',
  },
  {
    id: 8,
    question: 'Q: How will the winners be selected?',
    answer:
      'A: Winners will be selected based on the evaluation of their project by a panel of expert judges. Criteria include innovation, impact, and technical proficiency.',
  },
  {
    id: 9,
    question: 'Q: What are the prizes for the top three winning teams?',
    answer:
      'A: The top 3 winning teams will be awarded exciting prizes that reflect the magnitude of their innovative solutions. Prizes may include cash rewards, tech gadgets, mentorship opportunities, and more. Stay tuned for updates on the incredible rewards awaiting the champions of DTCHacks!',
  },
];

const Faq: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <section
        id="faq"
        ref={ref}
        className={`relative mx-auto mt-10 transition-transform duration-500 ease-linear md:mt-36 xl:mt-72 ${
          isInView ? 'translate-x-0' : 'translate-y-36 opacity-0'
        }`}
      >
        <div className="flex items-center justify-center">
          <Heading2>
            {isInView ? <AnimatedText text="FAQ's" setMinWidth={false} /> : ''}
          </Heading2>
        </div>
        <Accordion faqs={faqs} />
      </section>
    </div>
  );
};

export default Faq;
