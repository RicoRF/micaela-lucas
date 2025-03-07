
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
          "w-full max-w-2xl aspect-[5/7] relative perspective-1000 cursor-pointer",
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
            "bg-gradient-to-br from-wedding-mint via-wedding-forest to-wedding-slytherin",
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

          {/* Harry Potter Imagery */}
          <div className="absolute top-4 left-4 text-3xl text-wedding-gold opacity-50">⚡</div>
          <div className="absolute top-4 right-4 text-3xl text-wedding-gold opacity-50">⚡</div>
          <div className="absolute bottom-4 left-4 text-3xl text-wedding-gold opacity-50">🦉</div>
          <div className="absolute bottom-4 right-4 text-3xl text-wedding-gold opacity-50">🍁</div>

          <div className="w-full text-center mt-4">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-wedding-gold w-16"></div>
              <span className="mx-4 text-wedding-gold text-xl">✨</span>
              <div className="h-px bg-wedding-gold w-16"></div>
            </div>
            <h1 className="text-5xl sm:text-6xl font-script text-wedding-gold mb-4 animate-float">
              ¡Felicidades!
            </h1>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-wedding-gold w-16"></div>
              <span className="mx-4 text-wedding-gold text-xl">✨</span>
              <div className="h-px bg-wedding-gold w-16"></div>
            </div>
          </div>

          <div className="text-center mb-4">
            <p className="text-3xl sm:text-4xl font-script text-white mb-2">
              {brideName} & {groomName}
            </p>
            <p className="text-lg text-wedding-mint">{date}</p>
            <p className="mt-4 text-md text-wedding-mint italic">Próximo destino: Canadá 🍁</p>
          </div>

          <p className="text-sm text-white italic mt-4">
            Toca para abrir
          </p>
        </div>

        {/* Back of Card */}
        <div 
          className={cn(
            "absolute w-full h-full backface-hidden rotate-y-180",
            "rounded-xl shadow-2xl overflow-auto",
            "bg-gradient-to-br from-wedding-mint to-wedding-emerald",
            "flex flex-col items-center p-6 sm:p-8",
            "border-2 border-wedding-gold",
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
                  className="w-full py-4 bg-wedding-slytherin text-white rounded-md shadow-md hover:bg-wedding-slytherinLight transition-all font-medium animate-magic"
                >
                  Abrir Nuestro Regalo
                </button>
              </div>
            ) : (
              <div className="mt-auto w-full text-center bg-wedding-slytherin bg-opacity-20 rounded-lg p-6 border border-wedding-gold">
                <p className="text-gray-800 mb-2 text-lg">Tu regalo:</p>
                <p className="text-4xl font-bold text-wedding-slytherin">{giftAmount}</p>
                <p className="text-md text-gray-700 mt-2">Vale por {giftAmount} a cambiar con {sender}</p>
                <p className="mt-4 italic text-sm">¡Para ayudarlos en su aventura mágica en Canadá!</p>
              </div>
            )}

            <div className="mt-6 w-full text-center">
              <div className="flex items-center justify-center space-x-2">
                <div className="h-px bg-wedding-gold w-8"></div>
                <span className="text-wedding-gold">⚡</span>
                <div className="h-px bg-wedding-gold w-8"></div>
                <span className="text-wedding-gold">🦉</span>
                <div className="h-px bg-wedding-gold w-8"></div>
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
