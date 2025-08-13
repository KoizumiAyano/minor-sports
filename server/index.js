import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

// 環境変数読み込み
dotenv.config({ path: './client/.env.local' });

// Supabaseクライアント作成
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY // サービスキー
);

const app = express();
app.use(cors());
app.use(express.json());

// 例: データ取得エンドポイント
app.get("/players", async (req, res) => {
  const { data, error } = await supabase
    .from("players")
    .select("*");

  if (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
  res.json(data);
});

// サーバー起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
