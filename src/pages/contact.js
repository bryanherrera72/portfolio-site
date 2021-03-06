import React from 'react';
import Layout from '../components/Layout/layout';
import '../styles/contact.css';
const contact = props => {

    return (
        <Layout>
            <div className = "Contact">
                <div className = "FormContainer">
                    <label htmlFor = "ContactForm"><h1>Contact</h1></label>
                    <form 
                        id = "ContactForm" 
                        className = "ContactForm" 
                        name="ContactForm"
                        method="post"
                        data-netlify="true" 
                        data-netlify-honeypot="bot-field">
                        
                        <input type="hidden" name="form-name" value="ContactForm" />
                        <div>
                            <label htmlFor= "name">Name</label>
                            <input name = "name" id = "name"/>
                        </div>
                        <div>
                            <label htmlFor= "email">Email</label>
                            <input type = "email" name = "email" id = "email"/>
                        </div>
                        <div>
                            <label htmlFor= "description">Description</label>
                            <textarea 
                                rows="5" 
                                cols="35" 
                                name = "description" 
                                id = "description"></textarea>
                        </div>
                        <div>
                            <button className = "Submit" type = "submit">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default contact;