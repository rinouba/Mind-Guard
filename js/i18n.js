const i18n = {
  lang: 'ar',

  init() {
    this.apply();
  },

  setLang(lang) {
    this.lang = lang;
    localStorage.setItem('mindGuard_lang', lang);
    this.apply();
  },

  toggle() {
    const newLang = this.lang === 'ar' ? 'en' : 'ar';
    this.lang = newLang;
    localStorage.setItem('mindGuard_lang', newLang);
    window.location.reload();
  },

  t(key) {
    const entry = this.translations[key];
    return entry ? (entry[this.lang] !== undefined ? entry[this.lang] : key) : key;
  },

  apply() {
    document.documentElement.lang = this.lang;
    document.documentElement.dir = this.lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.classList.toggle('lang-en', this.lang === 'en');
    document.documentElement.classList.toggle('lang-ar', this.lang === 'ar');

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      el.textContent = this.t(key);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      el.innerHTML = this.t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      el.placeholder = this.t(key);
    });

    document.querySelectorAll('.lang-toggle-btn').forEach(el => {
      el.textContent = this.lang === 'ar' ? 'EN' : 'عربي';
    });
  },

  getAspectName(index) {
    const names = this.lang === 'ar'
      ? { 1: 'الجانب الفيزيولوجي', 2: 'الجانب السلوكي', 3: 'الجانب الاجتماعي', 4: 'الجانب الانفعالي', 5: 'الجانب المعرفي' }
      : { 1: 'Physiological Aspect', 2: 'Behavioral Aspect', 3: 'Social Aspect', 4: 'Emotional Aspect', 5: 'Cognitive Aspect' };
    return names[index] || '';
  },

  getAspectShortName(index) {
    const names = this.lang === 'ar'
      ? { 1: 'الفيزيولوجي', 2: 'السلوكي', 3: 'الاجتماعي', 4: 'الانفعالي', 5: 'المعرفي' }
      : { 1: 'Physiological', 2: 'Behavioral', 3: 'Social', 4: 'Emotional', 5: 'Cognitive' };
    return names[index] || '';
  },

  getAspectSubtitle(index) {
    const subs = this.lang === 'ar'
      ? { 1: 'الجسم والطاقة', 2: 'الأفعال والإنجاز', 3: 'العلاقات والدعم', 4: 'المشاعر والهدوء', 5: 'الأفكار والقرارات' }
      : { 1: 'Body & Energy', 2: 'Actions & Achievement', 3: 'Relationships & Support', 4: 'Feelings & Calmness', 5: 'Thoughts & Decisions' };
    return subs[index] || '';
  },

  getQuote(index) {
    const quotes = this.lang === 'ar'
      ? {
          1: 'جسدك هو بيت روحك؛ اعتنِ به ليمنحك الحياة التي تستحقها.',
          2: 'أفعالك الصغيرة اليوم تصنع واقعك غداً؛ كل خطوة بسيطة هي انتصار كبير.',
          3: 'الإنسان كائن اجتماعي بطبعه؛ الروابط الطيبة هي الدواء الحقيقي لضغوط الحياة.',
          4: 'تقبّل مشاعرك كما هي، فهي جزء من إنسانيتك وليست دليلاً على ضعفك.',
          5: 'أفكارك هي النظارة التي ترى بها العالم؛ تأكد من نظافة عدساتك لترى الحقيقة بوضوح.'
        }
      : {
          1: 'Your body is the home of your soul; care for it so it may give you the life you deserve.',
          2: 'Your small actions today shape your reality tomorrow; every simple step is a great victory.',
          3: 'Humans are social by nature; kind bonds are the true medicine for life\'s pressures.',
          4: 'Accept your feelings as they are — they are part of your humanity, not proof of weakness.',
          5: 'Your thoughts are the glasses through which you see the world; make sure your lenses are clean to see the truth clearly.'
        };
    return quotes[index] || '';
  },

  getRecommendations(index) {
    const recs = this.lang === 'ar'
      ? {
          1: [
            'لتحسين جودة النوم: ثبت وقت الاستيقاظ يومياً حتى في أيام العطلة؛ الانتظام هو المفتاح لإعادة ضبط ساعة جسمك البيولوجية.',
            'لإدارة التعب والآلام الجسدية: اشرب كميات كافية من الماء (2-3 لتر)؛ الجفاف البسيط هو السبب الخفي خلف 50% من حالات الصداع والخمول.',
            'للنشاط البدني: إذا كنت لا تمارس الرياضة، ابدأ بـ 10 دقائق مشي سريع فقط؛ هذه المدة كافية لتحفيز إفراز "الإندورفين" المسؤول عن تحسين المزاج.'
          ],
          2: [
            'لإنجاز المهام الصعبة: استخدم "قاعدة الدقيقتين"؛ أي مهمة تستغرق أقل من دقيقتين ابدأ بها فوراً. هذا يكسر حاجز المماطلة ويزيد شعورك بالإنجاز.',
            'لمواجهة التجنب الاجتماعي: لا تنتظر "الرغبة" لتخرج؛ السلوك يسبق الشعور. اخرج لمدة قصيرة جداً (15 دقيقة) ثم عد؛ هذا يكسر حلقة الانعزال.',
            'لتحسين التركيز: اعتمد "العمل المركز"؛ أغلق إشعارات الهاتف لمدة 25 دقيقة كاملة وركز على مهمة واحدة فقط. تشتت الانتباه هو العدو الأول للإنتاجية.'
          ],
          3: [
            'لتحسين التواصل: تدرب على "الاستماع الفعال"؛ استمع لتفهم لا لترد. هذا يبني روابط أعمق ويقلل من سوء الفهم مع الآخرين.',
            'للحصول على الدعم: لا تطلب "المساعدة" بشكل عام، بل حدد ما تحتاجه (مثلاً: "أحتاج فقط من يسمعني الآن"). الوضوح يسهل على الآخرين الوقوف بجانبك.',
            'لتعزيز الانتماء: ابحث عن مجموعة تشاركك اهتماماً واحداً (هواية، تعلم لغة)؛ الانتماء لمجموعات صغيرة يقلل من مؤشرات الاكتئاب والعزلة.'
          ],
          4: [
            'للتحكم في المشاعر: استخدم تقنية "تسمية الشعور"؛ عندما تنزعج قل: "أنا أشعر بالقلق الآن". تسمية العاطفة تنقل النشاط من مركز الانفعال إلى مركز التفكير في الدماغ.',
            'لإدارة القلق من المستقبل: طبق قاعدة "الخمسة": هل سيؤثر هذا الأمر عليّ بعد 5 سنوات؟ إذا كانت الإجابة لا، فلا تقضِ أكثر من 5 دقائق في القلق بشأنه.',
            'للاسترخاء الفوري: جرب تنفس "المربع" (شهيق 4 ثوانٍ، حبس 4، زفير 4، حبس 4)؛ هذا التمرين يهدئ الجهاز العصبي فوراً في حالات الإجهاد الحاد.'
          ],
          5: [
            'لإيقاف التفكير المفرط: خصص "وقت للقلق" لمدة 10 دقائق فقط في اليوم. إذا راودتك فكرة مزعجة خارج هذا الوقت، قل لنفسك: "سأفكر بها في وقت القلق المحدد".',
            'لتحدي الأفكار السلبية: اسأل نفسك دائماً: "ما هو الدليل المادي على صحة هذه الفكرة؟". غالباً ما تكون أفكارنا مجرد تفسيرات وليست حقائق.',
            'لتسهيل اتخاذ القرارات: اتبع قاعدة "الجيد بما يكفي"؛ لا تبحث عن القرار المثالي، بل اختر أول قرار يلبي احتياجاتك الأساسية لتقليل الجهد الذهني المستنزف.'
          ]
        }
      : {
          1: [
            'To improve sleep quality: set a fixed wake-up time daily, even on weekends; consistency is key to resetting your biological clock.',
            'To manage fatigue and physical pain: drink enough water (2-3 liters); mild dehydration is the hidden cause behind 50% of headaches and lethargy.',
            'For physical activity: if you don\'t exercise, start with just 10 minutes of brisk walking; this is enough to stimulate endorphin release, which improves mood.'
          ],
          2: [
            'For difficult tasks: use the "2-minute rule" — any task taking less than 2 minutes, do it immediately. This breaks procrastination and boosts your sense of accomplishment.',
            'To overcome social avoidance: don\'t wait for "desire" to go out; behavior precedes feeling. Go out for a very short time (15 min) then return; this breaks the isolation cycle.',
            'To improve focus: adopt "deep work" — turn off phone notifications for a full 25 minutes and focus on one task only. Distraction is the #1 enemy of productivity.'
          ],
          3: [
            'To improve communication: practice "active listening" — listen to understand, not to reply. This builds deeper bonds and reduces misunderstandings.',
            'To get support: don\'t ask for "help" in general terms; specify what you need (e.g., "I just need someone to listen now"). Clarity makes it easier for others to stand by you.',
            'To strengthen belonging: find a group that shares one interest (hobby, language learning); belonging to small groups reduces indicators of depression and isolation.'
          ],
          4: [
            'To manage emotions: use the "name the feeling" technique — when upset, say "I feel anxious right now." Naming the emotion shifts activity from the emotional center to the thinking center of the brain.',
            'To manage future anxiety: apply the "rule of five" — will this matter in 5 years? If no, don\'t spend more than 5 minutes worrying about it.',
            'For instant relaxation: try "box breathing" (inhale 4s, hold 4s, exhale 4s, hold 4s); this exercise immediately calms the nervous system in acute stress.'
          ],
          5: [
            'To stop overthinking (rumination): set aside "worry time" for just 10 minutes daily. If a disturbing thought comes outside this time, tell yourself "I\'ll think about it during worry time."',
            'To challenge negative thoughts: always ask yourself "what is the actual evidence for this thought?" Our thoughts are often just interpretations, not facts.',
            'To ease decision-making: follow the "good enough" rule — don\'t search for the perfect decision, choose the first option that meets your basic needs to reduce mental drain.'
          ]
        };
    return recs[index] || [];
  },

  getQuestions(aspect) {
    const ar = QUESTIONS;
    const en = QUESTIONS_EN;
    if (this.lang === 'ar' || !en) return ar[aspect]?.questions || [];
    return en[aspect]?.questions || [];
  },

  getQuestionOptionText(aspect, questionIndex, optionIndex) {
    const questions = this.getQuestions(aspect);
    return questions[questionIndex]?.options[optionIndex]?.text || '';
  }
};

