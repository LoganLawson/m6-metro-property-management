import React from 'react'
import styles from "./Application.module.css";
//import styles from "../TenantAppSection/TenantAppSection.module.css";
function Application() {
  return (
    <div className={styles.page}>
        <form className={styles.formborder}>
            <div className={styles.formsection}>
                <p className={styles.formtype} >Tenancy Service</p>
            </div>
                <hr className={styles.line}></hr>
                <p className={styles.formname} >Pre-tenancy application form</p>
                <hr className={styles.line}></hr>
            <div className={styles.formsection}>
                <p className={styles.formtext}>Please complete this form to apply for the tenancy at the address below. The information you provide is for
                    applying for this tenancy and may be used for a credit and reference check. Your privacy is protected under the Privacy Act 2020</p>
            </div>
            <p className={styles.formsectionname}>Tenancy Details</p>
            <div className={styles.formsection}>
                <div className={styles.fullRow}>
                    <label>Property address:</label><input className={styles.widerInput}></input>
                </div>
                <div className={styles.twoColumn}>
                    <div className={styles.halfRow}>
                        <label>Commencement of tenancy:</label>
                    </div>
                    <div className={styles.halfRow}>
                        <label>Date:</label>
                        <input className={styles.smallInput}></input>
                        <p>/</p>
                        <input className={styles.smallInput}></input>
                        <p>/</p>
                        <input className={styles.smallInput}></input>
                    </div>
                </div>
            </div>
            <p className={styles.formsectionname}>Application details</p>
            <div className={styles.formsection}>
                <div className={styles.twoColumn}>
                    <div className={styles.halfRow}>
                        <label>Full name:</label><input></input>
                    </div>
                    <div className={styles.halfRow}>
                        <label>Date:</label>
                        <input className={styles.smallInput}></input>
                        <p>/</p>
                        <input className={styles.smallInput}></input>
                        <p>/</p>
                        <input className={styles.smallInput}></input>
                    </div>
                </div>
                <div className={styles.twoColumn}>
                    <div className={styles.halfRow}>
                        <label>Phone Number:</label><input></input>
                    </div>
                    <div className={styles.halfRow}>
                        <label>Mobile Phone:</label><input></input>
                    </div>
                </div>
                <div className={styles.fullRow}>
                    <label>Email:</label><input></input>
                </div>
                <div className={styles.fullRow}>
                    <label>Current address:</label><input></input>
                </div>
                <div className={styles.twoColumn}>
                    <div className={styles.halfRow}>
                        <label>How long have you lived there?</label>
                        <label>Years:</label><input></input>
                    </div>
                    <div className={styles.halfRow}>
                        <label>Months:</label><input></input>
                    </div>
                </div>    
                <div className={styles.fullRow}>
                <label>Please state why you are leaving this address: </label><input></input>
                </div>
            </div>
            <p className={styles.formsectionname}>Identification</p>
            <div className={styles.formsection}>
                <p className={styles.formtext}>Please provide photo identification, such as your driver’s licence.</p>
                <div className={styles.twoColumn}>
                    <div className={styles.halfRow}>
                        <label>Driver’s licence number: </label><input></input>
                    </div>
                    <div className={styles.halfRow}>
                        <label>Version no. (if applicable): </label><input></input>
                    </div>
                </div>
                <p className={styles.footnote}>NB: Provision of this number is voluntary and will only be used to verify your identity and for carrying out a credit card</p>
                <div className={styles.fullRow}>
                <label>Alternative form of ID: </label><input></input>
                </div>
            </div>
            <div className={styles.formSectionNameAdditional}>
                <p className={styles.p1}>Current landlord’s details</p>
                <p className={styles.p2}>If you are currently renting, please provide your landlors’s name and contact details.</p>
            </div>
            <div className={styles.formsection}>
                <div className={styles.fullRow}>
                    <label>Landlord's Name: </label><input></input>
                </div>
                <div className={styles.twoColumn}>
                    <div className={styles.halfRow}>
                        <label>Phone Number: </label><input></input>
                    </div>
                    <div className={styles.halfRow}>
                        <label>Moble Phone: </label><input></input>
                    </div>
                </div>
                <div className={styles.fullRow}>
                    <label>Email: </label><input></input>
                </div>
                <div className={styles.fullRow}>
                    <label>May I contact this peron for a reference?</label>
                    <input className={styles.checkbox} type="checkbox" /><span class="checkmark"></span>
                    <label>Yes </label>
                    <input className={styles.checkbox} type="checkbox" /><span class="checkmark"></span>
                    <label>No </label>
                    <p>(please tick)</p>
                </div>
            </div>
                    
            <p className={styles.formsectionname}>References</p>
            <div className={styles.formsection}>
                <p className={styles.formtext}>Please provide two references that I can contact. Referees can be a friend, co-worker, your employer or someone who knows you well.</p>
                <p className={styles.formtext}>One of your references should be able to provide a reference about your creditworthiness. If you have already 
                provided your current landlord’s details, only one additional referee is needed. Please let these people know I
                may be contacting them for a reference.</p>
                <div className={styles.fullRow}>
                    <label>Refree name 1: </label>
                    <input></input>
                </div>
                <div className={styles.twoColumn}>
                    <div className={styles.halfRow}>
                        <label>Email: </label><input></input>
                    </div>
                    <div className={styles.halfRow}>
                        <label>Phone: </label><input></input>
                    </div>
                </div>
                <div className={styles.fullRow}>
                    <label>Refree name 2: </label>
                </div>
                <div className={styles.twoColumn}>
                    <div className={styles.halfRow}>
                        <label>Email: </label><input></input>
                    </div>
                    <div className={styles.halfRow}>
                        <label>Phone: </label><input></input>
                    </div>
                </div>
            </div>
            <p className={styles.formsectionname}>Signature</p>
            <div className={styles.formsection}>
                <p className={styles.formtext}>I authorise the Landlord/Property Manager to:</p>
                <ul className={styles.formtext}>
                    <li>
                    collect, retail and use this information for the purpose of assessing my creditworthiness and 
                    suitability for the tenancy; and
                    </li>
                    <li>
                    disclose information about me, whether collected from me directly or from any other source to any 
                    other credit provider or any credit reporting agency for the purposes of providing or obtaining a credit 
                    report (which will involve the credit reporting agency providing information about me to the 
                    Landlord/Property Manager).
                    </li>
                </ul>
                <p className={styles.formtext}>I understand that the credit reporting agency:</p>
                <ul className={styles.formtext}>
                    <li>
                may hold my information on their credit reporting database and use it for providing credit reporting 
                services, and they may disclose my information to their subscribers for the purpose of credit checking 
                or debt collection; and
                </li>
                <li>
                as part of providing a credit report, may check the Ministry of Justice fines database for any overdue 
                fines I may have.
                </li>
                </ul>
                <div className={styles.twoColumn}>
                    <div className={styles.halfRow}>
                        <label>Signed: </label><input></input>
                    </div>
                    <div className={styles.halfRow}>
                        <label>Date Signed: </label>
                        <input className={styles.smallInput}></input>
                        <p>/</p>
                        <input className={styles.smallInput}></input>
                        <p>/</p>
                        <input className={styles.smallInput}></input>
                    </div>
                </div>
                <p className={styles.formtext}>Under the Privacy Act 2020, you have the right to ask for a copy of all information held about you, and have 
                the right to request the correction of any incorrect information.</p>
            </div>
        </form>
        <div className={styles.bottomButtons}>
        <div className={styles.backButton}>
            <div className={styles.chevron}>
            </div>
            <div >
                Back
            </div>
        </div>
        <div className={styles.submitButton}>Submit</div>
        </div>
    </div>
  )
}

export default Application