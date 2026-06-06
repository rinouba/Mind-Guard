const QUESTIONS = {
  1: {
    name: "الجانب الفيزيولوجي",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 4C9 4 7 6 7 8v2c0 2 1 3 3 3" stroke="#5B8C85" stroke-width="1.8" stroke-linecap="round" fill="none"/><path d="M12 4c3 0 5 2 5 4v2c0 2-1 3-3 3" stroke="#5B8C85" stroke-width="1.8" stroke-linecap="round" fill="none"/><path d="M6 16c0 3 2.5 6 6 6s6-3 6-6" stroke="#5B8C85" stroke-width="1.8" stroke-linecap="round" fill="none"/></svg>',
    questions: [
      {
        id: 1, text: "كيف تصف جودة نومك في معظم الليالي؟",
        options: [
          { key: "أ", text: "ممتاز", points: 4 },
          { key: "ب", text: "جيد", points: 3 },
          { key: "ج", text: "متوسط", points: 2 },
          { key: "د", text: "سيء", points: 1 }
        ]
      },
      {
        id: 2, text: "هل تشعر بالتعب أو الإرهاق الجسدي بشكل متكرر دون سبب واضح؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 3, text: "ما مدى انتظام ممارستك للنشاط البدني خلال الأسبوع؟",
        options: [
          { key: "أ", text: "بانتظام", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "نادراً", points: 2 },
          { key: "د", text: "أبداً", points: 1 }
        ]
      },
      {
        id: 4, text: "هل لاحظت أي تغيرات كبيرة في شهيتك أو وزنك مؤخراً؟",
        options: [
          { key: "أ", text: "لا يوجد", points: 4 },
          { key: "ب", text: "طفيفة", points: 3 },
          { key: "ج", text: "ملحوظة", points: 2 },
          { key: "د", text: "كبيرة", points: 1 }
        ]
      },
      {
        id: 5, text: "هل تعاني من آلام جسدية متكررة (مثل الصداع، آلام الظهر، مشاكل الهضم) لا يمكن تفسيرها طبياً؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 6, text: "كيف تقيم مستوى طاقتك خلال اليوم بشكل عام؟",
        options: [
          { key: "أ", text: "مرتفعة", points: 4 },
          { key: "ب", text: "جيدة", points: 3 },
          { key: "ج", text: "منخفضة", points: 2 },
          { key: "د", text: "منخفضة جداً", points: 1 }
        ]
      },
      {
        id: 7, text: "هل تشعر بتوتر أو تصلب في عضلاتك دون سبب واضح؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 8, text: "ما مدى معاناتك من الصداع خلال الشهر الماضي؟",
        options: [
          { key: "أ", text: "لم أعاني", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "باستمرار", points: 1 }
        ]
      },
      {
        id: 9, text: "هل تعاني من مشاكل في الهضم أو الجهاز الهضمي؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 10, text: "هل تلاحظ تغيراً في نمط تنفسك (سرعة أو ضيق) عند الشعور بالتوتر؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 11, text: "ما مدى قدرتك على الاسترخاء الجسدي عندما تريد؟",
        options: [
          { key: "أ", text: "بسهولة", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "بصعوبة", points: 2 },
          { key: "د", text: "لا أستطيع", points: 1 }
        ]
      },
      {
        id: 12, text: "هل تشعر بتحسن بعد الراحة أو النوم؟",
        options: [
          { key: "أ", text: "دائماً", points: 4 },
          { key: "ب", text: "غالباً", points: 3 },
          { key: "ج", text: "أحياناً", points: 2 },
          { key: "د", text: "نادراً", points: 1 }
        ]
      },
      {
        id: 13, text: "هل تواجه صعوبة في الاستيقاظ صباحاً والشعور بالنشاط؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 14, text: "ما مدى انتظام وجباتك اليومية؟",
        options: [
          { key: "أ", text: "منتظمة جداً", points: 4 },
          { key: "ب", text: "منتظمة", points: 3 },
          { key: "ج", text: "غير منتظمة", points: 2 },
          { key: "د", text: "فوضوية", points: 1 }
        ]
      },
      {
        id: 15, text: "هل تشعر بأعراض جسدية (تسارع ضربات القلب، تعرق، رعشة) عند القلق؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 16, text: "ما مدى شعورك بالخمول أو الكسل البدني خلال اليوم؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 17, text: "هل تمارس أنشطة بدنية تستمتع بها؟",
        options: [
          { key: "أ", text: "بانتظام", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "نادراً", points: 2 },
          { key: "د", text: "أبداً", points: 1 }
        ]
      },
      {
        id: 18, text: "هل تعاني من اضطرابات في النوم مثل الأرق أو الاستيقاظ المتكرر؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 19, text: "ما مدى حساسية جهازك المناعي (إصابتك المتكررة بنزلات البرد أو الأمراض)؟",
        options: [
          { key: "أ", text: "نادراً ما أمرض", points: 4 },
          { key: "ب", text: "أمرض أحياناً", points: 3 },
          { key: "ج", text: "أمرض غالباً", points: 2 },
          { key: "د", text: "أمرض باستمرار", points: 1 }
        ]
      },
      {
        id: 20, text: "هل تشعر بتحسن في حالتك المزاجية بعد ممارسة الرياضة؟",
        options: [
          { key: "أ", text: "دائماً", points: 4 },
          { key: "ب", text: "غالباً", points: 3 },
          { key: "ج", text: "أحياناً", points: 2 },
          { key: "د", text: "لا أمارس الرياضة", points: 1 }
        ]
      },
      {
        id: 21, text: "ما مدى وعيك بالإشارات الجسدية التي يرسلها جسمك (الجوع، التعب، الألم)؟",
        options: [
          { key: "أ", text: "واعٍ جداً", points: 4 },
          { key: "ب", text: "واعٍ", points: 3 },
          { key: "ج", text: "قليل الوعي", points: 2 },
          { key: "د", text: "غير واعٍ", points: 1 }
        ]
      },
      {
        id: 22, text: "هل تجد نفسك تعاني من التعب بعد القيام بمجهود بسيط؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 23, text: "ما مدى جودة شهيتك للطعام؟",
        options: [
          { key: "أ", text: "جيدة جداً", points: 4 },
          { key: "ب", text: "جيدة", points: 3 },
          { key: "ج", text: "ضعيفة", points: 2 },
          { key: "د", text: "ضعيفة جداً", points: 1 }
        ]
      },
      {
        id: 24, text: "هل تشعر باضطراب في معدتك أو أمعائك مرتبط بالتوتر؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 25, text: "ما مدى رضاك عن مستوى لياقتك البدنية؟",
        options: [
          { key: "أ", text: "راضٍ جداً", points: 4 },
          { key: "ب", text: "راضٍ", points: 3 },
          { key: "ج", text: "غير راضٍ", points: 2 },
          { key: "د", text: "غير راضٍ أبداً", points: 1 }
        ]
      },
      {
        id: 26, text: "هل تواجه صعوبة في التنفس بعمق أو تشعر بضيق في الصدر؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 27, text: "ما مدى تأثر نومك بالأفكار المزعجة أو القلق؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 28, text: "هل تلاحظ أنك تتنفس بسرعة أو بشكل سطحي دون مجهود بدني؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 29, text: "ما مدى شعورك بالراحة الجسدية في نهاية اليوم؟",
        options: [
          { key: "أ", text: "مرتاح جداً", points: 4 },
          { key: "ب", text: "مرتاح", points: 3 },
          { key: "ج", text: "متعب", points: 2 },
          { key: "د", text: "منهك", points: 1 }
        ]
      },
      {
        id: 30, text: "هل تحتاج إلى منبهات (كافيين، مشروبات طاقة) للاستمرار في يومك؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      }
    ]
  },
  2: {
    name: "الجانب السلوكي",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#5B8C85" stroke-width="1.8" fill="rgba(91,140,133,0.06)"/><circle cx="12" cy="12" r="5" stroke="#5B8C85" stroke-width="1.8" fill="none"/><circle cx="12" cy="12" r="2" fill="#5B8C85" stroke="none"/></svg>',
    questions: [
      {
        id: 1, text: "ما مدى سهولة قيامك بالمهام اليومية والأنشطة التي تتطلب جهداً؟",
        options: [
          { key: "أ", text: "سهلة جداً", points: 4 },
          { key: "ب", text: "سهلة", points: 3 },
          { key: "ج", text: "صعبة أحياناً", points: 2 },
          { key: "د", text: "صعبة جداً", points: 1 }
        ]
      },
      {
        id: 2, text: "هل تجد نفسك تتجنب المواقف الاجتماعية أو الأنشطة التي كنت تستمتع بها سابقاً؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 3, text: "ما مدى قدرتك على التركيز وإنجاز المهام التي تتطلب انتباهاً؟",
        options: [
          { key: "أ", text: "جيد جداً", points: 4 },
          { key: "ب", text: "جيد", points: 3 },
          { key: "ج", text: "ضعيف أحياناً", points: 2 },
          { key: "د", text: "ضعيف جداً", points: 1 }
        ]
      },
      {
        id: 4, text: "هل تلجأ إلى سلوكيات معينة (مثل الإفراط في الأكل، التدخين، العزلة) للتعامل مع التوتر؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 5, text: "ما مدى شعورك بالتحفيز لإنجاز أهدافك أو البدء بمشاريع جديدة؟",
        options: [
          { key: "أ", text: "متحفز جداً", points: 4 },
          { key: "ب", text: "متحفز", points: 3 },
          { key: "ج", text: "قليل التحفيز", points: 2 },
          { key: "د", text: "لا يوجد تحفيز", points: 1 }
        ]
      },
      {
        id: 6, text: "هل تماطل في إنجاز المهام المهمة وتؤجلها؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 7, text: "ما مدى تنظيمك لوقتك وجدولك اليومي؟",
        options: [
          { key: "أ", text: "منظم جداً", points: 4 },
          { key: "ب", text: "منظم", points: 3 },
          { key: "ج", text: "غير منظم", points: 2 },
          { key: "د", text: "فوضوي", points: 1 }
        ]
      },
      {
        id: 8, text: "هل تتابع روتيناً يومياً ثابتاً (مواعيد النوم، الأكل، العمل)؟",
        options: [
          { key: "أ", text: "دائماً", points: 4 },
          { key: "ب", text: "غالباً", points: 3 },
          { key: "ج", text: "أحياناً", points: 2 },
          { key: "د", text: "نادراً", points: 1 }
        ]
      },
      {
        id: 9, text: "ما مدى اهتمامك بنظافتك الشخصية ومظهرك العام؟",
        options: [
          { key: "أ", text: "مهتم جداً", points: 4 },
          { key: "ب", text: "مهتم", points: 3 },
          { key: "ج", text: "قليل الاهتمام", points: 2 },
          { key: "د", text: "غير مهتم", points: 1 }
        ]
      },
      {
        id: 10, text: "هل تجد صعوبة في السيطرة على اندفاعاتك أو ردود أفعالك؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 11, text: "هل تطلب المساعدة عندما تواجه صعوبة في مهمة ما؟",
        options: [
          { key: "أ", text: "دائماً", points: 4 },
          { key: "ب", text: "غالباً", points: 3 },
          { key: "ج", text: "أحياناً", points: 2 },
          { key: "د", text: "نادراً", points: 1 }
        ]
      },
      {
        id: 12, text: "ما مدى إنتاجيتك في العمل أو الدراسة؟",
        options: [
          { key: "أ", text: "عالية جداً", points: 4 },
          { key: "ب", text: "عالية", points: 3 },
          { key: "ج", text: "منخفضة", points: 2 },
          { key: "د", text: "منخفضة جداً", points: 1 }
        ]
      },
      {
        id: 13, text: "هل تخصص وقتاً للأنشطة الترفيهية والهوايات؟",
        options: [
          { key: "أ", text: "بانتظام", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "نادراً", points: 2 },
          { key: "د", text: "أبداً", points: 1 }
        ]
      },
      {
        id: 14, text: "هل تجد صعوبة في الالتزام بالمواعيد النهائية أو إكمال المهام؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 15, text: "ما مدى تكيفك مع التغيرات المفاجئة في روتينك؟",
        options: [
          { key: "أ", text: "بسهولة", points: 4 },
          { key: "ب", text: "بصعوبة بسيطة", points: 3 },
          { key: "ج", text: "بصعوبة", points: 2 },
          { key: "د", text: "لا أتأقلم", points: 1 }
        ]
      },
      {
        id: 16, text: "هل تلجأ لاستخدام الهاتف أو وسائل التواصل الاجتماعي بشكل مفرط؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 17, text: "هل تواجه صعوبة في ترتيب أولوياتك اليومية؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 18, text: "ما مدى التزامك بالروتين الصحي (النوم المبكر، الأكل الصحي، الرياضة)؟",
        options: [
          { key: "أ", text: "ملتزم جداً", points: 4 },
          { key: "ب", text: "ملتزم", points: 3 },
          { key: "ج", text: "غير ملتزم", points: 2 },
          { key: "د", text: "مهمل تماماً", points: 1 }
        ]
      },
      {
        id: 19, text: "هل تقوم بأنشطة جديدة أو تجارب خارج منطقة راحتك؟",
        options: [
          { key: "أ", text: "بانتظام", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "نادراً", points: 2 },
          { key: "د", text: "أبداً", points: 1 }
        ]
      },
      {
        id: 20, text: "هل تجد نفسك تقوم بأكثر من مهمة في وقت واحد دون إنجاز أي منها؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 21, text: "ما مدى قدرتك على مقاومة الإغراءات (الأكل غير الصحي، التسوق المفرط، إلخ)؟",
        options: [
          { key: "أ", text: "قوي جداً", points: 4 },
          { key: "ب", text: "قوي", points: 3 },
          { key: "ج", text: "ضعيف", points: 2 },
          { key: "د", text: "ضعيف جداً", points: 1 }
        ]
      },
      {
        id: 22, text: "هل تواجه صعوبة في بدء الأنشطة اليومية (الاستيقاظ، الاستحمام، الخروج)؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 23, text: "هل تشعر بالملل أو الفراغ في أوقات فراغك؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 24, text: "ما مدى متابعتك للخطط والأهداف التي تضعها لنفسك؟",
        options: [
          { key: "أ", text: "أتابعها باستمرار", points: 4 },
          { key: "ب", text: "أتابعها أحياناً", points: 3 },
          { key: "ج", text: "أتوقف عنها", points: 2 },
          { key: "د", text: "لا أضع خططاً", points: 1 }
        ]
      },
      {
        id: 25, text: "هل تجد صعوبة في الاسترخاء أو الجلوس دون فعل شيء؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 26, text: "هل تميل إلى الانسحاب من المواقف الصعبة بدلاً من مواجهتها؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 27, text: "ما مدى قدرتك على الحفاظ على تركيزك في مهمة واحدة لفترة طويلة؟",
        options: [
          { key: "أ", text: "جيد جداً", points: 4 },
          { key: "ب", text: "جيد", points: 3 },
          { key: "ج", text: "ضعيف", points: 2 },
          { key: "د", text: "ضعيف جداً", points: 1 }
        ]
      },
      {
        id: 28, text: "هل تؤثر مشاعرك السلبية على أدائك في العمل أو الدراسة؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 29, text: "هل تجد صعوبة في إنهاء المشاريع أو المهام التي تبدأها؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 30, text: "ما مدى شعورك بالإنجاز والرضا عن ما تنجزه يومياً؟",
        options: [
          { key: "أ", text: "راضٍ جداً", points: 4 },
          { key: "ب", text: "راضٍ", points: 3 },
          { key: "ج", text: "غير راضٍ", points: 2 },
          { key: "د", text: "غير راضٍ أبداً", points: 1 }
        ]
      }
    ]
  },
  3: {
    name: "الجانب الاجتماعي",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="9" r="4" stroke="#5B8C85" stroke-width="1.8" fill="rgba(91,140,133,0.06)"/><circle cx="15" cy="9" r="4" stroke="#5B8C85" stroke-width="1.8" fill="rgba(91,140,133,0.06)"/><path d="M5 20c0-3 2-5 4-5" stroke="#5B8C85" stroke-width="1.8" stroke-linecap="round" fill="none"/><path d="M19 20c0-3-2-5-4-5" stroke="#5B8C85" stroke-width="1.8" stroke-linecap="round" fill="none"/><path d="M9 15c0-2 1.5-4 3-4s3 2 3 4" stroke="#5B8C85" stroke-width="1.8" stroke-linecap="round" fill="none"/></svg>',
    questions: [
      {
        id: 1, text: "ما مدى رضاك عن علاقاتك الاجتماعية (الأصدقاء، العائلة، الزملاء)؟",
        options: [
          { key: "أ", text: "راضٍ جداً", points: 4 },
          { key: "ب", text: "راضٍ", points: 3 },
          { key: "ج", text: "غير راضٍ", points: 2 },
          { key: "د", text: "غير راضٍ أبداً", points: 1 }
        ]
      },
      {
        id: 2, text: "هل تشعر بالدعم والتقدير من الأشخاص المهمين في حياتك؟",
        options: [
          { key: "أ", text: "دائماً", points: 4 },
          { key: "ب", text: "غالباً", points: 3 },
          { key: "ج", text: "أحياناً", points: 2 },
          { key: "د", text: "نادراً", points: 1 }
        ]
      },
      {
        id: 3, text: "ما مدى سهولة تواصلك مع الآخرين والتعبير عن مشاعرك واحتياجاتك؟",
        options: [
          { key: "أ", text: "سهلة جداً", points: 4 },
          { key: "ب", text: "سهلة", points: 3 },
          { key: "ج", text: "صعبة أحياناً", points: 2 },
          { key: "د", text: "صعبة جداً", points: 1 }
        ]
      },
      {
        id: 4, text: "هل تشارك في أنشطة اجتماعية أو مجتمعية بانتظام؟",
        options: [
          { key: "أ", text: "بانتظام", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "نادراً", points: 2 },
          { key: "د", text: "لا أشارك", points: 1 }
        ]
      },
      {
        id: 5, text: "هل تشعر بالانتماء إلى مجموعة أو مجتمع معين؟",
        options: [
          { key: "أ", text: "نعم، بقوة", points: 4 },
          { key: "ب", text: "نعم، بشكل عام", points: 3 },
          { key: "ج", text: "لا، أشعر بالانفصال", points: 2 },
          { key: "د", text: "لا أفكر في ذلك", points: 1 }
        ]
      },
      {
        id: 6, text: "هل تشعر بالوحدة أو العزلة رغم وجود أشخاص حولك؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 7, text: "ما مدى ثقتك في قدرتك على تكوين صداقات جديدة؟",
        options: [
          { key: "أ", text: "واثق جداً", points: 4 },
          { key: "ب", text: "واثق", points: 3 },
          { key: "ج", text: "غير واثق", points: 2 },
          { key: "د", text: "غير واثق أبداً", points: 1 }
        ]
      },
      {
        id: 8, text: "هل تشعر بالتوتر أو القلق في المواقف الاجتماعية؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 9, text: "ما مدى جودة مهاراتك في حل الخلافات مع الآخرين؟",
        options: [
          { key: "أ", text: "جيدة جداً", points: 4 },
          { key: "ب", text: "جيدة", points: 3 },
          { key: "ج", text: "ضعيفة", points: 2 },
          { key: "د", text: "ضعيفة جداً", points: 1 }
        ]
      },
      {
        id: 10, text: "هل تشعر أن الآخرين يفهمونك ويقدرون وجهة نظرك؟",
        options: [
          { key: "أ", text: "دائماً", points: 4 },
          { key: "ب", text: "غالباً", points: 3 },
          { key: "ج", text: "أحياناً", points: 2 },
          { key: "د", text: "نادراً", points: 1 }
        ]
      },
      {
        id: 11, text: "ما مدى تواصلك مع أفراد عائلتك؟",
        options: [
          { key: "أ", text: "مستمر", points: 4 },
          { key: "ب", text: "أسبوعياً", points: 3 },
          { key: "ج", text: "شهرياً", points: 2 },
          { key: "د", text: "نادراً", points: 1 }
        ]
      },
      {
        id: 12, text: "هل تشعر بالراحة عند طلب المساعدة من الآخرين؟",
        options: [
          { key: "أ", text: "دائماً", points: 4 },
          { key: "ب", text: "غالباً", points: 3 },
          { key: "ج", text: "أحياناً", points: 2 },
          { key: "د", text: "نادراً", points: 1 }
        ]
      },
      {
        id: 13, text: "هل لديك شخص تثق به وتشاركه مشاعرك وأفكارك؟",
        options: [
          { key: "أ", text: "نعم، أكثر من شخص", points: 4 },
          { key: "ب", text: "نعم، شخص واحد", points: 3 },
          { key: "ج", text: "لا، ليس حالياً", points: 2 },
          { key: "د", text: "لا، أبداً", points: 1 }
        ]
      },
      {
        id: 14, text: "ما مدى شعورك بالثقة عند التحدث أمام مجموعة من الناس؟",
        options: [
          { key: "أ", text: "واثق جداً", points: 4 },
          { key: "ب", text: "واثق", points: 3 },
          { key: "ج", text: "قلق", points: 2 },
          { key: "د", text: "خائف جداً", points: 1 }
        ]
      },
      {
        id: 15, text: "هل تشعر بأن الآخرين يستغلونك أو لا يقدرونك؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 16, text: "ما مدى سهولة قول 'لا' للآخرين عندما تريد ذلك؟",
        options: [
          { key: "أ", text: "سهلة جداً", points: 4 },
          { key: "ب", text: "سهلة", points: 3 },
          { key: "ج", text: "صعبة", points: 2 },
          { key: "د", text: "صعبة جداً", points: 1 }
        ]
      },
      {
        id: 17, text: "هل تشعر بالغيرة أو المنافسة السلبية مع الآخرين؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 18, text: "ما مدى رضاك عن دورك في محيطك الاجتماعي (العائلة، العمل، الأصدقاء)؟",
        options: [
          { key: "أ", text: "راضٍ جداً", points: 4 },
          { key: "ب", text: "راضٍ", points: 3 },
          { key: "ج", text: "غير راضٍ", points: 2 },
          { key: "د", text: "غير راضٍ أبداً", points: 1 }
        ]
      },
      {
        id: 19, text: "هل تفضل العزلة وتجنب التجمعات الاجتماعية؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 20, text: "هل تجد صعوبة في فهم مشاعر الآخرين أو التعاطف معهم؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 21, text: "ما مدى جودة علاقاتك في مكان العمل أو الدراسة؟",
        options: [
          { key: "أ", text: "ممتازة", points: 4 },
          { key: "ب", text: "جيدة", points: 3 },
          { key: "ج", text: "متوسطة", points: 2 },
          { key: "د", text: "سيئة", points: 1 }
        ]
      },
      {
        id: 22, text: "هل تشعر بالضغط الاجتماعي لتكون بطريقة معينة؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 23, text: "هل تبادر بالتواصل مع الآخرين أم تنتظرهم؟",
        options: [
          { key: "أ", text: "أبادر دائماً", points: 4 },
          { key: "ب", text: "أبادر أحياناً", points: 3 },
          { key: "ج", text: "أنتظر غالباً", points: 2 },
          { key: "د", text: "أنتظر دائماً", points: 1 }
        ]
      },
      {
        id: 24, text: "ما مدى تأثر علاقاتك الاجتماعية بحالتك النفسية؟",
        options: [
          { key: "أ", text: "لا تتأثر", points: 4 },
          { key: "ب", text: "قليلاً", points: 3 },
          { key: "ج", text: "بشكل ملحوظ", points: 2 },
          { key: "د", text: "بشكل كبير", points: 1 }
        ]
      },
      {
        id: 25, text: "هل تشعر بأن لديك شبكة دعم اجتماعي قوية؟",
        options: [
          { key: "أ", text: "نعم، قوية جداً", points: 4 },
          { key: "ب", text: "نعم، مقبولة", points: 3 },
          { key: "ج", text: "ضعيفة", points: 2 },
          { key: "د", text: "لا توجد", points: 1 }
        ]
      },
      {
        id: 26, text: "هل تتفاعل مع منشورات الآخرين أو تتواصل معهم عبر وسائل التواصل؟",
        options: [
          { key: "أ", text: "بانتظام", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "نادراً", points: 2 },
          { key: "د", text: "أبداً", points: 1 }
        ]
      },
      {
        id: 27, text: "هل تشعر بالخوف من الحكم عليك من قبل الآخرين؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 28, text: "ما مدى قدرتك على المسامحة وتجاوز الخلافات مع الآخرين؟",
        options: [
          { key: "أ", text: "بسهولة", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "بصعوبة", points: 2 },
          { key: "د", text: "لا أستطيع", points: 1 }
        ]
      },
      {
        id: 29, text: "هل تشعر بالامتنان للأشخاص الموجودين في حياتك؟",
        options: [
          { key: "أ", text: "دائماً", points: 4 },
          { key: "ب", text: "غالباً", points: 3 },
          { key: "ج", text: "أحياناً", points: 2 },
          { key: "د", text: "نادراً", points: 1 }
        ]
      },
      {
        id: 30, text: "هل تؤثر خيبات الأمل السابقة في ثقتك بالآخرين حالياً؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      }
    ]
  },
  4: {
    name: "الجانب الانفعالي",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 20s-6-4-6-8c0-2.2 1.8-4 4-4 1.3 0 2.5.7 3.2 1.7" stroke="#5B8C85" stroke-width="1.8" stroke-linecap="round" fill="none"/><path d="M12 20s6-4 6-8c0-2.2-1.8-4-4-4-1.3 0-2.5.7-3.2 1.7" stroke="#5B8C85" stroke-width="1.8" stroke-linecap="round" fill="rgba(91,140,133,0.06)"/></svg>',
    questions: [
      {
        id: 1, text: "ما مدى تكرار شعورك بالحزن أو اليأس أو عدم الاهتمام بالأشياء؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 2, text: "هل تجد صعوبة في التحكم في مشاعرك (مثل الغضب، القلق، الحزن)؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 3, text: "ما مدى شعورك بالاسترخاء والهدوء في حياتك اليومية؟",
        options: [
          { key: "أ", text: "دائماً", points: 4 },
          { key: "ب", text: "غالباً", points: 3 },
          { key: "ج", text: "أحياناً", points: 2 },
          { key: "د", text: "نادراً", points: 1 }
        ]
      },
      {
        id: 4, text: "هل تشعر بالقلق أو التوتر بشكل مفرط بشأن المستقبل أو الأحداث اليومية؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 5, text: "ما مدى قدرتك على الاستمتاع باللحظات الإيجابية والشعور بالسعادة؟",
        options: [
          { key: "أ", text: "جيد جداً", points: 4 },
          { key: "ب", text: "جيد", points: 3 },
          { key: "ج", text: "ضعيف أحياناً", points: 2 },
          { key: "د", text: "ضعيف جداً", points: 1 }
        ]
      },
      {
        id: 6, text: "هل تشعر بتقلبات مزاجية حادة دون سبب واضح؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 7, text: "ما مدى شعورك بالإحباط عندما لا تسير الأمور كما تريد؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 8, text: "هل تجد صعوبة في التعافي من المواقف العاطفية الصعبة؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 9, text: "ما مدى شعورك بالغضب أو الانفعال لأسباب بسيطة؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 10, text: "هل تشعر بالخوف أو الترقب المفرط تجاه أحداث لم تحدث بعد؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 11, text: "ما مدى قدرتك على التعاطف مع الآخرين وفهم مشاعرهم؟",
        options: [
          { key: "أ", text: "جيد جداً", points: 4 },
          { key: "ب", text: "جيد", points: 3 },
          { key: "ج", text: "ضعيف", points: 2 },
          { key: "د", text: "ضعيف جداً", points: 1 }
        ]
      },
      {
        id: 12, text: "هل تشعر بالإرهاق العاطفي أو أنك تعطي أكثر مما تأخذ؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 13, text: "ما مدى قدرتك على التحكم في ردود أفعالك العاطفية في المواقف الصعبة؟",
        options: [
          { key: "أ", text: "جيد جداً", points: 4 },
          { key: "ب", text: "جيد", points: 3 },
          { key: "ج", text: "ضعيف", points: 2 },
          { key: "د", text: "ضعيف جداً", points: 1 }
        ]
      },
      {
        id: 14, text: "هل تشعر بالحساسية المفرطة تجاه نقد الآخرين أو آرائهم؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 15, text: "هل تجد صعوبة في التعبير عن مشاعرك للآخرين؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 16, text: "ما مدى شعورك بالذنب أو لوم الذات بشكل مفرط؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 17, text: "هل تشعر بالتفاؤل تجاه مستقبلك؟",
        options: [
          { key: "أ", text: "دائماً", points: 4 },
          { key: "ب", text: "غالباً", points: 3 },
          { key: "ج", text: "أحياناً", points: 2 },
          { key: "د", text: "نادراً", points: 1 }
        ]
      },
      {
        id: 18, text: "ما مدى تأثرك العاطفي بأخبار أو أحداث سلبية؟",
        options: [
          { key: "أ", text: "قليل", points: 4 },
          { key: "ب", text: "متوسط", points: 3 },
          { key: "ج", text: "كبير", points: 2 },
          { key: "د", text: "شديد", points: 1 }
        ]
      },
      {
        id: 19, text: "هل تشعر بالامتنان تجاه الأشياء الجيدة في حياتك؟",
        options: [
          { key: "أ", text: "دائماً", points: 4 },
          { key: "ب", text: "غالباً", points: 3 },
          { key: "ج", text: "أحياناً", points: 2 },
          { key: "د", text: "نادراً", points: 1 }
        ]
      },
      {
        id: 20, text: "هل تجد صعوبة في التهدئة بعد تجربة موقف مزعج؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 21, text: "ما مدى شعورك بالثقة في قدرتك على التعامل مع المشاعر الصعبة؟",
        options: [
          { key: "أ", text: "واثق جداً", points: 4 },
          { key: "ب", text: "واثق", points: 3 },
          { key: "ج", text: "غير واثق", points: 2 },
          { key: "د", text: "غير واثق أبداً", points: 1 }
        ]
      },
      {
        id: 22, text: "هل تشعر بمشاعر متناقضة تجاه نفس الأشخاص أو المواقف؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 23, text: "هل يسهل إضحاكك أو إسعادك من قبل الآخرين؟",
        options: [
          { key: "أ", text: "بسهولة", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "نادراً", points: 2 },
          { key: "د", text: "أبداً", points: 1 }
        ]
      },
      {
        id: 24, text: "هل تؤثر مشاعرك السلبية على قراراتك اليومية؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 25, text: "ما مدى شعورك بالسلام الداخلي والرضا عن حياتك؟",
        options: [
          { key: "أ", text: "كبير جداً", points: 4 },
          { key: "ب", text: "كبير", points: 3 },
          { key: "ج", text: "ضعيف", points: 2 },
          { key: "د", text: "ضعيف جداً", points: 1 }
        ]
      },
      {
        id: 26, text: "هل تجد نفسك تبكي بسهولة أو تجد صعوبة في البكاء؟",
        options: [
          { key: "أ", text: "طبيعي", points: 4 },
          { key: "ب", text: "أبكي أحياناً", points: 3 },
          { key: "ج", text: "أبكي كثيراً", points: 2 },
          { key: "د", text: "لا أستطيع البكاء", points: 1 }
        ]
      },
      {
        id: 27, text: "هل تشعر بالخدر العاطفي أو أنك منفصل عن مشاعرك؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 28, text: "ما مدى قدرتك على التعرف على مشاعرك وتسميتها؟",
        options: [
          { key: "أ", text: "جيد جداً", points: 4 },
          { key: "ب", text: "جيد", points: 3 },
          { key: "ج", text: "ضعيف", points: 2 },
          { key: "د", text: "ضعيف جداً", points: 1 }
        ]
      },
      {
        id: 29, text: "هل تشعر بالإرهاق من كثرة المشاعر المختلطة بداخلك؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 30, text: "هل تجد أن مشاعرك تؤثر على صحتك الجسدية؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      }
    ]
  },
  5: {
    name: "الجانب المعرفي",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" fill="rgba(91,140,133,0.06)"/><path d="M12 5c-2 0-3.5 1.5-3.5 3v1.5c0 1.5.7 2.3 2 2.3" stroke="#5B8C85" stroke-width="1.8" stroke-linecap="round" fill="none"/><path d="M12 5c2 0 3.5 1.5 3.5 3v1.5c0 1.5-.7 2.3-2 2.3" stroke="#5B8C85" stroke-width="1.8" stroke-linecap="round" fill="none"/><path d="M7.5 15c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5" stroke="#5B8C85" stroke-width="1.8" stroke-linecap="round" fill="none"/></svg>',
    questions: [
      {
        id: 1, text: "هل تواجه صعوبة في اتخاذ القرارات، حتى البسيطة منها؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 2, text: "ما مدى قدرتك على تذكر المعلومات الجديدة أو الأحداث الأخيرة؟",
        options: [
          { key: "أ", text: "جيد جداً", points: 4 },
          { key: "ب", text: "جيد", points: 3 },
          { key: "ج", text: "ضعيف أحياناً", points: 2 },
          { key: "د", text: "ضعيف جداً", points: 1 }
        ]
      },
      {
        id: 3, text: "هل تشعر بأن أفكارك سلبية أو متشائمة معظم الوقت؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 4, text: "ما مدى قدرتك على حل المشكلات والتفكير بوضوح؟",
        options: [
          { key: "أ", text: "جيد جداً", points: 4 },
          { key: "ب", text: "جيد", points: 3 },
          { key: "ج", text: "ضعيف أحياناً", points: 2 },
          { key: "د", text: "ضعيف جداً", points: 1 }
        ]
      },
      {
        id: 5, text: "هل تجد نفسك تفكر بشكل مفرط في نفس الأفكار أو الأحداث مراراً وتكراراً؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 6, text: "هل تجد صعوبة في التركيز على مهمة واحدة لفترة طويلة؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 7, text: "هل تشعر ببطء في التفكير أو صعوبة في معالجة المعلومات؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 8, text: "هل تجد صعوبة في رؤية الجانب الإيجابي في المواقف؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 9, text: "هل تعاني من الأفكار المتطفلة أو المزعجة التي لا يمكنك إيقافها؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 10, text: "ما مدى قدرتك على تعلم مهارات جديدة أو معلومات جديدة؟",
        options: [
          { key: "أ", text: "جيد جداً", points: 4 },
          { key: "ب", text: "جيد", points: 3 },
          { key: "ج", text: "ضعيف", points: 2 },
          { key: "د", text: "ضعيف جداً", points: 1 }
        ]
      },
      {
        id: 11, text: "هل تجد صعوبة في تنظيم أفكارك وترتيبها؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 12, text: "هل تشعر بأن أفكارك متسارعة أو متزاحمة بشكل غير مريح؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 13, text: "ما مدى قدرتك على تقييم المخاطر واتخاذ قرارات متوازنة؟",
        options: [
          { key: "أ", text: "جيد جداً", points: 4 },
          { key: "ب", text: "جيد", points: 3 },
          { key: "ج", text: "ضعيف", points: 2 },
          { key: "د", text: "ضعيف جداً", points: 1 }
        ]
      },
      {
        id: 14, text: "هل تثق في قدرتك على الحكم على الأمور بشكل صحيح؟",
        options: [
          { key: "أ", text: "دائماً", points: 4 },
          { key: "ب", text: "غالباً", points: 3 },
          { key: "ج", text: "أحياناً", points: 2 },
          { key: "د", text: "نادراً", points: 1 }
        ]
      },
      {
        id: 15, text: "هل تجد نفسك تقارن نفسك بالآخرين بشكل سلبي؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 16, text: "ما مدى قدرتك على التخلي عن الأفكار السلبية؟",
        options: [
          { key: "أ", text: "بسهولة", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "بصعوبة", points: 2 },
          { key: "د", text: "لا أستطيع", points: 1 }
        ]
      },
      {
        id: 17, text: "هل تؤثر أفكارك المقلقة على قدرتك على النوم؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 18, text: "ما مدى قدرتك على رؤية الأمور من منظور الآخرين؟",
        options: [
          { key: "أ", text: "جيد جداً", points: 4 },
          { key: "ب", text: "جيد", points: 3 },
          { key: "ج", text: "ضعيف", points: 2 },
          { key: "د", text: "ضعيف جداً", points: 1 }
        ]
      },
      {
        id: 19, text: "هل تشعر بالارتباك أو التشتت الذهني بشكل متكرر؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 20, text: "ما مدى قدرتك على التخطيط للمستقبل بشكل واقعي؟",
        options: [
          { key: "أ", text: "جيد جداً", points: 4 },
          { key: "ب", text: "جيد", points: 3 },
          { key: "ج", text: "ضعيف", points: 2 },
          { key: "د", text: "ضعيف جداً", points: 1 }
        ]
      },
      {
        id: 21, text: "هل تجد صعوبة في تصديق أن الأمور الجيدة يمكن أن تحدث لك؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 22, text: "هل تلوم نفسك على أمور خارجة عن سيطرتك؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 23, text: "ما مدى قدرتك على التعلم من أخطائك بدلاً من التركيز عليها؟",
        options: [
          { key: "أ", text: "جيد جداً", points: 4 },
          { key: "ب", text: "جيد", points: 3 },
          { key: "ج", text: "ضعيف", points: 2 },
          { key: "د", text: "ضعيف جداً", points: 1 }
        ]
      },
      {
        id: 24, text: "هل تشعر بأن أفكارك غير عقلانية أو مبالغ فيها؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 25, text: "ما مدى قدرتك على التركز في القراءة أو متابعة فيلم دون تشتت؟",
        options: [
          { key: "أ", text: "جيد جداً", points: 4 },
          { key: "ب", text: "جيد", points: 3 },
          { key: "ج", text: "ضعيف", points: 2 },
          { key: "د", text: "ضعيف جداً", points: 1 }
        ]
      },
      {
        id: 26, text: "هل تبالغ في تحليل المواقف البسيطة أو كلام الآخرين؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 27, text: "هل تشعر بالجمود الذهني أو صعوبة في توليد أفكار جديدة؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 28, text: "ما مدى قدرتك على تقبل النقد البناء والاستفادة منه؟",
        options: [
          { key: "أ", text: "جيد جداً", points: 4 },
          { key: "ب", text: "جيد", points: 3 },
          { key: "ج", text: "ضعيف", points: 2 },
          { key: "د", text: "ضعيف جداً", points: 1 }
        ]
      },
      {
        id: 29, text: "هل تشعر أن أفكارك تؤثر سلباً على ثقتك بنفسك؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 30, text: "ما مدى قدرتك على التفكير بشكل إبداعي لحل المشكلات؟",
        options: [
          { key: "أ", text: "جيد جداً", points: 4 },
          { key: "ب", text: "جيد", points: 3 },
          { key: "ج", text: "ضعيف", points: 2 },
          { key: "د", text: "ضعيف جداً", points: 1 }
        ]
      }
    ]
  }
};

const ASPECT_NAMES = {
  1: "الفيزيولوجي",
  2: "السلوكي",
  3: "الاجتماعي",
  4: "الانفعالي",
  5: "المعرفي"
};

const ASPECT_ICONS = {
  1: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 4C9 4 7 6 7 8v2c0 2 1 3 3 3" stroke="#5B8C85" stroke-width="1.8" stroke-linecap="round" fill="none"/><path d="M12 4c3 0 5 2 5 4v2c0 2-1 3-3 3" stroke="#5B8C85" stroke-width="1.8" stroke-linecap="round" fill="none"/><path d="M6 16c0 3 2.5 6 6 6s6-3 6-6" stroke="#5B8C85" stroke-width="1.8" stroke-linecap="round" fill="none"/></svg>',
  2: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#5B8C85" stroke-width="1.8" fill="rgba(91,140,133,0.06)"/><circle cx="12" cy="12" r="5" stroke="#5B8C85" stroke-width="1.8" fill="none"/><circle cx="12" cy="12" r="2" fill="#5B8C85" stroke="none"/></svg>',
  3: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="9" r="4" stroke="#5B8C85" stroke-width="1.8" fill="rgba(91,140,133,0.06)"/><circle cx="15" cy="9" r="4" stroke="#5B8C85" stroke-width="1.8" fill="rgba(91,140,133,0.06)"/><path d="M5 20c0-3 2-5 4-5" stroke="#5B8C85" stroke-width="1.8" stroke-linecap="round" fill="none"/><path d="M19 20c0-3-2-5-4-5" stroke="#5B8C85" stroke-width="1.8" stroke-linecap="round" fill="none"/><path d="M9 15c0-2 1.5-4 3-4s3 2 3 4" stroke="#5B8C85" stroke-width="1.8" stroke-linecap="round" fill="none"/></svg>',
  4: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 20s-6-4-6-8c0-2.2 1.8-4 4-4 1.3 0 2.5.7 3.2 1.7" stroke="#5B8C85" stroke-width="1.8" stroke-linecap="round" fill="none"/><path d="M12 20s6-4 6-8c0-2.2-1.8-4-4-4-1.3 0-2.5.7-3.2 1.7" stroke="#5B8C85" stroke-width="1.8" stroke-linecap="round" fill="rgba(91,140,133,0.06)"/></svg>',
  5: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" fill="rgba(91,140,133,0.06)"/><path d="M12 5c-2 0-3.5 1.5-3.5 3v1.5c0 1.5.7 2.3 2 2.3" stroke="#5B8C85" stroke-width="1.8" stroke-linecap="round" fill="none"/><path d="M12 5c2 0 3.5 1.5 3.5 3v1.5c0 1.5-.7 2.3-2 2.3" stroke="#5B8C85" stroke-width="1.8" stroke-linecap="round" fill="none"/><path d="M7.5 15c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5" stroke="#5B8C85" stroke-width="1.8" stroke-linecap="round" fill="none"/></svg>'
};

function getDailyQuestions(aspectNumber) {
  var allQuestions = QUESTIONS[aspectNumber] && QUESTIONS[aspectNumber].questions;
  if (!allQuestions || allQuestions.length === 0) return [];
  var history = [];
  try {
    history = JSON.parse(localStorage.getItem('mindguard_q_history')) || [];
  } catch (e) {};
  var cutoff = Date.now() - 7 * 24 * 60 * 60 * 1000;
  var recentIds = {};
  history.forEach(function (entry) {
    if (entry.aspect === aspectNumber && entry.lastUsed > cutoff) {
      recentIds[entry.id] = true;
    }
  });
  var available = allQuestions.filter(function (q) { return !recentIds[q.id]; });
  if (available.length < 3) {
    available = allQuestions;
    history = history.filter(function (entry) { return entry.aspect !== aspectNumber; });
  }
  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }
  var selected = shuffle(available).slice(0, 3);
  var now = Date.now();
  selected.forEach(function (q) {
    history.push({ aspect: aspectNumber, id: q.id, lastUsed: now });
  });
  try {
    localStorage.setItem('mindguard_q_history', JSON.stringify(history));
  } catch (e) {}
  return selected;
}
