const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { analyzePdfWithGemini, analyzeMultiplePdfsWithGemini } = require('../utils/pdfGemini');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

router.post('/upload-pdf', upload.single('pdf'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded.' });
  }
  try {
    const geminiApiKey = process.env.GEMINI_API_KEY;
    const topics = await analyzePdfWithGemini(req.file.path, geminiApiKey);
    res.status(200).json({ message: 'PDF uploaded and analyzed successfully!', topics });
  } catch (err) {
    console.error('Error processing PDF or Gemini API:', err);
    res.status(500).json({ error: 'Failed to analyze PDF.' });
  }
});

// Multi-PDF upload and analysis
router.post('/upload-pdfs', upload.array('pdfs', 10), async (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: 'No files uploaded.' });
  }
  try {
    const geminiApiKey = process.env.GEMINI_API_KEY;
    const filePaths = req.files.map(f => f.path);
    const topics = await analyzeMultiplePdfsWithGemini(filePaths, geminiApiKey);
    res.status(200).json({ message: 'PDFs uploaded and analyzed successfully!', topics });
  } catch (err) {
    console.error('Error processing PDFs or Gemini API:', err);
    res.status(500).json({ error: 'Failed to analyze PDFs.' });
  }
});

module.exports = router;
