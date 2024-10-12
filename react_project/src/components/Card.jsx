// we use children as for whatever we wrap, in this case itll be a div contaning content of the cards thatll be used in Homcards
// this wrapper takes bg as another parameter for defining the backgorund color 
// children directly signifies the child elements(like div , h1,p etc) that's no need to pass extra arguments 
const Card = ({children , bg = 'bg-gray-100'}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>
  )
}

export default Card