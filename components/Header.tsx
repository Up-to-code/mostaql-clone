"use client";

import { useState } from "react";
import { Bell, Mail, Search, Menu, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-[#2196f3] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Logo and Menu Button */}
            <div className="flex items-center gap-4">
              <Link href="/" className="text-2xl font-bold">مستقل</Link>
              <button 
                className="p-2 hover:bg-white/10 rounded-full md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="/add-project" className="nav-link nav-link-light">
                <Plus className="w-5 h-5 inline-block ml-2" />
                <span>أضف مشروع</span>
              </Link>
              <Link href="/browse-projects" className="nav-link nav-link-light">
                <span>تصفح المشاريع</span>
              </Link>
              <Link href="/my-offers" className="nav-link nav-link-light">
                <span>عروضي</span>
              </Link>
              <Link href="/my-work" className="nav-link nav-link-light">
                <span>أعمالي</span>
              </Link>
            </div>

            {/* Icons and Profile */}
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-white/10 rounded-full">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-full hidden md:flex">
                <Mail className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-full hidden md:flex">
                <Bell className="w-5 h-5" />
              </button>
              <Link href="/profile" className="flex items-center gap-2">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                    alt="Profile"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div className="profile-badge"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : 'closed'} md:hidden`}>
        <div className="p-4">
          <div className="space-y-4">
            <Link 
              href="/add-project" 
              className="block p-4 bg-[#2196f3] text-white rounded-lg text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Plus className="w-5 h-5 inline-block ml-2" />
              أضف مشروع
            </Link>
            {[
              { href: '/browse-projects', text: 'تصفح المشاريع' },
              { href: '/my-offers', text: 'عروضي' },
              { href: '/my-work', text: 'أعمالي' },
              { href: '/messages', text: 'الرسائل' },
              { href: '/notifications', text: 'الإشعارات' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block p-4 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-nav">
        <Link href="/" className="mobile-nav-item active">
          <Menu className="w-6 h-6 mb-1" />
          <span>الرئيسية</span>
        </Link>
        <Link href="/browse-projects" className="mobile-nav-item">
          <Search className="w-6 h-6 mb-1" />
          <span>المشاريع</span>
        </Link>
        <Link href="/add-project" className="mobile-nav-item">
          <Plus className="w-6 h-6 mb-1" />
          <span>أضف مشروع</span>
        </Link>
        <Link href="/messages" className="mobile-nav-item">
          <Mail className="w-6 h-6 mb-1" />
          <span>الرسائل</span>
        </Link>
        <Link href="/profile" className="mobile-nav-item">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
              alt="Profile"
              width={24}
              height={24}
              className="rounded-full"
            />
          </div>
          <span>حسابي</span>
        </Link>
      </nav>
    </>
  );
}