const QUESTIONS_EN = {
  1: {
    name: "Physiological Aspect",
    questions: [
      {
        id: 1,
        text: "How would you describe your sleep quality on most nights?",
        options: [
          { key: "A", text: "Excellent", points: 4 },
          { key: "B", text: "Good", points: 3 },
          { key: "C", text: "Average", points: 2 },
          { key: "D", text: "Poor", points: 1 }
        ]
      },
      {
        id: 2,
        text: "Do you frequently feel tired or physically exhausted without a clear reason?",
        options: [
          { key: "A", text: "Rarely", points: 4 },
          { key: "B", text: "Sometimes", points: 3 },
          { key: "C", text: "Often", points: 2 },
          { key: "D", text: "Always", points: 1 }
        ]
      },
      {
        id: 3,
        text: "How regularly do you engage in physical activity during the week?",
        options: [
          { key: "A", text: "Regularly", points: 4 },
          { key: "B", text: "Sometimes", points: 3 },
          { key: "C", text: "Rarely", points: 2 },
          { key: "D", text: "Never", points: 1 }
        ]
      },
      {
        id: 4,
        text: "Have you noticed any significant changes in your appetite or weight recently?",
        options: [
          { key: "A", text: "None", points: 4 },
          { key: "B", text: "Slight", points: 3 },
          { key: "C", text: "Noticeable", points: 2 },
          { key: "D", text: "Significant", points: 1 }
        ]
      },
      {
        id: 5,
        text: "Do you suffer from recurrent physical pain (headaches, back pain, digestive issues) with no medical explanation?",
        options: [
          { key: "A", text: "Rarely", points: 4 },
          { key: "B", text: "Sometimes", points: 3 },
          { key: "C", text: "Often", points: 2 },
          { key: "D", text: "Always", points: 1 }
        ]
      }
    ]
  },
  2: {
    name: "Behavioral Aspect",
    questions: [
      {
        id: 1,
        text: "How easy is it for you to perform daily tasks and activities that require effort?",
        options: [
          { key: "A", text: "Very easy", points: 4 },
          { key: "B", text: "Easy", points: 3 },
          { key: "C", text: "Sometimes difficult", points: 2 },
          { key: "D", text: "Very difficult", points: 1 }
        ]
      },
      {
        id: 2,
        text: "Do you find yourself avoiding social situations or activities you used to enjoy?",
        options: [
          { key: "A", text: "Rarely", points: 4 },
          { key: "B", text: "Sometimes", points: 3 },
          { key: "C", text: "Often", points: 2 },
          { key: "D", text: "Always", points: 1 }
        ]
      },
      {
        id: 3,
        text: "How well can you focus and complete tasks that require attention?",
        options: [
          { key: "A", text: "Very well", points: 4 },
          { key: "B", text: "Well", points: 3 },
          { key: "C", text: "Sometimes poorly", points: 2 },
          { key: "D", text: "Very poorly", points: 1 }
        ]
      },
      {
        id: 4,
        text: "Do you resort to certain behaviors (overeating, smoking, isolation) to cope with stress?",
        options: [
          { key: "A", text: "Rarely", points: 4 },
          { key: "B", text: "Sometimes", points: 3 },
          { key: "C", text: "Often", points: 2 },
          { key: "D", text: "Always", points: 1 }
        ]
      },
      {
        id: 5,
        text: "How motivated do you feel to achieve your goals or start new projects?",
        options: [
          { key: "A", text: "Very motivated", points: 4 },
          { key: "B", text: "Motivated", points: 3 },
          { key: "C", text: "Slightly motivated", points: 2 },
          { key: "D", text: "Not motivated", points: 1 }
        ]
      }
    ]
  },
  3: {
    name: "Social Aspect",
    questions: [
      {
        id: 1,
        text: "How satisfied are you with your social relationships (friends, family, colleagues)?",
        options: [
          { key: "A", text: "Very satisfied", points: 4 },
          { key: "B", text: "Satisfied", points: 3 },
          { key: "C", text: "Dissatisfied", points: 2 },
          { key: "D", text: "Very dissatisfied", points: 1 }
        ]
      },
      {
        id: 2,
        text: "Do you feel supported and appreciated by the important people in your life?",
        options: [
          { key: "A", text: "Always", points: 4 },
          { key: "B", text: "Often", points: 3 },
          { key: "C", text: "Sometimes", points: 2 },
          { key: "D", text: "Rarely", points: 1 }
        ]
      },
      {
        id: 3,
        text: "How easy is it for you to communicate with others and express your feelings and needs?",
        options: [
          { key: "A", text: "Very easy", points: 4 },
          { key: "B", text: "Easy", points: 3 },
          { key: "C", text: "Sometimes difficult", points: 2 },
          { key: "D", text: "Very difficult", points: 1 }
        ]
      },
      {
        id: 4,
        text: "Do you regularly participate in social or community activities?",
        options: [
          { key: "A", text: "Regularly", points: 4 },
          { key: "B", text: "Sometimes", points: 3 },
          { key: "C", text: "Rarely", points: 2 },
          { key: "D", text: "I don't participate", points: 1 }
        ]
      },
      {
        id: 5,
        text: "Do you feel a sense of belonging to a particular group or community?",
        options: [
          { key: "A", text: "Yes, strongly", points: 4 },
          { key: "B", text: "Yes, generally", points: 3 },
          { key: "C", text: "No, I feel disconnected", points: 2 },
          { key: "D", text: "I don't think about it", points: 1 }
        ]
      }
    ]
  },
  4: {
    name: "Emotional Aspect",
    questions: [
      {
        id: 1,
        text: "How often do you feel sad, hopeless, or lose interest in things?",
        options: [
          { key: "A", text: "Rarely", points: 4 },
          { key: "B", text: "Sometimes", points: 3 },
          { key: "C", text: "Often", points: 2 },
          { key: "D", text: "Always", points: 1 }
        ]
      },
      {
        id: 2,
        text: "Do you find it difficult to control your emotions (anger, anxiety, sadness)?",
        options: [
          { key: "A", text: "Rarely", points: 4 },
          { key: "B", text: "Sometimes", points: 3 },
          { key: "C", text: "Often", points: 2 },
          { key: "D", text: "Always", points: 1 }
        ]
      },
      {
        id: 3,
        text: "How relaxed and calm do you feel in your daily life?",
        options: [
          { key: "A", text: "Always", points: 4 },
          { key: "B", text: "Often", points: 3 },
          { key: "C", text: "Sometimes", points: 2 },
          { key: "D", text: "Rarely", points: 1 }
        ]
      },
      {
        id: 4,
        text: "Do you feel excessively anxious or stressed about the future or daily events?",
        options: [
          { key: "A", text: "Rarely", points: 4 },
          { key: "B", text: "Sometimes", points: 3 },
          { key: "C", text: "Often", points: 2 },
          { key: "D", text: "Always", points: 1 }
        ]
      },
      {
        id: 5,
        text: "How well can you enjoy positive moments and feel happiness?",
        options: [
          { key: "A", text: "Very well", points: 4 },
          { key: "B", text: "Well", points: 3 },
          { key: "C", text: "Sometimes poorly", points: 2 },
          { key: "D", text: "Very poorly", points: 1 }
        ]
      }
    ]
  },
  5: {
    name: "Cognitive Aspect",
    questions: [
      {
        id: 1,
        text: "Do you have difficulty making decisions, even simple ones?",
        options: [
          { key: "A", text: "Rarely", points: 4 },
          { key: "B", text: "Sometimes", points: 3 },
          { key: "C", text: "Often", points: 2 },
          { key: "D", text: "Always", points: 1 }
        ]
      },
      {
        id: 2,
        text: "How well can you remember new information or recent events?",
        options: [
          { key: "A", text: "Very well", points: 4 },
          { key: "B", text: "Well", points: 3 },
          { key: "C", text: "Sometimes poorly", points: 2 },
          { key: "D", text: "Very poorly", points: 1 }
        ]
      },
      {
        id: 3,
        text: "Do you feel your thoughts are negative or pessimistic most of the time?",
        options: [
          { key: "A", text: "Rarely", points: 4 },
          { key: "B", text: "Sometimes", points: 3 },
          { key: "C", text: "Often", points: 2 },
          { key: "D", text: "Always", points: 1 }
        ]
      },
      {
        id: 4,
        text: "How well can you solve problems and think clearly?",
        options: [
          { key: "A", text: "Very well", points: 4 },
          { key: "B", text: "Well", points: 3 },
          { key: "C", text: "Sometimes poorly", points: 2 },
          { key: "D", text: "Very poorly", points: 1 }
        ]
      },
      {
        id: 5,
        text: "Do you find yourself overthinking the same thoughts or events repeatedly?",
        options: [
          { key: "A", text: "Rarely", points: 4 },
          { key: "B", text: "Sometimes", points: 3 },
          { key: "C", text: "Often", points: 2 },
          { key: "D", text: "Always", points: 1 }
        ]
      }
    ]
  }
};

