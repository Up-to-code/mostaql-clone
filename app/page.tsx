"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CircleDollarSign, Mail, Briefcase, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-xl font-bold mb-6">لوحة التحكم</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Balance Cards */}
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-2">الرصيد القابل للسحب</h3>
            <p className="text-3xl font-bold text-gray-900">$0.00</p>
            <p className="text-sm text-gray-500 mt-2">الرصيد المتاح: $0.00</p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-medium mb-2">الرصيد الكلي</h3>
            <p className="text-3xl font-bold text-[#2196f3]">$85.00</p>
            <p className="text-sm text-gray-500 mt-2">الرصيد المعلق: $85.00</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                  alt="Profile"
                  className="rounded-full"
                  width={64}
                  height={64}
                />
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-medium">Ahmed Mansour</h3>
                <Link href="/profile" className="text-sm text-[#2196f3] hover:underline">
                  تعديل الملف الشخصي
                </Link>
              </div>
            </div>
          </Card>

          {/* Statistics */}
          <Card className="col-span-1 md:col-span-2 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium">إحصائيات المشاريع</h3>
              <div className="text-sm text-[#2196f3]">
                يمكنك الإعلان عن خدمة مميزة مقابل 20% من قيمة المشروع وزيادة نسبة قبول عروضك
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>عروض مقبولة</span>
                  <span>15/3</span>
                </div>
                <Progress value={20} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>عروض قيد التنفيذ</span>
                  <span>10%</span>
                </div>
                <Progress value={10} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>عروض منتهية</span>
                  <span>3</span>
                </div>
                <Progress value={30} className="h-2" />
              </div>
            </div>
          </Card>

          {/* Messages Card */}
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">الرسائل الجديدة</h3>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-gray-500" />
                <span>0</span>
              </div>
              <div className="text-sm text-gray-500">
                <span>الرسائل الواردة: 9</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Projects Section */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">آخر مشاريع تطوير البرامج والتطبيقات</h2>
            <Link href="/projects" className="text-[#2196f3] hover:underline flex items-center gap-1">
              عرض المزيد
              <ChevronLeft className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid gap-4">
            {[
              {
                title: "تصميم موقع إلكتروني",
                budget: "$500 - $1000",
                offers: 3,
                time: "منذ 15 دقيقة",
                status: "مفتوح"
              },
              {
                title: "تطبيق خدمات صيانة",
                budget: "$1000 - $2000",
                offers: 5,
                time: "منذ ساعة",
                status: "مفتوح"
              },
              {
                title: "برمجة تطبيق موبايل",
                budget: "$2000 - $3000",
                offers: 7,
                time: "منذ ساعتين",
                status: "مفتوح"
              }
            ].map((project, i) => (
              <Card key={i} className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium mb-2">{project.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <CircleDollarSign className="w-4 h-4" />
                        <span>{project.budget}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{project.offers} عروض</span>
                      </div>
                      <span>{project.time}</span>
                      <span className="text-green-500">{project.status}</span>
                    </div>
                  </div>
                  <button className="bg-[#2196f3] text-white px-4 py-2 rounded hover:bg-[#1976d2]">
                    أضف عرضك
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}