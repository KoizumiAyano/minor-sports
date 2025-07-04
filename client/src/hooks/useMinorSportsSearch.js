import { useState, useEffect } from 'react';
import { minorSportsApi } from '../api/minorSportsApi'; // APIクライアントを読み込み

export function useMinorSportsSearch(name, participant, budget, tool, place) {
  const [sports, setSports] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSports = async () => {
    try {
      setLoading(true);
      const data = await minorSportsApi.getSports({
        name, 
        participant, 
        budget, 
        tool,  
        place}); // APIからスポーツデータを取得
      setSports(data); // 取得したデータを状態に保存
    } catch (err) {
      console.error('スポーツ検索データの取得に失敗:', err);
      setError(err.message); // エラーが発生した場合はエラーメッセージを状態に保存
    } finally {
      setLoading(false); // 読み込み状態を終了
    }
  };

  useEffect(() => {
  if (name || participant || budget || tool || place) {
      fetchSports(); // 入力値がある場合にデータ取得
    }
  }, [name, participant, budget, tool, place]); // 依存配列に入力値を


  return {
    sports,
    loading,
    error
  };
}