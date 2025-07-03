// 必要なコンポーネントとフック（機能）を読み込む
import { MinorSportsDetailList } from '../components/MinorSportsDetailList';  // マイナースポーツ詳細コンポーネント
import { useMinorSportsDetail } from '../hooks/useMinorSportsDetail';    // データ取得・管理用フック
import { useParams } from 'react-router-dom'; // URLパラメータを取得するためのフック

// App関数コンポーネント：アプリケーション全体のメイン画面
function MinorSportsDetailPage() {
  const { sportsId } = useParams();
  console.log('MinorSportsDetailPage id:', sportsId); // デバッグ用：URLパラメータのIDを表示
  const { 
    sport,     // マイナースポーツの詳細データ
    loading,    // 読み込み中フラグ
    error,      // エラー情報
  } = useMinorSportsDetail(sportsId);
  console.log('MinorSportsDetailPage sport:', sport); // デバッグ用：取得したスポーツデータを表示
  return (
    <div style={{ padding: '20px' }}>
      <h1>マイナースポーツ詳細一覧</h1>
      <MinorSportsDetailList 
              sport={sport}
              loading={loading}
              error={error}
      />
    </div>
  );
}

// このコンポーネントを他のファイルで使えるようにエクスポート
export default MinorSportsDetailPage;

