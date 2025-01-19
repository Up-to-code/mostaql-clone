"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Edit2, MapPin, Star, Plus } from "lucide-react";

export default function Profile() {
  const portfolioItems = [
    {
      id: 1,
      title: "تصميم موقع متجر إلكتروني",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      views: 21
    },
    {
      id: 2,
      title: "تطبيق محادثة MBTI",
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=500&h=300&fit=crop",
      views: 15
    },
    // Add more portfolio items...
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Profile Header */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                alt="Profile"
                width={120}
                height={120}
                className="rounded-full"
              />
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div>
                  <h1 className="text-2xl font-bold mb-1">Ahmed Mansour</h1>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>مصر</span>
                    <span className="text-[#2196f3]">مطور ومصمم واجهات أمامية</span>
                  </div>
                </div>
                <button className="form-button form-button-primary">
                  <Edit2 className="w-4 h-4 inline-block ml-2" />
                  تعديل الملف الشخصي
                </button>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="font-medium">4.8</span>
                  <span className="text-gray-500">(25 تقييم)</span>
                </div>
                <span className="text-gray-500">|</span>
                <span className="text-gray-500">15 مشروع مكتمل</span>
                <span className="text-gray-500">|</span>
                <span className="text-gray-500">عضو منذ 2023</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <Tabs defaultValue="portfolio" className="space-y-6">
          <TabsList className="bg-white p-1 rounded-lg">
            <TabsTrigger value="portfolio">معرض الأعمال</TabsTrigger>
            <TabsTrigger value="reviews">التقييمات</TabsTrigger>
            <TabsTrigger value="about">نبذة عني</TabsTrigger>
          </TabsList>

          <TabsContent value="portfolio">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">{item.title}</h3>
                    <div className="text-sm text-gray-500">
                      {item.views} مشاهدة
                    </div>
                  </div>
                </Card>
              ))}
              
              <Card className="flex items-center justify-center h-[300px] border-dashed">
                <button className="text-[#2196f3] flex flex-col items-center gap-2">
                  <Plus className="w-8 h-8" />
                  <span>أضف عمل جديد</span>
                </button>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reviews">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">التقييمات</h2>
              {/* Add reviews content */}
            </Card>
          </TabsContent>

          <TabsContent value="about">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">نبذة عني</h2>
              {/* Add about content */}
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}