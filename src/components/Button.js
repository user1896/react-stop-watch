import '../styles/Button.css'

export default function Button({children, onclick}){
	return(
		<button onClick={onclick}>
			{children}
		</button>
	)
}