import '../contact-info/contact-info.styles.css'

const ContactInfo = () => {
    return(
        <div className='contact-info-div'>
            <div className='contact-background'>
                <h1>Reaching out?</h1>
                <h2>Look no further.</h2>
                <p>
                    I'm currently looking for any opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <a href='mailto:jegirhiny@gmail.com' className='contact-me-button'>Say hello</a>
            </div>
        </div>
    );
}

export default ContactInfo;