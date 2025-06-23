function TextArea({text,className}) {
    return (
        <>
            <div className={`bg-black/50 p-4 text-white ${className}`}>{text}
            </div>
        </>
    )
}

export default TextArea