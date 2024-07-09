const InputError = ({ messages = [], className = '' }) => (
    <>
        {messages.length > 0 && (
            <div className={className}>
                {messages.map((message, index) => (
                    <p className="text-sm text-red-600" key={index}>
                        {message}
                    </p>
                ))}
            </div>
        )}
    </>
)
export default InputError
