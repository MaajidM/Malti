document.addEventListener('DOMContentLoaded', () => {
  const surahSelect = document.getElementById('surahSelect');
  const surahTitle = document.getElementById('surahTitle');
  const verseContainer = document.getElementById('verseContainer');
  const searchBar = document.getElementById('searchBar');

  let quranData = {};

  // Fetch Quran data
  fetch('quran.json')
    .then(response => response.json())
    .then(data => {
      quranData = data;
      populateSurahDropdown(quranData);
    });

  // Populate Surah dropdown
  function populateSurahDropdown(data) {
    for (const surah in data) {
      const option = document.createElement('option');
      option.value = surah;
      option.textContent = surah;
      surahSelect.appendChild(option);
    }
  }

  // Render selected Surah
  surahSelect.addEventListener('change', () => {
    const selectedSurah = surahSelect.value;
    renderSurah(selectedSurah, quranData[selectedSurah]);
  });

  // Render verses
  function renderSurah(surahName, verses) {
    surahTitle.textContent = surahName;
    verseContainer.innerHTML = '';

    for (const [verseNum, verse] of Object.entries(verses)) {
      const card = document.createElement('div');
      card.classList.add('verse-card');
      card.innerHTML = `<strong>Verse ${verseNum}</strong><p>${verse.maltese}</p>`;
      verseContainer.appendChild(card);
    }
  }

  // Search functionality
  searchBar.addEventListener('input', () => {
    const searchText = searchBar.value.toLowerCase();
    const selectedSurah = surahSelect.value;

    if (!selectedSurah) return;

    const verses = quranData[selectedSurah];
    const filtered = Object.entries(verses).filter(([_, verse]) =>
      verse.maltese.toLowerCase().includes(searchText)
    );

    verseContainer.innerHTML = '';
    filtered.forEach(([verseNum, verse]) => {
      const card = document.createElement('div');
      card.classList.add('verse-card');
      card.innerHTML = `<strong>Verse ${verseNum}</strong><p>${verse.maltese}</p>`;
      verseContainer.appendChild(card);
    });
  });
});
