export default function Footer() {
  const footerLinks = {
    مستقل: [
      'عن مستقل',
      'الأسئلة الشائعة',
      'ضمان حقوقك',
      'شروط الاستخدام',
      'بيان الخصوصية',
    ],
    مشاريع: [
      'مشاريع أعمال',
      'مشاريع برمجة',
      'مشاريع هندسة وعمارة',
      'مشاريع تصميم',
      'مشاريع تسويق',
      'مشاريع كتابة وترجمة',
      'مشاريع دعم ومساعدة',
      'مشاريع تدريب',
      'التصنيفات',
    ],
    روابط: [
      'مستقل للمؤسسات',
      'ابحث عن عمل',
      'معرض الأعمال',
      'مدونة مستقل',
      'مركز المساعدة',
    ],
  };

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-[#2196f3]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-600 hover:text-[#2196f3]">تابع مستقل على</a>
              <div className="flex gap-2">
                <a href="#" className="w-8 h-8 flex items-center justify-center bg-black text-white rounded">
                  X
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center bg-[#1877f2] text-white rounded">
                  f
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-600">وسائل الدفع المتاحة</span>
              <div className="flex gap-2">
                <img src="/mastercard.png" alt="Mastercard" className="h-8" />
                <img src="/visa.png" alt="Visa" className="h-8" />
                <img src="/paypal.png" alt="PayPal" className="h-8" />
              </div>
            </div>
            
            <div className="text-gray-600">
              © 2025 Hsoub. جميع الحقوق محفوظة
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}