import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import React from "react";

export const Footer = () => {
  return (
    <section className="py-12 bg-indigo-800 text-gray-100">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-8">
          <div className="col-span-2 lg:col-span-2 lg:pr-8">
            <h2 className="text-2xl font-bold">Mantıklı ve Yaratıcı Düşünce</h2>
            <p className="text-base mt-4 text-gray-300">
              Çocuklar için zekâ oyunları, matematiksel düşünmeyi, mantıklı çözüm bulmayı ve yaratıcılığı destekleyen uygulamalar içerir. Bizimle bu keşif yolculuğuna çıkın.
            </p>

            <ul className="flex items-center space-x-4 mt-6">
              <li>
              </li>
              <li>
                <a href="#" title="LinkedIn" className="hover:text-blue-500">
                  <LinkedinIcon size={20} />
                </a>
              </li>
              <li>
                <a href="#" title="Instagram" className="hover:text-pink-500">
                  <InstagramIcon size={20} />
                </a>
              </li>
              <li>
                <a href="#" title="Facebook" className="hover:text-blue-600">
                  <FacebookIcon size={20} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Hakkımızda
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="text-base transition hover:text-gray-300">
                  Misyon
                </a>
              </li>
              <li>
                <a href="#" className="text-base transition hover:text-gray-300">
                  Değerlerimiz
                </a>
              </li>
              <li>
                <a href="#" className="text-base transition hover:text-gray-300">
                  Yöntemlerimiz
                </a>
              </li>
              <li>
                <a href="#" className="text-base transition hover:text-gray-300">
                  Kariyer
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Yardım
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="text-base transition hover:text-gray-300">
                  Destek
                </a>
              </li>
              <li>
                <a href="#" className="text-base transition hover:text-gray-300">
                  Kullanım Şartları
                </a>
              </li>
              <li>
                <a href="#" className="text-base transition hover:text-gray-300">
                  Gizlilik Politikası
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-2 lg:pl-8">
            <h3 className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Bize Katılın
            </h3>
            <form action="#" method="POST" className="mt-4">
              <label className="sr-only">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-posta adresinizi girin"
                className="block w-full p-3 text-gray-800 placeholder-gray-400 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="mt-4 w-full px-4 py-2 text-white bg-yellow-600 rounded-md hover:bg-yellow-500 transition"
              >
                Abone Ol
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-12 mb-8 border-gray-700" />
        
        <p className="text-sm text-center text-gray-500">
          © {new Date().getFullYear()}, Tüm Hakları Saklıdır.{" "}
          <a rel="noopener noreferrer" className="text-yellow-400 hover:underline">
            Cengizhan ÇALIŞKAN
          </a> tarafından geliştirildi.
        </p>
      </div>
    </section>
  );
};
