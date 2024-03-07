// Write your code here
import {Component} from 'react'
import './index.css'

class Denominations extends Component {
  render() {
    const {denomination, cashWithdraw} = this.props
    const {id, value} = denomination

    const withdraw = () => {
      cashWithdraw(id, value)
    }
    return (
      <li>
        <button onClick={withdraw} type="button">
          {value}
        </button>
      </li>
    )
  }
}
export default Denominations
