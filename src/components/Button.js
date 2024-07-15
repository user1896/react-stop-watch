export default function Button({children, onclick, extraStlyles}){
	const buttonStyle = "text-3xl p-1 " + extraStlyles
	return(
		<button
			onClick={onclick}
			className={buttonStyle}
		>
			{children}
		</button>
	)
}