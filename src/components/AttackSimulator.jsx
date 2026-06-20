import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';

function base64UrlEncode(object) {
  const json = JSON.stringify(object);
  const base64 = btoa(unescape(encodeURIComponent(json)));
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function AttackSimulator() {
  const [token, setToken] = useState('');
  const [modifiedPayloadText, setModifiedPayloadText] = useState('');
  const [noneToken, setNoneToken] = useState('');
  const [tamperedToken, setTamperedToken] = useState('');
  const [originalPayload, setOriginalPayload] = useState(null);
  const [error, setError] = useState('');

  function createNoneAlgorithmToken() {
    try {
      const payload = jwtDecode(token);
      const header = { alg: 'none', typ: 'JWT' };

      // A "none" algorithm token has only header and payload. The signature is removed.
      const attackedToken = `${base64UrlEncode(header)}.${base64UrlEncode(payload)}.`;
      setNoneToken(attackedToken);
      setError('');
    } catch (decodeError) {
      setNoneToken('');
      setError('Enter a valid JWT before running the none algorithm attack.');
    }
  }

  function loadPayloadForTampering() {
    try {
      const payload = jwtDecode(token);
      setOriginalPayload(payload);
      setModifiedPayloadText(JSON.stringify(payload, null, 2));
      setTamperedToken('');
      setError('');
    } catch (decodeError) {
      setOriginalPayload(null);
      setModifiedPayloadText('');
      setError('Enter a valid JWT before loading the payload.');
    }
  }

  function createTamperedToken() {
    try {
      const tokenParts = token.split('.');

      if (tokenParts.length !== 3) {
        throw new Error('Invalid token format.');
      }

      const changedPayload = JSON.parse(modifiedPayloadText);
      const changedPayloadPart = base64UrlEncode(changedPayload);

      // Header and old signature are kept, but payload is changed.
      // This makes verification fail because the signature no longer matches.
      const attackedToken = `${tokenParts[0]}.${changedPayloadPart}.${tokenParts[2]}`;
      setTamperedToken(attackedToken);
      setError('');
    } catch (tamperError) {
      setTamperedToken('');
      setError('Please load a valid token and enter valid JSON payload.');
    }
  }

  return (
    <section className="card wide-card" id="attacks">
      <div className="card-header">
        <div>
          <p className="section-label">Experiment</p>
          <h2>JWT Attack Simulator</h2>
        </div>
      </div>

      <label htmlFor="attack-token">Original JWT Token</label>
      <textarea
        id="attack-token"
        value={token}
        onChange={(event) => setToken(event.target.value)}
        rows="5"
        placeholder="Paste a generated token here"
      />

      {error && <p className="message error">{error}</p>}

      <div className="attack-grid">
        <div className="attack-panel">
          <h3>A. None Algorithm Attack</h3>
          <p>
            This demo changes the header algorithm to none and removes the
            signature. Real applications must reject this.
          </p>
          <button className="secondary-button" onClick={createNoneAlgorithmToken} type="button">
            Create None Token
          </button>

          {noneToken && (
            <div className="result-box">
              <h4>Modified Token</h4>
              <p className="token-text">{noneToken}</p>
              <p className="small-note">
                Danger: if a server accepts alg none, an attacker can create a
                token without knowing the secret key.
              </p>
            </div>
          )}
        </div>

        <div className="attack-panel">
          <h3>B. Payload Tampering Attack</h3>
          <p>
            This demo changes the payload but keeps the old signature. Proper
            signature verification should fail.
          </p>

          <button className="secondary-button" onClick={loadPayloadForTampering} type="button">
            Load Payload
          </button>

          {originalPayload && (
            <>
              <div className="result-box">
                <h4>Original Payload</h4>
                <pre>{JSON.stringify(originalPayload, null, 2)}</pre>
              </div>

              <label htmlFor="tamper-payload">Modify Payload JSON</label>
              <textarea
                id="tamper-payload"
                value={modifiedPayloadText}
                onChange={(event) => setModifiedPayloadText(event.target.value)}
                rows="7"
              />

              <button className="secondary-button" onClick={createTamperedToken} type="button">
                Create Tampered Token
              </button>
            </>
          )}

          {tamperedToken && (
            <div className="result-box">
              <h4>Tampered Token</h4>
              <p className="token-text">{tamperedToken}</p>
              <p className="small-note">
                The payload is readable, but editing it breaks the signature.
                This is why verification is required before trusting a token.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AttackSimulator;
