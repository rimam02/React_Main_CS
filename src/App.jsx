import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState("");
  const [header, setHeader] = useState(null);
  const [payload, setPayload] = useState(null);
  const [signature, setSignature] = useState("");
  const [status, setStatus] = useState("Paste a JWT token to begin");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedToken = localStorage.getItem("jwtToken");
    if (savedToken) {
      setToken(savedToken);
      decodeToken(savedToken);
    }
  }, []);

  const base64UrlDecode = (str) => {
    try {
      let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
      let json = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      return JSON.parse(json);
    } catch {
      return null;
    }
  };

  const decodeToken = (jwt) => {
    const parts = jwt.split(".");

    if (parts.length !== 3) {
      setHeader(null);
      setPayload(null);
      setSignature("");
      setStatus("❌ Invalid JWT format");
      return;
    }

    const decodedHeader = base64UrlDecode(parts[0]);
    const decodedPayload = base64UrlDecode(parts[1]);

    if (!decodedHeader || !decodedPayload) {
      setHeader(null);
      setPayload(null);
      setSignature("");
      setStatus("❌ Cannot decode token");
      return;
    }

    setHeader(decodedHeader);
    setPayload(decodedPayload);
    setSignature(parts[2]);
    setStatus("✅ Token decoded successfully");
    localStorage.setItem("jwtToken", jwt);
  };

  const generateToken = () => {
  const names = [
    "Rima",
    "Rahul",
    "Neha",
    "Aman",
    "Priya",
    "Rohit"
  ];

  const roles = [
    "Student",
    "Admin",
    "Guest",
    "Developer"
  ];

  const randomName =
    names[Math.floor(Math.random() * names.length)];

  const randomRole =
    roles[Math.floor(Math.random() * roles.length)];

  const payloadData = {
    id: Math.floor(Math.random() * 10000),
    name: randomName,
    role: randomRole,
    iat: Date.now()
  };

  const headerData = {
    alg: "HS256",
    typ: "JWT"
  };

  const encode = (obj) =>
    btoa(JSON.stringify(obj))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=/g, "");

  const token =
    `${encode(headerData)}.${encode(payloadData)}.signature${Math.floor(
      Math.random() * 99999
    )}`;

  setToken(token);
  decodeToken(token);

setHistory((prev) => [
  {
    id: payloadData.id,
    name: payloadData.name,
    role: payloadData.role
  },
  ...prev
]);

};

  const handleDecode = () => {
    decodeToken(token);
  };

  const verifyToken = () => {
  if (!token) {
    setStatus("❌ No token available");
    return;
  }

  const parts = token.split(".");

  if (parts.length !== 3) {
    setStatus("❌ Invalid Token");
    return;
  }

  if (parts[2].startsWith("signature")) {
    setStatus("✅ Token Verified");
  } else {
    setStatus("❌ Token Tampered");
  }
};

  const simulateNoneAttack = () => {
    if (!header || !payload) {
      setStatus("⚠️ Decode a token first");
      return;
    }

    const attackedHeader = {
      ...header,
      alg: "none",
    };

    setHeader(attackedHeader);
    setSignature("");
    setStatus("⚠️ alg:none attack simulated - token may be unsafe");
  };

  const clearAll = () => {
    setToken("");
    setHeader(null);
    setPayload(null);
    setSignature("");
    setStatus("Paste a JWT token to begin");
    localStorage.removeItem("jwtToken");
  };

  return (
    <div className="app">
      <div className="container">
        <h1>JWT Security Laboratory</h1>
        <p className="subtitle">
          Decode JWT tokens, view their parts, and simulate basic security attacks.
        </p>

        <div className="input-card">
          <label>Paste JWT Token</label>
          <textarea
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Paste token here: header.payload.signature"
          />

    <div className="buttons">

      <button onClick={generateToken}>
      Generate Token
      </button>

      <button onClick={handleDecode}>
      Decode Token
      </button>

      <button onClick={verifyToken}>
      Verify Token
      </button>

      <button
      onClick={simulateNoneAttack}
      className="warning-btn">
      Simulate alg:none Attack
      </button>

      <button
      onClick={clearAll}
      className="clear-btn" >
      Clear
      </button>
    </div>

</div>  

        <div className="status-card">
          <h2>Security Status</h2>
          <p>{status}</p>
        </div>      

        <div className="grid">
          <div className="card">
            <h2>Header</h2>
            <pre>{header ? JSON.stringify(header, null, 2) : "No header decoded"}</pre>
          </div>

          <div className="card">
            <h2>Payload</h2>
            <pre>{payload ? JSON.stringify(payload, null, 2) : "No payload decoded"}</pre>
          </div>

          <div className="card">
            <h2>Signature</h2>
            <pre>{signature || "No signature available"}</pre>
          </div>
        </div>

<div className="card">
  <h2>Generated Token History</h2>

  <table className="history-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>User</th>
        <th>Role</th>
      </tr>
    </thead>

    <tbody>
      {history.map((item, index) => (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.role}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>
    </div>
    
  );
}

export default App;
