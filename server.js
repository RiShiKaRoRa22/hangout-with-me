const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Force root route to serve gate.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'gate.html'));
});

// ✅ Serve all other static files
app.use(express.static(path.join(__dirname, 'public')));

app.post('/check-name', (req, res) => {
  const name = (req.body.name || '').trim().toLowerCase();
  if (name === 'divya pappu' || name === 'shravani gadgil') {
    res.json({ access: true });
  } else {
    res.json({ access: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
