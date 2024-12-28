// Load Quran data (replace this with the actual file or a fetch if needed)
const quranData = {
  "1. Al-Fatiha": {
    "1": {
      "arabic": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ",
      "maltese": "F'IsemAlla, Kollu Ħniena, il-Ħanin"
    },
    "2": {
      "arabic": "ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ",
      "maltese": "t-tifħirlil Alla, Sid il-ħolqien"
    },
    "3": {
      "arabic": "ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ",
      "maltese": "Kollu Ħniena, il-Ħanin"
    },
    "4": {
      "arabic": "مَٰلِكِ يَوۡمِ ٱلدِّينِ",
      "maltese": "is-Sultan ta' Jum il-Ħaqq"
    },
    "5": {
      "arabic": "إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ",
      "maltese": "Lilekingimu, u lilek nitolbu għajnuna"
    },
    "6": {
      "arabic": "ٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ",
      "maltese": "Mexxina fit-triq id-dritta"
    },
    "7": {
      "arabic": "صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ",
      "maltese": "triq dawk li xħett fuqhom il-grazzja tiegħek, u mhux ta' dawk li (gibdu) l-għadab (tiegħek) fuqhom, u lanqas tal- mitlufin"
    }
  },
  "2. Al-Baqara": {
    "1": {
      "arabic": "الٓمٓ",
      "maltese": "Alif. Lam. Mim"
    },
    "2": {
      "arabic": "ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ هُدٗى لِّلۡمُتَّقِينَ",
      "maltese": "Dan huwa l-Ktieb (il-Qoran), bla (ebda) dubju; fih tmexxija tajba għal dawk li jibzgħu minn Alla"
    }
  }
};

// Function to render Surah data on the page
function renderSurah(surahName, surah) {
  const surahSection = document.createElement('section');
  const surahTitle = document.createElement('h2');
  surahTitle.textContent = surahName;
  surahSection.appendChild(surahTitle);

  for (const verse in surah) {
    const verseDiv = document.createElement('div');
    const arabicText = document.createElement('p');
    arabicText.innerHTML = `<strong>Arabic:</strong> ${surah[verse].arabic}`;
    const malteseText = document.createElement('p');
    malteseText.innerHTML = `<strong>Maltese Translation:</strong> ${surah[verse].maltese}`;

    verseDiv.appendChild(arabicText);
    verseDiv.appendChild(malteseText);
    surahSection.appendChild(verseDiv);
  }

  document.getElementById('content').appendChild(surahSection);
}

// Loop through all Surahs and render them
for (const surahName in quranData) {
  renderSurah(surahName, quranData[surahName]);
}
