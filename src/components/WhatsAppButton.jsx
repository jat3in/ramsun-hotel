import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+916909422848&text=Hi,%20I%20am%20looking%20for%20a%20Hotel,%20can%20you%20help%20me?"
      className="fixed bottom-5 right-5 bg-[#25D366] p-4 rounded-full cursor-pointer shadow-lg hover:bg-[#1ea952] transition-colors duration-300 z-50"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </a>
  );
};

export default WhatsAppButton;
