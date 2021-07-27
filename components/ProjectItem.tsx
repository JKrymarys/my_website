import { Project } from 'utils/types';

interface ProjectItemProps {
  projectItem: Project;
}

export default function ProjectItem({
  projectItem: { title, description, stack, link, github },
}: ProjectItemProps) {
  const isAnyLink = link || github;

  const TechstackItemWrapper = ({ name, index }: any) => {
    const isLastElement = index === stack.length - 1;
    if (isLastElement) {
      return (
        <span className="mx-1" key={`stack-${name}`}>
          {name}
        </span>
      );
    }
    return (
      <span className="mx-1" key={`stack-${name}`}>
        {`${name}, `}
      </span>
    );
  };

  return (
    <div className="p-4 w-full">
      <h3 className="font-semibold text-justify"> {title}</h3>
      {description && <span className="text-justify">{description}</span>}
      <div>
        <span className="italic">Stack: </span>
        {stack.map((itemName, i) => (
          <TechstackItemWrapper name={itemName} index={i} />
        ))}
      </div>

      {isAnyLink && (
        <div>
          <span className="italic">Links: </span>
          {github && (
            <a className="hover:text-blue-700 underline mx-1" href={github}>
              Source code
            </a>
          )}
          {link && (
            <a className="hover:text-blue-700 underline mx-1" href={link}>
              View
            </a>
          )}
        </div>
      )}
    </div>
  );
}
