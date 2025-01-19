"use client";

import { Card } from "@/components/ui/card";
import { CircleDollarSign, Briefcase, Filter } from "lucide-react";
import Link from "next/link";

export default function BrowseProjects() {
  const projects = [
    {
      id: 1,
      title: "تصميم موقع إلكتروني متجاوب",
      description: "نحتاج إلى تصميم موقع إلكتروني متجاوب لشركة تجارية مع لوحة تحكم",
      budget: "$1000 - $2000",
      offers: 5,
      time: "منذ 15 دقيقة",
      status: "مفتوح",
      category: "تصميم مواقع",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      id: 2,
      title: "تطوير تطبيق موبايل للتوصيل",
      description: "مطلوب مطور تطبيقات موبايل لتطوير تطبيق توصيل طلبات",
      budget: "$3000 - $5000",
      offers: 8,
      time: "منذ ساعة",
      status: "مفتوح",
      category: "تطوير تطبيقات",
      skills: ["React Native", "Node.js", "MongoDB"]
    },
    // Add more projects...
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64 space-y-4">
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5" />
                <h2 className="font-medium">تصفية النتائج</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">الميزانية</h3>
                  <select className="form-input">
                    <option>جميع الميزانيات</option>
                    <option>أقل من $500</option>
                    <option>$500 - $1000</option>
                    <option>$1000 - $5000</option>
                    <option>أكثر من $5000</option>
                  </select>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">التصنيف</h3>
                  <select className="form-input">
                    <option>جميع التصنيفات</option>
                    <option>تطوير مواقع</option>
                    <option>تطبيقات موبايل</option>
                    <option>تصميم</option>
                    <option>تسويق</option>
                  </select>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">المهارات</h3>
                  <div className="space-y-2">
                    {["React", "Node.js", "PHP", "WordPress", "Python"].map((skill) => (
                      <label key={skill} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded text-[#2196f3]" />
                        <span className="text-sm">{skill}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </aside>

          {/* Projects List */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold">تصفح المشاريع</h1>
              <div className="flex gap-2">
                <select className="form-input max-w-[200px]">
                  <option>الأحدث</option>
                  <option>الأقدم</option>
                  <option>الأعلى ميزانية</option>
                  <option>الأقل ميزانية</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {projects.map((project) => (
                <Card key={project.id} className="p-4 md:p-6 project-card">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div>
                      <Link href={`/projects/${project.id}`} className="hover:text-[#2196f3]">
                        <h3 className="font-medium text-lg mb-2">{project.title}</h3>
                      </Link>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.skills.map((skill) => (
                          <span key={skill} className="bg-gray-100 px-2 py-1 rounded text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <CircleDollarSign className="w-4 h-4" />
                          <span>{project.budget}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{project.offers} عروض</span>
                        </div>
                        <span>{project.time}</span>
                        <span className="status-tag status-tag-open">{project.status}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button className="form-button form-button-primary whitespace-nowrap">
                        أضف عرضك
                      </button>
                      <button className="form-button form-button-secondary whitespace-nowrap">
                        حفظ المشروع
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}