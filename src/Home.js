import React from "react"
import Reviews from "./mockdata/reviews"
import Opdrachten from "./mockdata/opdrachten"
import Studenten from "./mockdata/studenten"
import AlleData from "./mockdata/allemockdata"
import Checkboxes from "./components/Checkboxes"
import Chart from "./components/Chart"

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        Reviews: Reviews,
        Opdrachten: Opdrachten,
        Students: Studenten,
        AlleData: AlleData
      },
      checkbox: {
        leukBox: true,
        moeilijkBox: true
      },
    }
  }
  render () {
    const onChecked = (event) => {
      const input = event.target.checked
      const name = event.target.name
      this.setState(prevState => {
      const checkbox = prevState.checkbox
      checkbox[name] = input
        return {
          checkbox: checkbox,
          checkboxStudents: checkbox
        }
      }
    )
  }
  return (  
    <div>
      <Checkboxes onchecked={onChecked} checkbox={this.state.checkbox}/>
      <
      Chart data = {this.state.data} checked={this.state.checkbox}
      // students={this.state.checkboxStudents}
      />
    </div>
    )
  }
}

export default Home
