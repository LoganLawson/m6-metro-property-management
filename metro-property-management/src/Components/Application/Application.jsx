import React from 'react'

function Application() {
  return (
    <div>
            <h1>Tenancy Service</h1>
            <h1>Pre-tenancy application form</h1>
            <p>Please complete this form to apply for the tenancy at the address below. The information you provide is for
               applying for this tenancy and may be used for a credit and reference check. Your privacy is protected under the Privacy Act 2020</p>
        <form>
            <h3>Tenancy Details</h3>
            <label>Property address:</label><input></input>
            <label>Commencement of tenancy:</label><input></input>
            <h3>Application details</h3>
            <label>Full name:</label><input></input>
            <label>Phone Number:</label><input></input>
            <label>Email:</label><input></input>
            <label>Current address:</label><input></input>
            <label>How long have you lived there?</label>
            <label>Years:</label><input></input>
            <label>Months:</label><input></input>
            <label>Please state why :</label><input></input>
        </form>
    </div>
  )
}

export default Application