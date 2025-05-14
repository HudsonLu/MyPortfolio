import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../constants/experiences';

const Experience = () => {
  return (
    <section className="p-10">
      <div className="text-center">
        <h2 className="text-white text-4xl font-bold">Work Experience</h2>
      </div>
      <div className="mt-10">
        <VerticalTimeline>
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
