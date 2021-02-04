import { React, Component } from "react";
import DefaultContext from "./context/DefaultContext";
//import { withRouter } from "react-router-dom";

class EditSymptomForm extends Component {
  static contextType = DefaultContext;

  state = {
    symptom: {},
  };

  handleSubmit = (form) => {
    const f = new FormData(form);
    const data = {
      severity: f.get("severity"),
      name: f.get("name"),
      description: f.get("description"),
    };
    this.editSymptom(data);
  };

  editSymptom = (data) => {
    fetch(`${this.context.url}/symptoms/${this.props.match.params.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => {
        this.context.updateStore();
        this.props.history.push("/home");
      })
      .catch((e) => {
        throw new Error("Error updating symptom");
      });
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;
    fetch(`${this.context.url}/symptoms/${id}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          symptom: res,
        });
      });
  };

  render() {
    return (
      <div className="register-form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.handleSubmit(e.target);
          }}
        >
          <h3>Edit Symptom</h3>
          <label htmlFor="severity">Symptom Severity</label>
          <select
            name="severity"
            id="severity"
            value={this.state.symptom.severity}
            onChange={(e) =>
              this.setState({
                symptom: { ...this.state.symptom, severity: e.target.value },
              })
            }
            required
          >
            <option className="hidden" value="">
              Severity
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />
          <label htmlFor="name">Edit your symptom</label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={this.state.symptom.name}
            required
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            defaultValue={this.state.symptom.description}
            required
          ></textarea>
          <button className="form-button" type="submit">
            Done
          </button>
          <button
            className="form-button"
            type="reset"
            onClick={() => this.props.history.push("/home")}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}
export default EditSymptomForm;
//export default withRouter(EditSymptomForm);
