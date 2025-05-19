function FormInput({ label, formik, name, type = 'text', ...props }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        className={formik.touched[name] && formik.errors[name] ? 'error' : ''}
        {...props}
      />
      {formik.touched[name] && formik.errors[name] && (
        <div className="error-message">{formik.errors[name]}</div>
      )}
    </div>
  );
}
