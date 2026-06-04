import { useTranslation } from "react-i18next";
import { StackItemKey } from "~/modules/infrastructure/stack";
import { STACK_ICONS } from "./stackIcons";

interface StackIconItemProps {
  itemKey: StackItemKey;
}

export const StackIconItem = ({ itemKey }: StackIconItemProps) => {
  const { t } = useTranslation("common", { keyPrefix: "stack" });
  const Icon = STACK_ICONS[itemKey];

  return (
    <div className="group flex min-w-0 flex-col items-center gap-1.5 text-center">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
        {Icon ? (
          <Icon size={22} className="text-text-lightPrimary dark:text-text-darkPrimary" />
        ) : (
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent-blue/10 text-[10px] font-bold text-accent-blue">
            {itemKey.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <span className="w-full text-[10px] leading-tight text-text-lightSecondary dark:text-text-darkSecondary sm:max-w-[4.5rem]">
        {t(`items.${itemKey}`)}
      </span>
    </div>
  );
};
