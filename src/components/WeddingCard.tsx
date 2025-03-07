
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
    <div className="flex flex-col items-center justify-center p-4 sm:p-8">
      <div 
        className={cn(
          "w-full max-w-md aspect-[3/4] relative perspective-1000 cursor-pointer",
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
            "bg-gradient-to-br from-wedding-ivory via-wedding-blush to-wedding-rose",
            "flex flex-col items-center justify-between p-8",
            "border-2 border-wedding-gold",
            isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-white animate-sparkle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 10 + 2}px`,
                  height: `${Math.random() * 10 + 2}px`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          <div className="w-full text-center mt-4">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-wedding-gold w-16"></div>
              <span className="mx-4 text-wedding-gold text-xl">♥</span>
              <div className="h-px bg-wedding-gold w-16"></div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-script text-wedding-gold mb-4 animate-float">
              ¡Felicidades!
            </h1>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-wedding-gold w-16"></div>
              <span className="mx-4 text-wedding-gold text-xl">♥</span>
              <div className="h-px bg-wedding-gold w-16"></div>
            </div>
          </div>

          <div className="text-center mb-4">
            <p className="text-2xl sm:text-3xl font-script text-gray-800 mb-2">
              {brideName} & {groomName}
            </p>
            <p className="text-md text-gray-700">{date}</p>
          </div>

          <p className="text-sm text-gray-600 italic mt-4">
            Toca para abrir
          </p>
        </div>

        {/* Back of Card */}
        <div 
          className={cn(
            "absolute w-full h-full backface-hidden rotate-y-180",
            "rounded-xl shadow-2xl overflow-hidden",
            "bg-gradient-to-br from-wedding-champagne via-wedding-ivory to-wedding-champagne",
            "flex flex-col items-center p-6 sm:p-8",
            "border-2 border-wedding-gold",
            !isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="w-full text-center mb-6">
            <p className="whitespace-pre-line text-gray-800 font-medium leading-relaxed">
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
                className="w-full py-3 bg-wedding-gold text-white rounded-md shadow-md hover:bg-opacity-90 transition-all font-medium"
              >
                Abrir tu regalo
              </button>
            </div>
          ) : (
            <div className="mt-auto w-full text-center bg-wedding-gold bg-opacity-20 rounded-lg p-4 border border-wedding-gold">
              <p className="text-gray-700 mb-2">Tu regalo:</p>
              <p className="text-3xl font-bold text-wedding-gold">{giftAmount}</p>
              <p className="text-sm text-gray-600 mt-2">Con mucho cariño para ayudar en su nueva vida juntos</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        <p>Presiona la tarjeta para voltearla</p>
      </div>
    </div>
  );
};

export default WeddingCard;
