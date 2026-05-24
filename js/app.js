const App = {
  getTodayString() {
    return new Date().toISOString().split('T')[0];
  },

  getRandomQuestions(aspectNumber, count = 3) {
    const cached = Storage.getCurrentQuestions(aspectNumber);
    if (cached) return cached;

    const aspect = QUESTIONS[aspectNumber];
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
      if (value < lowestValue) {
        lowestValue = value;
        lowestKey = key;
      }
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
    const map = {
      'excellent': 'ممتاز',
      'good': 'جيد',
      'neutral': 'متوسط',
      'bad': 'سيء',
      'very_bad': 'سيء جداً'
    };
    return map[mood] || '';
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
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.bottom-nav')) {
    App.initBottomNav();
  }
});
