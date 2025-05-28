import { X } from "lucide-react"
import WeChatQR from "@/assets/images/wechat.png"

interface WeChatModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WeChatModal({ isOpen, onClose }: WeChatModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <h3 className="text-lg font-semibold mb-4">Scan WeChat QR Code</h3>
        <div className="flex justify-center">
          <img 
            src={WeChatQR} 
            alt="WeChat QR Code" 
            className="w-64 h-64 object-contain"
          />
        </div>
      </div>
    </div>
  )
}