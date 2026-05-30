const App = {
  getTodayString() {
    return new Date().toISOString().split('T')[0];
  },

  getRandomQuestions(aspectNumber, count = 3) {
    const cached = Storage.getCurrentQuestions(aspectNumber);
    if (cached) return cached;

    const source = (typeof i18n !== 'undefined' && i18n.lang === 'en') ? QUESTIONS_EN : QUESTIONS;
    const aspect = source[aspectNumber];
    if (!aspect) return [];

    const shuffled = [...aspect.questions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(count, shuffled.length));

    Storage.saveCurrentQuestions(aspectNumber, selected);
    return selected;
  },

  calculateScore(aspectNumber, answers) {
    const questions = QUESTIONS[aspectNumber].questions;
    const maxPoints = answers.length * 4;
    const totalPoints = answers.reduce((sum, answer) => sum + answer.points, 0);
    return Math.round((totalPoints / maxPoints) * 100);
  },

  findLowestAspect(scores) {
    const map = {
      physiological: 1,
      behavioral: 2,
      social: 3,
      emotional: 4,
      cognitive: 5
    };
    let lowestKey = null;
    let lowestValue = 101;

    for (const [key, value] of Object.entries(scores)) {
      if (value > 0 && value < lowestValue) {
        lowestValue = value;
        lowestKey = key;
      }
    }

    if (!lowestKey) {
      lowestKey = Object.keys(scores)[0];
      lowestValue = scores[lowestKey];
    }

    return {
      key: lowestKey,
      index: map[lowestKey] || 1,
      name: RECOMMENDATIONS[map[lowestKey]]?.name || '',
      score: lowestValue
    };
  },

  getScoreColor(percentage) {
    if (percentage >= 70) return '#4CAF50';
    if (percentage >= 40) return '#FFC107';
    return '#F44336';
  },

  getMoodEmoji(mood) {
    const map = {
      'excellent': '😊',
      'good': '🙂',
      'neutral': '😐',
      'bad': '😔',
      'very_bad': '😢'
    };
    return map[mood] || '😐';
  },

  getMoodText(mood) {
    const ar = { 'excellent': 'ممتاز', 'good': 'جيد', 'neutral': 'متوسط', 'bad': 'سيء', 'very_bad': 'سيء جداً' };
    const en = { 'excellent': 'Excellent', 'good': 'Good', 'neutral': 'Neutral', 'bad': 'Bad', 'very_bad': 'Very Bad' };
    const map = (typeof i18n !== 'undefined' && i18n.lang === 'en') ? en : ar;
    return map[mood] || '';
  },

  startJourney() {
    Storage.set('journeyStarted', true);
    window.location.href = 'mood-check.html';
  },

  getThemeIcon(isDark) {
    if (isDark) {
      return '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="4.5" stroke="#5B8C85" stroke-width="1.3"/><path d="M9 1v2M9 15v2M1 9h2M15 9h2M3.5 3.5l1.5 1.5M13 13l1.5 1.5M3.5 14.5l1.5-1.5M13 5l1.5-1.5" stroke="#5B8C85" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/></svg>';
    }
    return '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="5" stroke="#5B8C85" stroke-width="1.3"/><path d="M9 1v2M9 15v2M1 9h2M15 9h2M3.5 3.5l1.5 1.5M13 13l1.5 1.5M3.5 14.5l1.5-1.5M13 5l1.5-1.5" stroke="#7A8B87" stroke-width="1.3" stroke-linecap="round" opacity="0.4"/></svg>';
  },

  toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    Storage.set('mindGuard_theme', isDark ? 'dark' : 'light');
    Array.from(document.querySelectorAll('.theme-toggle-btn')).forEach(el => {
      el.innerHTML = this.getThemeIcon(isDark);
    });
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? '#1A1C1E' : '#5B8C85');
  },

  initTheme() {
    const saved = Storage.get('mindGuard_theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      Array.from(document.querySelectorAll('.theme-toggle-btn')).forEach(el => {
        el.innerHTML = this.getThemeIcon(true);
      });
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#1A1C1E');
    } else {
      Array.from(document.querySelectorAll('.theme-toggle-btn')).forEach(el => {
        el.innerHTML = this.getThemeIcon(false);
      });
    }
  },

  navigate(url) {
    window.location.href = url;
  },

  goBack() {
    window.history.back();
  },

  initBottomNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.bottom-nav a');
    navItems.forEach(item => {
      const href = item.getAttribute('href');
      if (href === currentPage) {
        item.classList.add('active');
      }
      if (Storage.get('journeyStarted') && href === 'index.html') {
        item.style.display = 'none';
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.initTheme();
  const startBtn = document.getElementById('startJourneyBtn');
  if (startBtn) {
    startBtn.addEventListener('click', () => App.startJourney());
  }
  if (document.querySelector('.bottom-nav')) {
    App.initBottomNav();
  }
});
