interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

const c = "btn btn-";

const Button = ({ children, onClick, color }: Props) => {
  let colorClass: string;

  switch (color) {
    case "red":
      colorClass = "danger";
      break;

    case "blue":
      colorClass = "primary";
      break;

    case "green":
      colorClass = "success";
      break;

    case "yellow":
      colorClass = "warning";
      break;

    case "white":
      colorClass = "light";
      break;

    case "aqua":
      colorClass = "info";
      break;

    default:
      colorClass = "dark";
  }

  return (
    <div>
      <button type="button" className={c + colorClass} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
