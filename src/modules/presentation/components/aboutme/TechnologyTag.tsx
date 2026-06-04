interface TechnologyTagProps {
  label: string;
}

export const TechnologyTag = ({ label }: TechnologyTagProps) => (
  <span className="inline-block rounded-full border border-border-light bg-accent-blue/5 px-2.5 py-0.5 text-xs font-medium text-text-lightSecondary dark:border-border-dark dark:bg-accent-blue/10 dark:text-text-darkSecondary">
    {label}
  </span>
);
