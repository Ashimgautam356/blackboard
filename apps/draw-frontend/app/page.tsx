import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
    {/* Hero Section */}
    <div className="container mx-auto px-4 py-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
            ✨ Welcome to ExileDraw
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Bring your ideas to life with
          <span className="gradient-text"> ExileDraw</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          The most intuitive collaborative drawing platform for teams. Create, share, and iterate on your ideas in real-time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:opacity-90 transition-all font-semibold text-lg shadow-lg shadow-blue-200">
            Start Drawing Now
          </button>
          <button className="px-8 py-4 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition-all font-semibold text-lg border border-gray-200">
            Watch Demo
          </button>
        </div>
      </div>

      {/* Preview Section */}
      <div className="mt-20">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10"></div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
            <div className="aspect-video w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
              <p className="text-gray-400 text-xl font-medium">Interactive Canvas Preview</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Features Grid */}
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to create</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Powerful features that make ExileDraw the perfect choice for teams of all sizes
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="py-24 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to start creating?</h2>
        <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
          Join thousands of teams who are already using ExileDraw to bring their ideas to life.
        </p>
        <button className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-50 transition-all font-semibold text-lg shadow-xl">
          Get Started for Free
        </button>
        <p className="mt-4 text-blue-100 text-sm">No credit card required</p>
      </div>
    </div>

    {/* Footer */}
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">ExileDraw</h3>
            <p className="text-sm leading-relaxed">
              Making collaborative drawing simple and accessible for everyone.
            </p>
          </div>
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; 2025 ExileDraw. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </main>
);
}


const features = [
{
  icon: "✏️",
  title: "Smart Drawing Tools",
  description: "Intuitive tools that adapt to your drawing style, making creation effortless and natural."
},
{
  icon: "🤝",
  title: "Real-time Collaboration",
  description: "Work together seamlessly with your team, seeing changes instantly as they happen."
},
{
  icon: "🔄",
  title: "Version Control",
  description: "Never lose your work with automatic versioning and easy rollback options."
},
{
  icon: "📱",
  title: "Cross-platform Access",
  description: "Create and edit from any device - desktop, tablet, or mobile."
},
{
  icon: "🔒",
  title: "Enterprise Security",
  description: "Bank-level security with advanced permission controls and encryption."
},
{
  icon: "🚀",
  title: "Blazing Fast",
  description: "Optimized performance ensures smooth drawing even with complex diagrams."
}
];

const footerLinks = [
{
  title: "Product",
  links: ["Features", "Templates", "Enterprise", "Pricing", "Security"]
},
{
  title: "Resources",
  links: ["Documentation", "Tutorials", "Blog", "Support Center", "API"]
},
{
  title: "Company",
  links: ["About Us", "Careers", "Press", "Contact", "Partners"]
}
];