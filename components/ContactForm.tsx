import { OWNER } from "@/data/mockData";
import { ArrowGlyph } from "./Icons";

interface ContactFormProps {
  idPrefix?: string;
}

export default function ContactForm({ idPrefix = "f" }: ContactFormProps) {
  return (
    <form
      className="form"
      action={OWNER.formEndpoint}
      method="post"
      data-endpoint={OWNER.formEndpoint}
      data-sent="Your message has been sent. Onifade Ololade will review it from Formspree."
      data-sending="Sending your message"
      data-failed="Could not send the message right now. Your details are still in the fields; try again."
      noValidate
    >
      <div className="field">
        <label htmlFor={`${idPrefix}-name`}>Your name</label>
        <input
          id={`${idPrefix}-name`}
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-describedby={`${idPrefix}-name-err`}
        />
        <p className="field__error" id={`${idPrefix}-name-err`} hidden>
          Write your name so I know who to reply to.
        </p>
      </div>

      <div className="field">
        <label htmlFor={`${idPrefix}-email`}>Email address</label>
        <input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          aria-describedby={`${idPrefix}-email-err`}
        />
        <p className="field__error" id={`${idPrefix}-email-err`} hidden>
          Write an email address with an @, such as name@company.com.
        </p>
      </div>

      <div className="field field--full">
        <label htmlFor={`${idPrefix}-message`}>Project or role details</label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          rows={3}
          required
          aria-describedby={`${idPrefix}-message-err`}
        />
        <p className="field__error" id={`${idPrefix}-message-err`} hidden>
          Write a short note on the role, product scope, or timeline.
        </p>
      </div>

      <div className="btn-row">
        <button className="btn btn--primary" type="submit">
          Send a message
          <ArrowGlyph />
        </button>
      </div>

      <p className="form__status" role="status" data-form-status="" />
      <p className="t-small muted">
        Submissions post directly to Formspree. No account or sign-in required.
      </p>
    </form>
  );
}
