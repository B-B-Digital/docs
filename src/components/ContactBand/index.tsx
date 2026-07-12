import React, {type ReactNode} from 'react';

interface ContactBandProps {
  heading: string;
  text: string;
  /** Plain visual label, not a link — the actual contact channel is agreed per client at signing. */
  cta: string;
}

export default function ContactBand({heading, text, cta}: ContactBandProps): ReactNode {
  return (
    <div className="contact-band">
      <div>
        <h3 className="contact-band__heading">{heading}</h3>
        <p className="contact-band__text">{text}</p>
      </div>
      <span className="contact-band__cta">{cta}</span>
    </div>
  );
}
