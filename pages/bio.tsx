import Head from 'next/head';

import CommercialExperienceItem from 'components/CommercialExperienceItem';
import { CommercialExperience } from 'utils/types';

const experienceItems: CommercialExperience[] = [
  {
    companyName: 'STX Next',
    start: 'Feb 2020',
    end: 'Present',
    description: 'JavaScript developer',
  },
  {
    companyName: 'Accenture',
    start: 'Nov 2018',
    end: 'Jan 2020',
    description: 'Application Development Associate',
  },
  {
    companyName: 'ABB',
    start: 'Mar 2017',
    end: 'Dec 2017',
    description: 'Internship',
  },
];

export default function Articles() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2 className="m-4 text-xl">Bio</h2>
        <div className="w-full items-start">
          <p className="p-4 italic">Work in progress</p>
        </div>

        <h2 className="m-4 text-xl">Experience</h2>
        <div className="w-full divide-y divide-grey-400 items-start">
          {experienceItems.map((item: CommercialExperience, id: number) => (
            <CommercialExperienceItem item={item} key={id} />
          ))}
        </div>
      </div>
    </>
  );
}
