import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="form-contact"
      >
        <div hidden aria-hidden="true">
          <label>
            Don’t fill this out if you're human:
            <input name="bot-field" />
          </label>
        </div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="your@email.com"
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Hello world"
        ></textarea>
        <button type="submit" name="submit" aria-label="button">
          Send <FaPaperPlane />
        </button>
      </form>
    </>
  );
};

export default ContactForm;
