import Button from './Button'

export default function ProjectBody({ description, website, code }) {
  return (
    <article className="mb-10">
      {description.map((element, index) => {
        let innerContent = null
        if (element.type === 'image') {
          innerContent = (
            <img
              src={element.value}
              alt="Project"
              className={`u-width100Percent u-height100Percent u-block mx-auto`}
              key={index.toString()}
            />
          )
        } else if (element.type === 'message') {
          innerContent = (
            <p className="u-fontSize16 u-fontWeightRegular u-textColorDarker">
              {element.value}
            </p>
          )
        } else if (element.type === 'personas') {
          innerContent = element.value.map((personas, index) => {
            return (
              <div className="mb-8 phone-mb-4" key={index.toString()}>
                <h4 className="u-fontSize16 u-fontWeightBold u-textColorDarkest u-lineHeight1x mb-4">
                  {personas.user}
                </h4>
                <img
                  src={personas.image}
                  alt="Project"
                  className={`u-width100Percent u-height100Percent u-block mx-auto`}
                  key={index.toString()}
                />
              </div>
            )
          })
        } else if (element.type === 'empathy-maps') {
          innerContent = (
            <div className="u-flex f-row justify-content-between phone-f-column">
              {element.value.map((empathyMap, index) => {
                return (
                  <div
                    style={{ flex: '0 0 49%' }}
                    className="phone-mb-4"
                    key={index.toString()}>
                    <h4 className="u-fontSize16 u-fontWeightBold u-textColorDarkest u-lineHeight1x mb-4">
                      {empathyMap.user}
                    </h4>
                    <img
                      src={empathyMap.image}
                      alt="Project"
                      className={`u-width100Percent u-block mx-auto`}
                      key={index.toString()}
                    />
                  </div>
                )
              })}
            </div>
          )
        } else if (element.type === 'card-sorting') {
          innerContent = (
            <div className="u-flex f-row justify-content-between phone-f-column">
              {element.value.map((cardSorting, index) => {
                return (
                  <div
                    style={{ flex: '0 0 49%' }}
                    className="phone-mb-4"
                    key={index.toString()}>
                    <h4 className="u-fontSize16 u-fontWeightBold u-textColorDarkest u-lineHeight1x mb-4">
                      {cardSorting.user}
                    </h4>
                    <img
                      src={cardSorting.image}
                      alt="Project"
                      className={`u-width100Percent u-block mx-auto`}
                      key={index.toString()}
                    />
                  </div>
                )
              })}
            </div>
          )
        } else if (element.type === 'user-flows') {
          innerContent = element.value.map((userFlow, index) => {
            return (
              <div className="mb-8 phone-mb-4" key={index.toString()}>
                <h4 className="u-fontSize16 u-fontWeightBold u-textColorDarkest u-lineHeight1x mb-4">
                  {userFlow.user}
                </h4>
                <img
                  src={userFlow.image}
                  alt="Project"
                  className={`u-block u-width100Percent mx-auto`}
                  key={index.toString()}
                />
              </div>
            )
          })
        }
        return (
          <div className="mb-10 phone-mb-4" key={index.toString()}>
            <div className="mb-2">
              <h3 className="u-fontSize24 u-fontWeightRegular u-textColorDarker">
                {element.name}
              </h3>
            </div>
            {element.message && (
              <div className="mb-4">
                <p className="u-fontSize16 u-fontWeightRegular u-textColorDarker">
                  {element.message}
                </p>
              </div>
            )}
            {innerContent}
          </div>
        )
      })}
      <div className="u-flex">
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