i18n.translations = {
  'nav.home': { ar: 'الرئيسية', en: 'Home' },
  'nav.progress': { ar: 'التقدم', en: 'Progress' },
  'nav.newAssessment': { ar: 'تقييم جديد', en: 'New' },
  'nav.exercises': { ar: 'التمارين', en: 'Exercises' },
  'nav.profile': { ar: 'الملف الشخصي', en: 'Profile' },

  'index.title': { ar: 'Mind Guard', en: 'Mind Guard' },
  'index.subtitle': { ar: 'مرحباً بك في مساحتك الآمنة<br>حارس عقلك.. دليل سلامك | MindGuard', en: 'Welcome to your safe space<br>Your Mind Guardian.. Your Guide to Peace | MindGuard' },
  'index.startBtn': { ar: 'ابدأ الرحلة', en: 'Start Journey' },

  'mood.title': { ar: 'كيف حالك اليوم؟', en: 'How are you today?' },
  'mood.excellent': { ar: 'ممتاز', en: 'Excellent' },
  'mood.good': { ar: 'جيد', en: 'Good' },
  'mood.neutral': { ar: 'متوسط', en: 'Neutral' },
  'mood.bad': { ar: 'سيء', en: 'Bad' },
  'mood.veryBad': { ar: 'سيء جداً', en: 'Very Bad' },

  'aspects.title': { ar: 'الجوانب الخمسة للعافية', en: 'Five Aspects of Wellbeing' },
  'aspects.subtitle': { ar: 'اختر الجانب الذي تريد تقييمه', en: 'Choose the aspect you want to assess' },

  'quote.startBtn': { ar: 'ابدأ التقييم', en: 'Start Assessment' },

  'questionnaire.questionOf': { ar: 'سؤال {n} من {total}', en: 'Question {n} of {total}' },
  'questionnaire.prev': { ar: 'السابق', en: 'Previous' },
  'questionnaire.next': { ar: 'التالي', en: 'Next' },
  'questionnaire.showResults': { ar: 'عرض النتائج', en: 'Show Results' },

  'results.wellbeingLabel': { ar: 'نسبة العافية النفسية', en: 'Psychological Wellbeing' },
  'results.recommendationsHeader': { ar: 'توصيات مخصصة لك:', en: 'Personalized recommendations:' },
  'results.exerciseBtn': { ar: 'ابدأ التمرين المناسب', en: 'Start Recommended Exercise' },
  'results.showProgress': { ar: 'عرض التقدم', en: 'View Progress' },
  'results.lowestScore': { ar: 'الأدنى: {name}', en: 'Lowest: {name}' },

  'progress.title': { ar: 'التقدم الأسبوعي', en: 'Weekly Progress' },
  'progress.subtitle': { ar: 'تتبع تطور حالتك النفسية', en: 'Track your psychological wellbeing' },
  'progress.avgWellbeing': { ar: 'متوسط العافية هذا الأسبوع', en: 'Avg. Wellbeing This Week' },
  'progress.bestAspect': { ar: 'أفضل جانب', en: 'Best Aspect' },
  'progress.worstAspect': { ar: 'الجانب الذي يحتاج تحسين', en: 'Aspect Needing Improvement' },
  'progress.totalAssessments': { ar: 'إجمالي التقييمات', en: 'Total Assessments' },
  'progress.lastAssessments': { ar: 'آخر التقييمات', en: 'Recent Assessments' },
  'progress.noAssessments': { ar: 'لا توجد تقييمات سابقة', en: 'No previous assessments' },
  'progress.export': { ar: 'تصدير البيانات', en: 'Export Data' },
  'progress.clear': { ar: 'مسح جميع البيانات', en: 'Clear All Data' },
  'progress.lowest': { ar: 'الأدنى: {name}', en: 'Lowest: {name}' },
  'progress.historyDate': { ar: '{date}', en: '{date}' },

  'emotional.title': { ar: 'تفريغ المشاعر', en: 'Emotional Release' },
  'emotional.subtitle': { ar: 'اكتب ما في قلبك… هذه المساحة لك فقط', en: 'Write what\'s in your heart… this space is just for you' },
  'emotional.whatNow': { ar: 'ماذا تشعر الآن؟', en: 'What do you feel now?' },
  'emotional.releaseBtn': { ar: 'تفريغ المشاعر', en: 'Release Feelings' },
  'emotional.orChoose': { ar: 'أو اختر شعورك الحالي', en: 'Or choose your current feeling' },
  'emotional.anxious': { ar: 'قلق', en: 'Anxious' },
  'emotional.sad': { ar: 'حزن', en: 'Sad' },
  'emotional.happy': { ar: 'فرح', en: 'Happy' },
  'emotional.writeSomething': { ar: 'اكتب شيئاً', en: 'Write Something' },
  'emotional.writePrompt': { ar: 'اكتب ما تشعر به أو اختر شعورك أولاً', en: 'Write what you feel or choose your feeling first' },
  'emotional.successRelease': { ar: 'تم تفريغ المشاعر', en: 'Feelings Released' },
  'emotional.successMsg': { ar: 'تم تفريغ مشاعرك بنجاح', en: 'Your feelings have been released successfully' },
  'emotional.moodRecorded': { ar: 'تم تسجيل شعورك: {mood}', en: 'Your feeling recorded: {mood}' },
  'emotional.weAreHere': { ar: 'أنت بخير، ونحن هنا لأجلك', en: 'You are okay, and we are here for you' },
  'emotional.placeholder': { ar: 'اكتب هنا بحرية… لا تتردد، أنت في مساحة آمنة', en: 'Write freely… don\'t hesitate, you are in a safe space' },
  'emotional.placeholderAnxious': { ar: 'حدثني عن ما يقلقك…', en: 'Tell me what worries you…' },
  'emotional.placeholderSad': { ar: 'شاركني ما يحزن قلبك…', en: 'Share what saddens your heart…' },
  'emotional.placeholderHappy': { ar: 'أخبرني عن سبب فرحك اليوم…', en: 'Tell me what made you happy today…' },

  'cbt.title': { ar: 'تمرين إعادة الهيكلة المعرفية', en: 'Cognitive Restructuring Exercise' },
  'cbt.subtitle': { ar: 'حلل موقفك بثلاث خطوات علمية', en: 'Analyze your situation in 3 scientific steps' },
  'cbt.step1Title': { ar: 'الموقف الذي حدث وضايقك', en: 'The situation that happened and upset you' },
  'cbt.step1Desc': { ar: 'صف الموقف الذي سبب لك الانزعاج', en: 'Describe the situation that caused you distress' },
  'cbt.step1Placeholder': { ar: 'مثال: مديري انتقد عملي أمام الزملاء', en: 'Example: My manager criticized my work in front of colleagues' },
  'cbt.step2Title': { ar: 'الفكرة السلبية التلقائية', en: 'Automatic Negative Thought' },
  'cbt.step2Desc': { ar: 'ما الفكرة التي جاءت في ذهنك مباشرة بعد الموقف؟', en: 'What thought came to your mind right after the situation?' },
  'cbt.step2Placeholder': { ar: 'مثال: أنا غير كفء ولن أنجح أبداً', en: 'Example: I am incompetent and will never succeed' },
  'cbt.step3Title': { ar: 'الفكرة البديلة الموضوعية الإيجابية', en: 'Balanced Alternative Thought' },
  'cbt.step3Desc': { ar: 'فكر بطريقة أكثر توازناً وواقعية', en: 'Think in a more balanced and realistic way' },
  'cbt.step3Placeholder': { ar: 'مثال: النقد يساعدني على التطور، ونجاحاتي السابقة تثبت كفاءتي', en: 'Example: Criticism helps me grow, and my past successes prove my ability' },
  'cbt.suggestAlt': { ar: 'اقتراح فكرة بديلة', en: 'Suggest Alternative' },
  'cbt.saveBtn': { ar: 'حفظ التحليل', en: 'Save Analysis' },
  'cbt.historyTitle': { ar: 'التحليلات السابقة', en: 'Previous Analyses' },
  'cbt.noHistory': { ar: 'لا توجد تحليلات سابقة', en: 'No previous analyses' },
  'cbt.modalComplete': { ar: 'أكمل التحليل', en: 'Complete Analysis' },
  'cbt.modalCompleteMsg': { ar: 'يرجى ملء الحقول الثلاثة كاملة', en: 'Please fill in all three fields' },
  'cbt.modalSaved': { ar: 'تم الحفظ', en: 'Saved' },
  'cbt.modalSavedMsg': { ar: 'تم حفظ تحليلك بنجاح.\nيمكنك العودة له لاحقاً من هذه الصفحة.', en: 'Your analysis has been saved.\nYou can return to it later from this page.' },
  'cbt.modalTitle': { ar: 'تحليل CPT', en: 'CPT Analysis' },
  'cbt.eventLabel': { ar: 'الموقف:', en: 'Situation:' },
  'cbt.negativeLabel': { ar: 'الفكرة السلبية:', en: 'Negative Thought:' },
  'cbt.alternativeLabel': { ar: 'الفكرة البديلة:', en: 'Alternative Thought:' },
  'cbt.chipFail': { ar: 'أنا فاشل', en: 'I am a failure' },
  'cbt.chipAppreciate': { ar: 'لا أحد يقدرني', en: 'No one appreciates me' },
  'cbt.chipEverything': { ar: 'كل شيء سيء', en: 'Everything is bad' },
  'cbt.chipChange': { ar: 'لن يتغير شيء', en: 'Nothing will change' },
  'cbt.step1Placeholder': { ar: 'مثال: مديري انتقد عملي أمام الزملاء', en: 'Example: My manager criticized my work in front of colleagues' },
  'cbt.step2Placeholder': { ar: 'مثال: أنا غير كفء ولن أنجح أبداً', en: 'Example: I am incompetent and will never succeed' },
  'cbt.step3Placeholder': { ar: 'مثال: النقد يساعدني على التطور، ونجاحاتي السابقة تثبت كفاءتي', en: 'Example: Criticism helps me grow, and my past successes prove my ability' },

  'relaxation.title': { ar: 'استرخاء العضلات التدريجي', en: 'Progressive Muscle Relaxation' },
  'relaxation.subtitle': { ar: 'اتبع الخطوات بتركيز', en: 'Follow the steps with focus' },
  'relaxation.startBtn': { ar: 'ابدأ التمرين', en: 'Start Exercise' },
  'relaxation.pauseBtn': { ar: 'إيقاف مؤقت', en: 'Pause' },
  'relaxation.resumeBtn': { ar: 'استئناف', en: 'Resume' },
  'relaxation.endBtn': { ar: 'إنهاء', en: 'End' },
  'relaxation.wellDone': { ar: 'أحسنت!', en: 'Well done!' },
  'relaxation.step0': { ar: 'اجلس أو استلقِ في مكان هادئ', en: 'Sit or lie down in a quiet place' },
  'relaxation.step1': { ar: 'ابدأ من أصابع القدم: شد العضلات لمدة 5 ثوانٍ', en: 'Start from toes: tense muscles for 5 seconds' },
  'relaxation.step2': { ar: 'حرر التوتر فجأة ولاحظ الشعور بالاسترخاء', en: 'Release tension suddenly and notice the relaxation' },
  'relaxation.step3': { ar: 'انتقل إلى الساقين، ثم الفخذين، ثم البطن...', en: 'Move to legs, then thighs, then abdomen...' },
  'relaxation.step4': { ar: 'استمر حتى تصل إلى الرأس والوجه', en: 'Continue until you reach the head and face' },

  'breathing.title': { ar: 'تمرين التنفس', en: 'Breathing Exercise' },
  'breathing.phase0': { ar: 'تنفس ببطء من الأنف', en: 'Breathe in slowly through your nose' },
  'breathing.phase1': { ar: 'احبس النفس', en: 'Hold your breath' },
  'breathing.phase2': { ar: 'أخرج الهواء ببطء', en: 'Exhale slowly' },
  'breathing.phase3': { ar: 'احبس النفس', en: 'Hold your breath' },
  'breathing.cycle': { ar: 'الدورة {n} من {total}', en: 'Cycle {n} of {total}' },
  'breathing.startBtn': { ar: 'ابدأ التمرين', en: 'Start Exercise' },
  'breathing.endBtn': { ar: 'إنهاء التمرين', en: 'End Exercise' },
  'breathing.wellDone': { ar: 'أحسنت! لقد أكملت التمرين', en: 'Well done! You completed the exercise' },

  'profile.title': { ar: 'الملف الشخصي', en: 'Profile' },
  'profile.name': { ar: 'مستخدم Mind Guard', en: 'Mind Guard User' },
  'profile.stats': { ar: 'متوسط العافية: {overall}% | {count} تقييم', en: 'Avg. Wellbeing: {overall}% | {count} assessments' },
  'profile.noAssessments': { ar: 'شريكك في العناية النفسية', en: 'Your partner in mental wellness' },
  'profile.menuProgress': { ar: 'التقدم والإحصائيات', en: 'Progress & Statistics' },
  'profile.menuNewAssessment': { ar: 'تقييم جديد', en: 'New Assessment' },
  'profile.menuExercises': { ar: 'التمارين التفاعلية', en: 'Interactive Exercises' },
  'profile.menuEmotional': { ar: 'تفريغ المشاعر', en: 'Emotional Release' },
  'profile.menuCbt': { ar: 'تحليل الأفكار (CPT)', en: 'Thought Analysis (CBT)' },
  'profile.menuExport': { ar: 'تصدير البيانات', en: 'Export Data' },
  'profile.menuClear': { ar: 'مسح جميع البيانات', en: 'Clear All Data' },

  'modal.ok': { ar: 'حسناً', en: 'OK' },
  'modal.noAssessment': { ar: 'لم تقم بأي تقييم بعد', en: 'You haven\'t taken any assessment yet' },
  'confirm.clear': { ar: 'هل أنت متأكد من مسح جميع البيانات؟', en: 'Are you sure you want to clear all data?' },

  'aspect.physiological': { ar: 'الجانب الفيزيولوجي', en: 'Physiological Aspect' },
  'aspect.behavioral': { ar: 'الجانب السلوكي', en: 'Behavioral Aspect' },
  'aspect.social': { ar: 'الجانب الاجتماعي', en: 'Social Aspect' },
  'aspect.emotional': { ar: 'الجانب الانفعالي', en: 'Emotional Aspect' },
  'aspect.cognitive': { ar: 'الجانب المعرفي', en: 'Cognitive Aspect' },

  'aspects.subtitle1': { ar: 'الجسم والطاقة', en: 'Body & Energy' },
  'aspects.subtitle2': { ar: 'الأفعال والإنجاز', en: 'Actions & Achievement' },
  'aspects.subtitle3': { ar: 'العلاقات والدعم', en: 'Relationships & Support' },
  'aspects.subtitle4': { ar: 'المشاعر والهدوء', en: 'Feelings & Calmness' },
  'aspects.subtitle5': { ar: 'الأفكار والقرارات', en: 'Thoughts & Decisions' },

  'chart.physiological': { ar: 'فيزيولوجي', en: 'Physiological' },
  'chart.behavioral': { ar: 'سلوكي', en: 'Behavioral' },
  'chart.social': { ar: 'اجتماعي', en: 'Social' },
  'chart.emotional': { ar: 'انفعالي', en: 'Emotional' },
  'chart.cognitive': { ar: 'معرفي', en: 'Cognitive' }
};

i18n.lang = localStorage.getItem('mindGuard_lang') || 'ar';
document.documentElement.lang = i18n.lang;
document.documentElement.dir = i18n.lang === 'ar' ? 'rtl' : 'ltr';
document.documentElement.classList.toggle('lang-en', i18n.lang === 'en');
document.documentElement.classList.toggle('lang-ar', i18n.lang === 'ar');
document.addEventListener('DOMContentLoaded', () => { i18n.init(); });
