const MainButton = ({ className, label, children, ...props }) => {
    return (
        <button className={`main-button ${className}`} {...props}>
            {label || children}
        </button>
    );
};

export default MainButton;