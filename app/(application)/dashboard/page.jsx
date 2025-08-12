"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  Wallet,
  DollarSign,
  User,
  Menu,
  Bell,
  Settings,
  Search,
} from "lucide-react";
import { TrueFlowHeaderRedirect } from "@/app/components/Header";

// Sample data for charts
const apyData = [
  { month: "Jan", value: 12 },
  { month: "Feb", value: 8 },
  { month: "Mar", value: 15 },
  { month: "Apr", value: 10 },
  { month: "May", value: 18 },
  { month: "Jun", value: 25 },
  { month: "Jul", value: 30 },
  { month: "Aug", value: 22 },
  { month: "Sep", value: 28 },
  { month: "Oct", value: 35 },
  { month: "Nov", value: 32 },
  { month: "Dec", value: 38 },
];

const valueData = [
  { time: "00:00", value: 1.0001 },
  { time: "04:00", value: 0.9998 },
  { time: "08:00", value: 1.0003 },
  { time: "12:00", value: 0.9995 },
  { time: "16:00", value: 1.0008 },
  { time: "20:00", value: 1.0002 },
  { time: "24:00", value: 1.0006 },
];

function TrueFlowFooter() {
  // Social media assets object
  const socialAssets = [
    {
      src: "/icons/socials/discord.png",
      alt: "Discord",
      href: "#",
    },
    {
      src: "/icons/socials/twitter.png",
      alt: "X (Twitter)",
      href: "#",
    },
    {
      src: "/icons/socials/linkedin.png",
      alt: "LinkedIn",
      href: "#",
    },
    {
      src: "/icons/socials/mail.png",
      alt: "Email",
      href: "#",
    },
  ];

  // Logo asset
  const logoAsset = {
    src: "/logo.png",
    alt: "TrueFlow Logo",
    width: 120,
    height: 40,
  };

  // Render social icons function
  const renderSocialIcons = () => (
    <div className="flex items-center space-x-4">
      {socialAssets.map((social, index) => (
        <a
          key={index}
          href={social.href}
          className="hover:opacity-75 transition-opacity"
        >
          <Image
            src={social.src}
            alt={social.alt}
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </a>
      ))}
    </div>
  );

  return (
    <footer className="bg-gray-100 py-6 px-4">
      {/* Desktop version */}
      <div className="max-w-7xl mx-auto hidden md:flex items-center justify-between">
        {/* Left side - Social media icons */}
        {renderSocialIcons()}

        {/* Center - Copyright text */}
        <div className="text-gray-600 text-sm font-medium">
          Copyright © 2025 by TrueFlow. All rights reserved.
        </div>

        {/* Right side - Logo */}
        <div className="flex items-center">
          <Image
            src={logoAsset.src}
            alt={logoAsset.alt}
            width={logoAsset.width}
            height={logoAsset.height}
            className="h-10 w-auto"
          />
        </div>
      </div>

      {/* Mobile responsive version */}
      <div className="md:hidden flex flex-col items-center space-y-4">
        {renderSocialIcons()}

        <div className="text-gray-600 text-sm font-medium text-center">
          Copyright © 2025 by TrueFlow. All rights reserved.
        </div>

        <div className="flex items-center">
          <Image
            src={logoAsset.src}
            alt={logoAsset.alt}
            width={logoAsset.width}
            height={logoAsset.height}
            className="h-10 w-auto"
          />
        </div>
      </div>
    </footer>
  );
}

// export default TrueFlowFooter;

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [isMobile, setIsMobile] = useState(false);

  const navigationItems = ["Overview", "Strategy", "Execute", "Account"];

  return (
    <div className="min-h-screen  py-20 md:py-32 lg:py-40">
      {/* Header */}
      <TrueFlowHeaderRedirect />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 md:px-6">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Overview</h1>
          <p className="text-gray-600">
            Monitor your DeFi portfolio performance
          </p>
        </div>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Portfolio Value Card */}
          <Card className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm opacity-90">Portfolio Value</span>
                </div>
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-2">$1,050.9</div>
              <div className="text-sm opacity-90">+2.4% from last month</div>
            </CardContent>
          </Card>

          {/* Total Backing Card */}
          <Card className="bg-white shadow-md border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">Total Backing</span>
                <div className="w-12 h-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        { v: 1 },
                        { v: 2 },
                        { v: 1.5 },
                        { v: 3 },
                        { v: 2.5 },
                      ]}
                    >
                      <Line
                        type="monotone"
                        dataKey="v"
                        stroke="#10b981"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                $709.9M
              </div>
              <div className="text-sm text-gray-500">
                Increased 12% this week
              </div>
            </CardContent>
          </Card>

          {/* sUSDF Card */}
          <Card className="bg-white shadow-md border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">$</span>
                  </div>
                  <span className="text-sm text-gray-600">sUSDF</span>
                </div>
                <div className="w-12 h-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        { v: 1 },
                        { v: 2.5 },
                        { v: 2 },
                        { v: 3 },
                        { v: 2.8 },
                      ]}
                    >
                      <Line
                        type="monotone"
                        dataKey="v"
                        stroke="#10b981"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                286.32M
              </div>
              <div className="text-sm text-gray-500">Current supply</div>
            </CardContent>
          </Card>
        </div>
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* sUSDF APY Chart */}
          <Card className="bg-white shadow-md border-0">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-gray-900">
                  sUSDF APY
                </CardTitle>
                <Badge
                  variant="secondary"
                  className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                >
                  38% APY
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={apyData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#6b7280" }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#6b7280" }}
                    />
                    {/* Base bar (light gray) */}
                    <Bar dataKey="value" fill="#e5e7eb" radius={[4, 4, 0, 0]} />
                    {/* Highlighted bar (green) - only shows last month */}
                    <Bar
                      dataKey="value"
                      fill="#10b981"
                      radius={[4, 4, 0, 0]}
                      // This will automatically highlight the last data point
                      // No need for separate data prop
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* sUSDF to USDT Value Chart */}
          <Card className="bg-white shadow-md border-0">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-gray-900">
                sUSDF-to-USDT Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={valueData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                      dataKey="time"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#6b7280" }}
                    />
                    <YAxis
                      domain={["dataMin - 0.0005", "dataMax + 0.0005"]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#6b7280" }}
                      tickFormatter={(value) => value.toFixed(4)}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#10b981"
                      strokeWidth={3}
                      dot={false}
                      fill="url(#colorGradient)"
                    />
                    <defs>
                      <linearGradient
                        id="colorGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#10b981"
                          stopOpacity={0.1}
                        />
                        <stop
                          offset="95%"
                          stopColor="#10b981"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-end mt-2">
                <span className="text-sm text-gray-500">$1.0006</span>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Footer */}
        <TrueFlowFooter />
      </main>
    </div>
  );
};

export default Dashboard;
