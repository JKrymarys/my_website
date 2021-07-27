import { CommercialExperience } from 'utils/types';

interface BlogPostItemProps {
  item: CommercialExperience;
}

export default function BlogPostItem({
  item: { companyName, start, end, description },
}: BlogPostItemProps) {
  return (
    <div className="p-4 w-full">
      <h3 className="font-semibold text-justify"> {companyName}</h3>
      <p className="italic text-sm  ">
        {start} - {end}
      </p>
      {description && <p className="text-justify my-1">{description}</p>}
    </div>
  );
}
