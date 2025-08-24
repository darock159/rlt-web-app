// netlify/functions/generate.js
exports.handler = async function(event) {
  try {
    const payload = JSON.parse(event.body || "{}");
    const prompt = payload.prompt || "";
    const mode = payload.mode || "default";

    // Replace this mock with a real model call later.
    const text = `Generated (${mode}):\n\n${prompt}`.trim();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        candidates: [
          { content: { parts: [{ text }] } }
        ]
      })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};
