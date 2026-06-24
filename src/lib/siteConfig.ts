export const siteConfig = {
  name: "شركة دار العلم نقل اثاث",
  nameEn: "Dar Al Alam Movers",
  url: "https://daralalammovers.com",
  phone: "+971551557018",
  phoneDisplay: "0551557018",
  whatsapp: "https://wa.me/971551557018",
  email: "nimramovers@gmail.com",
  hours: "7 أيام، 24 ساعة",
  coverage: "دبي + كل الإمارات السبع",
  address: {
    city: "دبي",
    country: "الإمارات العربية المتحدة",
    countryCode: "AE",
  },
  geo: {
    latitude: 25.2048,
    longitude: 55.2708,
  },
} as const;

export const services = [
  {
    id: "home-furniture",
    slug: "home-furniture",
    titleAr: "نقل اثاث المنازل",
    descAr: "نقل آمن ومنظم لأثاث منزلك مع فريق متخصص",
    icon: "Home",
  },
  {
    id: "apartment",
    slug: "apartment",
    titleAr: "نقل الشقق",
    descAr: "خدمة متكاملة لنقل شقتك في دبي والإمارات",
    icon: "Building2",
  },
  {
    id: "villa",
    slug: "villa",
    titleAr: "نقل الفلل",
    descAr: "تخصصنا في نقل الفلل الكبيرة بكل احترافية",
    icon: "Castle",
  },
  {
    id: "office",
    slug: "office",
    titleAr: "نقل المكاتب",
    descAr: "نقل مكتبك بسرعة وبدون توقف لعملك",
    icon: "Briefcase",
  },
  {
    id: "packing",
    slug: "packing",
    titleAr: "التغليف الاحترافي",
    descAr: "تغليف كامل لحماية كل قطعة من أثاثك",
    icon: "Package",
  },
  {
    id: "assembly",
    slug: "assembly",
    titleAr: "الفك والتركيب",
    descAr: "فك وتركيب جميع أنواع الأثاث بدقة عالية",
    icon: "Wrench",
  },
  {
    id: "storage",
    slug: "storage",
    titleAr: "التخزين الآمن",
    descAr: "مستودعات مؤمنة لتخزين أثاثك حسب الحاجة",
    icon: "Warehouse",
  },
] as const;

export const locations = [
  {
    id: "abu-dhabi",
    slug: "abu-dhabi",
    nameAr: "أبوظبي",
    descAr: "خدمة نقل اثاث في أبوظبي بفريق متخصص",
  },
  {
    id: "al-ain",
    slug: "al-ain",
    nameAr: "العين",
    descAr: "نقل اثاث العين بأسعار منافسة",
  },
  {
    id: "sharjah",
    slug: "sharjah",
    nameAr: "الشارقة",
    descAr: "نقل اثاث الشارقة مع ضمان السلامة",
  },
  {
    id: "ajman",
    slug: "ajman",
    nameAr: "عجمان",
    descAr: "خدمة نقل اثاث عجمان سريعة وموثوقة",
  },
  {
    id: "ras-al-khaimah",
    slug: "ras-al-khaimah",
    nameAr: "رأس الخيمة",
    descAr: "نقل اثاث رأس الخيمة بكل أمان",
  },
  {
    id: "umm-al-quwain",
    slug: "umm-al-quwain",
    nameAr: "أم القيوين",
    descAr: "نقل اثاث أم القيوين بأسعار مناسبة",
  },
  {
    id: "fujairah",
    slug: "fujairah",
    nameAr: "الفجيرة",
    descAr: "نقل اثاث الفجيرة مع فريق محترف",
  },
] as const;
