export function MinorSportsList({ sports, loading, error }) {
  if (loading) return <p>読み込み中...</p>;
  if (error) return <p>エラー: {error}</p>;

  return (
    <div style={{ display: 'grid', gap: '20px' }}>
      {sports.map((sport) => (
        <div key={sport.id} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
          <h2>{sport.name}</h2>
          <img src={sport.image} alt={sport.name} style={{ width: '100%', maxWidth: '300px' }} />
          <p><strong>人数:</strong> {sport.people}</p>
          <p><strong>予算:</strong> {sport.budget} 円</p>
          <p><strong>道具:</strong> {sport.tools}</p>
          <p><strong>場所:</strong> {sport.indoor ? '屋内' : '屋外'}</p>
 
        </div>
      ))}
    </div>
  );
}
