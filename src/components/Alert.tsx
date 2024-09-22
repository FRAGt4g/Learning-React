import { ReactNode } from "react";

interface AlertProps {
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  children: ReactNode;
  dissimissible?: boolean;
  onClose: () => void;
}

const Alert = ({ color = "warning", children, dissimissible = true, onClose }: AlertProps) => {
  return (
    <div role="alert" className={"fade show alert alert-" + color + (dissimissible ? "alert-dismissable" : "")}>
      {children}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
    </div>
  )
}

export default Alert;