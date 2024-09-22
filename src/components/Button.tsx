import { ReactNode } from "react";

interface ButtonProps {
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
	children: ReactNode;
	onClick: () => void;
}

function Button({ color = "primary", children, onClick }: ButtonProps) {
	return <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
    </button>;
}

export default Button;
