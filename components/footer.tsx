import { Globe, Twitter, Linkedin, Youtube, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    Product: ['Features', 'Pricing', 'Use Cases', 'Changelog', 'Roadmap'],
    Solutions: ['For Business', 'For Legal', 'For Medical', 'For Education', 'For Government'],
    Resources: ['Blog', 'Documentation', 'API Reference', 'Help Center', 'Status Page'],
    Company: ['About Us', 'Careers', 'Press', 'Contact', 'Partners'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Security'],
  }

  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">

          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl blue-gradient flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">TranscriptAI</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Break language barriers instantly.
              Speak to the world with AI-powered translation.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">
              © {currentYear} TranscriptAI. All rights reserved.
              Made with ❤️ for global communication.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span>🇮🇳 India</span>
              <span>🌍 Global</span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
