"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Music } from "lucide-react"
import confetti from "canvas-confetti"

type Note = {
  id: string
  content: string
  color: string
  rotation: number
  x: number
  y: number
  z?: number
  width: string
  fontSize: string
}

type Polaroid = {
  id: string
  imageUrl: string
  caption: string
  rotation: number
  x: number
  y: number
  z: number
  width: string
}

type PolaroidVideo = {
  id: string
  videoUrl: string
  caption: string
  rotation: number
  x: number
  y: number
  z: number
  width: string
}

const calculateTimeDifference = () => {
  const now = new Date();
  const targetDate = new Date("2024-06-20T00:00:00");
  const diff = now.getTime() - targetDate.getTime();

  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  return `${Math.abs(months)} meses, ${Math.abs(days)} dias, ${Math.abs(hours)} horas, ${Math.abs(minutes)} minutos e ${Math.abs(seconds)} segundos ❤️`;
};

export default function MessageBoard() {
  const [showIntro, setShowIntro] = useState(true)
  const [introResponse, setIntroResponse] = useState<string | null>(null)
  const [showSpotify, setShowSpotify] = useState(false)
  const midiaFolder = "/midia/"
  const [zIndexCounter, setZIndexCounter] = useState<number>(1);

  const [notes, setNotes] = useState<Note[]>([
    {
      id: "7n",
      content: "Dia 20 é o nosso dia, teee aaaamooo muuuuuuiiiiitoooo!!! ❤️",
      color: "bg-fuchsia-200",
      rotation: -1,
      x: 209.068115234375,
      y: 425.3089294433594,
      width: "w-64",
      fontSize: "text-lg",
    },
    {
      id: "1n",
      content: "Cada momento com você é especial, cada risada, cada abraço, cada olhar, são muito especiais para mim!!!",
      color: "bg-pink-200",
      rotation: -1,
      x: 328.319580078125,
      y: 624.9503173828125,
      width: "w-72",
      fontSize: "text-base",
    },
    {
      id: "2n",
      content: "São muito momentos juntos que não cabem nessa tela, e cada  um deles são são muito especiais",
      color: "bg-pink-100",
      rotation: 1,
      x: 47.07586669921875,
      y: 20.979759216308594,
      width: "w-72",
      fontSize: "text-base",
    },
    {
      id: "3n",
      content: "Você é a pessoa mais incrível que eu conheci, e eu sou muito grato por ter você na minha vida",
      color: "bg-rose-200",
      rotation: -1,
      x: 7.380615234375,
      y: 344.5433044433594,
      width: "w-64",
      fontSize: "text-lg",
    },
    {
      id: "4n",
      content: "Não acredito que pude encontrar uma pessoa tão especial na minha vida, que pudesse me entender e me apoiar",
      color: "bg-red-200",
      rotation: 1,
      x: 566.060791015625,
      y: 211.84075927734375,
      width: "w-64",
      fontSize: "text-base",
    },
    {
      id: "5n",
      content: "Quero conhecer o mundo com você, viajar, explorar e fazer você se sentir a pessoa mais especial desse mundo (Mesmo você já sendo!)",
      color: "bg-red-200",
      rotation: 1,
      x: 328.660888671875,
      y: 66.54206848144531,
      width: "w-64",
      fontSize: "text-base",
    },
    {
      id: "6n",
      content: "Obrigado por me aturar por 9 meses, 2 dias, 1 horas, 43 minutos e 5 segundos ❤️",
      color: "bg-fuchsia-200",
      rotation: -1,
      x: 209.068115234375,
      y: 425.3089294433594,
      width: "w-64",
      fontSize: "text-lg",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === "6n"
            ? { ...note, content: `Obrigado por me aturar por ${calculateTimeDifference()}` }
            : note
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [polaroids, setPolaroids] = useState<Polaroid[]>([
    {
      id: "1p",
      imageUrl: midiaFolder + "polaroid1.jpg?height=150&width=150",
      caption: "noix na pizzaria 🍕",
      rotation: 2,
      x: 669.116455078125,
      y: 357.5255126953125,
      z: 1,
      width: "w-48",
    },
    {
      id: "2p",
      imageUrl: midiaFolder + "polaroid2.jpg?height=150&width=150",
      caption: "os mais fits 🏃‍♂️🏃‍♂️🏃‍♂️",
      rotation: 2,
      x: 468.850830078125,
      y: 434.4161376953125,
      z: 1,
      width: "w-48",
    },
    {
      id: "3p",
      imageUrl: midiaFolder + "polaroid3.jpg?height=150&width=150",
      caption: "quase morremos esse dia",
      rotation: -2,
      x: 0,
      y: 505.8765869140625,
      z: 1,
      width: "w-48",
    },
    {
      id: "4p",
      imageUrl: midiaFolder + "polaroid4.jpg?height=150&width=150",
      caption: "você i eu ❤️",
      rotation: 1,
      x: 178.3245849609375,
      y: 150.3091583251953,
      z: 1,
      width: "w-48",
    },
    {
      id: "5p",
      imageUrl: midiaFolder + "polaroid5.jpg?height=150&width=150",
      caption: "minha riqueza 💰",
      rotation: 1,
      x: 691.1370849609375,
      y: 35.98103332519531,
      z: 1,
      width: "w-48",
    },
    {
      id: "6p",
      imageUrl: midiaFolder + "polaroid6.jpg?height=150&width=150",
      caption: "os bala na agulha",
      rotation: 1,
      x: 363.1370849609375,
      y: 232.98104858398438,
      z: 1,
      width: "w-48",
    },
    {
      id: "7p",
      imageUrl: midiaFolder + "polaroid7.jpg?height=150&width=150",
      caption: "mimindo",
      rotation: 1,
      x: 541.7620849609375,
      y: 0,
      z: 1,
      width: "w-48",
    },
  ]);

  const [polaroidVideos, setPolaroidVIdeos] = useState<PolaroidVideo[]>([
    {
      id: "1v",
      videoUrl: midiaFolder + "video-1.mp4",
      caption: "os doidinhos 🤪",
      rotation: 3,
      x: 171.65179443359375,
      y: 569.5244140625,
      z: 1,
      width: "",
    },
    {
      id: "2v",
      videoUrl: midiaFolder + "video-2.mp4",
      caption: "quebra-cabeça infinito",
      rotation: -2,
      x: 644.2694702148438,
      y: 562.6785888671875,
      z: 1,
      width: "",
    },
    {
      id: "3v",
      videoUrl: midiaFolder + "video-3.mp4",
      caption: "mestra das gravações",
      rotation: -2,
      x: 14.6318359375,
      y: 137.44851684570312,
      z: 1,
      width: "",
    },
  ]);

  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [touchOffset, setTouchOffset] = useState({ x: 0, y: 0 })

  // Reset the intro dialog on page refresh
  useEffect(() => {
    setShowIntro(true)
    setIntroResponse(null)
  }, [])

  // Function to handle intro dialog responses
  const handleIntroResponse = (response: "yes" | "no") => {
    if (response === "yes") {
      setIntroResponse("Que bom! Espero que essas memórias te façam sorrir! ❤️")
    } else {
      setIntroResponse("Vou te lembrar mesmo assim!!! 😊")
    }

    
    // Close the dialog after a short delay
    setTimeout(() => {
      setShowIntro(false)
      
      confetti({
        particleCount: 250,
        spread: 100,
        origin: { y: 0.6 },
      })
    }, 3000)

    
  }

  // Function to adjust positions based on screen size
  const adjustPositions = () => {
    const boardWidth = typeof window !== "undefined" ? Math.min(window.innerWidth - 32, 800) : 800
    const scale = boardWidth / 800
    const centerX = boardWidth / 2
    const centerY = (typeof window !== "undefined" ? window.innerHeight : 800) / 2

    // Adjust notes positions
    const adjustedNotes = notes.map((note) => {
      const adjustedX = centerX + (note.x - 400) * scale
      const adjustedY = centerY + (note.y - 400) * scale
      return { ...note, x: adjustedX, y: adjustedY }
    })

    // Adjust polaroids positions
    const adjustedPolaroids = polaroids.map((polaroid) => {
      const adjustedX = centerX + (polaroid.x - 400) * scale
      const adjustedY = centerY + (polaroid.y - 400) * scale
      return { ...polaroid, x: adjustedX, y: adjustedY }
    })

    // Adjust polaroid videos positions
    const adjustedPolaroidVideos = polaroidVideos.map((video) => {
      const adjustedX = centerX + (video.x - 400) * scale
      const adjustedY = centerY + (video.y - 400) * scale
      return { ...video, x: adjustedX, y: adjustedY }
    })

    setPolaroidVIdeos(adjustedPolaroidVideos)
    setNotes(adjustedNotes)
    setPolaroids(adjustedPolaroids)
  }

  // Adjust positions on window resize
  useEffect(() => {
    adjustPositions()
    window.addEventListener("resize", adjustPositions)
    return () => {
      window.removeEventListener("resize", adjustPositions)
    }
  }, [])

  // Handle drag start for both mouse and touch events
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent, id: string) => {
    setActiveItem(id)
    setZIndexCounter((prev) => prev + 1);

    e.stopPropagation()

    // For notes
    const noteIndex = notes.findIndex((note) => note.id === id);
    if (noteIndex !== -1) {
      setNotes((prevNotes) => {
        const updated = [...prevNotes];
        updated[noteIndex] = { ...updated[noteIndex], z: zIndexCounter + 1 };
        return updated;
      });
    } else {
      // For polaroids
      const polaroidIndex = polaroids.findIndex((p) => p.id === id);
      if (polaroidIndex !== -1) {
        setPolaroids((prevPolaroids) => {
          const updated = [...prevPolaroids];
          updated[polaroidIndex] = { ...updated[polaroidIndex], z: zIndexCounter + 1 };
          return updated;
        });
      } else {
        // For polaroidVideos
        const videoIndex = polaroidVideos.findIndex((v) => v.id === id);
        if (videoIndex !== -1) {
          setPolaroidVIdeos((prevVideos) => {
            const updated = [...prevVideos];
            updated[videoIndex] = { ...updated[videoIndex], z: zIndexCounter + 1 };
            return updated;
          });
        }
      }
    }

    let clientX: number, clientY: number

    if ("touches" in e) {
      // Touch event
      clientX = e.touches[0].clientX
      clientY = e.touches[0].clientY
    } else {
      // Mouse event
      clientX = e.clientX
      clientY = e.clientY
    }

    const target = e.currentTarget as HTMLElement
    const rect = target.getBoundingClientRect()

    setTouchOffset({
      x: clientX - rect.left,
      y: clientY - rect.top,
    })
  }

  // Handle drag over
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  // Handle mouse move
  const handleMouseMove = (e: MouseEvent) => {
    if (!activeItem) return

    const boardElement = document.getElementById("message-board")
    if (!boardElement) return

    const boardRect = boardElement.getBoundingClientRect()

    const newX = e.clientX - boardRect.left - touchOffset.x
    const newY = e.clientY - boardRect.top - touchOffset.y
    e.preventDefault()
    e.stopPropagation()

    updateItemPosition(newX, newY)
  }

  // Handle touch move
  const handleTouchMove = (e: TouchEvent) => {
    if (!activeItem || e.touches.length === 0) return

    const boardElement = document.getElementById("message-board")
    if (!boardElement) return

    const boardRect = boardElement.getBoundingClientRect()

    const newX = e.touches[0].clientX - boardRect.left - touchOffset.x
    const newY = e.touches[0].clientY - boardRect.top - touchOffset.y
    e.preventDefault()
    e.stopPropagation()

    updateItemPosition(newX, newY)
  }

  // Update item position
  const updateItemPosition = (x: number, y: number) => {
    // Ensure position is within board boundaries
    const boardElement = document.getElementById("message-board")
    if (!boardElement) return

    const boardWidth = boardElement.clientWidth
    const boardHeight = boardElement.clientHeight

    const boundedX = Math.max(0, Math.min(x, boardWidth - 100))
    const boundedY = Math.max(0, Math.min(y, boardHeight - 100))

    // Check if it's a note or polaroid
    const noteIndex = notes.findIndex((note) => note.id === activeItem)
    if (noteIndex !== -1) {
      const updatedNotes = [...notes]
      updatedNotes[noteIndex] = { ...updatedNotes[noteIndex], x: boundedX, y: boundedY }
      setNotes(updatedNotes)
    } else {
      const polaroidIndex = polaroids.findIndex((polaroid) => polaroid.id === activeItem)
      if (polaroidIndex !== -1) {
      const updatedPolaroids = [...polaroids]
      updatedPolaroids[polaroidIndex] = { ...updatedPolaroids[polaroidIndex], x: boundedX, y: boundedY }
      setPolaroids(updatedPolaroids)
      } else {
      const videoIndex = polaroidVideos.findIndex((video) => video.id === activeItem)
      if (videoIndex !== -1) {
        const updatedVideos = [...polaroidVideos]
        updatedVideos[videoIndex] = { ...updatedVideos[videoIndex], x: boundedX, y: boundedY }
        setPolaroidVIdeos(updatedVideos)
      }
      }
    }
  }

  // Handle end of drag
  const handleDragEnd = () => {
    setActiveItem(null)
  }

  // Add event listeners for mouse and touch events
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleDragEnd)
    window.addEventListener("touchmove", handleTouchMove, { passive: false })
    window.addEventListener("touchend", handleDragEnd)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleDragEnd)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleDragEnd)
    }
  }, [activeItem, touchOffset])

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-pink-50 p-4 flex items-center justify-center">
      <Dialog open={showIntro} onOpenChange={setShowIntro}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-white to-pink-50 border-pink-200">
          <DialogHeader>
            <DialogTitle className="text-center text-xl text-pink-600">
              Um recadinho para você...
            </DialogTitle>
            <div className="text-center pt-4">
              <div className="mb-6 text-gray-700">
                <div className="mb-4">
                  Sabe aqueles post-its que a gente cola em lugares para não esquecer de algo importante?
                </div>
                <div className="mb-4">Eles servem para nos lembrar das coisas que realmente importam, concorda?</div>
                <div className="font-medium">Posso te lembrar de uma coisa?</div>
              </div>  

              {introResponse ? (
                <div className="text-pink-600 text-lg animate-fade-in">{introResponse}</div>
              ) : (
                <div className="flex justify-center gap-4 mt-4">
                  <Button
                    onClick={() => handleIntroResponse("yes")}
                    className="bg-pink-500 hover:bg-pink-600 transition-all duration-300"
                  >
                    Sim, pode!
                  </Button>
                  <Button
                    onClick={() => handleIntroResponse("no")}
                    variant="outline"
                    className="border-pink-300 text-pink-700 hover:bg-pink-100 transition-all duration-300"
                  >
                    Não, obrigada
                  </Button>
                </div>
              )}
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Message Board */}
      <div className="relative max-w-4xl w-full">
        {/* Modern frame */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl transform -rotate-1 scale-[1.02] -z-10"></div>

        <div
          id="message-board"
          className="relative w-full h-[95vh] md:h-[800px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg shadow-inner border border-slate-200 overflow-hidden modern-board"
          onDragOver={handleDragOver}
        >
          {/* Modern board texture overlay */}
          <div className="absolute inset-0 bg-slate-800 opacity-[0.02] pointer-events-none"></div>

          {/* Modern decorative elements */}
          <div className="absolute top-4 right-4 w-20 h-1 bg-gradient-to-r from-pink-300 to-indigo-300 rounded-full opacity-70"></div>
          <div className="absolute top-8 right-8 w-10 h-1 bg-gradient-to-r from-pink-300 to-indigo-300 rounded-full opacity-50"></div>
          <div className="absolute bottom-4 left-4 w-20 h-1 bg-gradient-to-r from-indigo-300 to-pink-300 rounded-full opacity-70"></div>
          <div className="absolute bottom-8 left-8 w-10 h-1 bg-gradient-to-r from-indigo-300 to-pink-300 rounded-full opacity-50"></div>

          {/* Instructions */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full text-xs text-gray-600 shadow-sm text-center">
            Toque e arraste para mover
          </div>


          {/* Spotify Button */}
          <a href="https://open.spotify.com/playlist/7dHSdsOHuCVV1j7ggq2sQ6?si=84fe5c4964f146a1"
            target="_blank">
            <button
            className="fixed bottom-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-[50] flex items-center justify-center"
            aria-label="Ouvir música no Spotify"
            >
            <Music size={24} />
            <span className="ml-2 mr-1 text-sm font-medium">nossas músicas</span>
            </button>
          </a>
          {/* Notes */}
          
          {notes.map((note) => (
            <div
              key={note.id}
              className={cn(
                "absolute p-4 md:p-5 cursor-move transition-shadow duration-300",
                note.width,
                note.color,
                activeItem === note.id ? "shadow-lg" : "hover:shadow-md",
              )}
              style={{
                zIndex: note.z,
                transform: `rotate(${note.rotation}deg)`,
                left: `${note.x}px`,
                top: `${note.y}px`,
                boxShadow:
                  activeItem === note.id
                    ? "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                    : "0 1px 3px rgba(0,0,0,0.1)",
                transition: "box-shadow 0.3s ease, transform 0.1s ease",
              }}
              onMouseDown={(e) => handleDragStart(e, note.id)}
              onTouchStart={(e) => handleDragStart(e, note.id)}
            >
              {/* Modern pin for each note */}
              <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full shadow-sm z-10 bg-gradient-to-br from-pink-400 to-pink-500"></div>
              <p className={cn("leading-relaxed text-gray-800", note.fontSize)}>{note.content}</p>
            </div>
          ))}

          {/* Polaroids - with improved modern styling */}
          {polaroids.map((polaroid) => (
            <div
              key={polaroid.id}
              className={cn(
                "absolute bg-white p-3 cursor-move transition-shadow duration-300",
                polaroid.width,
                activeItem === polaroid.id ? "shadow-lg" : "hover:shadow-md",
              )}
              style={{
                zIndex: polaroid.z,
                transform: `rotate(${polaroid.rotation}deg)`,
                left: `${polaroid.x}px`,
                top: `${polaroid.y}px`,
                boxShadow:
                  activeItem === polaroid.id
                    ? "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                    : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                transition: "box-shadow 0.3s ease, transform 0.1s ease",
              }}
              onMouseDown={(e) => handleDragStart(e, polaroid.id)}
              onTouchStart={(e) => handleDragStart(e, polaroid.id)}
            >
              {/* Modern pin for each polaroid */}
              <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full shadow-sm z-10 bg-gradient-to-br from-indigo-400 to-indigo-500"></div>
              <div className="bg-gray-100 p-1 mb-2 shadow-inner pointer-events-none">
                <img
                  src={polaroid.imageUrl || "/placeholder.svg"}
                  alt={polaroid.caption}
                  className="w-full h-32 md:h-36 object-cover pointer-events-none"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className="text-center text-sm md:text-base text-gray-800 mt-1">{polaroid.caption}</p>
            </div>
          ))}

          {/* Polaroid Videos */}
          {polaroidVideos.map((video) => (
            <div
              key={video.id}
              className={cn(
                "absolute bg-white p-3 cursor-move transition-shadow duration-300",
                video.width,
                activeItem === video.id ? "shadow-lg" : "hover:shadow-md",
              )}
              style={{
                zIndex: video.z,
                transform: `rotate(${video.rotation}deg)`,
                left: `${video.x}px`,
                top: `${video.y}px`,
                boxShadow:
                  activeItem === video.id
                    ? "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                    : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                transition: "box-shadow 0.3s ease, transform 0.1s ease",
              }}
              onMouseDown={(e) => handleDragStart(e, video.id)}
              onTouchStart={(e) => handleDragStart(e, video.id)}
            >
              {/* Modern pin for each video */}
              <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full shadow-sm z-10 bg-gradient-to-br from-indigo-400 to-indigo-500"></div>
                <div className="bg-gray-100 p-1 mb-2 shadow-inner rounded-lg overflow-hidden pointer-events-none">
                <video
                  src={video.videoUrl}
                  loop
                  autoPlay
                  muted
                  className="w-full h-32 md:h-36 object-cover"
                  onError={(e) => console.error('Erro ao carregar o vídeo:', e)}
                />
                </div>
              <p className="text-center text-sm md:text-base text-gray-800 mt-1">{video.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

