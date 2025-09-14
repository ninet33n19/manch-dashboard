import React from "react";
import { ArrowUpRight } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar: string;
  };
  companyInfo?: {
    name: string;
    industry: string;
    employees: string;
    logo: string;
  };
}

const TestimonialCard: React.FC<{
  testimonial: Testimonial;
  className?: string;
}> = ({ testimonial, className = "" }) => {
  const companyInfo = testimonial.companyInfo;

  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 ${className}`}
    >
      {companyInfo && (
        <div className="relative mb-6">
          <img
            src={companyInfo.logo}
            alt={companyInfo.name}
            className="w-full h-48 object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl flex flex-col justify-between p-6">
            <div></div>
            <div>
              <h3 className="text-white text-2xl font-bold mb-1">
                {companyInfo.name}
              </h3>
              <p className="text-white text-sm opacity-90">
                {companyInfo.industry} / {companyInfo.employees}
              </p>
            </div>
          </div>
          <div className="absolute top-4 right-4 bg-lime-400 rounded-full p-2">
            <ArrowUpRight className="w-5 h-5 text-gray-900" />
          </div>
        </div>
      )}

      <blockquote className="text-gray-700 text-base leading-relaxed mb-6">
        "{testimonial.quote}"
      </blockquote>

      <div className="flex items-center gap-3">
        <img
          src={testimonial.author.avatar}
          alt={testimonial.author.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">
            {testimonial.author.name}
          </h4>
          <p className="text-gray-600 text-sm">
            {testimonial.author.title} {testimonial.author.company}
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialGrid: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        "As a solo founder, I needed something that wouldn't require a CFO to understand. This platform turned our messy finances into clear, actionable insights from day one.",
      author: {
        name: "Sarah Olsson",
        title: "Founder & CEO",
        company: "@Finns",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      },
    },
    {
      id: 2,
      quote:
        "As a solo founder, I needed something that wouldn't require a CFO to understand. This platform turned our messy finances into clear, actionable insights from day one.",
      author: {
        name: "Sarah Olsson",
        title: "Founder & CEO",
        company: "@Finns",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      },
      companyInfo: {
        name: "Galaxy",
        industry: "Finance",
        employees: "12 Employees",
        logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      },
    },
    {
      id: 3,
      quote:
        "As a solo founder, I needed something that wouldn't require a CFO to understand. This platform turned our messy finances into clear, actionable insights from day one.",
      author: {
        name: "Sarah Olsson",
        title: "Founder & CEO",
        company: "@Finns",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      },
    },
    {
      id: 4,
      quote:
        "As a solo founder, I needed something that wouldn't require a CFO to understand. This platform turned our messy finances into clear, actionable insights from day one.",
      author: {
        name: "Sarah Olsson",
        title: "Founder & CEO",
        company: "@Finns",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      },
    },
    {
      id: 5,
      quote:
        "As a solo founder, I needed something that wouldn't require a CFO to understand. This platform turned our messy finances into clear, actionable insights from day one.",
      author: {
        name: "Sarah Olsson",
        title: "Founder & CEO",
        company: "@Finns",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      },
    },
    {
      id: 6,
      quote:
        "As a solo founder, I needed something that wouldn't require a CFO to understand. This platform turned our messy finances into clear, actionable insights from day one.",
      author: {
        name: "Sarah Olsson",
        title: "Founder & CEO",
        company: "@Finns",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      },
      companyInfo: {
        name: "Galaxy",
        industry: "Finance",
        employees: "12 Employees",
        logo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              className={
                index % 4 === 1 ? "md:mt-8" : index % 4 === 3 ? "md:mt-12" : ""
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialGrid;
