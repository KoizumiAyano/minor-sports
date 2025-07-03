import { useState, useEffect } from 'react';
import { minorSportsDetailApi } from '../api/minorSportsDetailApi'; // APIクライアントを読み込み
export function useMinorSportsDetail(id) {
  console.log('useMinorSportsDetail id:', id); // デバッグ用：IDを表示
  const [sport, setSport] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchSport = async () => {
    try {
      setLoading(true);
      const data = await minorSportsDetailApi.getSport(id); // APIからスポーツデータを取得
      console.log('Fetched sport data:', data); // 取得したデータをコンソールに表示
      setSport(data); // 取得したデータを状態に保存
    } catch (err) {
      console.error('スポーツ詳細データの取得に失敗:', err);
      setError(err.message); // エラーが発生した場合はエラーメッセージを状態に保存
    } finally {
      setLoading(false); // 読み込み状態を終了
    }
  };

  useEffect(() => {
    fetchSport(); // 初回にデータ取得
  }, []);

  return {
    sport,
    loading,
    error
  };
}