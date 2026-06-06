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
      el.textContent = this.lang === 'ar' ? 'EN' : 'عر';
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
      { id: 1, text: "How would you describe your sleep quality on most nights?", options: [
        { key: "A", text: "Excellent", points: 4 }, { key: "B", text: "Good", points: 3 }, { key: "C", text: "Average", points: 2 }, { key: "D", text: "Poor", points: 1 }
      ]},
      { id: 2, text: "Do you frequently feel tired or physically exhausted without a clear reason?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 3, text: "How regularly do you engage in physical activity during the week?", options: [
        { key: "A", text: "Regularly", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Rarely", points: 2 }, { key: "D", text: "Never", points: 1 }
      ]},
      { id: 4, text: "Have you noticed any significant changes in your appetite or weight recently?", options: [
        { key: "A", text: "None", points: 4 }, { key: "B", text: "Slight", points: 3 }, { key: "C", text: "Noticeable", points: 2 }, { key: "D", text: "Significant", points: 1 }
      ]},
      { id: 5, text: "Do you suffer from recurrent physical pain (headaches, back pain, digestive issues) with no medical explanation?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 6, text: "How would you rate your overall energy level during the day?", options: [
        { key: "A", text: "High", points: 4 }, { key: "B", text: "Good", points: 3 }, { key: "C", text: "Low", points: 2 }, { key: "D", text: "Very low", points: 1 }
      ]},
      { id: 7, text: "Do you feel muscle tension or stiffness without a clear cause?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 8, text: "How often have you suffered from headaches over the past month?", options: [
        { key: "A", text: "Not at all", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Constantly", points: 1 }
      ]},
      { id: 9, text: "Do you suffer from digestive or gastrointestinal issues?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 10, text: "Do you notice changes in your breathing pattern (rapid or shallow) when stressed?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 11, text: "How easily can you physically relax when you want to?", options: [
        { key: "A", text: "Easily", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "With difficulty", points: 2 }, { key: "D", text: "I cannot", points: 1 }
      ]},
      { id: 12, text: "Do you feel refreshed after rest or sleep?", options: [
        { key: "A", text: "Always", points: 4 }, { key: "B", text: "Often", points: 3 }, { key: "C", text: "Sometimes", points: 2 }, { key: "D", text: "Rarely", points: 1 }
      ]},
      { id: 13, text: "Do you struggle to wake up in the morning feeling energetic?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 14, text: "How regular are your daily meals?", options: [
        { key: "A", text: "Very regular", points: 4 }, { key: "B", text: "Regular", points: 3 }, { key: "C", text: "Irregular", points: 2 }, { key: "D", text: "Erratic", points: 1 }
      ]},
      { id: 15, text: "Do you experience physical symptoms (racing heart, sweating, shaking) when anxious?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 16, text: "How often do you feel sluggish or physically lazy during the day?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 17, text: "Do you engage in physical activities that you enjoy?", options: [
        { key: "A", text: "Regularly", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Rarely", points: 2 }, { key: "D", text: "Never", points: 1 }
      ]},
      { id: 18, text: "Do you suffer from sleep disturbances such as insomnia or frequent waking?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 19, text: "How resistant is your immune system (how often do you catch colds or get sick)?", options: [
        { key: "A", text: "Rarely get sick", points: 4 }, { key: "B", text: "Get sick sometimes", points: 3 }, { key: "C", text: "Often get sick", points: 2 }, { key: "D", text: "Constantly sick", points: 1 }
      ]},
      { id: 20, text: "Does your mood improve after physical exercise?", options: [
        { key: "A", text: "Always", points: 4 }, { key: "B", text: "Often", points: 3 }, { key: "C", text: "Sometimes", points: 2 }, { key: "D", text: "I don't exercise", points: 1 }
      ]},
      { id: 21, text: "How aware are you of the physical signals your body sends you (hunger, fatigue, pain)?", options: [
        { key: "A", text: "Very aware", points: 4 }, { key: "B", text: "Aware", points: 3 }, { key: "C", text: "Slightly aware", points: 2 }, { key: "D", text: "Unaware", points: 1 }
      ]},
      { id: 22, text: "Do you find yourself feeling tired after minimal effort?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 23, text: "How would you describe your appetite for food?", options: [
        { key: "A", text: "Very good", points: 4 }, { key: "B", text: "Good", points: 3 }, { key: "C", text: "Poor", points: 2 }, { key: "D", text: "Very poor", points: 1 }
      ]},
      { id: 24, text: "Do you experience stomach or intestinal discomfort linked to stress?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 25, text: "How satisfied are you with your level of physical fitness?", options: [
        { key: "A", text: "Very satisfied", points: 4 }, { key: "B", text: "Satisfied", points: 3 }, { key: "C", text: "Dissatisfied", points: 2 }, { key: "D", text: "Very dissatisfied", points: 1 }
      ]},
      { id: 26, text: "Do you have difficulty breathing deeply or feel tightness in your chest?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 27, text: "How much does your sleep get affected by disturbing thoughts or anxiety?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 28, text: "Do you notice yourself breathing rapidly or shallowly without physical exertion?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 29, text: "How physically comfortable do you feel at the end of the day?", options: [
        { key: "A", text: "Very comfortable", points: 4 }, { key: "B", text: "Comfortable", points: 3 }, { key: "C", text: "Tired", points: 2 }, { key: "D", text: "Exhausted", points: 1 }
      ]},
      { id: 30, text: "Do you rely on stimulants (caffeine, energy drinks) to get through your day?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]}
    ]
  },
  2: {
    name: "Behavioral Aspect",
    questions: [
      { id: 1, text: "How easy is it for you to perform daily tasks and activities that require effort?", options: [
        { key: "A", text: "Very easy", points: 4 }, { key: "B", text: "Easy", points: 3 }, { key: "C", text: "Sometimes difficult", points: 2 }, { key: "D", text: "Very difficult", points: 1 }
      ]},
      { id: 2, text: "Do you find yourself avoiding social situations or activities you used to enjoy?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 3, text: "How well can you focus and complete tasks that require attention?", options: [
        { key: "A", text: "Very well", points: 4 }, { key: "B", text: "Well", points: 3 }, { key: "C", text: "Sometimes poorly", points: 2 }, { key: "D", text: "Very poorly", points: 1 }
      ]},
      { id: 4, text: "Do you resort to certain behaviors (overeating, smoking, isolation) to cope with stress?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 5, text: "How motivated do you feel to achieve your goals or start new projects?", options: [
        { key: "A", text: "Very motivated", points: 4 }, { key: "B", text: "Motivated", points: 3 }, { key: "C", text: "Slightly motivated", points: 2 }, { key: "D", text: "Not motivated", points: 1 }
      ]},
      { id: 6, text: "Do you procrastinate on important tasks and delay them?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 7, text: "How organized is your time and daily schedule?", options: [
        { key: "A", text: "Very organized", points: 4 }, { key: "B", text: "Organized", points: 3 }, { key: "C", text: "Disorganized", points: 2 }, { key: "D", text: "Chaotic", points: 1 }
      ]},
      { id: 8, text: "Do you maintain a consistent daily routine (sleep, meals, work)?", options: [
        { key: "A", text: "Always", points: 4 }, { key: "B", text: "Often", points: 3 }, { key: "C", text: "Sometimes", points: 2 }, { key: "D", text: "Rarely", points: 1 }
      ]},
      { id: 9, text: "How much attention do you pay to your personal hygiene and grooming?", options: [
        { key: "A", text: "Very attentive", points: 4 }, { key: "B", text: "Attentive", points: 3 }, { key: "C", text: "Slightly attentive", points: 2 }, { key: "D", text: "Inattentive", points: 1 }
      ]},
      { id: 10, text: "Do you find it difficult to control your impulses or reactions?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 11, text: "Do you ask for help when you struggle with a task?", options: [
        { key: "A", text: "Always", points: 4 }, { key: "B", text: "Often", points: 3 }, { key: "C", text: "Sometimes", points: 2 }, { key: "D", text: "Rarely", points: 1 }
      ]},
      { id: 12, text: "How productive are you at work or study?", options: [
        { key: "A", text: "Very high", points: 4 }, { key: "B", text: "High", points: 3 }, { key: "C", text: "Low", points: 2 }, { key: "D", text: "Very low", points: 1 }
      ]},
      { id: 13, text: "Do you make time for recreational activities and hobbies?", options: [
        { key: "A", text: "Regularly", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Rarely", points: 2 }, { key: "D", text: "Never", points: 1 }
      ]},
      { id: 14, text: "Do you struggle to meet deadlines or complete tasks?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 15, text: "How well do you adapt to sudden changes in your routine?", options: [
        { key: "A", text: "Easily", points: 4 }, { key: "B", text: "With slight difficulty", points: 3 }, { key: "C", text: "With difficulty", points: 2 }, { key: "D", text: "I cannot adapt", points: 1 }
      ]},
      { id: 16, text: "Do you excessively use your phone or social media?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 17, text: "Do you find it difficult to prioritize your daily tasks?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 18, text: "How committed are you to a healthy routine (early sleep, healthy eating, exercise)?", options: [
        { key: "A", text: "Very committed", points: 4 }, { key: "B", text: "Committed", points: 3 }, { key: "C", text: "Uncommitted", points: 2 }, { key: "D", text: "Neglectful", points: 1 }
      ]},
      { id: 19, text: "Do you try new activities or step outside your comfort zone?", options: [
        { key: "A", text: "Regularly", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Rarely", points: 2 }, { key: "D", text: "Never", points: 1 }
      ]},
      { id: 20, text: "Do you find yourself multitasking without completing any task?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 21, text: "How strong is your ability to resist temptations (unhealthy food, overspending, etc.)?", options: [
        { key: "A", text: "Very strong", points: 4 }, { key: "B", text: "Strong", points: 3 }, { key: "C", text: "Weak", points: 2 }, { key: "D", text: "Very weak", points: 1 }
      ]},
      { id: 22, text: "Do you find it hard to start daily activities (waking up, showering, going out)?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 23, text: "Do you feel bored or empty during your free time?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 24, text: "How consistently do you follow through on the plans and goals you set for yourself?", options: [
        { key: "A", text: "Consistently", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "I give up", points: 2 }, { key: "D", text: "I don't set plans", points: 1 }
      ]},
      { id: 25, text: "Do you find it hard to relax or sit still without doing something?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 26, text: "Do you tend to withdraw from difficult situations rather than face them?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 27, text: "How well can you maintain focus on a single task for an extended period?", options: [
        { key: "A", text: "Very well", points: 4 }, { key: "B", text: "Well", points: 3 }, { key: "C", text: "Poorly", points: 2 }, { key: "D", text: "Very poorly", points: 1 }
      ]},
      { id: 28, text: "Do your negative emotions affect your performance at work or study?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 29, text: "Do you find it difficult to finish projects or tasks you start?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 30, text: "How satisfied do you feel with what you accomplish on a daily basis?", options: [
        { key: "A", text: "Very satisfied", points: 4 }, { key: "B", text: "Satisfied", points: 3 }, { key: "C", text: "Dissatisfied", points: 2 }, { key: "D", text: "Very dissatisfied", points: 1 }
      ]}
    ]
  },
  3: {
    name: "Social Aspect",
    questions: [
      { id: 1, text: "How satisfied are you with your social relationships (friends, family, colleagues)?", options: [
        { key: "A", text: "Very satisfied", points: 4 }, { key: "B", text: "Satisfied", points: 3 }, { key: "C", text: "Dissatisfied", points: 2 }, { key: "D", text: "Very dissatisfied", points: 1 }
      ]},
      { id: 2, text: "Do you feel supported and appreciated by the important people in your life?", options: [
        { key: "A", text: "Always", points: 4 }, { key: "B", text: "Often", points: 3 }, { key: "C", text: "Sometimes", points: 2 }, { key: "D", text: "Rarely", points: 1 }
      ]},
      { id: 3, text: "How easy is it for you to communicate with others and express your feelings and needs?", options: [
        { key: "A", text: "Very easy", points: 4 }, { key: "B", text: "Easy", points: 3 }, { key: "C", text: "Sometimes difficult", points: 2 }, { key: "D", text: "Very difficult", points: 1 }
      ]},
      { id: 4, text: "Do you regularly participate in social or community activities?", options: [
        { key: "A", text: "Regularly", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Rarely", points: 2 }, { key: "D", text: "I don't participate", points: 1 }
      ]},
      { id: 5, text: "Do you feel a sense of belonging to a particular group or community?", options: [
        { key: "A", text: "Yes, strongly", points: 4 }, { key: "B", text: "Yes, generally", points: 3 }, { key: "C", text: "No, I feel disconnected", points: 2 }, { key: "D", text: "I don't think about it", points: 1 }
      ]},
      { id: 6, text: "Do you feel lonely or isolated even when people are around you?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 7, text: "How confident are you in your ability to make new friends?", options: [
        { key: "A", text: "Very confident", points: 4 }, { key: "B", text: "Confident", points: 3 }, { key: "C", text: "Not confident", points: 2 }, { key: "D", text: "Not confident at all", points: 1 }
      ]},
      { id: 8, text: "Do you feel nervous or anxious in social situations?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 9, text: "How good are your conflict resolution skills with others?", options: [
        { key: "A", text: "Very good", points: 4 }, { key: "B", text: "Good", points: 3 }, { key: "C", text: "Poor", points: 2 }, { key: "D", text: "Very poor", points: 1 }
      ]},
      { id: 10, text: "Do you feel that others understand you and value your perspective?", options: [
        { key: "A", text: "Always", points: 4 }, { key: "B", text: "Often", points: 3 }, { key: "C", text: "Sometimes", points: 2 }, { key: "D", text: "Rarely", points: 1 }
      ]},
      { id: 11, text: "How often do you communicate with your family members?", options: [
        { key: "A", text: "Continuously", points: 4 }, { key: "B", text: "Weekly", points: 3 }, { key: "C", text: "Monthly", points: 2 }, { key: "D", text: "Rarely", points: 1 }
      ]},
      { id: 12, text: "Do you feel comfortable asking others for help?", options: [
        { key: "A", text: "Always", points: 4 }, { key: "B", text: "Often", points: 3 }, { key: "C", text: "Sometimes", points: 2 }, { key: "D", text: "Rarely", points: 1 }
      ]},
      { id: 13, text: "Do you have someone you trust to share your feelings and thoughts with?", options: [
        { key: "A", text: "Yes, multiple people", points: 4 }, { key: "B", text: "Yes, one person", points: 3 }, { key: "C", text: "No, not currently", points: 2 }, { key: "D", text: "No, never", points: 1 }
      ]},
      { id: 14, text: "How confident do you feel speaking in front of a group of people?", options: [
        { key: "A", text: "Very confident", points: 4 }, { key: "B", text: "Confident", points: 3 }, { key: "C", text: "Anxious", points: 2 }, { key: "D", text: "Very fearful", points: 1 }
      ]},
      { id: 15, text: "Do you feel that others take advantage of you or don't appreciate you?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 16, text: "How easy is it for you to say 'no' to others when you want to?", options: [
        { key: "A", text: "Very easy", points: 4 }, { key: "B", text: "Easy", points: 3 }, { key: "C", text: "Difficult", points: 2 }, { key: "D", text: "Very difficult", points: 1 }
      ]},
      { id: 17, text: "Do you feel jealous or experience unhealthy competition with others?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 18, text: "How satisfied are you with your role in your social circle (family, work, friends)?", options: [
        { key: "A", text: "Very satisfied", points: 4 }, { key: "B", text: "Satisfied", points: 3 }, { key: "C", text: "Dissatisfied", points: 2 }, { key: "D", text: "Very dissatisfied", points: 1 }
      ]},
      { id: 19, text: "Do you prefer isolation and avoid social gatherings?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 20, text: "Do you find it difficult to understand others' feelings or empathize with them?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 21, text: "How good are your relationships at work or school?", options: [
        { key: "A", text: "Excellent", points: 4 }, { key: "B", text: "Good", points: 3 }, { key: "C", text: "Average", points: 2 }, { key: "D", text: "Poor", points: 1 }
      ]},
      { id: 22, text: "Do you feel social pressure to be a certain way?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 23, text: "Do you initiate contact with others or wait for them to reach out?", options: [
        { key: "A", text: "I always initiate", points: 4 }, { key: "B", text: "I sometimes initiate", points: 3 }, { key: "C", text: "I usually wait", points: 2 }, { key: "D", text: "I always wait", points: 1 }
      ]},
      { id: 24, text: "How much do your relationships get affected by your psychological state?", options: [
        { key: "A", text: "Not affected", points: 4 }, { key: "B", text: "Slightly", points: 3 }, { key: "C", text: "Noticeably", points: 2 }, { key: "D", text: "Significantly", points: 1 }
      ]},
      { id: 25, text: "Do you feel you have a strong social support network?", options: [
        { key: "A", text: "Yes, very strong", points: 4 }, { key: "B", text: "Yes, acceptable", points: 3 }, { key: "C", text: "Weak", points: 2 }, { key: "D", text: "Nonexistent", points: 1 }
      ]},
      { id: 26, text: "Do you interact with others' posts or communicate via social media?", options: [
        { key: "A", text: "Regularly", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Rarely", points: 2 }, { key: "D", text: "Never", points: 1 }
      ]},
      { id: 27, text: "Do you fear being judged by others?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 28, text: "How easily can you forgive and move past conflicts with others?", options: [
        { key: "A", text: "Easily", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "With difficulty", points: 2 }, { key: "D", text: "I cannot", points: 1 }
      ]},
      { id: 29, text: "Do you feel grateful for the people in your life?", options: [
        { key: "A", text: "Always", points: 4 }, { key: "B", text: "Often", points: 3 }, { key: "C", text: "Sometimes", points: 2 }, { key: "D", text: "Rarely", points: 1 }
      ]},
      { id: 30, text: "Do past disappointments affect your current trust in others?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]}
    ]
  },
  4: {
    name: "Emotional Aspect",
    questions: [
      { id: 1, text: "How often do you feel sad, hopeless, or lose interest in things?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 2, text: "Do you find it difficult to control your emotions (anger, anxiety, sadness)?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 3, text: "How relaxed and calm do you feel in your daily life?", options: [
        { key: "A", text: "Always", points: 4 }, { key: "B", text: "Often", points: 3 }, { key: "C", text: "Sometimes", points: 2 }, { key: "D", text: "Rarely", points: 1 }
      ]},
      { id: 4, text: "Do you feel excessively anxious or stressed about the future or daily events?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 5, text: "How well can you enjoy positive moments and feel happiness?", options: [
        { key: "A", text: "Very well", points: 4 }, { key: "B", text: "Well", points: 3 }, { key: "C", text: "Sometimes poorly", points: 2 }, { key: "D", text: "Very poorly", points: 1 }
      ]},
      { id: 6, text: "Do you experience severe mood swings without a clear reason?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 7, text: "How frustrated do you feel when things don't go your way?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 8, text: "Do you find it difficult to recover from difficult emotional situations?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 9, text: "How often do you feel angry or irritable over minor things?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 10, text: "Do you feel excessive fear or apprehension about events that haven't happened yet?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 11, text: "How well can you empathize with others and understand their feelings?", options: [
        { key: "A", text: "Very well", points: 4 }, { key: "B", text: "Well", points: 3 }, { key: "C", text: "Poorly", points: 2 }, { key: "D", text: "Very poorly", points: 1 }
      ]},
      { id: 12, text: "Do you feel emotionally drained or that you give more than you receive?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 13, text: "How well can you control your emotional reactions in difficult situations?", options: [
        { key: "A", text: "Very well", points: 4 }, { key: "B", text: "Well", points: 3 }, { key: "C", text: "Poorly", points: 2 }, { key: "D", text: "Very poorly", points: 1 }
      ]},
      { id: 14, text: "Are you overly sensitive to criticism or others' opinions of you?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 15, text: "Do you find it difficult to express your feelings to others?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 16, text: "How often do you feel guilty or engage in excessive self-blame?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 17, text: "Do you feel optimistic about your future?", options: [
        { key: "A", text: "Always", points: 4 }, { key: "B", text: "Often", points: 3 }, { key: "C", text: "Sometimes", points: 2 }, { key: "D", text: "Rarely", points: 1 }
      ]},
      { id: 18, text: "How emotionally affected are you by negative news or events?", options: [
        { key: "A", text: "Mildly", points: 4 }, { key: "B", text: "Moderately", points: 3 }, { key: "C", text: "Greatly", points: 2 }, { key: "D", text: "Severely", points: 1 }
      ]},
      { id: 19, text: "Do you feel grateful for the good things in your life?", options: [
        { key: "A", text: "Always", points: 4 }, { key: "B", text: "Often", points: 3 }, { key: "C", text: "Sometimes", points: 2 }, { key: "D", text: "Rarely", points: 1 }
      ]},
      { id: 20, text: "Do you find it hard to calm down after experiencing an upsetting situation?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 21, text: "How confident are you in your ability to handle difficult emotions?", options: [
        { key: "A", text: "Very confident", points: 4 }, { key: "B", text: "Confident", points: 3 }, { key: "C", text: "Not confident", points: 2 }, { key: "D", text: "Not confident at all", points: 1 }
      ]},
      { id: 22, text: "Do you experience conflicting feelings toward the same people or situations?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 23, text: "Are you easily made to laugh or feel happy by others?", options: [
        { key: "A", text: "Easily", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Rarely", points: 2 }, { key: "D", text: "Never", points: 1 }
      ]},
      { id: 24, text: "Do your negative emotions influence your daily decisions?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 25, text: "How much inner peace and satisfaction do you feel about your life?", options: [
        { key: "A", text: "Very much", points: 4 }, { key: "B", text: "Much", points: 3 }, { key: "C", text: "Little", points: 2 }, { key: "D", text: "Very little", points: 1 }
      ]},
      { id: 26, text: "Do you find yourself crying easily or struggling to cry?", options: [
        { key: "A", text: "Normal", points: 4 }, { key: "B", text: "I cry sometimes", points: 3 }, { key: "C", text: "I cry a lot", points: 2 }, { key: "D", text: "I cannot cry", points: 1 }
      ]},
      { id: 27, text: "Do you feel emotionally numb or disconnected from your feelings?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 28, text: "How well can you identify and name your emotions?", options: [
        { key: "A", text: "Very well", points: 4 }, { key: "B", text: "Well", points: 3 }, { key: "C", text: "Poorly", points: 2 }, { key: "D", text: "Very poorly", points: 1 }
      ]},
      { id: 29, text: "Do you feel overwhelmed by the mix of emotions inside you?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 30, text: "Do you find that your emotions affect your physical health?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]}
    ]
  },
  5: {
    name: "Cognitive Aspect",
    questions: [
      { id: 1, text: "Do you have difficulty making decisions, even simple ones?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 2, text: "How well can you remember new information or recent events?", options: [
        { key: "A", text: "Very well", points: 4 }, { key: "B", text: "Well", points: 3 }, { key: "C", text: "Sometimes poorly", points: 2 }, { key: "D", text: "Very poorly", points: 1 }
      ]},
      { id: 3, text: "Do you feel your thoughts are negative or pessimistic most of the time?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 4, text: "How well can you solve problems and think clearly?", options: [
        { key: "A", text: "Very well", points: 4 }, { key: "B", text: "Well", points: 3 }, { key: "C", text: "Sometimes poorly", points: 2 }, { key: "D", text: "Very poorly", points: 1 }
      ]},
      { id: 5, text: "Do you find yourself overthinking the same thoughts or events repeatedly?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 6, text: "Do you find it difficult to concentrate on a single task for an extended period?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 7, text: "Do you feel slow in thinking or have difficulty processing information?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 8, text: "Do you find it hard to see the positive side of situations?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 9, text: "Do you suffer from intrusive or disturbing thoughts that you cannot stop?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 10, text: "How well can you learn new skills or new information?", options: [
        { key: "A", text: "Very well", points: 4 }, { key: "B", text: "Well", points: 3 }, { key: "C", text: "Poorly", points: 2 }, { key: "D", text: "Very poorly", points: 1 }
      ]},
      { id: 11, text: "Do you find it difficult to organize your thoughts?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 12, text: "Do you feel your thoughts are racing or crowded uncomfortably?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 13, text: "How well can you assess risks and make balanced decisions?", options: [
        { key: "A", text: "Very well", points: 4 }, { key: "B", text: "Well", points: 3 }, { key: "C", text: "Poorly", points: 2 }, { key: "D", text: "Very poorly", points: 1 }
      ]},
      { id: 14, text: "Do you trust your ability to judge things correctly?", options: [
        { key: "A", text: "Always", points: 4 }, { key: "B", text: "Often", points: 3 }, { key: "C", text: "Sometimes", points: 2 }, { key: "D", text: "Rarely", points: 1 }
      ]},
      { id: 15, text: "Do you find yourself comparing yourself to others negatively?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 16, text: "How easily can you let go of negative thoughts?", options: [
        { key: "A", text: "Easily", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "With difficulty", points: 2 }, { key: "D", text: "I cannot", points: 1 }
      ]},
      { id: 17, text: "Do your anxious thoughts affect your ability to sleep?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 18, text: "How well can you see things from other people's perspectives?", options: [
        { key: "A", text: "Very well", points: 4 }, { key: "B", text: "Well", points: 3 }, { key: "C", text: "Poorly", points: 2 }, { key: "D", text: "Very poorly", points: 1 }
      ]},
      { id: 19, text: "Do you frequently feel confused or mentally scattered?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 20, text: "How well can you plan for the future realistically?", options: [
        { key: "A", text: "Very well", points: 4 }, { key: "B", text: "Well", points: 3 }, { key: "C", text: "Poorly", points: 2 }, { key: "D", text: "Very poorly", points: 1 }
      ]},
      { id: 21, text: "Do you find it hard to believe that good things can happen to you?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 22, text: "Do you blame yourself for things beyond your control?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 23, text: "How well can you learn from your mistakes rather than dwell on them?", options: [
        { key: "A", text: "Very well", points: 4 }, { key: "B", text: "Well", points: 3 }, { key: "C", text: "Poorly", points: 2 }, { key: "D", text: "Very poorly", points: 1 }
      ]},
      { id: 24, text: "Do you feel your thoughts are irrational or exaggerated?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 25, text: "How well can you concentrate when reading or watching a movie without getting distracted?", options: [
        { key: "A", text: "Very well", points: 4 }, { key: "B", text: "Well", points: 3 }, { key: "C", text: "Poorly", points: 2 }, { key: "D", text: "Very poorly", points: 1 }
      ]},
      { id: 26, text: "Do you overanalyze simple situations or other people's words?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 27, text: "Do you feel mental fog or difficulty generating new ideas?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 28, text: "How well can you accept constructive criticism and benefit from it?", options: [
        { key: "A", text: "Very well", points: 4 }, { key: "B", text: "Well", points: 3 }, { key: "C", text: "Poorly", points: 2 }, { key: "D", text: "Very poorly", points: 1 }
      ]},
      { id: 29, text: "Do you feel that your thoughts negatively affect your self-confidence?", options: [
        { key: "A", text: "Rarely", points: 4 }, { key: "B", text: "Sometimes", points: 3 }, { key: "C", text: "Often", points: 2 }, { key: "D", text: "Always", points: 1 }
      ]},
      { id: 30, text: "How well can you think creatively to solve problems?", options: [
        { key: "A", text: "Very well", points: 4 }, { key: "B", text: "Well", points: 3 }, { key: "C", text: "Poorly", points: 2 }, { key: "D", text: "Very poorly", points: 1 }
      ]}
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
  'profile.menuPricing': { ar: 'الباقات', en: 'Packages' },
  'profile.menuExport': { ar: 'تصدير البيانات', en: 'Export Data' },
  'profile.menuClear': { ar: 'مسح جميع البيانات', en: 'Clear All Data' },
  'profile.menuBreathing': { ar: 'تمارين التنفس (4-7-8)', en: 'Breathing Exercise (4-7-8)' },

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
  'chart.cognitive': { ar: 'معرفي', en: 'Cognitive' },

  'pricing.title': { ar: 'اختر باقتك', en: 'Choose Your Plan' },
  'pricing.subtitle': { ar: 'ابدأ مجاناً، وطوّر رحلتك النفسية متى احتجت', en: 'Start free, upgrade your wellness journey anytime' },
  'pricing.freeName': { ar: 'الخطة المجانية', en: 'Free Plan' },
  'pricing.freePrice': { ar: 'مجاناً', en: 'Free' },
  'pricing.feature1': { ar: 'تقييم نفسي يومي', en: 'Daily psychological assessment' },
  'pricing.feature2': { ar: '3 تمارين تفاعلية', en: '3 interactive exercises' },
  'pricing.feature3': { ar: 'تخزين بيانات محلي', en: 'Local data storage' },
  'pricing.freeBtn': { ar: 'خطتك الحالية', en: 'Your Current Plan' },
  'pricing.bestValue': { ar: 'الأفضل', en: 'Best Value' },
  'pricing.premiumName': { ar: 'Mind Guard Premium', en: 'Mind Guard Premium' },
  'pricing.premiumPrice': { ar: '499 دج/شهرياً', en: '499 DZD/month' },
  'pricing.premiumFeature1': { ar: 'كل ميزات المجانية', en: 'All free features' },
  'pricing.premiumFeature2': { ar: 'تقارير أسبوعية مفصلة', en: 'Detailed weekly reports' },
  'pricing.premiumFeature3': { ar: 'تمارين حصرية إضافية', en: 'Exclusive additional exercises' },
  'pricing.premiumFeature4': { ar: 'مزامنة سحابية', en: 'Cloud sync' },
  'pricing.premiumBtn': { ar: 'قريباً', en: 'Coming Soon' },
  'pricing.nav': { ar: 'الباقات', en: 'Pricing' },
  'pricing.note': { ar: 'بياناتك آمنة ومشفرة. يمكنك الترقية في أي وقت.', en: 'Your data is safe and encrypted. Upgrade anytime.' },

  'hero.title': { ar: 'منصة MindGuard <br><span>المنصة الرقمية لتحليل المؤشرات السلوكية والتنبؤ باضطرابات القلق، الاكتئاب، والإجهاد النفسي</span>', en: 'MindGuard Platform <br><span>Digital analysis of behavioral indicators &amp; prediction of anxiety, depression, and psychological stress.</span>' },
  'hero.subtitle': { ar: 'نظام رصد خماسي الأبعاد (معرفي، سلوكي، انفعالي، اجتماعي، وفيزيولوجي) يعتمد على التقييم الذاتي الرقمي لتقديم إنذار نفسي استباقي، وحماية خصوصيتك بالكامل دون الحاجة لتسجيل دخول.', en: 'A five-dimensional monitoring system (Cognitive, Behavioral, Emotional, Social, Physiological) based on digital self-assessment to provide proactive psychological alerts, ensuring complete privacy without login requirements.' },

  'pricing.free.title': { ar: 'النسخة المجانية', en: 'Free Tier' },
  'pricing.free.price': { ar: '0 دج', en: '0 DA' },
  'pricing.free.desc': { ar: 'متابعة أولية لجميع الأبعاد الخمسة بأسئلة محدودة، مع ميزات التتبع والإنذارات الاستباقية العامة.', en: 'Initial monitoring of all 5 dimensions with limited questions, plus tracking features & general proactive alerts.' },
  'pricing.free.btn': { ar: '✓ خطتك الحالية', en: '✓ Current Plan' },

  'pricing.basic.title': { ar: 'النسخة الأساسية', en: 'Basic Tier' },
  'pricing.basic.price': { ar: '1,000 دج / شهرياً', en: '1,000 DA / monthly' },
  'pricing.basic.desc': { ar: 'تتبع موسع للمؤشرات النفسية مع تقديم التوصيات المخصصة والإنذارات الاستباقية الدقيقة لاضطرابات القلق والاكتئاب.', en: 'Expanded psychological tracking with personalized recommendations & precise proactive alerts for anxiety & depression.' },
  'pricing.basic.btn': { ar: 'قريباً', en: 'Coming Soon' },

  'pricing.advanced.title': { ar: 'النسخة المتقدمة', en: 'Advanced Tier' },
  'pricing.advanced.price': { ar: '1,500 دج / شهرياً', en: '1,500 DA / monthly' },
  'pricing.advanced.desc': { ar: 'مراقبة شاملة وعميقة لجميع المؤشرات الوقائية للأفراد، مع تقديم توصيات عيادية عميقة وتمارين استرخاء مدمجة لمواجهة الإجهاد.', en: 'Comprehensive monitoring of all preventive indicators, featuring deep clinical recommendations & integrated relaxation exercises for stress management.' },
  'pricing.advanced.btn': { ar: 'قريباً', en: 'Coming Soon' },

  'pricing.enterprise.title': { ar: 'نسخة المؤسسات والجامعات', en: 'Enterprise & Universities' },
  'pricing.enterprise.price': { ar: '25,000 دج / سنوياً', en: '25,000 DA / yearly' },
  'pricing.enterprise.desc': { ar: 'باقات وعقود مخصصة موجهة للجامعات والمؤسسات لضمان الرفاهية النفسية والوقائية للطلاب والموظفين.', en: 'Custom packages & contracts for universities & organizations to ensure psychological well-being & preventive care for students & staff.' },
  'pricing.enterprise.btn': { ar: 'قريباً', en: 'Coming Soon' },

  'alert.title': { ar: 'تنبيه وقائي', en: 'Preventive Alert' },
  'alert.message': { ar: 'مؤشرات الإجهاد/القلق لديك مرتفعة اليوم. نوصي بالبدء فوراً بتمرين وقائي مخصص.', en: 'Your stress/anxiety indicators are high today. We recommend starting a preventive exercise immediately.' },
  'alert.cta': { ar: 'ابدأ التمرين الآن', en: 'Start Exercise Now' }
};

i18n.lang = localStorage.getItem('mindGuard_lang') || 'ar';
if (!document.documentElement.hasAttribute('data-force-rtl')) {
  document.documentElement.lang = i18n.lang;
  document.documentElement.dir = i18n.lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.classList.toggle('lang-en', i18n.lang === 'en');
  document.documentElement.classList.toggle('lang-ar', i18n.lang === 'ar');
}
document.addEventListener('DOMContentLoaded', () => { i18n.init(); });
