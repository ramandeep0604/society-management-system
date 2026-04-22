import express from 'express';

const app = express();

app.get('/health', (req, res) => {
  res.send("health is ok");
});

// ❌ REMOVE app.listen()
// ✅ EXPORT app instead

export default app;