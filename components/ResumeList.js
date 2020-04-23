export default function ResumeList({ list }) {
  return (
    <ul className="u-listStyleTypeDisc u-textColorDarker pl-4 phone-pl-8">
      {list.map((item, index) => (
        <li
          key={index.toString()}
          className={`${
            list.length === index + 1 ? 'mb-0' : 'mb-1'
          } u-fontSize16`}>
          {item}
        </li>
      ))}
    </ul>
  )
}
