import classnames from 'classnames'

export const Button = ({ label, bgColor, hoverColor }) => {
  return (
    <button
      className={classnames(`bg-${bgColor} hover:bg-${hoverColor} border-${bgColor}
      hover:border-black mr-8  text-black font-bold py-2 px-4 border-b-4 rounded `)}>
      <label htmlFor="">{label}</label>
    </button>


  )
}

export default Button
