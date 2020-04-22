export default function ProjectParagraph({ title, desc }) {
  return (
    <React.Fragment>
      <div className="mb-1">
        <h3 className="u-fontSize16 u-fontWeightBold u-textColorDarkest u-lineHeight1x">
          {title}
        </h3>
      </div>
      <p className="u-fontSize16 u-fontWeightRegular u-textColorDarker">
        {desc}
      </p>
    </React.Fragment>
  )
}
