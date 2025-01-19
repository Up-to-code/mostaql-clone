"use client";

import { Card } from "@/components/ui/card";
import { Pencil } from "lucide-react";

export default function AddProject() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto p-6">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-gray-500">الرئيسية / </span>
          <span>إضافة مشروع</span>
        </div>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <h1 className="text-xl font-bold">كيف تضيف مشروع</h1>
            <button className="text-[#2196f3] hover:underline">؟</button>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-medium mb-4">ابدأ بإنجاز مشروعك</h2>
              <p className="text-gray-600">
                تستطيع إنجاز مشروعك بالشكل الذي تريده من خلال مستقل.
                أدخل تفاصيل المشروع والميزانية والمدة المتوقعة ليتم
                مراجعته ونشره مجاناً بعد ذلك سيتقدم المستقلون في صفحة
                المشاريع ويقدموا عروضهم عليه لتختار العرض الأنسب لك
                وتبدأ المستقل بتنفيذ المشروع.
              </p>
            </div>

            <div>
              <h2 className="font-medium mb-4">موقع مستقل يضمن حقوقك</h2>
              <p className="text-gray-600">
                يقوم موقع مستقل بدور الوسيط بينك وبين المستقل الذي
                توظفه لتنفيذ مشروعك. فقط بعد انتهاء المستقل من تنفيذ
                المشروع كاملاً يتم تحويل المبلغ إلى حسابه.
              </p>
            </div>

            <div>
              <h2 className="font-medium mb-4">نصائح للحصول على عمل ناجح</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>وضح جميع التفاصيل والمهام المطلوب إنجازها</li>
                <li>أجب على جميع الحلول وأوضح ماذا تريد تنفيذه</li>
                <li>جزء المشروع والمهام الكبيرة على عدة مراحل صغيرة</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border rounded-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Pencil className="w-12 h-12 text-[#2196f3]" />
                </div>
                <h3 className="font-medium mb-2">اكتب يدوياً</h3>
                <p className="text-gray-600 mb-4">
                  اكتب بنفسك وصف وتفاصيل المشروع وحدد المهام
                  المطلوب إنجازها
                </p>
                <button className="w-full bg-[#2196f3] text-white px-6 py-3 rounded-lg hover:bg-[#1976d2]">
                  ابدأ الآن
                </button>
              </div>

              <div className="border rounded-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Pencil className="w-12 h-12 text-[#2196f3]" />
                </div>
                <h3 className="font-medium mb-2">اختر من نموذج</h3>
                <p className="text-gray-600 mb-4">
                  اختر من بين نماذج جاهزة وعدل عليها بما يناسب
                  متطلبات مشروعك
                </p>
                <button className="w-full border border-[#2196f3] text-[#2196f3] px-6 py-3 rounded-lg hover:bg-gray-50">
                  اختر نموذج
                </button>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}