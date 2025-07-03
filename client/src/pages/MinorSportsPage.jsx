// 必要なコンポーネントとフック（機能）を読み込む
import { MinorSportsList } from '../components/MinorSportsList';  // マイナースポーツ一覧コンポーネント
import { useMinorSports } from '../hooks/useMinorSports';    // データ取得・管理用フック

// App関数コンポーネント：アプリケーション全体のメイン画面
function MinorSportsPage() {
  // useMinorSports カスタムフックからスポーツデータと機能を取得
  const { 
    sports,     // マイナースポーツの配列
    loading,    // 読み込み中フラグ
    error,      // エラー情報
  } = useMinorSports();

  return (
    <div style={{ padding: '20px' }}>
      {/* アプリケーションのタイトル */}
      <h1>マイナースポーツ一覧アプリ</h1>

      {/* スポーツ一覧コンポーネントにデータと関数を渡す */}
      <MinorSportsList 
        sports={sports}
        loading={loading}
        error={error}
      />
    </div>
  );
}

// このコンポーネントを他のファイルで使えるようにエクスポート
export default MinorSportsPage;

