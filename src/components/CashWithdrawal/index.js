import {Component} from 'react'
import Denominations from '../DenominationItem/index'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onWithdraw = (id, value) => {
    console.log(`${id} --- amount: ${value}`)
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="center">
        <div className="card">
          {/* profile name and profile circle div */}
          <div className="c-1">
            <div className="profile"> S</div>
            <p style={{color: '#d4d2db'}}>Sarah Williams</p>
          </div>

          <div className="c-2">
            <p style={{color: '#585076', fontWeight: 600}}>Your Balance</p>
            <p>
              {balance} <br />{' '}
              <sub style={{color: '#585076', fontWeight: 600}}>In Rupees</sub>{' '}
            </p>
          </div>
          <div>
            <p style={{color: '#d4d2db'}}>Withdraw</p>
            <p style={{color: '#585076', fontWeight: 600}}>
              CHOOSE SUM (IN RUPEES)
            </p>
            <ul className="c-3">
              {denominationsList.map(obj => (
                <Denominations
                  key={obj.id}
                  denomination={obj}
                  cashWithdraw={this.onWithdraw}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
