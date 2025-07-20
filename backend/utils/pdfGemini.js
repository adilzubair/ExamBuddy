const fs = require('fs');
const pdfParse = require('pdf-parse');
const axios = require('axios');

const detailedPrompt = (pdfText, isMultiple = false) => `You are an expert exam analyst. Your ONLY task is to output a clean, concise list of the TOP 10 most important topics for students to focus on for their upcoming exams, based on the following previous year exam paper${isMultiple ? 's' : ''}.

STRICT INSTRUCTIONS:
- Only output the TOP 10 most important topics.
- Do NOT include any introductory text, breakdowns, section headers, recommendations, or explanations about your process.
- Do NOT include any observations, module names, or summaries.
- Output ONLY a Markdown bullet list of topics.
- For each topic, use this format: \n- **Topic Name**: Short explanation here.
- Add a blank line between each topic for readability.
- Do not group, categorize, or add any extra formatting except as described above.
- Your response should ONLY be the list of topics, nothing else.

${isMultiple ? 'Combined exam papers text:' : 'Exam paper text:'}
${pdfText}`;

function cleanTopicsText(topicsText) {
  // Remove excessive asterisks and whitespace, then format as Markdown
  let points = topicsText.split(/(?:^|\n)[•*\-\u2022\u2023\u25E6\u2043]+\s*/gm)
    .map(p => p.trim())
    .filter(p => p.length > 0);

  // Fallback: split by line breaks or periods if Gemini ignored bullets
  if (points.length <= 1) {
    points = topicsText.split(/\n|\r|\.\s+/).map(p => p.trim()).filter(p => p.length > 0);
  }

  // Format each point as a Markdown bullet with bolded topic name if possible
  return points.map(point => {
    // Replace any **text** with bolded Markdown (remove asterisks)
    let formatted = point.replace(/\*\*(.*?)\*\*/g, (_, txt) => `**${txt.trim()}**`);
    // Try to split topic name and explanation by colon or dash
    const match = formatted.match(/^(.*?)(:|\-|–)\s*(.*)$/);
    if (match) {
      const topic = match[1].replace(/\*{2,}/g, '').trim();
      const explanation = match[3].replace(/\*{2,}/g, '').trim();
      return `- **${topic}**: ${explanation}`;
    } else {
      // If no colon/dash, just bold the whole point
      return `- ${formatted.replace(/\*{2,}/g, '').trim()}`;
    }
  }).join('\n\n'); // Blank line between each topic
}

async function analyzePdfWithGemini(pdfFilePath, geminiApiKey) {
  // Read and parse PDF
  const pdfBuffer = fs.readFileSync(pdfFilePath);
  const data = await pdfParse(pdfBuffer);
  const pdfText = data.text;

  // Call Gemini API using correct endpoint and header
  const geminiResponse = await axios.post(
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
    {
      contents: [{ parts: [{ text: detailedPrompt(pdfText, false) }] }]
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': geminiApiKey
      }
    }
  );

  // Extract topics from Gemini response
  const rawTopics = geminiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No topics found.';
  console.log('Gemini raw response:', rawTopics); // Print Gemini response to terminal
  return cleanTopicsText(rawTopics);
}

async function analyzeMultiplePdfsWithGemini(pdfFilePaths, geminiApiKey) {
  let combinedText = '';
  for (const filePath of pdfFilePaths) {
    const pdfBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(pdfBuffer);
    combinedText += data.text + '\n';
  }
  // Call Gemini API with combined text
  const geminiResponse = await axios.post(
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
    {
      contents: [{ parts: [{ text: detailedPrompt(combinedText, true) }] }]
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': geminiApiKey
      }
    }
  );
  const rawTopics = geminiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No topics found.';
  console.log('Gemini raw response:', rawTopics); // Print Gemini response to terminal
  return cleanTopicsText(rawTopics);
}

module.exports = { analyzePdfWithGemini, analyzeMultiplePdfsWithGemini };
