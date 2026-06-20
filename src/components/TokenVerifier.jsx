import { useState } from 'react';
import { jwtVerify } from 'jose';

function TokenVerifier() {
  const [token, setToken] = useState('');
  const [secretKey, setSecretKey] = useState('my-secret-key');
  const [verificationResult, setVerificationResult] = useState('');

  async function verifyToken() {
    try {
      if (!token.trim()) {
        throw new Error('Please enter a JWT token.');
      }

      if (!secretKey.trim()) {
        throw new Error('Please enter the secret key.');
      }

      const secret = new TextEncoder().encode(secretKey);
      await jwtVerify(token, secret);
      setVerificationResult('valid');
    } catch (error) {
      setVerificationResult('invalid');
    }
  }

  return (
    <section className="card">
      <div className="card-header">
        <div>
          <p className="section-label">Check</p>
          <h2>JWT Signature Verification</h2>
        </div>
      </div>

      <label htmlFor="verify-token">JWT Token</label>
      <textarea
        id="verify-token"
        value={token}
        onChange={(event) => setToken(event.target.value)}
        rows="5"
      />

      <label htmlFor="verify-secret">Secret Key</label>
      <input
        id="verify-secret"
        type="text"
        value={secretKey}
        onChange={(event) => setSecretKey(event.target.value)}
      />

      <button className="primary-button" onClick={verifyToken} type="button">
        Verify Signature
      </button>

      {verificationResult === 'valid' && (
        <p className="message success">Valid Signature</p>
      )}

      {verificationResult === 'invalid' && (
        <p className="message error">Invalid Signature</p>
      )}
    </section>
  );
}

export default TokenVerifier;
