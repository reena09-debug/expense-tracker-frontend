interface InputProps {
  type: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  error?: string
}

function Input({ type, placeholder, value, onChange, error }: InputProps) {
  return (
    <div className="input-group">
      <input
        className="input-field"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <div className="error-text">{error}</div>}
    </div>
  )
}

export default Input