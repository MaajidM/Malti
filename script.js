document.addEventListener('DOMContentLoaded', function() {
  // Example Quran data in JSON format
  const quranData = {
    "1. Al-Fatiha": {
      "1": {
        "arabic": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ",
        "maltese": "F'IsemAlla, Kollu Ħniena, il-Ħanin"
      },
      "2": {
        "arabic": "ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ",
        "maltese": "t-tifħirlil Alla, Sid il-ħolqien"
      }
    },
    "2. Al-Baqara": {
      "1": {
        "arabic": "الٓمٓ",
        "maltese": "Alif. Lam. Mim"
      }
    }
  };

  const surahSelect = document.getElementById('surahSelect');
  const contentDiv = document.getElementById('content');

  // Step 1: Populate the surah dropdown
  for (const surahName in quranData) {
    const option = document.createElement('option');
    option.value = surahName;
    option.textContent = surahName;
    surahSelect.appendChild(option);
  }

  // Step 2: Render Surah verses when selected
  function renderSurah(surahName) {
    const surah = quranData[surahName];
    contentDiv.innerHTML = '';  // Clear any existing content

    // Add each verse to the page
    for (const verse in surah) {
      const verseDiv = document.createElement('div');
      const arabicText = document.createElement('p');
      arabicText.innerHTML = `<strong>Arabic:</strong> ${surah[verse].arabic}`;
      const malteseText = document.createElement('p');
      malteseText.innerHTML = `<strong>Maltese Translation:</strong> ${surah[verse].maltese}`;

      verseDiv.appendChild(arabicText);
      verseDiv.appendChild(malteseText);
      contentDiv.appendChild(verseDiv);
    }
  }

  // Step 3: Handle when a Surah is selected
  surahSelect.addEventListener('change', function() {
    renderSurah(surahSelect.value);
  });

  // Render the first Surah initially
  renderSurah(surahSelect.value);
});
