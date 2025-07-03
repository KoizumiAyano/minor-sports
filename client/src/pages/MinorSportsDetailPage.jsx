// 必要なコンポーネントとフック（機能）を読み込む
import {MinorSportsDetailList} from '../components/MinorSportsDetailList';  // マイナースポーツ詳細コンポーネント
import { useMinorSports } from '../hooks/useMinorSports';    // データ取得・管理用フック
// App関数コンポーネント：アプリケーション全体のメイン画面
function MinorSportsDetailPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>マイナースポーツ詳細一覧</h1>
    </div>
  );
}

// このコンポーネントを他のファイルで使えるようにエクスポート
export default MinorSportsDetailPage;

