import classNames from "classnames";
import useNavigation from "../hooks/use-navigation-context";

export default function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const handleClick = (event) => {
    // If user is pressing Ctrl+K then preseve browser's default page rendering
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    // Otherwise prevent default page rendering
    event.preventDefault();
    navigate(to);
  };

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
