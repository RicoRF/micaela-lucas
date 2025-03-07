
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface WeddingCardProps {
  groomName: string;
  brideName: string;
  date: string;
  message: string;
  giftAmount: string;
  sender: string;
}

const WeddingCard: React.FC<WeddingCardProps> = ({
  groomName,
  brideName,
  date,
  message,
  giftAmount,
  sender
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleReveal = () => {
    setIsRevealed(true);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 w-full">
      <div 
        className={cn(
          "w-[96%] md:w-[80%] mx-auto aspect-[5/7] relative perspective-1000 cursor-pointer",
          "transition-all duration-500 transform-style-3d",
          isFlipped ? "rotate-y-180" : ""
        )}
        onClick={handleFlip}
      >
        {/* Front of Card */}
        <div 
          className={cn(
            "absolute w-full h-full backface-hidden",
            "rounded-xl shadow-2xl overflow-hidden",
            "bg-white border-4 border-red-600",
            "flex flex-col items-center justify-between p-8",
            isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          {/* Maple Leaf Icon - Top */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-5xl text-red-600">
            🍁
          </div>

          <div className="w-full text-center mt-16">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-red-600 w-16"></div>
              <span className="mx-4 text-red-600 text-xl">•</span>
              <div className="h-px bg-red-600 w-16"></div>
            </div>
            <h1 className="text-5xl sm:text-6xl font-script text-red-600 mb-4">
              ¡Felicidades!
            </h1>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-red-600 w-16"></div>
              <span className="mx-4 text-red-600 text-xl">•</span>
              <div className="h-px bg-red-600 w-16"></div>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-3xl sm:text-4xl font-script text-gray-800 mb-2">
              {brideName} & {groomName}
            </p>
            <p className="text-lg text-gray-600">{date}</p>
            <p className="mt-4 text-md text-gray-600 italic">Próximo destino: Canadá 🍁</p>
          </div>

          <p className="text-sm text-gray-500 italic mt-4">
            Toca para abrir
          </p>

          {/* Maple Leaf Icon - Bottom */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-5xl text-red-600">
            🍁
          </div>
        </div>

        {/* Back of Card */}
        <div 
          className={cn(
            "absolute w-full h-full backface-hidden rotate-y-180",
            "rounded-xl shadow-2xl overflow-auto",
            "bg-white border-4 border-red-600",
            "flex flex-col items-center p-6 sm:p-8",
            !isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="w-full h-full flex flex-col">
            <div className="flex-grow text-center mb-6 overflow-auto">
              <p className="whitespace-pre-line text-gray-800 font-medium leading-relaxed text-lg">
                {message}
              </p>
            </div>

            {!isRevealed ? (
              <div className="mt-auto w-full">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReveal();
                  }}
                  className="w-full py-4 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition-all font-medium"
                >
                  Abrir Nuestro Regalo
                </button>
              </div>
            ) : (
              <div className="mt-auto w-full text-center bg-red-50 rounded-lg p-6 border border-red-600">
                <p className="text-gray-800 mb-2 text-lg">Tu regalo:</p>
                <p className="text-4xl font-bold text-red-600">{giftAmount}</p>
                <p className="text-md text-gray-700 mt-2">Vale por {giftAmount} a cambiar con {sender}</p>
                <p className="mt-4 italic text-sm">¡Para ayudarlos en su aventura en Canadá!</p>
              </div>
            )}

            <div className="mt-6 w-full text-center">
              <div className="flex items-center justify-center">
                <div className="h-px bg-red-600 w-16"></div>
                <span className="mx-4 text-red-600">🍁</span>
                <div className="h-px bg-red-600 w-16"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        <p>Presiona la tarjeta para voltearla</p>
      </div>
    </div>
  );
};

export default WeddingCard;
