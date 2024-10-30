import React from "react";

export const HowItWork = () => {
  return (
    <section className="py-32">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-poppins text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Oyun Nasıl Çalışır?
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Çocuklar için eğlenceli ve düşündürücü zeka oyunlarıyla dolu bu
            yolculukla tanışın!
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
            />
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            <div>
              <div className="animate-pulse flex items-center justify-center w-16 h-16 mx-auto bg-black border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-white"> 1 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Oynamak İstediğin Oyuna Tıkla
              </h3>
            </div>

            <div>
              <div className="animate-pulse flex items-center justify-center w-16 h-16 mx-auto bg-black border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-white"> 2 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Görevleri Tamamla
              </h3>
            </div>

            <div>
              <div className="animate-pulse flex items-center justify-center w-16 h-16 mx-auto bg-black border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-white"> 3 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Gizli Özelliklerini Öğren
              </h3>
              <p className="mt-4 text-base text-gray-600">
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
