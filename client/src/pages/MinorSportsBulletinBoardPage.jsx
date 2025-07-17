// 必要なコンポーネントとフック（機能）を読み込む
import { MinorSportsBulletinBoardList } from '../components/MinorSportsBulletinBoardList';  // マイナースポーツ詳細コンポーネント
import { useMinorSportsBulletinBoard } from '../hooks/useMinorSportsBulletinBoard';    // データ取得・管理用フック
import { useParams } from 'react-router-dom'; // URLパラメータを取得するためのフック

// App関数コンポーネント：アプリケーション全体のメイン画面
function MinorSportsBulletinBoardPage() {
  const { sportsId } = useParams();
  const { 
    sport,     // マイナースポーツの詳細データ
    loading,    // 読み込み中フラグ
    error,      // エラー情報
  } = useMinorSportsBulletinBoard(sportsId);
  return (
    <div style={{ padding: '20px' }}>
      <h1>詳細</h1>
      <MinorSportsBulletinBoardList
              sport={sport}
              loading={loading}
              error={error}
      />
    </div>
  );
}

// このコンポーネントを他のファイルで使えるようにエクスポート
export default MinorSportsDetailPage;
