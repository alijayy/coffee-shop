import React, { createContext, useState, useContext } from "react";

const PesananContext = createContext();

export const PesananProvider = ({ children }) => {
  const [pesanan, setPesanan] = useState([]);

  const tambahPesanan = (itemBaru, jumlah) => {
    setPesanan((prev) => {
      const existingIndex = prev.findIndex(p => p.id === itemBaru.id);
      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex].jumlah += jumlah;
        return updated;
      } else {
        return [...prev, { ...itemBaru, jumlah }];
      }
    });
  };

  return (
    <PesananContext.Provider value={{ pesanan, tambahPesanan }}>
      {children}
    </PesananContext.Provider>
  );
};

export const usePesanan = () => useContext(PesananContext);
