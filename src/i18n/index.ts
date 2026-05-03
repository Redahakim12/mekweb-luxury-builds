import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: { home: "Home", shop: "Shop", deals: "Deals", categories: "Categories", contact: "Contact", login: "Login", admin: "Admin" },
      hero: {
        badge: "New Drop · Cyber Sale −40%",
        title: "Level Up Your Game",
        subtitle: "Discover the latest gaming gear, consoles and titles. Built for players who want to win.",
        shop: "Shop Now",
        deals: "Explore Deals",
      },
      sections: {
        featured: "Featured Games",
        bestSellers: "Best Sellers",
        newArrivals: "New Arrivals",
        accessories: "Gaming Accessories",
        offers: "Special Offers",
        reviews: "What Players Say",
        newsletter: "Join the Squad",
        newsletterDesc: "Get exclusive drops, beta keys and early access deals.",
        subscribe: "Subscribe",
        emailPh: "your@email.com",
      },
      product: {
        addToCart: "Add to Cart",
        buyNow: "Buy Now",
        wishlist: "Wishlist",
        inStock: "In Stock",
        outOfStock: "Out of Stock",
        related: "Related Products",
        quantity: "Quantity",
        description: "Description",
        specs: "Specifications",
      },
      cart: {
        title: "Your Cart",
        empty: "Your cart is empty",
        continue: "Continue Shopping",
        promo: "Promo code",
        apply: "Apply",
        subtotal: "Subtotal",
        shipping: "Shipping",
        total: "Total",
        checkout: "Checkout",
      },
      checkout: { title: "Checkout", info: "Customer Info", shipping: "Shipping Address", payment: "Payment", place: "Place Order" },
      auth: {
        loginTitle: "Welcome Back, Player",
        registerTitle: "Create Your Account",
        email: "Email",
        password: "Password",
        name: "Full Name",
        login: "Login",
        register: "Register",
        or: "or continue with",
        haveAccount: "Already have an account?",
        noAccount: "Don't have an account?",
      },
      profile: { title: "My Profile", orders: "Orders", wishlist: "Wishlist", addresses: "Addresses", settings: "Settings" },
      admin: {
        overview: "Overview",
        products: "Products",
        orders: "Orders",
        customers: "Customers",
        categories: "Categories",
        coupons: "Coupons",
        reviews: "Reviews",
        analytics: "Analytics",
        settings: "Settings",
        totalSales: "Total Sales",
        totalOrders: "Total Orders",
        totalCustomers: "Customers",
        totalProducts: "Products",
        recentOrders: "Recent Orders",
        revenue: "Revenue",
        bestSelling: "Best Selling",
        stockAlert: "Low Stock Alert",
      },
      common: { search: "Search games, gear...", price: "Price", rating: "Rating", category: "Category", platform: "Platform", brand: "Brand", filters: "Filters", sortBy: "Sort by", clear: "Clear" },
      footer: { tagline: "Premium gaming store for serious players.", rights: "All rights reserved." },
    },
  },
  fr: {
    translation: {
      nav: { home: "Accueil", shop: "Boutique", deals: "Offres", categories: "Catégories", contact: "Contact", login: "Connexion", admin: "Admin" },
      hero: {
        badge: "Nouveauté · Cyber Sale −40%",
        title: "Passez au Niveau Supérieur",
        subtitle: "Découvrez le matériel gaming, consoles et jeux les plus récents. Conçu pour les joueurs qui veulent gagner.",
        shop: "Acheter",
        deals: "Voir les Offres",
      },
      sections: {
        featured: "Jeux en Vedette",
        bestSellers: "Meilleures Ventes",
        newArrivals: "Nouveautés",
        accessories: "Accessoires Gaming",
        offers: "Offres Spéciales",
        reviews: "Avis des Joueurs",
        newsletter: "Rejoignez la Squad",
        newsletterDesc: "Recevez offres exclusives, clés beta et accès anticipés.",
        subscribe: "S'abonner",
        emailPh: "votre@email.com",
      },
      product: {
        addToCart: "Ajouter au Panier",
        buyNow: "Acheter",
        wishlist: "Favoris",
        inStock: "En Stock",
        outOfStock: "Rupture",
        related: "Produits Similaires",
        quantity: "Quantité",
        description: "Description",
        specs: "Spécifications",
      },
      cart: { title: "Votre Panier", empty: "Votre panier est vide", continue: "Continuer", promo: "Code promo", apply: "Appliquer", subtotal: "Sous-total", shipping: "Livraison", total: "Total", checkout: "Commander" },
      checkout: { title: "Commande", info: "Informations", shipping: "Adresse de livraison", payment: "Paiement", place: "Confirmer" },
      auth: { loginTitle: "Bon Retour", registerTitle: "Créer un Compte", email: "Email", password: "Mot de passe", name: "Nom complet", login: "Connexion", register: "S'inscrire", or: "ou continuer avec", haveAccount: "Déjà un compte ?", noAccount: "Pas de compte ?" },
      profile: { title: "Mon Profil", orders: "Commandes", wishlist: "Favoris", addresses: "Adresses", settings: "Paramètres" },
      admin: { overview: "Vue", products: "Produits", orders: "Commandes", customers: "Clients", categories: "Catégories", coupons: "Coupons", reviews: "Avis", analytics: "Analyse", settings: "Paramètres", totalSales: "Ventes Totales", totalOrders: "Commandes", totalCustomers: "Clients", totalProducts: "Produits", recentOrders: "Commandes Récentes", revenue: "Revenu", bestSelling: "Top Ventes", stockAlert: "Stock Faible" },
      common: { search: "Rechercher jeux, matériel...", price: "Prix", rating: "Note", category: "Catégorie", platform: "Plateforme", brand: "Marque", filters: "Filtres", sortBy: "Trier", clear: "Effacer" },
      footer: { tagline: "Boutique gaming premium pour vrais joueurs.", rights: "Tous droits réservés." },
    },
  },
  ar: {
    translation: {
      nav: { home: "الرئيسية", shop: "المتجر", deals: "العروض", categories: "الفئات", contact: "اتصل", login: "دخول", admin: "الإدارة" },
      hero: {
        badge: "إصدار جديد · تخفيضات −40%",
        title: "ارفع مستوى لعبتك",
        subtitle: "اكتشف أحدث معدات الألعاب وأجهزة التحكم والعناوين. مصمم للاعبين الذين يريدون الفوز.",
        shop: "تسوق الآن",
        deals: "تصفح العروض",
      },
      sections: {
        featured: "ألعاب مميزة",
        bestSellers: "الأكثر مبيعاً",
        newArrivals: "وصل حديثاً",
        accessories: "ملحقات الألعاب",
        offers: "عروض خاصة",
        reviews: "آراء اللاعبين",
        newsletter: "انضم إلينا",
        newsletterDesc: "احصل على عروض حصرية ومفاتيح بيتا.",
        subscribe: "اشترك",
        emailPh: "بريدك@email.com",
      },
      product: { addToCart: "أضف للسلة", buyNow: "اشتر الآن", wishlist: "المفضلة", inStock: "متوفر", outOfStock: "غير متوفر", related: "منتجات مشابهة", quantity: "الكمية", description: "الوصف", specs: "المواصفات" },
      cart: { title: "سلتك", empty: "السلة فارغة", continue: "متابعة التسوق", promo: "كود الخصم", apply: "تطبيق", subtotal: "المجموع", shipping: "الشحن", total: "الإجمالي", checkout: "إتمام الشراء" },
      checkout: { title: "الدفع", info: "المعلومات", shipping: "عنوان الشحن", payment: "طريقة الدفع", place: "تأكيد الطلب" },
      auth: { loginTitle: "أهلاً بعودتك", registerTitle: "إنشاء حساب", email: "البريد", password: "كلمة المرور", name: "الاسم الكامل", login: "دخول", register: "تسجيل", or: "أو تابع باستخدام", haveAccount: "لديك حساب؟", noAccount: "ليس لديك حساب؟" },
      profile: { title: "حسابي", orders: "الطلبات", wishlist: "المفضلة", addresses: "العناوين", settings: "الإعدادات" },
      admin: { overview: "نظرة عامة", products: "المنتجات", orders: "الطلبات", customers: "العملاء", categories: "الفئات", coupons: "الكوبونات", reviews: "التقييمات", analytics: "التحليلات", settings: "الإعدادات", totalSales: "إجمالي المبيعات", totalOrders: "الطلبات", totalCustomers: "العملاء", totalProducts: "المنتجات", recentOrders: "أحدث الطلبات", revenue: "الإيرادات", bestSelling: "الأكثر مبيعاً", stockAlert: "تنبيه المخزون" },
      common: { search: "ابحث عن ألعاب أو معدات...", price: "السعر", rating: "التقييم", category: "الفئة", platform: "المنصة", brand: "العلامة", filters: "الفلاتر", sortBy: "ترتيب", clear: "مسح" },
      footer: { tagline: "متجر ألعاب فاخر للاعبين الجادين.", rights: "جميع الحقوق محفوظة." },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "fr", "ar"],
    interpolation: { escapeValue: false },
    detection: { order: ["localStorage", "navigator"], caches: ["localStorage"] },
  });

const applyDir = (lng: string) => {
  const dir = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.dir = dir;
  document.documentElement.lang = lng;
};
applyDir(i18n.language || "en");
i18n.on("languageChanged", applyDir);

export default i18n;
