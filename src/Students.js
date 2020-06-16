import React from "react"
import allData from "./mockdata/allemockdata"
import PickStudent from "./components/PickStudent"
import StudentChart from "./components/StudentChart"

class Students extends React.Component {

  constructor() {
    super()

    this.state = {
      data:allData
    }
  }
  render() {
    const onOption= event => {
      const name = event.target.value
      this.setState(()=> {
        return {
          value: name
        }
      })
    }
    return(<div>
      <PickStudent onOption={onOption} />
      <StudentChart data={this.state.data} value = { this.state.value } />
      </div>)
  }
}
export default Students