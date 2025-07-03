// React の useState フックをインポート（コンポーネント内でデータの状態を管理するため）
import { MinorSportsNameList } from './MinorSportsSearchList';

// PostList コンポーネント：投稿の一覧表示と新規投稿作成機能を担当
// props（引数）として親コンポーネント（App.jsx）から以下のデータを受け取る
export function PostList({ posts, loading, error, onSearchPosts }) {
  // useState フック：コンポーネント内でデータの状態を管理する
  // [現在の値, 値を変更する関数] = useState(初期値) の形で使用
  const [name, setName] = useState('');           // スポーツ名の入力フォーム
  const [participant, setParticipant] = useState(false); // 人数の入力フォーム
  const [budget, setBudget] = useState('');          // 予算の入力フォーム
  const [creating, setCreating] = useState(false); // 投稿作成中フラグ（ボタンの無効化などに使用）
  const [createError, setCreateError] = useState(''); // 投稿作成時のエラーメッセージ
  // フォーム送信時の処理を行う関数
  // async: 非同期処理（APIとの通信など時間のかかる処理）を扱うためのキーワード
  const handleSubmit = async (e) => {
    // preventDefault(): フォーム送信のデフォルト動作（ページリロード）を止める
    e.preventDefault();
    
    // 入力値のバリデーション（検証）
    // trim(): 文字列の前後の空白を除去。空文字だけの場合は false になる
    if (!text.trim()) {
      setCreateError('スポーツ名を入力してください'); // エラーメッセージを設定
      return; // 処理を終了（以下のコードは実行されない）
    }



    // 投稿作成処理の開始
    setCreating(true);      // 作成中フラグを true に（ボタンを無効化するため）
    setCreateError('');     // 前回のエラーメッセージをクリア
    
    // await: 非同期処理の完了を待つ。onCreatePost は親から受け取った投稿作成関数
    const result = await onSearchPosts(name, participant, budget);
    
    // 投稿作成の結果によって処理を分岐
    if (!result.success) {
      setText('');  // 成功時：入力フォームをクリア
    } else {
      setCreateError(result.error);  // 失敗時：エラーメッセージを表示
    }
    
    setCreating(false);  // 作成中フラグを false に戻す
  };

  if (loading) return <p>読み込み中...</p>;
  if (error) return <p>エラー: {error}</p>;

  return (
    <div style={{ display: 'grid', gap: '20px' }}>
    <form onSubmit={handleSubmit}></form>
        <div>
          <input 
          type="name"
          value={name}
            onChange={(e) => setName(e.target.value)}  // 入力値が変わった時の処理
            placeholder="スポーツ名を入力"            // 未入力時に表示されるヒント
            style={{ 
              width: '300px', 
              padding: '8px',
              marginRight: '10px'
            }}
            disabled={creating}                   // 投稿作成中は入力を無効化
          />
          <input 
          type="participant"
          value={sport.name}
            onChange={(e) => setParticipant(e.target.value)}  // 入力値が変わった時の処理
            placeholder="人数を入力"            // 未入力時に表示されるヒント
            style={{ 
              width: '300px', 
              padding: '8px',
              marginRight: '10px'
            }}
            disabled={creating}                   // 投稿作成中は入力を無効化
          />
          <input 
          type="budget"
          value={sport.budget}
            onChange={(e) => setBudget(e.target.value)}  // 入力値が変わった時の処理
            placeholder="予算を入力"            // 未入力時に表示されるヒント
            style={{ 
              width: '300px', 
              padding: '8px',
              marginRight: '10px'
            }}
            disabled={creating}                   // 投稿作成中は入力を無効化
          />


          {/* 検索投稿ボタン　　投稿も検索も同じものを使用できる */}
          <button type="submit" disabled={creating}>
            {/* 三項演算子：条件 ? 真の場合 : 偽の場合 */}
            {creating ? '検索中...' : '検索'}
          </button>
        </div>
        {/* 条件付きレンダリング：createError が存在する場合のみ表示 */}
        {createError && (
          <div style={{ color: 'red', marginTop: '5px' }}>
            {createError}
          </div>
        )}
        {/* 投稿一覧表示部分 */}
      <div>
        <h2>検索結果</h2>
        {/* 三項演算子で投稿の有無によって表示を切り替え */}
        {posts.length === 0 ? (
          <p>投稿がありません</p>
        ) : (
          <ul>
            {/* map 関数：配列の各要素に対して処理を実行し、新しい配列を作成 */}
            {/* ここでは各投稿データを <li> 要素に変換している */}
            {posts.map(post => (
              <li key={post.id}>  {/* key: React が要素を識別するための一意な値 */}
                {post.text} (ID: {post.id})
              </li>
    
               ))}
          </ul>
        )}
      </div>
    </div>
  );
}