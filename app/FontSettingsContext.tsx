"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface FontSettings {
  fontFamily: string;
  textColor: string;
}

interface FontSettingsContextType {
  settings: FontSettings;
  updateSettings: (newSettings: FontSettings) => Promise<void>;
  resetToDefault: () => Promise<void>;
}

const defaultSettings: FontSettings = {
  fontFamily: "var(--font-manrope)",
  textColor: "#000613",
};

const FontSettingsContext = createContext<FontSettingsContextType | undefined>(undefined);

export function FontSettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<FontSettings>(defaultSettings);

  useEffect(() => {
    fetch("/api/settings")
      .then((res) => res.json())
      .then((data) => {
        if (data.fontFamily && data.textColor) {
          setSettings(data);
        }
      })
      .catch((err) => console.error("Failed to load settings:", err));
  }, []);

  const updateSettings = async (newSettings: FontSettings) => {
    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSettings),
      });

      if (res.ok) {
        setSettings(newSettings);
      } else {
        console.error("Failed to update settings");
      }
    } catch (err) {
      console.error("Error updating settings:", err);
    }
  };

  const resetToDefault = async () => {
    await updateSettings(defaultSettings);
  };

  return (
    <FontSettingsContext.Provider value={{ settings, updateSettings, resetToDefault }}>
      {children}
    </FontSettingsContext.Provider>
  );
}

export function useFontSettings() {
  const context = useContext(FontSettingsContext);
  if (!context) {
    throw new Error("useFontSettings must be used within FontSettingsProvider");
  }
  return context;
}
