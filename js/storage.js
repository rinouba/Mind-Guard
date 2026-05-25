const Storage = {
  get(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  },

  remove(key) {
    localStorage.removeItem(key);
  },

  getTodayString() {
    return new Date().toISOString().split('T')[0];
  },

  saveMood(mood) {
    this.set('userMood', {
      date: this.getTodayString(),
      mood: mood
    });
  },

  getTodaysMood() {
    const mood = this.get('userMood');
    if (mood && mood.date === this.getTodayString()) {
      return mood.mood;
    }
    return null;
  },

  saveAssessment(scores, lowestAspect) {
    const assessments = this.get('assessments') || [];
    const assessment = {
      id: Date.now(),
      date: this.getTodayString(),
      timestamp: Date.now(),
      scores: scores,
      lowestAspect: lowestAspect
    };
    assessments.push(assessment);
    this.set('assessments', assessments);
    this.set('lastAssessmentDate', this.getTodayString());
    return assessment;
  },

  getAssessments() {
    return this.get('assessments') || [];
  },

  getRecentAssessments(count = 10) {
    const all = this.getAssessments();
    return all.slice(-count);
  },

  getLastWeekAssessments() {
    const all = this.getAssessments();
    const weekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
    return all.filter(a => a.timestamp > weekAgo);
  },

  getAverages() {
    const assessments = this.getLastWeekAssessments();
    if (assessments.length === 0) return null;

    const totals = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    assessments.forEach(a => {
      const scores = a.scores;
      if (scores.physiological !== undefined) { totals[1] += scores.physiological; counts[1]++; }
      if (scores.behavioral !== undefined) { totals[2] += scores.behavioral; counts[2]++; }
      if (scores.social !== undefined) { totals[3] += scores.social; counts[3]++; }
      if (scores.emotional !== undefined) { totals[4] += scores.emotional; counts[4]++; }
      if (scores.cognitive !== undefined) { totals[5] += scores.cognitive; counts[5]++; }
    });

    const averages = {};
    let sum = 0, totalCount = 0;
    const keys = { 1: 'physiological', 2: 'behavioral', 3: 'social', 4: 'emotional', 5: 'cognitive' };
    const enNames = { 1: 'Physiological', 2: 'Behavioral', 3: 'Social', 4: 'Emotional', 5: 'Cognitive' };
    const arNames = { 1: 'الفيزيولوجي', 2: 'السلوكي', 3: 'الاجتماعي', 4: 'الانفعالي', 5: 'المعرفي' };
    const useEn = typeof i18n !== 'undefined' && i18n.lang === 'en';

    for (let i = 1; i <= 5; i++) {
      if (counts[i] > 0) {
        averages[keys[i]] = Math.round(totals[i] / counts[i]);
        sum += totals[i];
        totalCount += counts[i];
      }
    }

    const bestKey = Object.keys(averages).reduce((a, b) => averages[a] > averages[b] ? a : b);
    const worstKey = Object.keys(averages).reduce((a, b) => averages[a] < averages[b] ? a : b);
    const bestAspectIndex = Object.keys(keys).find(k => keys[k] === bestKey);
    const worstAspectIndex = Object.keys(keys).find(k => keys[k] === worstKey);

    return {
      averages,
      overall: totalCount > 0 ? Math.round(sum / totalCount) : 0,
      best: { key: bestKey, name: useEn ? enNames[bestAspectIndex] : arNames[bestAspectIndex], value: averages[bestKey] },
      worst: { key: worstKey, name: useEn ? enNames[worstAspectIndex] : arNames[worstAspectIndex], value: averages[worstKey] }
    };
  },

  saveJournalEntry(content) {
    const journal = this.get('journal') || [];
    journal.push({
      id: Date.now(),
      date: this.getTodayString(),
      timestamp: Date.now(),
      content: content
    });
    this.set('journal', journal);
  },

  getJournalEntries() {
    return this.get('journal') || [];
  },

  saveCBTAnalysis(record) {
    const records = this.get('cbtRecords') || [];
    records.push({
      id: Date.now(),
      date: this.getTodayString(),
      timestamp: Date.now(),
      ...record
    });
    this.set('cbtRecords', records);
  },

  getCBTRecords() {
    return this.get('cbtRecords') || [];
  },

  saveCurrentQuestions(aspect, questions) {
    this.set(`currentQuestions_${aspect}`, {
      date: this.getTodayString(),
      questions: questions
    });
  },

  getCurrentQuestions(aspect) {
    const data = this.get(`currentQuestions_${aspect}`);
    if (data && data.date === this.getTodayString()) {
      return data.questions;
    }
    return null;
  },

  hasCompletedToday() {
    return this.get('lastAssessmentDate') === this.getTodayString();
  },

  clearAll() {
    const msg = (typeof i18n !== 'undefined') ? i18n.t('confirm.clear') : 'هل أنت متأكد من مسح جميع البيانات؟';
    if (confirm(msg)) {
      const keys = ['assessments', 'lastAssessmentDate', 'tempScores', 'currentQuestions_1', 'currentQuestions_2', 'currentQuestions_3', 'currentQuestions_4', 'currentQuestions_5', 'userMood', 'journal', 'cbtRecords'];
      keys.forEach(k => {
        if (localStorage.getItem(k) !== null) localStorage.removeItem(k);
      });
      window.location.reload();
    }
  },

  exportData() {
    const data = {
      assessments: this.getAssessments(),
      journal: this.getJournalEntries(),
      cbtRecords: this.getCBTRecords(),
      mood: this.get('userMood')
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mind-guard-data-${this.getTodayString()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
};
