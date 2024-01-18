'use client';

import { Image } from '@lockerai/core/component/image';
import { ImageIcon } from '@lockerai/core/icon/image-icon';
import React, { useRef, useState } from 'react';

export const DropImage = () => {
  const [images, setImages] = useState<string[]>([]);
  const dropAreaRef = useRef<HTMLInputElement>(null);

  const arrayBufferToBase64 = (buffer: ArrayBuffer): string => {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    bytes.forEach((byte) => {
      binary += String.fromCharCode(byte);
    });
    return btoa(binary);
  };

  const handleImage = (file: File | null | undefined) => {
    if (file instanceof File) {
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result;
        if (result instanceof ArrayBuffer) {
          const base64String = arrayBufferToBase64(result);
          setImages((prevImages) => [...prevImages, base64String]);
        }
      };

      reader.readAsArrayBuffer(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImage(file);
  };

  const handleImageSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    handleImage(file);
  };

  const handleDropAreaClick = () => {
    if (dropAreaRef.current) {
      dropAreaRef.current.click();
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      <input type="file" ref={dropAreaRef} className="hidden" onChange={handleImageSelection} />
      <div
        className="z-0 h-{400px} flex w-full mx-auto cursor-pointer flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-green-7 p-8"
        onClick={handleDropAreaClick}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <ImageIcon width={300} height={300} />
        <p className="text-2xl text-sage-11">Drag and drop or select images of the lost item.</p>
      </div>
      {images.length === 0 ? null : (
        <div className="absolute z-10">
          <div className="flex flex-row flex-wrap gap-6">
            {images.map((image, index) => (
              <div key={index}>
                <Image src={`data:image/jpeg;base64,${image}`} alt={`Uploaded ${index}`} className="max-h-40 rounded-3xl" width={240} height={160} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
