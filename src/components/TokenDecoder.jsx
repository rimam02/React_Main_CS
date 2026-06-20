import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';

function TokenDecoder() {
  const [token, setToken] = useState('');
  const [decodedHeader, setDecodedHeader] = useState(null);
  const [decodedPayload, setDecodedPayload] = useState(null);
  const [error, setError] = useState('');

  function decodeToken() {
    try {
      if (!token.trim()) {
        throw new Error('Please paste a JWT token first.');
      }

      // jwtDecode only decodes the token. It does not verify the signature.
      const header = jwtDecode(token, { header: true });
      const payload = jwtDecode(token);

      setDecodedHeader(header);
      setDecodedPayload(payload);
      setError('');
    } catch (decodeError) {
      setDecodedHeader(null);
      setDecodedPayload(null);
      setError('Invalid token. Please check the token format.');
    }
  }

  return (
    <section className="card" id="decoder">
      <div className="card-header">
        <div>
          <p className="section-label">Read</p>
          <h2>JWT Decoder</h2>
        </div>
      </div>

      <label htmlFor="decoder-token">Paste JWT Token</label>
      <textarea
        id="decoder-token"
        value={token}
        onChange={(event) => setToken(event.target.value)}
        rows="5"
        placeholder="Paste token here"
      />

      <button className="primary-button" onClick={decodeToken} type="button">
        Decode Token
      </button>

      {error && <p className="message error">{error}</p>}

      {decodedHeader && decodedPayload && (
        <div className="split-results">
          <div className="result-box">
            <h3>Decoded Header</h3>
            <pre>{JSON.stringify(decodedHeader, null, 2)}</pre>
          </div>
          <div className="result-box">
            <h3>Decoded Payload</h3>
            <pre>{JSON.stringify(decodedPayload, null, 2)}</pre>
          </div>
        </div>
      )}
    </section>
  );
}

export default TokenDecoder;
