interface ActionButtonProps extends HTMLButtonElement {
  icon: string;
  label: string;
  stateChanger: React.Dispatch<SetStateAction<boolean>>;
  state: boolean;
  onClick: () => any;
}

export function ActionButton({
  icon,
  label,
  stateChanger,
  state,
  className,
  onClick,
}: ActionButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      <img src={icon} className="mr-2 h-6" alt="reply button" />
      <span>{label}</span>
    </button>
  );
}
