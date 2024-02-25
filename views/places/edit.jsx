const React = require("react");
const Def = require("../default");

function edit_form(data) {
  return (
    <Def>
      <main>
        <h1>Edit Place</h1>

        <form method="POST" action={`/places/${data.id}?_method=PUT`}>
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="name">Place Name</label>
              <input id="name" name="name" />
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="pic">Place Picture</label>
              <input id="pic" name="pic" />
            </div>

            <div className="form-group col-sm-6">
              <label htmlFor="city">City</label>
              <input id="city" name="city" />
            </div>

            <div className="form-group col-sm-6">
              <label htmlFor="state">State</label>
              <input id="state" name="state" />
            </div>

            <div className="form-group">
              <label htmlFor="cuisines">Cuisines</label>
              <input id="cuisines" name="cuisines" />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                <i className="bi bi-floppy"></i> Save Changes
              </button>
            </div>
          </div>
        </form>
      </main>
    </Def>
  );
}

module.exports = edit_form;
