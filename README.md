# Mind Guard - حارس عقلك

تطبيق العناية بالصحة النفسية اليومية - Progressive Web App (PWA)

## المتطلبات

- متصفح حديث يدعم Service Workers
- اتصال بالإنترنت للتثبيت الأول (يعمل بدون إنترنت بعد ذلك)

## التشغيل

### الطريقة 1: فتح الملفات مباشرة
افتح ملف `index.html` في المتصفح.

### الطريقة 2: باستخدام خادم محلي (موصى به للـ PWA)
```bash
# باستخدام Python
python -m http.server 8000

# أو باستخدام Node.js
npx serve mind-guard
```

ثم افتح `http://localhost:8000` في المتصفح.

## التثبيت كـ PWA

1. افتح التطبيق في المتصفح
2. اضغط على زر التثبيت في شريط العنوان
3. سيتم تثبيت التطبيق على جهازك ويعمل بدون إنترنت

## الهيكل

```
mind-guard/
├── index.html          # شاشة البداية
├── mood-check.html     # اختيار المزاج
├── aspects.html        # اختيار الجانب النفسي
├── quote-display.html  # عرض اقتباس تحفيزي
├── questionnaire.html  # الأسئلة والتقييم
├── results.html        # عرض النتائج والتوصيات
├── breathing.html      # تمرين التنفس
├── relaxation.html     # استرخاء العضلات
├── emotional-release.html # التحرر العاطفي
├── cbt.html           # العلاج المعرفي السلوكي
├── progress.html      # التقدم والإحصائيات
├── profile.html       # الملف الشخصي
├── css/style.css      # التصميم
├── js/                # ملفات الجافاسكريبت
├── manifest.json      # إعدادات PWA
└── sw.js             # Service Worker
```

## التقنيات

- HTML5 + CSS3 + Vanilla JavaScript
- LocalStorage للتخزين
- PWA مع Service Worker
- Tajawal Font
- Font Awesome 6
- Chart.js للرسوم البيانية


----------------------------------
صلح مشكلة responsive في هاتف وخصوصا nav bar () حل مشكلة زر مسح جميع بيانات لأنه يكون تحت ناف بار واجعله في منتصف شاشة 
حط اقتباسات

وغير اشكال حقت الجوانب الخمسة وحط رسمات احترافية تدل على جانب وشيل جميع ايموجيات وحط شيء فاخر في مكانهم
واجعل  