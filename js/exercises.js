(function () {
  var exTrans = {
    'exercise.coherence.inhale': { ar: 'شهيق', en: 'Inhale' },
    'exercise.coherence.exhale': { ar: 'زفير', en: 'Exhale' },
    'exercise.coherence.instruction': { ar: 'اتبع حركة الدائرة، تنفس ببطء', en: 'Follow the circle, breathe slowly' },
    'exercise.coherence.time': { ar: 'الوقت المتبقي: {time}', en: 'Time remaining: {time}' },
    'exercise.hrv.instruction': { ar: 'ركز على منطقة القلب وتنفس بانتظام', en: 'Focus on your heart area and breathe steadily' },
    'exercise.hrv.title': { ar: 'تماسك القلب (HRV)', en: 'Heart Coherence (HRV)' },
    'exercise.hrv.timeRemaining': { ar: 'متبقي: {time}', en: 'Remaining: {time}' },
    'exercise.hrv.done': { ar: 'أحسنت! أكملت تمرين HRV', en: 'Well done! HRV exercise complete' },
    'exercise.cooldown.locked': { ar: 'مقفل 24 ساعة', en: 'Locked 24h' },
    'exercise.cooldown.remaining': { ar: 'متبقي: {time}', en: 'Remaining: {time}' },
    'exercise.cooldown.unlocked': { ar: 'متاح', en: 'Available' },
    'exercise.btn.start': { ar: 'ابدأ التمرين', en: 'Start Exercise' },
    'exercise.btn.stop': { ar: 'إنهاء التمرين', en: 'End Exercise' },
    'exercise.btn.close': { ar: 'إغلاق', en: 'Close' }
  };
  if (typeof i18n !== 'undefined' && i18n.translations) {
    for (var k in exTrans) {
      if (!i18n.translations[k]) i18n.translations[k] = exTrans[k];
    }
  }
})();

