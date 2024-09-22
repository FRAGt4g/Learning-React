import "./App.css";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
	const [showAlert, setShowAlert] = useState(false);

	return (
		<>
			<div>
				{showAlert && (
					<Alert
						color="danger"
						dissimissible={false}
						onClose={() => setShowAlert(false)}
					>
						This is an alert!
					</Alert>
				)}
				<Button color="primary" onClick={() => setShowAlert(true)}>
					Hello, I am a button!
				</Button>
			</div>
		</>
	);
}

export default App;