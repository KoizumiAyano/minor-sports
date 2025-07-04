import {Link} from 'react-router-dom';
export function MinorSportsList({ sports, loading, error }) {
  if (loading) return <p>読み込み中...</p>;
  if (error) return <p>エラー: {error}</p>;

  return (
    <div style={{ display: 'grid', gap: '10px' }}>
      {sports.map((sport) => (
        <div key={sport.id} style={{ border: '10px solid #6495ed', padding: '10px', borderRadius: '3px' }}>
          <Link to={`/minor-sports/${sport.id}`}>
            <h2>{sport.name}</h2>
          </Link>
          <p><strong>最小人数:</strong> {sport.min_participants}人</p>
          <p><strong>最大人数:</strong> {sport.max_participants}人</p>
          <p><strong>予算:</strong> {sport.budget} 円</p>
          <p><strong>道具:</strong> {sport.tool}</p>
          <p><strong>場所:</strong> {sport.place}</p>
        </div>
      ))}
    </div>
  );
}