var Exercises = {
  _timer: null,
  _interval: null,
  _startTime: null,

  // ----- Heart Coherence Breathing (6 breaths/min: 5s in, 5s out) -----

  startCoherenceBreathing: function (opts) {
    opts = opts || {};
    var container = opts.container || document.getElementById('coherenceContainer');
    var onComplete = opts.onComplete || function () {};
    var totalMinutes = opts.duration || 3;
    var totalCycles = totalMinutes * 6;

    if (!container) return;

    container.innerHTML = '';
    container.style.position = 'relative';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.minHeight = '320px';

    var circle = document.createElement('div');
    circle.id = 'coherenceCircle';
    circle.style.cssText = 'width:120px;height:120px;border-radius:50%;background:radial-gradient(circle at 30% 30%, #A8D5BA, #5B8C85);transition:transform 5s ease-in-out, box-shadow 5s ease-in-out;box-shadow:0 0 40px rgba(91,140,133,0.3);margin:20px auto;';

    var animContainer = document.createElement('div');
    animContainer.style.cssText = 'width:200px;height:200px;display:flex;align-items:center;justify-content:center;margin:10px 0;position:relative;';

    var heartIcon = document.createElement('div');
    heartIcon.innerHTML = '<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M20 34s-12-8-12-16c0-4.4 3.6-8 8-8 2.6 0 4.9 1.2 6.4 3.1" stroke="#5B8C85" stroke-width="2" stroke-linecap="round" fill="none"/><path d="M20 34s12-8 12-16c0-4.4-3.6-8-8-8-2.6 0-4.9 1.2-6.4 3.1" stroke="#A8D5BA" stroke-width="2" stroke-linecap="round" fill="rgba(168,213,186,0.15)"/></svg>';
    heartIcon.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;opacity:0.7;';

    var label = document.createElement('div');
    label.id = 'coherenceLabel';
    label.style.cssText = 'font-size:1.1rem;color:var(--text-primary,#2C3E50);margin:8px 0;font-weight:500;text-align:center;font-family:Tajawal,sans-serif;';
    label.textContent = i18n && i18n.t ? i18n.t('exercise.coherence.inhale') : 'شهيق';

    var timerDisplay = document.createElement('div');
    timerDisplay.id = 'coherenceTimer';
    timerDisplay.style.cssText = 'font-size:0.85rem;color:var(--text-secondary,#7A8B87);margin:4px 0;font-family:Tajawal,sans-serif;';
    var totalSec = totalMinutes * 60;
    var mm = String(Math.floor(totalSec / 60)).padStart(2, '0');
    var ss = String(totalSec % 60).padStart(2, '0');
    timerDisplay.textContent = mm + ':' + ss;

    var stopBtn = document.createElement('button');
    stopBtn.textContent = i18n && i18n.t ? i18n.t('exercise.btn.stop') : 'إنهاء التمرين';
    stopBtn.className = 'btn btn-secondary';
    stopBtn.style.cssText = 'margin-top:12px;';
    stopBtn.addEventListener('click', function () {
      Exercises.stopCoherenceBreathing();
      if (onComplete) onComplete();
    });

    animContainer.appendChild(circle);
    animContainer.appendChild(heartIcon);
    container.appendChild(animContainer);
    container.appendChild(label);
    container.appendChild(timerDisplay);
    container.appendChild(stopBtn);

    var self = this;
    var state = 'inhale';
    var cycle = 0;
    this._startTime = Date.now();

    function updateTimer() {
      if (!self._startTime) return;
      var elapsed = Math.floor((Date.now() - self._startTime) / 1000);
      var remaining = Math.max(0, totalSec - elapsed);
      var m = String(Math.floor(remaining / 60)).padStart(2, '0');
      var s = String(remaining % 60).padStart(2, '0');
      timerDisplay.textContent = m + ':' + s;
      if (remaining <= 0) {
        self.stopCoherenceBreathing();
        if (onComplete) onComplete();
      }
    }

    function phaseCycle() {
      if (self._stopped) return;
      if (cycle >= totalCycles) {
        self.stopCoherenceBreathing();
        if (onComplete) onComplete();
        return;
      }
      if (state === 'inhale') {
        circle.style.transform = 'scale(1.6)';
        circle.style.boxShadow = '0 0 60px rgba(91,140,133,0.5)';
        label.textContent = i18n && i18n.t ? i18n.t('exercise.coherence.inhale') : 'شهيق';
        state = 'exhale';
      } else {
        circle.style.transform = 'scale(1)';
        circle.style.boxShadow = '0 0 30px rgba(168,213,186,0.3)';
        label.textContent = i18n && i18n.t ? i18n.t('exercise.coherence.exhale') : 'زفير';
        state = 'inhale';
        cycle++;
      }
      self._timer = setTimeout(phaseCycle, 5000);
    }

    setTimeout(function () {
      circle.style.transform = 'scale(1.6)';
      circle.style.boxShadow = '0 0 60px rgba(91,140,133,0.5)';
      label.textContent = i18n && i18n.t ? i18n.t('exercise.coherence.inhale') : 'شهيق';
      state = 'exhale';
    }, 100);

    self._timer = setTimeout(phaseCycle, 5000);
    self._interval = setInterval(updateTimer, 1000);
  },

  stopCoherenceBreathing: function () {
    this._stopped = true;
    if (this._timer) { clearTimeout(this._timer); this._timer = null; }
    if (this._interval) { clearInterval(this._interval); this._interval = null; }
    this._startTime = null;
    var circle = document.getElementById('coherenceCircle');
    if (circle) {
      circle.style.transform = 'scale(1)';
      circle.style.boxShadow = '0 0 20px rgba(91,140,133,0.2)';
    }
    var label = document.getElementById('coherenceLabel');
    if (label) {
      label.textContent = i18n && i18n.t ? i18n.t('exercise.hrv.done') : 'أحسنت!';
    }
  },

  // ----- Heart Coherence HRV (3-minute focus exercise) -----

  startHRV: function (opts) {
    opts = opts || {};
    var container = opts.container || document.getElementById('hrvContainer');
    var onComplete = opts.onComplete || function () {};
    var duration = opts.duration || 180;

    if (!container) return;

    container.innerHTML = '';
    container.style.cssText = 'display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:300px;padding:20px;';

    var heartWrapper = document.createElement('div');
    heartWrapper.style.cssText = 'position:relative;width:120px;height:120px;margin:10px 0;';

    var pulseRing = document.createElement('div');
    pulseRing.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:80px;height:80px;border-radius:50%;background:rgba(91,140,133,0.15);animation:hrvPulse 4s ease-in-out infinite;';

    var heartSvg = document.createElement('div');
    heartSvg.innerHTML = '<svg width="60" height="60" viewBox="0 0 60 60" fill="none"><path d="M30 52s-18-12-18-24c0-6.6 5.4-12 12-12 3.9 0 7.4 1.8 9.6 4.7" stroke="#5B8C85" stroke-width="2.5" stroke-linecap="round" fill="none"/><path d="M30 52s18-12 18-24c0-6.6-5.4-12-12-12-3.9 0-7.4 1.8-9.6 4.7" stroke="#A8D5BA" stroke-width="2.5" stroke-linecap="round" fill="rgba(168,213,186,0.2)"/><circle cx="30" cy="22" r="3" fill="#5B8C85" opacity="0.4"/></svg>';
    heartSvg.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1;';

    heartWrapper.appendChild(pulseRing);
    heartWrapper.appendChild(heartSvg);

    var instruction = document.createElement('div');
    instruction.style.cssText = 'font-size:1.1rem;color:var(--text-primary,#2C3E50);text-align:center;margin:16px 0;max-width:280px;line-height:1.6;font-family:Tajawal,sans-serif;';
    instruction.textContent = i18n && i18n.t ? i18n.t('exercise.hrv.instruction') : 'ركز على منطقة القلب وتنفس بانتظام';

    var timerDisplay = document.createElement('div');
    timerDisplay.id = 'hrvTimer';
    timerDisplay.style.cssText = 'font-size:1.3rem;font-weight:600;color:var(--accent,#5B8C85);margin:8px 0;font-family:Tajawal,sans-serif;direction:ltr;';
    var m = String(Math.floor(duration / 60)).padStart(2, '0');
    var s = String(duration % 60).padStart(2, '0');
    timerDisplay.textContent = m + ':' + s;

    var stopBtn = document.createElement('button');
    stopBtn.textContent = i18n && i18n.t ? i18n.t('exercise.btn.stop') : 'إنهاء التمرين';
    stopBtn.className = 'btn btn-secondary';
    stopBtn.addEventListener('click', function () {
      Exercises.stopHRV();
      if (onComplete) onComplete();
    });

    container.appendChild(heartWrapper);
    container.appendChild(instruction);
    container.appendChild(timerDisplay);
    container.appendChild(stopBtn);

    var self = this;
    var remaining = duration;
    this._startTime = Date.now();
    this._hrvActive = true;

    this._interval = setInterval(function () {
      remaining--;
      var mm = String(Math.floor(remaining / 60)).padStart(2, '0');
      var ss = String(remaining % 60).padStart(2, '0');
      timerDisplay.textContent = mm + ':' + ss;
      if (remaining <= 0) {
        self.stopHRV();
        if (onComplete) onComplete();
      }
    }, 1000);
  },

  stopHRV: function () {
    this._hrvActive = false;
    if (this._interval) { clearInterval(this._interval); this._interval = null; }
    this._startTime = null;
    var timer = document.getElementById('hrvTimer');
    if (timer) {
      timer.textContent = i18n && i18n.t ? i18n.t('exercise.hrv.done') : 'أحسنت!';
    }
  },

  // ----- 24-Hour Cooldown Logic -----

  lockExercise: function (aspect) {
    try {
      localStorage.setItem('cooldown_' + aspect, String(Date.now()));
    } catch (e) {}
  },

  isExerciseLocked: function (aspect) {
    try {
      var saved = localStorage.getItem('cooldown_' + aspect);
      if (!saved) return false;
      var elapsed = Date.now() - parseInt(saved, 10);
      return elapsed < 24 * 60 * 60 * 1000;
    } catch (e) { return false; }
  },

  getCooldownRemaining: function (aspect) {
    try {
      var saved = localStorage.getItem('cooldown_' + aspect);
      if (!saved) return 0;
      var elapsed = Date.now() - parseInt(saved, 10);
      var remaining = 24 * 60 * 60 * 1000 - elapsed;
      return Math.max(0, remaining);
    } catch (e) { return 0; }
  },

  getCooldownTimeString: function (aspect) {
    var ms = this.getCooldownRemaining(aspect);
    if (ms <= 0) return '';
    var hours = Math.floor(ms / 3600000);
    var mins = Math.floor((ms % 3600000) / 60000);
    if (hours > 0) return hours + 'h ' + mins + 'm';
    return mins + 'm';
  },

  renderCooldownBadge: function (aspect, element) {
    if (!element) return;
    if (this.isExerciseLocked(aspect)) {
      var remaining = this.getCooldownTimeString(aspect);
      element.innerHTML = '';
      var badge = document.createElement('span');
      badge.className = 'cooldown-badge';
      badge.textContent = (i18n && i18n.t ? i18n.t('exercise.cooldown.locked') : 'مقفل 24 ساعة') + (remaining ? ' (' + remaining + ')' : '');
      element.appendChild(badge);
      element.style.pointerEvents = 'none';
      element.style.opacity = '0.6';
    } else {
      element.style.pointerEvents = '';
      element.style.opacity = '';
    }
  }
};
