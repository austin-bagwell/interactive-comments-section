interface ActionButtonProps extends HTMLButtonElement {
  icon: string;
  iconClass: string;
  label: string;
  stateChanger: React.Dispatch<SetStateAction<boolean>>;
  state: boolean;
  onClick: () => any;
}

export function ActionButton({
  icon,
  iconClass,
  label,
  className,
  onClick,
}: ActionButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      <img src={icon} className={iconClass} alt="reply button" />
      <span>{label}</span>
    </button>
  );
}
