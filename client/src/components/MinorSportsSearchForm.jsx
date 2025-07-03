
// 検索フォームコンポーネント
export function MinorSportsSearchForm({ }) {

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="スポーツ名"
        style={{ marginRight: '10px', padding: '6px', width: '200px' }}
      />
      <input
        type="number"
        value={participant}
        onChange={(e) => setParticipant(e.target.value)}
        placeholder="最大人数以下"
        style={{ marginRight: '10px', padding: '6px', width: '150px' }}
      />
      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        placeholder="予算以下（円）"
        style={{ marginRight: '10px', padding: '6px', width: '150px' }}
      />
      <select
        value={equipment}
        onChange={(e) => setEquipment(e.target.value)} // 選択が変わったときの処理
        style={{
          width: '300px',
          padding: '8px',
          marginRight: '10px'
        }}
        disabled={creating} // 投稿作成中は無効化
      >
        <option value="">道具を選択</option>
        <option value="ラケット">ラケット</option>
        <option value="ボール">ボール</option>
        <option value="ヘルメット">ヘルメット</option>
        <option value="グローブ">グローブ</option>
        <option value="ディスク">ディスク</option>
        <option value="なし">なし</option>
      </select>
      <button type="submit" style={{ padding: '6px 12px' }}>
        検索
      </button>
    </form>
  );
}
