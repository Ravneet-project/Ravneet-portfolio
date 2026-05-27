function SectionHeader({ eyebrow, title, description, descriptionClassName = '' }) {
  return (
    <>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? (
        <p className={descriptionClassName.trim()}>{description}</p>
      ) : null}
    </>
  )
}

export default SectionHeader
