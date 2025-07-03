// 必要なコンポーネントとフック（機能）を読み込む
import { MinorSportsNameList } from '../components/MinorSportsList';  // マイナースポーツ詳細コンポーネント
import { useMinorSportsName } from '../hooks/useMinorSportsName';    // データ取得・管理用フック

// App関数コンポーネント：アプリケーション全体のメイン画面
function MinorSportsDetailPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>マイナースポーツ詳細アプリ</h1>
    </div>
  );
}

// このコンポーネントを他のファイルで使えるようにエクスポート
export default MinorSportsDetailPage;

