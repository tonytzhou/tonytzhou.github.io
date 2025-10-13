interface AlertProps {
    text: string
}

const Alert = ({text} : AlertProps) => {
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                {text}
            </div>
        </div>
    )
}

export default Alert
