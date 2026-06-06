(function () {
  var vitalsTrans = {
    'vitals.title': { ar: 'المؤشرات الحيوية اليومية', en: 'Daily Vital Signs' },
    'vitals.subtitle': { ar: 'سجل مؤشراتك الحيوية لليوم', en: 'Record your vital signs for today' },
    'vitals.heart.label': { ar: 'معدل نبض القلب', en: 'Heart Rate' },
    'vitals.heart.unit': { ar: 'نبضة/دقيقة', en: 'bpm' },
    'vitals.heart.placeholder': { ar: 'مثلاً 72', en: 'e.g. 72' },
    'vitals.respiration.label': { ar: 'معدل التنفس', en: 'Respiration Rate' },
    'vitals.respiration.unit': { ar: 'نفس/دقيقة', en: 'breaths/min' },
    'vitals.respiration.placeholder': { ar: 'مثلاً 16', en: 'e.g. 16' },
    'vitals.sleep.label': { ar: 'ساعات النوم', en: 'Sleep Hours' },
    'vitals.sleep.unit': { ar: 'ساعة', en: 'hours' },
    'vitals.sleep.placeholder': { ar: 'مثلاً 7.5', en: 'e.g. 7.5' },
    'vitals.save': { ar: 'حفظ المؤشرات', en: 'Save Vitals' },
    'vitals.skip': { ar: 'تخطي', en: 'Skip' },
    'vitals.saved': { ar: 'تم حفظ المؤشرات الحيوية', en: 'Vital signs saved' },
    'vitals.error': { ar: 'يرجى إدخال قيم صحيحة', en: 'Please enter valid values' },
    'vitals.range.heart': { ar: '60-100', en: '60-100' },
    'vitals.range.respiration': { ar: '12-20', en: '12-20' },
    'vitals.range.sleep': { ar: '7-9', en: '7-9' },
    'dashboard.alert.title': { ar: 'المؤشرات الحيوية', en: 'Vital Signs' },
    'dashboard.alert.normal': { ar: 'مؤشراتك الحيوية مستقرة اليوم', en: 'Your vitals are stable today' },
    'dashboard.alert.abnormal': { ar: 'انتباه: {value} خارج النطاق الطبيعي ({range})', en: 'Attention: {value} is outside normal range ({range})' },
    'dashboard.alert.missing': { ar: 'لم تسجل مؤشراتك اليوم', en: 'Vitals not recorded today' },
    'dashboard.alert.enter': { ar: 'سجل الآن', en: 'Enter Now' },
    'dashboard.alert.heart': { ar: 'نبض القلب', en: 'Heart Rate' },
    'dashboard.alert.respiration': { ar: 'معدل التنفس', en: 'Respiration' },
    'dashboard.alert.sleep': { ar: 'ساعات النوم', en: 'Sleep' }
  };
  if (typeof i18n !== 'undefined' && i18n.translations) {
    for (var k in vitalsTrans) {
      if (!i18n.translations[k]) i18n.translations[k] = vitalsTrans[k];
    }
  }
})();

