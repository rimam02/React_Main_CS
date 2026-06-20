function TokenHistory({ history, onDelete, onClear }) {
  return (
    <section className="card">
      <div className="card-header">
        <div>
          <p className="section-label">Saved</p>
          <h2>Token History</h2>
        </div>

        {history.length > 0 && (
          <button className="danger-button" onClick={onClear} type="button">
            Clear All
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <p className="empty-state">No tokens generated yet.</p>
      ) : (
        <div className="history-list">
          {history.map((item) => (
            <article className="history-item" key={item.id}>
              <div className="history-top">
                <strong>{item.payload?.name || 'JWT Token'}</strong>
                <span>{item.createdAt}</span>
              </div>
              <p className="token-text">{item.token}</p>
              <button className="danger-button" onClick={() => onDelete(item.id)} type="button">
                Delete
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default TokenHistory;
