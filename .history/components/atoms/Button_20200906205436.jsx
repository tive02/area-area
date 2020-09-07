import classnames from 'classnames'

export const Button = ({ label, bgColor, hoverColor, borderColor }) => {
  return (
    <button
      className={classnames(`${bgColor} hover:bg-${hoverColor} border-${borderColor}
      hover:border-black mr-8  text-black font-bold py-2 px-4 border-b-4 rounded `)}>
      <label htmlFor="">{label}</label>
    </button>


  )
}

export default Button