var Vitals = {
  NORMAL_RANGES: {
    heart: { min: 60, max: 100 },
    respiration: { min: 12, max: 20 },
    sleep: { min: 7, max: 9 }
  },

  // ----- Storage -----

  save: function (heartRate, respiration, sleep) {
    var history = this.getHistory();
    var today = this._today();
    history.push({
      date: today,
      timestamp: Date.now(),
      heartRate: Number(heartRate),
      respiration: Number(respiration),
      sleep: Number(sleep)
    });
    try { localStorage.setItem('vitals_history', JSON.stringify(history)); } catch (e) {}
    try { localStorage.setItem('vitals_last_date', today); } catch (e) {}
  },

  getHistory: function () {
    try {
      var data = localStorage.getItem('vitals_history');
      return data ? JSON.parse(data) : [];
    } catch (e) { return []; }
  },

  getToday: function () {
    var today = this._today();
    var history = this.getHistory();
    for (var i = history.length - 1; i >= 0; i--) {
      if (history[i].date === today) return history[i];
    }
    return null;
  },

  hasTodaysEntry: function () {
    return this.getToday() !== null;
  },

  _today: function () {
    return new Date().toISOString().split('T')[0];
  },

  // ----- Alert Status -----

  getAlertStatus: function (vitals) {
    if (!vitals) return { status: 'missing', message: 'dashboard.alert.missing', abnormal: [] };
    var abnormal = [];
    var hr = vitals.heartRate;
    var rr = vitals.respiration;
    var sl = vitals.sleep;
    var ranges = this.NORMAL_RANGES;

    if (hr < ranges.heart.min || hr > ranges.heart.max) {
      abnormal.push({ key: 'heart', value: hr, range: ranges.heart.min + '-' + ranges.heart.max, label: 'dashboard.alert.heart' });
    }
    if (rr < ranges.respiration.min || rr > ranges.respiration.max) {
      abnormal.push({ key: 'respiration', value: rr, range: ranges.respiration.min + '-' + ranges.respiration.max, label: 'dashboard.alert.respiration' });
    }
    if (sl < ranges.sleep.min || sl > ranges.sleep.max) {
      abnormal.push({ key: 'sleep', value: sl, range: ranges.sleep.min + '-' + ranges.sleep.max, label: 'dashboard.alert.sleep' });
    }

    if (abnormal.length === 0) {
      return { status: 'normal', message: 'dashboard.alert.normal', abnormal: [] };
    }
    return { status: 'abnormal', message: 'dashboard.alert.abnormal', abnormal: abnormal };
  },

  // ----- Dashboard Alert Card -----

  createDashboardCard: function (containerId, hideEnterButton) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var existing = document.getElementById('vitalsDashboardCard');
    if (existing) existing.remove();

    var section = document.createElement('div');
    section.id = 'vitalsDashboardCard';
    section.className = 'vitals-section';

    var today = this.getToday();
    var status = this.getAlertStatus(today);

    // Header
    var header = document.createElement('div');
    header.className = 'vitals-section-header';

    var iconWrap = document.createElement('div');
    iconWrap.className = 'vitals-section-icon';
    iconWrap.innerHTML = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9h3l2.5-7.5L11 16.5 13.5 9H16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    var title = document.createElement('span');
    title.className = 'vitals-section-title';
    title.textContent = i18n && i18n.t ? i18n.t('dashboard.alert.title') : 'المؤشرات الحيوية';

    var badge = document.createElement('span');
    badge.className = 'vitals-section-badge';
    if (status.status === 'normal') { badge.className += ' vitals-badge-normal'; badge.textContent = 'مستقر'; }
    else if (status.status === 'abnormal') { badge.className += ' vitals-badge-abnormal'; badge.textContent = 'محتاج انتباه'; }
    else { badge.className += ' vitals-badge-missing'; badge.textContent = 'غير مسجل'; }

    header.appendChild(iconWrap);
    header.appendChild(title);
    header.appendChild(badge);
    section.appendChild(header);

    // Body
    var body = document.createElement('div');

    if (status.status === 'missing') {
      var msg = document.createElement('div');
      msg.className = 'vitals-status-msg vitals-status-missing';
      msg.innerHTML = '<span style="display:inline-flex;vertical-align:middle;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 5h6M12 12v4M12 8v.01" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></span> ' + (i18n && i18n.t ? i18n.t('dashboard.alert.missing') : 'لم تسجل مؤشراتك اليوم');
      body.appendChild(msg);

      if (!hideEnterButton) {
        var enterBtn = document.createElement('button');
        enterBtn.className = 'vitals-enter-btn';
        enterBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg> ' + (i18n && i18n.t ? i18n.t('dashboard.alert.enter') : 'سجل المؤشرات الحيوية');
        enterBtn.addEventListener('click', function () {
          Vitals.showModal();
        });
        body.appendChild(enterBtn);
      }
    } else {
      var statusMsg = document.createElement('div');
      statusMsg.className = 'vitals-status-msg';
      var iconHtml, msgHtml;
      if (status.status === 'normal') {
        statusMsg.className += ' vitals-status-normal';
        iconHtml = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.6"/><path d="M8 12l3 3 5-5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        msgHtml = '<span>' + (i18n && i18n.t ? i18n.t('dashboard.alert.normal') : 'مؤشراتك الحيوية مستقرة اليوم') + '</span>';
      } else {
        statusMsg.className += ' vitals-status-abnormal';
        iconHtml = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3L3 20h18L12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="rgba(232,168,56,0.08)"/><path d="M12 10v4M12 17v1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';
        var abn = status.abnormal || [];
        var msgs = [];
        for (var a = 0; a < abn.length; a++) {
          var item = abn[a];
          var label = i18n && i18n.t ? i18n.t(item.label) : item.label;
          var tpl = i18n && i18n.t ? i18n.t('dashboard.alert.abnormal') : 'انتباه: {value} خارج النطاق ({range})';
          var line = tpl.replace('{value}', item.value).replace('{range}', item.range);
          msgs.push('<div style="font-size:0.8rem;margin-top:2px;">' + label + ': ' + line + '</div>');
        }
        msgHtml = msgs.join('');
      }
      statusMsg.innerHTML = '<span style="display:inline-flex;vertical-align:middle;">' + iconHtml + '</span> ' + msgHtml;
      body.appendChild(statusMsg);

      // Mini cards grid
      var grid = document.createElement('div');
      grid.className = 'vitals-cards-grid';

      var ranges = this.NORMAL_RANGES;
      var svgs = {
        heart: '<svg width="26" height="26" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="13" fill="currentColor" opacity="0.08"/><path d="M4 14h5l3-8 4 12 2.5-7.5L21 14h3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        respiration: '<svg width="26" height="26" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="13" fill="currentColor" opacity="0.08"/><path d="M8 14c0-4 2-7 3-8M20 14c0-4-2-7-3-8M8 14c0 4 2 7 3 8M20 14c0 4-2 7-3 8M14 6v9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
        sleep: '<svg width="26" height="26" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="13" fill="currentColor" opacity="0.08"/><path d="M18 9c-4 0-7 3-7 7s3 7 7 7c-3 0-5-2-5-5s2-5 5-5c1 0 2 0 3 1-1-2-2-3-3-5z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="8" r="1.2" fill="currentColor"/></svg>'
      };
      var items = [
        { key: 'heartRate', label: 'vitals.heart.label', svg: svgs.heart, unitKey: 'vitals.heart.unit', val: today.heartRate, range: ranges.heart },
        { key: 'respiration', label: 'vitals.respiration.label', svg: svgs.respiration, unitKey: 'vitals.respiration.unit', val: today.respiration, range: ranges.respiration },
        { key: 'sleep', label: 'vitals.sleep.label', svg: svgs.sleep, unitKey: 'vitals.sleep.unit', val: today.sleep, range: ranges.sleep }
      ];

      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var mini = document.createElement('div');
        var isAbnormal = item.val < item.range.min || item.val > item.range.max;
        mini.className = 'vitals-mini-card' + (isAbnormal ? ' vitals-mini-abnormal' : ' vitals-mini-normal');

        var iconEl = document.createElement('div');
        iconEl.className = 'vitals-mini-card-icon';
        iconEl.innerHTML = item.svg;

        var valEl = document.createElement('div');
        valEl.className = 'vitals-mini-card-value';
        var unitText = i18n && i18n.t ? i18n.t(item.unitKey) : item.unitKey;
        valEl.textContent = item.val;

        var unitEl = document.createElement('div');
        unitEl.className = 'vitals-mini-card-unit';
        unitEl.textContent = unitText;

        var labelEl = document.createElement('div');
        labelEl.className = 'vitals-mini-card-label';
        labelEl.textContent = i18n && i18n.t ? i18n.t(item.label) : item.label;

        mini.appendChild(iconEl);
        mini.appendChild(valEl);
        mini.appendChild(unitEl);
        mini.appendChild(labelEl);
        grid.appendChild(mini);
      }

      body.appendChild(grid);

      // Re-enter button
      if (hideEnterButton) { /* no re-enter button in read-only mode */ }
      else { var reBtn = document.createElement('button');
      reBtn.className = 'vitals-enter-btn';
      reBtn.style.marginTop = '12px';
      reBtn.style.padding = '8px';
      reBtn.style.fontSize = '0.8rem';
      reBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg> ' + (i18n && i18n.t ? i18n.t('dashboard.alert.enter') : 'تحديث المؤشرات');
      reBtn.addEventListener('click', function () {
        Vitals.showModal();
      });
      body.appendChild(reBtn);
      }
    }

    section.appendChild(body);
    container.appendChild(section);
  },

  // ----- Vitals Entry Modal -----

  showModal: function (onSaveCallback) {
    var existing = document.getElementById('vitalsModal');
    if (existing) existing.remove();

    var overlay = document.createElement('div');
    overlay.id = 'vitalsModal';
    overlay.className = 'vitals-modal-overlay';

    var modal = document.createElement('div');
    modal.className = 'vitals-modal';

    var title = document.createElement('h2');
    title.className = 'vitals-modal-title';
    title.textContent = i18n && i18n.t ? i18n.t('vitals.title') : 'المؤشرات الحيوية اليومية';
    modal.appendChild(title);

    var subtitle = document.createElement('p');
    subtitle.className = 'vitals-modal-subtitle';
    subtitle.textContent = i18n && i18n.t ? i18n.t('vitals.subtitle') : 'سجل مؤشراتك الحيوية لليوم';
    modal.appendChild(subtitle);

    var fields = [
      { id: 'vitalsHeart', label: 'vitals.heart.label', unit: 'vitals.heart.unit', placeholder: 'vitals.heart.placeholder', min: 30, max: 250 },
      { id: 'vitalsRespiration', label: 'vitals.respiration.label', unit: 'vitals.respiration.unit', placeholder: 'vitals.respiration.placeholder', min: 4, max: 60 },
      { id: 'vitalsSleep', label: 'vitals.sleep.label', unit: 'vitals.sleep.unit', placeholder: 'vitals.sleep.placeholder', min: 0, max: 24 }
    ];

    var that = this;

    for (var i = 0; i < fields.length; i++) {
      var f = fields[i];
      var group = document.createElement('div');
      group.className = 'vitals-input-group';

      var lbl = document.createElement('label');
      lbl.className = 'vitals-input-label';
      lbl.setAttribute('for', f.id);
      lbl.textContent = (i18n && i18n.t ? i18n.t(f.label) : f.label) + ' (' + (i18n && i18n.t ? i18n.t(f.unit) : f.unit) + ')';
      group.appendChild(lbl);

      var input = document.createElement('input');
      input.type = 'number';
      input.id = f.id;
      input.className = 'vitals-input';
      input.placeholder = i18n && i18n.t ? i18n.t(f.placeholder) : f.placeholder;
      input.min = f.min;
      input.max = f.max;
      input.step = '0.1';
      input.inputMode = 'decimal';
      group.appendChild(input);

      modal.appendChild(group);
    }

    var btnGroup = document.createElement('div');
    btnGroup.className = 'vitals-modal-actions';

    var saveBtn = document.createElement('button');
    saveBtn.className = 'btn btn-primary';
    saveBtn.textContent = i18n && i18n.t ? i18n.t('vitals.save') : 'حفظ المؤشرات';
    saveBtn.addEventListener('click', function () {
      var hr = document.getElementById('vitalsHeart').value;
      var rr = document.getElementById('vitalsRespiration').value;
      var sl = document.getElementById('vitalsSleep').value;
      if (hr && rr && sl) {
        that.save(hr, rr, sl);
        that.hideModal();
        if (onSaveCallback) { onSaveCallback(); }
        else { that.createDashboardCard('vitalsDashboardContainer'); }
        var toast = document.createElement('div');
        toast.className = 'vitals-toast';
        toast.textContent = i18n && i18n.t ? i18n.t('vitals.saved') : 'تم حفظ المؤشرات الحيوية';
        document.body.appendChild(toast);
        setTimeout(function () { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 2500);
      } else {
        var errorEl = document.getElementById('vitalsError');
        if (!errorEl) {
          errorEl = document.createElement('p');
          errorEl.id = 'vitalsError';
          errorEl.className = 'vitals-error';
          errorEl.textContent = i18n && i18n.t ? i18n.t('vitals.error') : 'يرجى إدخال قيم صحيحة';
          modal.insertBefore(errorEl, btnGroup);
        }
      }
    });

    var skipBtn = document.createElement('button');
    skipBtn.className = 'btn btn-secondary';
    skipBtn.textContent = i18n && i18n.t ? i18n.t('vitals.skip') : 'تخطي';
    skipBtn.addEventListener('click', function () {
      that.hideModal();
    });

    btnGroup.appendChild(saveBtn);
    btnGroup.appendChild(skipBtn);
    modal.appendChild(btnGroup);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
  },

  hideModal: function () {
    var modal = document.getElementById('vitalsModal');
    if (modal) modal.remove();
  },

  checkAndShowModal: function () {
    if (!this.hasTodaysEntry()) {
      this.showModal();
    }
  }
};
