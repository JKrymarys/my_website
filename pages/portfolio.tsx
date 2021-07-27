import ProjectItem from 'components/ProjectItem';
import { Project } from 'utils/types';

const freelanceProjects: Project[] = [
  {
    title: 'Blue Ivy Boutique ',
    description: 'Business website and online shop',
    stack: ['Wordpress', 'Woocommerce'],
    link: 'https://www.blueivyboutique.pl/',
  },
  {
    title: 'Personal website',
    stack: ['TypeScript', 'Next.js', 'Firebase', 'Tailwind CSS'],
    link: 'http://jkrymarys.pl/',
    github: 'https://github.com/JKrymarys/my_website',
  },
  {
    title: 'Thesis',
    description:
      'Eco-friendly home automation system implemented by means of Machine Learning Algorithms',
    stack: ['JavaScript', 'Node.js', 'Google Cloud', 'Tensorflow.js'],
  },
  {
    title: 'Web application supporting statutory meetings of student’s organisation',
    stack: ['Ionic', 'React', 'Firebase', 'PWA'],
  },
];

const commercialProjects: Project[] = [
  {
    title: 'Product data management system (web GUI)',
    stack: ['JavaScript', 'Handlebars.js'],
  },
  {
    title: 'Ordering process management web application',
    stack: ['JavaScript', 'React.js', 'Redux', 'Material UI'],
  },
  {
    title: 'React apps for data visualization',
    stack: ['TypeScript', 'React.js', 'Redux', 'Redux-Saga', 'Ant design', 'Highcharts', 'AG grid'],
  },
  {
    title: 'Cross Platform (iOS/Android) application for scheduling workshops',
    stack: ['C#', 'Xamarin'],
  },
];

export default function Projects() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2 className="m-4 text-xl">Freelance projects</h2>
        <div className="w-full  divide-y divide-grey-400 items-start">
          {freelanceProjects.map((item: Project, id: number) => (
            <ProjectItem projectItem={item} key={id} />
          ))}
        </div>
        <h2 className="m-4 text-xl">Commercial projects</h2>
        <div className="w-full divide-y divide-grey-400 items-start">
          {commercialProjects.map((item: Project, id: number) => (
            <ProjectItem projectItem={item} key={id} />
          ))}
        </div>
      </div>
    </>
  );
}
