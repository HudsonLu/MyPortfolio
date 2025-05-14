import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const EducationCard = ({ education }) => {
 

  return (
<VerticalTimelineElement
  contentStyle={{ background: '#1d1836', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid #232631' }}
  date={education.date}
iconStyle={{
  background: '#ffffff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'bottom',
  overflow: 'hidden',
  borderRadius: '50%',
}}

icon={
  <img
    src={education.icon}
    alt={education.institution_name}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block'
      
      
    }}
  />
}
>
      <h3 className="text-white text-[24px] font-bold">{education.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {education.institution_name}
      </p>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {education.points.map((point, index) => (
          <li key={`exp-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
export default EducationCard;