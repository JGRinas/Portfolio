interface ProjectTagProps {
  label: string;
  variant?: "default" | "overlay";
}

export const ProjectTag = ({
  label,
  variant = "default",
}: ProjectTagProps) => (
  <span
    className={
      variant === "overlay"
        ? "inline-block rounded-full border border-white/25 bg-white/15 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm"
        : "inline-block rounded-full border border-border-light bg-accent-blue/5 px-2 py-0.5 text-[10px] font-medium text-text-lightSecondary dark:border-border-dark dark:bg-accent-blue/10 dark:text-text-darkSecondary sm:text-xs"
    }
  >
    {label}
  </span>
);
