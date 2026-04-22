import express from 'express';

const app = express();

app.get('/health', (req, res) => {
  res.send("health is ok");
});

// ✅ For Vercel (ESM export)
export default app;