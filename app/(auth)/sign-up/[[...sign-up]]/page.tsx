'use client'

import Image from 'next/image'
import { Loader2 } from 'lucide-react'
import { SignUp, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import { useEffect, useRef, useState } from 'react'

export default function Page() { 
  const [captchaText, setCaptchaText] = useState('')
  const [userInput, setUserInput] = useState('')
  const [error, setError] = useState('')
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    generateCaptcha()
  }, [])

  const generateCaptcha = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const newCaptcha = Math.random().toString(36).substring(2, 8).toUpperCase()
    setCaptchaText(newCaptcha)

    ctx.font = '25px Arial'
    ctx.fillStyle = '#333'
    ctx.fillText(newCaptcha, 10, 35)

    for (let i = 0; i < 5; i++) {
      ctx.beginPath()
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height)
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height)
      ctx.strokeStyle = '#888'
      ctx.stroke()
    }
  }

  const validateCaptcha = () => {
    if (userInput !== captchaText) {
      setError('Incorrect CAPTCHA. Please try again.')
      generateCaptcha()
      return false
    }
    setError('')
    setIsCaptchaVerified(true)
    return true
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    validateCaptcha()
  }

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2E2A47]">Welcome</h1>
          <p className="text-base text-[#7E8CA0]">
            {isCaptchaVerified 
              ? "Create an account to get started!" 
              : "Please verify you're human to continue"}
          </p>
        </div>
        
        {!isCaptchaVerified ? (
          <div className="mt-6 w-full max-w-md">
            <div className="flex flex-col items-center mb-4">
              <canvas 
                ref={canvasRef} 
                id="captchaCanvas" 
                width="200" 
                height="50"
                className="border border-gray-300 mb-2"
              />
              <button 
                type="button" 
                onClick={generateCaptcha}
                className="text-sm text-blue-600 hover:text-blue-800 mb-2"
              >
                Refresh CAPTCHA
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  id="captchaInput"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Enter CAPTCHA"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                Verify CAPTCHA
              </button>
            </form>
          </div>
        ) : (
          <div className="flex items-center justify-center mt-8 w-full max-w-md">
            <ClerkLoaded>
              <SignUp 
                path="/sign-up"
                afterSignUpUrl="/"
                afterSignInUrl="/"
              />
            </ClerkLoaded>
            <ClerkLoading>
              <Loader2 className="animate-spin text-muted-foreground" />
            </ClerkLoading>
          </div>
        )}
      </div>
      
      <div className="h-full bg-green-600 hidden lg:flex items-center justify-center">
        <Image src="/logo.svg" height={100} width={100} alt="logo" />
      </div>
    </div>
  )
}
