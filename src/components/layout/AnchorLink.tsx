import { useNavigate, useLocation } from "react-router-dom";

export default function AnchorLink({
  to,
  children,
  className,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick?.();

    if (location.pathname === "/") {
      document.getElementById(to)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${to}`);
    }
  };

  return (
    <a href={`/#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
