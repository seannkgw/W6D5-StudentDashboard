import React from "react"

const Checkboxes= function(props){

  return(<form>
      <label>
        Leuk
        <input
          type={"checkbox"}
          name="leukBox"
          onChange={props.onchecked}
          checked={props.checkbox.leukBox}
        />
      </label>
      <label>
        Moeilijk
        <input
          type={"checkbox"}
          name="moeilijkBox"
          onChange={props.onchecked}
          checked={props.checkbox.moeilijkBox}
        />
      </label>
    </form>)
}
export default Checkboxes
