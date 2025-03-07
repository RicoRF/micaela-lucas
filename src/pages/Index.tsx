
import WeddingCard from "@/components/WeddingCard";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-red-100">
      <WeddingCard 
        groomName="Lucas"
        brideName="Micaela"
        date="7 de Marzo 2025"
        message={`Micaela y Lucas,
Les deseo muchas felicidades en esta nueva etapa de sus vidas. Saben que pueden contar conmigo para lo que necesiten.
Los quiere,
Federico`}
        giftAmount="$1000"
        sender="Federico"
      />
    </div>
  );
};

export default Index;
