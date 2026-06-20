import { useState } from 'react';
import { SignJWT } from 'jose';

const defaultPayload = {
  name: 'Student User',
  role: 'student',
  semester: 1
};

function TokenGenerator({ onTokenGenerated }) {
  const [payloadText, setPayloadText] = useState(JSON.stringify(defaultPayload, null, 2));
  const [secretKey, setSecretKey] = useState('my-secret-key');
  const [generatedToken, setGeneratedToken] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  async function generateToken() {
    try {
      const payloadObject = JSON.parse(payloadText);

      if (!secretKey.trim()) {
        throw new Error('Secret key cannot be empty.');
      }

      // jose needs the secret as bytes, so TextEncoder converts normal text.
      const secret = new TextEncoder().encode(secretKey);

      const token = await new SignJWT(payloadObject)
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(secret);

      setGeneratedToken(token);
      setMessage('JWT token generated successfully.');
      setMessageType('success');
      onTokenGenerated(token, payloadObject);
    } catch (error) {
      setGeneratedToken('');
      setMessage(error.message || 'Please enter valid JSON payload.');
      setMessageType('error');
    }
  }

  return (
    <section className="card" id="generator">
      <div className="card-header">
        <div>
          <p className="section-label">Create</p>
          <h2>JWT Token Generator</h2>
        </div>
      </div>

      <label htmlFor="payload">Payload JSON</label>
      <textarea
        id="payload"
        value={payloadText}
        onChange={(event) => setPayloadText(event.target.value)}
        rows="8"
      />

      <label htmlFor="generator-secret">Secret Key</label>
      <input
        id="generator-secret"
        type="text"
        value={secretKey}
        onChange={(event) => setSecretKey(event.target.value)}
      />

      <button className="primary-button" onClick={generateToken} type="button">
        Generate Token
      </button>

      {message && <p className={`message ${messageType}`}>{message}</p>}

      {generatedToken && (
        <div className="result-box">
          <h3>Generated Token</h3>
          <p className="token-text">{generatedToken}</p>
        </div>
      )}
    </section>
  );
}

export default TokenGenerator;
