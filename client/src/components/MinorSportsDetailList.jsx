
// src/components/MinorSportsDetailList.jsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// ✅ named export（{}つきでimportできるように）
export function MinorSportsDetailList({sport,loading,error}) {

  if (loading) return <p>読み込み中...</p>;
  if (error) return <p>エラー: {error}</p>;
  if (!sport) return <p>スポーツが見つかりません</p>;

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <h2>{sport.name}</h2>
      <p><strong>ID:</strong> {sport.id}</p>
      <p><strong>最小人数:</strong> {sport.min_participants}</p>
      <p><strong>最大人数:</strong> {sport.max_participants}</p>
      <p><strong>予算:</strong> {sport.budget} 円</p>
      <p><strong>道具:</strong> {sport.tool}</p>
      <p><strong>場所:</strong> {sport.place}</p>
      <p><strong>説明:</strong> {sport.description}</p>
    </div>
  );
}
