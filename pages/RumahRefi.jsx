import React from 'react';
import Image from 'next/image';
import r from '../assets/images/r.png';

const RumahRefi = () => {
  return (
    <main>
      <div className="flex justify-center">
        <div className=" p-6 flex flex-col md:flex-row gap-4">
          <div className=" bg-blue-500 rounded-2xl  p-2 hover:bg-red-500 hover:-z-50 transform shadow-2xl">
            <Image alt="" src={r} className="hover:z-50 rounded-xl" />
          </div>
          <div className="text-center md:text-left flex flex-col gap-4">
            <div className="text-xl font-semibold">
              <div className="text-2xl font-bold">
                Refi Nurifani Putri
              </div>
              <div className="px-3 md:px-0">
                <div className=" uppercase text-xl font-medium">
                  Bandung, 25 Desember 2002
                </div>
              </div>
            </div>
            <div className="text-xl text-center font-semibold">
              selamat hari raya idul fitri 1443 Hijriah,
              Minal aidin walfaidzin,
              mohon maaf telah menyimpan rasa tanpa izin.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RumahRefi;
