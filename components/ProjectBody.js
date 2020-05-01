import Button from './Button'

export default function ProjectBody({ description, website, code }) {
  return (
    <article className="mb-10">
      {description.map((element, index) => {
        let innerContent = null
        if (element.type === 'image') {
          innerContent = (
            <figure>
              <img
                src={element.value}
                alt={element.title}
                className={`u-width100Percent u-height100Percent u-block mx-auto`}
                key={index.toString()}
              />
            </figure>
          )
        } else if (element.type === 'message') {
          innerContent = (
            <React.Fragment>
              {element.title && (
                <div className="mb-2">
                  <h3 className="u-fontSize24 u-fontWeightRegular u-textColorDarker">
                    {element.title}
                  </h3>
                </div>
              )}
              <p className="u-fontSize16 u-fontWeightRegular u-textColorDarker">
                {element.value}
              </p>
            </React.Fragment>
          )
        }
        return (
          <div className="mb-10 phone-mb-4" key={index.toString()}>
            {innerContent}
          </div>
        )
      })}
      <div className="u-flex phone-mt-8">
        {website && <Button website={website}>Project</Button>}
        {code && (
          <div className="ml-4">
            <Button website={code}>Code</Button>
          </div>
        )}
      </div>
    </article>
  )
}
