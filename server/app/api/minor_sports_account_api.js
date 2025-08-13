// server/routes/minorSports.js
import express from 'express';
import { createClient } from '@supabase/supabase-js';

const router = express.Router();

// 環境変数からSupabaseのURLとService Key取得（クライアントキーじゃなくてサービスキー）
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

router.get('/', async (req, res) => {
  const { data, error } = await supabase
    .from('minor_sports_account')
    .select('*');

  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.json(data);
});

export default router;
