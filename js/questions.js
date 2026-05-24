const QUESTIONS = {
  1: {
    name: "الجانب الفيزيولوجي",
    icon: "💪",
    questions: [
      {
        id: 1,
        text: "كيف تصف جودة نومك في معظم الليالي؟",
        options: [
          { key: "أ", text: "ممتاز", points: 4 },
          { key: "ب", text: "جيد", points: 3 },
          { key: "ج", text: "متوسط", points: 2 },
          { key: "د", text: "سيء", points: 1 }
        ]
      },
      {
        id: 2,
        text: "هل تشعر بالتعب أو الإرهاق الجسدي بشكل متكرر دون سبب واضح؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 3,
        text: "ما مدى انتظام ممارستك للنشاط البدني خلال الأسبوع؟",
        options: [
          { key: "أ", text: "بانتظام", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "نادراً", points: 2 },
          { key: "د", text: "أبداً", points: 1 }
        ]
      },
      {
        id: 4,
        text: "هل لاحظت أي تغيرات كبيرة في شهيتك أو وزنك مؤخراً؟",
        options: [
          { key: "أ", text: "لا يوجد", points: 4 },
          { key: "ب", text: "طفيفة", points: 3 },
          { key: "ج", text: "ملحوظة", points: 2 },
          { key: "د", text: "كبيرة", points: 1 }
        ]
      },
      {
        id: 5,
        text: "هل تعاني من آلام جسدية متكررة (مثل الصداع، آلام الظهر، مشاكل الهضم) لا يمكن تفسيرها طبياً؟",
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
    icon: "🎯",
    questions: [
      {
        id: 1,
        text: "ما مدى سهولة قيامك بالمهام اليومية والأنشطة التي تتطلب جهداً؟",
        options: [
          { key: "أ", text: "سهلة جداً", points: 4 },
          { key: "ب", text: "سهلة", points: 3 },
          { key: "ج", text: "صعبة أحياناً", points: 2 },
          { key: "د", text: "صعبة جداً", points: 1 }
        ]
      },
      {
        id: 2,
        text: "هل تجد نفسك تتجنب المواقف الاجتماعية أو الأنشطة التي كنت تستمتع بها سابقاً؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 3,
        text: "ما مدى قدرتك على التركيز وإنجاز المهام التي تتطلب انتباهاً؟",
        options: [
          { key: "أ", text: "جيد جداً", points: 4 },
          { key: "ب", text: "جيد", points: 3 },
          { key: "ج", text: "ضعيف أحياناً", points: 2 },
          { key: "د", text: "ضعيف جداً", points: 1 }
        ]
      },
      {
        id: 4,
        text: "هل تلجأ إلى سلوكيات معينة (مثل الإفراط في الأكل، التدخين، العزلة) للتعامل مع التوتر؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 5,
        text: "ما مدى شعورك بالتحفيز لإنجاز أهدافك أو البدء بمشاريع جديدة؟",
        options: [
          { key: "أ", text: "متحفز جداً", points: 4 },
          { key: "ب", text: "متحفز", points: 3 },
          { key: "ج", text: "قليل التحفيز", points: 2 },
          { key: "د", text: "لا يوجد تحفيز", points: 1 }
        ]
      }
    ]
  },
  3: {
    name: "الجانب الاجتماعي",
    icon: "👥",
    questions: [
      {
        id: 1,
        text: "ما مدى رضاك عن علاقاتك الاجتماعية (الأصدقاء، العائلة، الزملاء)؟",
        options: [
          { key: "أ", text: "راضٍ جداً", points: 4 },
          { key: "ب", text: "راضٍ", points: 3 },
          { key: "ج", text: "غير راضٍ", points: 2 },
          { key: "د", text: "غير راضٍ أبداً", points: 1 }
        ]
      },
      {
        id: 2,
        text: "هل تشعر بالدعم والتقدير من الأشخاص المهمين في حياتك؟",
        options: [
          { key: "أ", text: "دائماً", points: 4 },
          { key: "ب", text: "غالباً", points: 3 },
          { key: "ج", text: "أحياناً", points: 2 },
          { key: "د", text: "نادراً", points: 1 }
        ]
      },
      {
        id: 3,
        text: "ما مدى سهولة تواصلك مع الآخرين والتعبير عن مشاعرك واحتياجاتك؟",
        options: [
          { key: "أ", text: "سهلة جداً", points: 4 },
          { key: "ب", text: "سهلة", points: 3 },
          { key: "ج", text: "صعبة أحياناً", points: 2 },
          { key: "د", text: "صعبة جداً", points: 1 }
        ]
      },
      {
        id: 4,
        text: "هل تشارك في أنشطة اجتماعية أو مجتمعية بانتظام؟",
        options: [
          { key: "أ", text: "بانتظام", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "نادراً", points: 2 },
          { key: "د", text: "لا أشارك", points: 1 }
        ]
      },
      {
        id: 5,
        text: "هل تشعر بالانتماء إلى مجموعة أو مجتمع معين؟",
        options: [
          { key: "أ", text: "نعم، بقوة", points: 4 },
          { key: "ب", text: "نعم، بشكل عام", points: 3 },
          { key: "ج", text: "لا، أشعر بالانفصال", points: 2 },
          { key: "د", text: "لا أفكر في ذلك", points: 1 }
        ]
      }
    ]
  },
  4: {
    name: "الجانب الانفعالي",
    icon: "💚",
    questions: [
      {
        id: 1,
        text: "ما مدى تكرار شعورك بالحزن أو اليأس أو عدم الاهتمام بالأشياء؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 2,
        text: "هل تجد صعوبة في التحكم في مشاعرك (مثل الغضب، القلق، الحزن)؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 3,
        text: "ما مدى شعورك بالاسترخاء والهدوء في حياتك اليومية؟",
        options: [
          { key: "أ", text: "دائماً", points: 4 },
          { key: "ب", text: "غالباً", points: 3 },
          { key: "ج", text: "أحياناً", points: 2 },
          { key: "د", text: "نادراً", points: 1 }
        ]
      },
      {
        id: 4,
        text: "هل تشعر بالقلق أو التوتر بشكل مفرط بشأن المستقبل أو الأحداث اليومية؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 5,
        text: "ما مدى قدرتك على الاستمتاع باللحظات الإيجابية والشعور بالسعادة؟",
        options: [
          { key: "أ", text: "جيد جداً", points: 4 },
          { key: "ب", text: "جيد", points: 3 },
          { key: "ج", text: "ضعيف أحياناً", points: 2 },
          { key: "د", text: "ضعيف جداً", points: 1 }
        ]
      }
    ]
  },
  5: {
    name: "الجانب المعرفي",
    icon: "🧠",
    questions: [
      {
        id: 1,
        text: "هل تواجه صعوبة في اتخاذ القرارات، حتى البسيطة منها؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 2,
        text: "ما مدى قدرتك على تذكر المعلومات الجديدة أو الأحداث الأخيرة؟",
        options: [
          { key: "أ", text: "جيد جداً", points: 4 },
          { key: "ب", text: "جيد", points: 3 },
          { key: "ج", text: "ضعيف أحياناً", points: 2 },
          { key: "د", text: "ضعيف جداً", points: 1 }
        ]
      },
      {
        id: 3,
        text: "هل تشعر بأن أفكارك سلبية أو متشائمة معظم الوقت؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
        ]
      },
      {
        id: 4,
        text: "ما مدى قدرتك على حل المشكلات والتفكير بوضوح؟",
        options: [
          { key: "أ", text: "جيد جداً", points: 4 },
          { key: "ب", text: "جيد", points: 3 },
          { key: "ج", text: "ضعيف أحياناً", points: 2 },
          { key: "د", text: "ضعيف جداً", points: 1 }
        ]
      },
      {
        id: 5,
        text: "هل تجد نفسك تفكر بشكل مفرط في نفس الأفكار أو الأحداث مراراً وتكراراً؟",
        options: [
          { key: "أ", text: "نادراً", points: 4 },
          { key: "ب", text: "أحياناً", points: 3 },
          { key: "ج", text: "غالباً", points: 2 },
          { key: "د", text: "دائماً", points: 1 }
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
  1: "💪",
  2: "🎯",
  3: "👥",
  4: "💚",
  5: "🧠"
};
