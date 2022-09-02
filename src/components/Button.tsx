type ButtonProps = {
    children: React.ReactElement
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button = ({children, ...props}:ButtonProps) => {
    return <button {...props}>{children}</button>
}