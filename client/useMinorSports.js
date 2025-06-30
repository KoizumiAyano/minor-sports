import { useState, useEffect } from 'react';
import { minorSportsApi } from '../api/minorSportsApi'; // APIクライアントを読み込み

export function useMinorSports() {
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetchSports(); // 初回にデータ取得
  }, []);

  return {
    sports,
    loading,
    error
  };
}