"use client";
import React from "react";
export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen w-full px-0 sm:px-0 md:px-0 lg:px-0 py-2 sm:py-4 md:py-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center w-full px-2 sm:px-4 md:px-8 lg:px-16 py-2 sm:py-4 md:py-8">
        <div className="w-full max-w-7xl flex flex-col items-center justify-center py-12 sm:py-16 md:py-24 px-2 sm:px-4 md:px-8 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Website Proposal
            </span>
          </h1>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full max-w-4xl bg-white/80 rounded-3xl shadow-xl border border-indigo-100 px-2 sm:px-6 md:px-12 py-8 sm:py-12 mb-8 sm:mb-12 text-center mt-8 sm:mt-12" style={{backdropFilter: 'blur(6px)'}}>
              <h2 className="text-2xl md:text-4xl font-extrabold text-black mb-4">Why have a website?</h2>
              <p className="text-xl md:text-2xl text-black leading-relaxed font-medium">
                In today’s digital-first world, your website is often the first impression customers have of your business. It’s not just a place to display your products or services—it’s a platform to build credibility, answer questions, and connect with your audience any time, anywhere. A well-designed website helps you stand out from competitors, streamlines communication, and opens new opportunities for growth. Whether you’re serving local clients or reaching a global market, a strong online presence is the foundation for lasting success.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 justify-center w-full">
            {/* Card 1 */}
            <div className="container glass-card rounded-2xl shadow-2xl px-4 py-6 sm:px-6 sm:py-8 flex-1 min-w-0 w-full max-w-full flex flex-col break-words transition duration-300 border border-indigo-100 font-sans bg-white/90 mb-4 sm:mb-6" style={{boxShadow: '0 6px 36px 0 rgba(31,38,135,0.13), 0 0 0 2px #a5b4fc22'}}>
              <h2 className="text-black text-2xl font-extrabold mb-4 flex items-center gap-2"><span className="text-3xl">1️⃣</span> For Medicine Distribution</h2>
              <div className="space-y-4 pl-2">
                <p className="text-black text-lg flex items-start gap-2"><span className="text-2xl">💊</span><span><strong>Online Product Catalog</strong> – List all medicines, their uses, availability, and pricing (if allowed by regulations) so pharmacies, clinics, and hospitals can see what’s in stock without calling.</span></p>
                <p className="text-black text-lg flex items-start gap-2"><span className="text-2xl">📦</span><span><strong>Order Management</strong> – Pharmacies and medical institutions can place bulk orders directly through the website.</span></p>
                <p className="text-black text-lg flex items-start gap-2"><span className="text-2xl">🛡</span><span><strong>Compliance & Trust</strong> – A professional site with licensing details builds credibility and assures buyers you are a verified and legal distributor.</span></p>
                <p className="text-black text-lg flex items-start gap-2"><span className="text-2xl">📚</span><span><strong>Information & Education</strong> – Share proper storage guidelines, usage notes, and expiration alerts.</span></p>
                <p className="text-black text-lg flex items-start gap-2"><span className="text-2xl">🤝</span><span><strong>B2B Connections</strong> – Attract new pharmacy chains, clinics, and NGOs who may need a trusted supplier.</span></p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="container glass-card rounded-2xl shadow-2xl px-4 py-6 sm:px-6 sm:py-8 flex-1 min-w-0 w-full max-w-full flex flex-col break-words transition duration-300 border border-indigo-100 font-sans bg-white/90 mb-4 sm:mb-6" style={{boxShadow: '0 6px 36px 0 rgba(31,38,135,0.13), 0 0 0 2px #a5b4fc22'}}>
              <h2 className="text-black text-2xl font-extrabold mb-4 flex items-center gap-2"><span className="text-3xl">2️⃣</span> For Milk Distribution</h2>
              <div className="space-y-4 pl-2">
                <p className="text-black text-lg flex items-start gap-2"><span className="text-2xl">🥛</span><span><strong>Daily Subscription Orders</strong> – Let customers (shops, cafes, hotels, households) sign up for regular milk deliveries.</span></p>
                <p className="text-black text-lg flex items-start gap-2"><span className="text-2xl">⏰</span><span><strong>Real-Time Updates</strong> – Show delivery schedules, product variations (fresh milk, pasteurized, flavored, yogurt, etc.), and current prices.</span></p>
                <p className="text-black text-lg flex items-start gap-2"><span className="text-2xl">🚚</span><span><strong>Route & Delivery Coordination</strong> – Customers can select delivery areas and time slots.</span></p>
                <p className="text-black text-lg flex items-start gap-2"><span className="text-2xl">💳</span><span><strong>Payment Integration</strong> – Accept payments online or via mobile banking for convenience.</span></p>
                <p className="text-black text-lg flex items-start gap-2"><span className="text-2xl">🌟</span><span><strong>Brand Recognition</strong> – If competitors are only offline, an online presence will give you a marketing edge.</span></p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="container glass-card rounded-2xl shadow-2xl px-4 py-6 sm:px-6 sm:py-8 flex-1 min-w-0 w-full max-w-full flex flex-col break-words transition duration-300 border border-indigo-100 font-sans bg-white/90 mb-4 sm:mb-6" style={{boxShadow: '0 6px 36px 0 rgba(31,38,135,0.13), 0 0 0 2px #a5b4fc22'}}>
              <h2 className="text-black text-2xl font-extrabold mb-4 flex items-center gap-2"><span className="text-3xl">3️⃣</span> Why One Website for Both?</h2>
              <div className="space-y-4 pl-2">
                <p className="text-black text-lg flex items-start gap-2"><span className="text-2xl">🔀</span><span><strong>Two Sections</strong> – Present “Medicines” and “Dairy Products” separately.</span></p>
                <p className="text-black text-lg flex items-start gap-2"><span className="text-2xl">📄</span><span><strong>Unified Info</strong> – Share company profile, licenses, and contact info once.</span></p>
                <p className="text-black text-lg flex items-start gap-2"><span className="text-2xl">📥</span><span><strong>Central Orders</strong> – Handle requests and inquiries for both sectors.</span></p>
                <p className="text-black text-lg flex items-start gap-2"><span className="text-2xl">📈</span><span><strong>SEO Boost</strong> – More people find you when searching for medicine or dairy distributors.</span></p>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-8 sm:py-12 bg-white w-full px-2 sm:px-4 md:px-8 lg:px-16">
        <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 lg:px-16">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
              Choose Your Perfect Package
            </h2>
            <p className="text-base text-black max-w-2xl mx-auto">
              We offer three comprehensive packages to meet your business needs and budget requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full">
            {/* Package 1 - Static Website */}
            <div className="relative bg-white rounded-xl shadow-lg border border-gray-200 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 m-2 hover:shadow-2xl hover:scale-[1.03] transition duration-300 min-w-0 w-full max-w-full flex flex-col break-words">
              <div className="text-center text-black">
                <h3 className="text-xl font-bold mb-3">Static Website</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-blue-600">ETB 49,999</span>
                  <span className="text-sm">/one-time</span>
                </div>
                <ul className="text-left space-y-2 mb-6 text-sm">
                  <li className="flex items-center text-black"><span className="w-4 h-4 text-green-500 mr-2">✔</span>Responsive Design</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-green-500 mr-3">✔</span>Up to 5 Pages</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-green-500 mr-3">✔</span>Contact Form</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-green-500 mr-3">✔</span>SEO Optimized</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-green-500 mr-3">✔</span>30 Days Delivery</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-red-500 mr-3">✖</span>No Payment Integration</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-red-500 mr-3">✖</span>No User Management</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-red-500 mr-3">✖</span>No Database</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-red-500 mr-3">✖</span>No Social Media Integration</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-red-500 mr-3">✖</span>No Analytics Dashboard</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-red-500 mr-3">✖</span>No Custom Backend</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-red-500 mr-3">✖</span>No API Support</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-red-500 mr-3">✖</span>No Security Features</li>
                  <li className="flex items-center text-black"><span className="w-4 h-4 text-red-500 mr-2">✖</span>No Priority Support</li>
                </ul>
              </div>
            </div>
            {/* Package 2 - Static + Integration */}
            <div className="relative bg-white rounded-xl shadow-lg border border-gray-200 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 m-2 hover:shadow-2xl hover:scale-[1.03] transition duration-300 min-w-0 w-full max-w-full flex flex-col break-words">
              <div className="text-center text-black">
                <h3 className="text-xl font-bold mb-3">Static + Integration</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-blue-600">ETB 79,999</span>
                  <span className="text-sm">/one-time</span>
                </div>
                <ul className="text-left space-y-2 mb-6 text-sm">
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-green-500 mr-3">✔</span>Everything in Static</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-green-500 mr-3">✔</span>Payment Gateway Integration</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-green-500 mr-3">✔</span>Social Media Integration</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-green-500 mr-3">✔</span>Analytics Dashboard</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-green-500 mr-3">✔</span>40 Days Delivery</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-green-500 mr-3">✔</span>Basic Security Features</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-green-500 mr-3">✔</span>Email Support</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-green-500 mr-3">✔</span>Basic Backup</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-red-500 mr-3">✖</span>No Custom Backend</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-red-500 mr-3">✖</span>No 24/7 API Support</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-red-500 mr-3">✖</span>No Database Management</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-red-500 mr-3">✖</span>No Real-time Processing</li>
                  <li className="flex items-center text-black"><span className="w-4 h-4 text-red-500 mr-2">✖</span>No Mobile App Integration</li>
                </ul>
              </div>
            </div>
            {/* Package 3 - Full Backend */}
            <div className="relative bg-white rounded-2xl shadow-lg px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 m-2 hover:shadow-2xl hover:scale-[1.05] transition duration-300 scale-105 border-2 border-blue-600 min-w-0 w-full max-w-full flex flex-col break-words">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Most Popular</span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Full Backend + API</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-blue-600">ETB 119,999</span>
                  <span className="text-gray-500 text-sm">/one-time</span>
                </div>
                <ul className="text-left space-y-2 mb-6 text-sm">
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-green-500 mr-3">✔</span>Everything in Integration</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-green-500 mr-3">✔</span>Custom Backend Development</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-green-500 mr-3">✔</span>24/7 API Support</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-green-500 mr-3">✔</span>Database Management</li>
                  <li className="flex items-center text-black"><span className="w-5 h-5 text-green-500 mr-3">✔</span>45 Days Delivery</li>
                  <li className="flex items-center"><span className="w-5 h-5 text-green-500 mr-3">✔</span><span className="text-blue-600 font-semibold">Advanced Security Features</span></li>
                  <li className="flex items-center"><span className="w-5 h-5 text-green-500 mr-3">✔</span><span className="text-blue-600 font-semibold">Priority Support</span></li>
                  <li className="flex items-center"><span className="w-5 h-5 text-green-500 mr-3">✔</span><span className="text-blue-600 font-semibold">Custom API Development</span></li>
                  <li className="flex items-center"><span className="w-5 h-5 text-green-500 mr-3">✔</span><span className="text-blue-600 font-semibold">Real-time Data Processing</span></li>
                  <li className="flex items-center"><span className="w-5 h-5 text-green-500 mr-3">✔</span><span className="text-blue-600 font-semibold">Multi-language Support</span></li>
                  <li className="flex items-center"><span className="w-5 h-5 text-green-500 mr-3">✔</span><span className="text-blue-600 font-semibold">Advanced Analytics & Reports</span></li>
                  <li className="flex items-center"><span className="w-5 h-5 text-green-500 mr-3">✔</span><span className="text-blue-600 font-semibold">Automated Backup System</span></li>
                  <li className="flex items-center"><span className="w-5 h-5 text-green-500 mr-3">✔</span><span className="text-blue-600 font-semibold">Performance Optimization</span></li>
                  <li className="flex items-center"><span className="w-5 h-5 text-green-500 mr-3">✔</span><span className="text-blue-600 font-semibold">Mobile App Integration</span></li>
                  <li className="flex items-center"><span className="w-5 h-5 text-green-500 mr-3">✔</span><span className="text-blue-600 font-semibold">Third-party Integrations</span></li>
                  <li className="flex items-center"><span className="w-4 h-4 text-green-500 mr-2">✔</span><span className="text-blue-600 font-semibold text-sm">Scalable Architecture</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* COMPONENTS FOR PACKAGES */

