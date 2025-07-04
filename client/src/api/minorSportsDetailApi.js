const API_BASE = '/api';

export const minorSportsDetailApi = {
  async getSport(id) {
    const res = await fetch(`${API_BASE}/minor-sports/${id}`);
    //リンクのURLは、APIのエンドポイントに合わせて変更してください。
    if (!res.ok) throw new Error('取得に失敗しました');
    return res.json();
  }
};