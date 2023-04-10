import classNames from "classnames";
import useNavigation from "../hooks/use-navigation-context";

export default function Link({ to, children }) {
  const { navigate } = useNavigation();

  const handleClick = (event) => {
    // If user is pressing Ctrl+K then preseve browser's default page rendering
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    // Otherwise prevent default page rendering
    event.preventDefault();
    navigate(to);
  };

  const classes = classNames("text-blue-500");
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
