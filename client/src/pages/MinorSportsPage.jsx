// 必要なコンポーネントとフックを読み込む
import React, { useState } from 'react';
import { MinorSportsList } from '../components/MinorSportsList';
import { useMinorSports } from '../hooks/useMinorSports';
import { MinorSportsSearchForm } from '../components/MinorSportsSearchForm';

function MinorSportsPage() {
  // useMinorSports でデータを取得
  const {
    sports,
    loading,
    error,
  } = useMinorSports();

  // フィルタリング用の状態
  const [filteredSports, setFilteredSports] = useState([]);

  // 初期表示ではすべて表示する
  React.useEffect(() => {
    setFilteredSports(sports);
  }, [sports]);

  // 検索処理
  const handleSearch = (criteria) => {
    const result = sports.filter((sport) => {
      return (
        (!criteria.name || sport.name.includes(criteria.name)) &&
        (!criteria.participant || 
          (
            sport.max_participants >= parseInt(criteria.participant) &&
            sport.min_participants <= parseInt(criteria.participant)
          )
        ) &&
        (!criteria.budget || sport.budget <= parseInt(criteria.budget)) &&
        (!criteria.tool || sport.tool.includes(criteria.tool)) &&
        (!criteria.place || sport.place === criteria.place)
      );
    });

    setFilteredSports(result);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>マイナースポーツ一覧</h1>
      <p>検索</p>
      <MinorSportsSearchForm onSearch={handleSearch} />
      <MinorSportsList sports={filteredSports} loading={loading} error={error} />
    </div>
  );
}

export default MinorSportsPage;
