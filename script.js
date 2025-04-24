function analyze() {
  const text = document.getElementById("text").value.toLowerCase();
  const keyword = document.getElementById("keyword").value.toLowerCase().trim();
  const resultBox = document.getElementById("result");

  if (!text || !keyword) {
    resultBox.innerHTML = "Please enter both content and keyword.";
    return;
  }

  const words = text.match(/\b\w+\b/g) || [];
  const totalWords = words.length;

  const keywordRegex = new RegExp("\\b" + keyword.replace(/\s+/g, '\\s+') + "\\b", "gi");
  const keywordMatches = text.match(keywordRegex) || [];
  const keywordCount = keywordMatches.length;

  const density = ((keywordCount / totalWords) * 100).toFixed(2);

  resultBox.innerHTML = `
    <strong>Total Words:</strong> ${totalWords}<br>
    <strong>Keyword:</strong> "${keyword}"<br>
    <strong>Occurrences:</strong> ${keywordCount}<br>
    <strong>Density:</strong> ${density}%<br>
  `;
}