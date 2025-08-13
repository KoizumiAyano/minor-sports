// minorSportsApi.js
const API_BASE = 'http://localhost:3000/api'; // バックエンドAPIのURL

export const minorSportsApi = {
  async getSports(sportsId) {
    if (!sportsId) throw new Error('sportsId が指定されていません');
    const res = await fetch(`${API_BASE}/minor-sports/${sportsId}/account`);
    if (!res.ok) throw new Error('取得に失敗しました');
    return res.json();
  }
};
