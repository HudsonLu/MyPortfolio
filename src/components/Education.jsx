import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import EducationCard from './ExperienceCard';
import { education } from '../constants/education';

const Education = () => {
  return (
    <section className="p-10">
      <div className="text-center">
        <h2 className="text-white text-4xl font-bold">Education</h2>
      </div>
      <div className="mt-10">
        <VerticalTimeline>
          {education.map((exp, i) => (
            <EducationCard key={i} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;
