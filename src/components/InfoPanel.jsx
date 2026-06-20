const infoSections = [
  {
    title: 'What is JWT?',
    text: 'JWT means JSON Web Token. It is a compact token used to safely carry user information between two systems.'
  },
  {
    title: 'Header',
    text: 'The header stores metadata such as token type and signing algorithm, for example HS256.'
  },
  {
    title: 'Payload',
    text: 'The payload contains claims such as name, role, user id, or expiry time. It is encoded, not encrypted.'
  },
  {
    title: 'Signature',
    text: 'The signature proves that the token was created using the correct secret key and was not changed.'
  },
  {
    title: 'Authentication vs Authorization',
    text: 'Authentication checks who the user is. Authorization checks what the user is allowed to access.'
  },
  {
    title: 'Common JWT Security Risks',
    text: 'Weak secrets, accepting alg none, missing expiry checks, storing sensitive data, and not verifying signatures are common mistakes.'
  },
  {
    title: 'Best Practices',
    text: 'Use strong secrets, always verify signatures, set expiry time, use HTTPS, and never store passwords or private data inside payloads.'
  }
];

function InfoPanel() {
  return (
    <section className="card wide-card" id="info">
      <div className="card-header">
        <div>
          <p className="section-label">Theory</p>
          <h2>Educational Information Panel</h2>
        </div>
      </div>

      <div className="info-grid">
        {infoSections.map((section) => (
          <article className="info-item" key={section.title}>
            <h3>{section.title}</h3>
            <p>{section.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default InfoPanel;
