import '../contact-info/contact-info.styles.css'

const ContactInfo = () => {
    return(
        <div className='contact-info-div'>
            <div className='contact-background'>
                <h1>Reaching out?</h1>
                <h2>Look no further.</h2>
                <p>
                    I'm actively seeking opportunities and open to connecting.
                    <br></br>
                    Don't hesitate to reach out if you have questions, want to engage in casual conversations, or explore potential collaborations.
                </p>
                <a href='mailto:jegirhiny@gmail.com' className='contact-me-button'>Say hello</a>
            </div>
        </div>
    );
}

export default ContactInfo;