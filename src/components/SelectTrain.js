import React from 'react'

class SelectTrain extends React.Component {

  handleChange = (e) => {
    this.props.selectTrain(e.target.name, e.target.value)
  }

  render() {
    return(
      <div>
        <select style={{display: 'block'}} onChange={this.props.getTrain}>
          <option name="1 Train" value="1">1 Train</option>
          <option name="2 Train" value="2">2 Train</option>
          <option name="3 Train" value="3">3 Train</option>
          <option name="4 Train" value="4">4 Train</option>
          <option name="5 Train" value="5">5 Train</option>
          <option name="6 Train" value="6">6 Train</option>
          <option name="S Train" value="S">S Train</option>
          <option name="A Train" value="A">A Train</option>
          <option name="C Train" value="C">C Train</option>
          <option name="E Train" value="E">E Train</option>
          <option name="N Train" value="N">N Train</option>
          <option name="Q Train" value="Q">Q Train</option>
          <option name="R Train" value="R">R Train</option>
          <option name="W Train" value="W">W Train</option>
          <option name="B Train" value="B">B Train</option>
          <option name="D Train" value="D">D Train</option>
          <option name="F Train" value="F">F Train</option>
          <option name="M Train" value="M">M Train</option>
          <option name="L Train" value="L">L Train</option>
          <option name="G Train" value="G">G Train</option>
          <option name="J Train" value="J">J Train</option>
          <option name="Z Train" value="Z">Z Train</option>
          <option name="7 Train" value="7">7 Train</option>
        </select>
      </div>
    )
  }
}

export default SelectTrain
