const API_BASE = '/api';

export const minorSportsApi = {
  async getSports() {
    const res = await fetch(`${API_BASE}/minor-sports`);
    if (!res.ok) throw new Error('取得に失敗しました');
    return res.json();
  }
};
