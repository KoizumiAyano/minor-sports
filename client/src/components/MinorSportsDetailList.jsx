//#idを取得してスポーツの詳細を表示するコンポーネント
export function MinorSportsDetail({ sports, loading, error }) {
useEffect(() => {
  fetch(`/api/v1/minor-sports/${id}`)
    .then((res) => {
      if (!res.ok) throw new Error("データ取得に失敗しました");
      return res.json();
    })
    .then((data) => setSport(data))
    .catch((err) => setError(err.message))
    .finally(() => setLoading(false));
}, [id]);
  if (loading) return <p>読み込み中...</p>;
  if (error) return <p>エラー: {error}</p>;

  return (
    <div style={{ display: 'grid', gap: '20px' }}>
      {sports.map((sport) => (
        <div key={sport.id} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
          <h2>{sport.name}</h2>
          <p><strong>id:</strong> {sport.id}</p>
          <p><strong>最小人数:</strong> {sport.min_participants}</p>
          <p><strong>最大人数:</strong> {sport.max_participants}</p>
          <p><strong>予算:</strong> {sport.budget} 円</p>
          <p><strong>道具:</strong> {sport.tool}</p>
          <p><strong>場所:</strong> {sport.place}</p>
          <p><strong>説明:</strong> {sport.description}</p>
        </div>
      ))}
    </div>
  );
}
