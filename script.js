const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');
const wordCount = document.getElementById('wordCount');

textInput.addEventListener('input', () => {
  const text = textInput.value;

  // Character count
  charCount.textContent = text.length;

  // Word count (split by spaces and filter empty strings)
  const words = text.trim().split(/\s+/).filter(word => word.length > 0);
  wordCount.textContent = words.length;
});