function PackageOne() {
  const features = [
    "Responsive Design",
    "Up to 5 Pages",
    "Contact Form",
    "SEO Optimized",
    "30 Days Delivery",
  ];
  const noFeatures = [
    "No Payment Integration",
    "No User Management",
    "No Database",
    "No Social Media Integration",
    "No Analytics Dashboard",
    "No Custom Backend",
    "No API-Support",
    "No Security Features",
    "No Priority Support",
  ];
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition duration-300">
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Static Website</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-blue-600">₹49,999</span>
          <span className="text-gray-500 text-sm">/one-time</span>
        </div>
        <ul className="text-left space-y-2 mb-6 text-sm">
          {features.map((f) => (
            <li key={f} className="flex items-center text-black">
              <span className="w-4 h-4 text-green-500 mr-2">✔</span>{f}
            </li>
          ))}
          {noFeatures.map((f) => (
            <li key={f} className="flex items-center text-gray-400">
              <span className="w-4 h-4 text-red-500 mr-2">✖</span>{f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PackageTwo() {
  const features = [
    "Everything in Static",
    "Payment Gateway Integration",
    "Social Media Integration",
    "Analytics Dashboard",
    "40 Days Delivery",
    "Basic Security Features",
    "Email Support",
    "Basic Backup",
  ];
  const noFeatures = [
    "No Custom Backend",
    "No 24/7 API Support",
    "No Database Management",
    "No Real-time Processing",
    "No Mobile App Integration",
  ];
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition duration-300">
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Static + Integration
        </h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-blue-600">₹79,999</span>
          <span className="text-gray-500 text-sm">/one-time</span>
        </div>
        <ul className="text-left space-y-2 mb-6 text-sm">
          {features.map((f) => (
            <li key={f} className="flex items-center text-black">
              <span className="w-5 h-5 text-green-500 mr-3">✔</span>{f}
            </li>
          ))}
          {noFeatures.map((f) => (
            <li key={f} className="flex items-center text-gray-400">
              <span className="w-5 h-5 text-red-500 mr-3">✖</span>{f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PackageThree() {
  const features = [
    "Everything in Integration",
    "Custom Backend Development",
    "24/7 API Support",
    "Database Management",
    "45 Days Delivery",
    "Advanced Security Features",
    "Priority Support",
    "Custom API Development",
    "Real-time Data Processing",
    "Multi-language Support",
    "Advanced Analytics & Reports",
    "Automated Backup System",
    "Performance Optimization",
    "Mobile App Integration",
    "Third-party Integrations",
    "Scalable Architecture",
  ];
  return (
    <div className="most-popular-gradient-border relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform scale-105">
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          Most Popular
        </span>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Full Backend + API
        </h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-blue-600">₹119,999</span>
          <span className="text-gray-500 text-sm">/one-time</span>
        </div>
        <ul className="text-left space-y-2 mb-6 text-sm">
          {features.map((f) => (
            <li key={f} className="flex items-center text-black">
              <span className="w-5 h-5 text-green-500 mr-3">✔</span>{f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
