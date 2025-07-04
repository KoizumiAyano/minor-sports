import { useState, useEffect } from 'react';
import { minorSportsDetailApi } from '../api/minorSportsDetailApi'; // APIクライアントを読み込み
export function useMinorSportsDetail(id) {
  const [sport, setSport] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchSport = async () => {
    try {
      setLoading(true);
      const data = await minorSportsDetailApi.getSport(id); // APIからスポーツデータを取得
      setSport(data); // 取得したデータを状態に保存
    } catch (err) {
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