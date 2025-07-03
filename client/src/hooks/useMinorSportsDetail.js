import { useState, useEffect } from 'react';
import { minorSportsApi } from '../api/minorSportsApi'; // APIクライアントを読み込み
export function useMinorSportsDetail() {
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchSports = async () => {
    try {
      setLoading(true);
      const data = await minorSportsApi.getSports(); // APIからスポーツデータを取得
      setSports(data); // 取得したデータを状態に保存
    } catch (err) {
      console.error('スポーツ詳細データの取得に失敗:', err);
      setError(err.message); // エラーが発生した場合はエラーメッセージを状態に保存
    } finally {
      setLoading(false); // 読み込み状態を終了
    }
  };

  useEffect(() => {
    fetchSports(); // 初回にデータ取得
  }, []);

  return {
    sports,
    loading,
    error
  };
}