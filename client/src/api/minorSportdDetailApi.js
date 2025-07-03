const API_BASE = '/api';

export const minorSportsNameApi = {
  async getSports() {
    const res = await fetch(`${API_BASE}/minor-sports-detail`);
    if (!res.ok) throw new Error('取得に失敗しました');
    return res.json();
  }
};