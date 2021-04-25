import { Project } from 'utils/types'

interface ProjectItemProps {
  projectItem: Project
}

export default function ProjectItem({
  projectItem: { title, description, stack, link, github },
}: ProjectItemProps) {
  const isAnyLink = link || github
  return (
    <div className="p-4 w-full">
      <h3 className="font-semibold text-justify"> {title}</h3>
      {description && <span className="text-justify">{description}</span>}
      <div>
        <span className="italic">Stack: </span>
        {stack.map((item, i) => (
          <span className="mx-1" key={`item-${i}`}>
            {item}
          </span>
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
  )
}
