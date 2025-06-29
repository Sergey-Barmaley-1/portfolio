// src/components/DevelopmentBanner.jsx
export default function DevelopmentBanner() {
  return (
    <div className="fixed bottom-1 right-30 z-50">
      <div className="relative w-40 h-12  rounded">
        <div
          className="absolute inset-0 bg-red-600 text-white font-bold flex items-center justify-center shadow-lg"
          style={{
            transform: 'rotate(-45deg) translate(25%, -25%)',
            width: '200%',
            height: '200%',
          }}
        >
          Сайт в разработке
        </div>
      </div>
    </div>
  );
}
