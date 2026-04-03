"use client";

import { useFontSettings } from "./FontSettingsContext";

export default function AdminSettings() {
  const { settings, updateSettings, resetToDefault } = useFontSettings();

  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateSettings({ ...settings, fontFamily: e.target.value });
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSettings({ ...settings, textColor: e.target.value });
  };

  return (
    <section className="px-8 md:px-24 py-16 border-t border-secondary/10 bg-surface">
      <div className="max-w-2xl">
        <h3 className="font-headline text-2xl font-bold uppercase tracking-tighter mb-8">
          Admin Font Settings
        </h3>

        <div className="space-y-6">
          <div>
            <label className="block font-headline text-sm font-bold uppercase tracking-wider mb-2">
              Font Family
            </label>
            <select
              value={settings.fontFamily}
              onChange={handleFontChange}
              className="w-full border border-secondary/30 px-4 py-3 font-body text-sm bg-white cursor-pointer"
            >
              <option value="var(--font-manrope)">Manrope</option>
              <option value="var(--font-inter)">Inter</option>
              <option value="system-ui, sans-serif">System Default</option>
              <option value="Comic Sans MS, cursive">Comic Sans</option>
            </select>
          </div>

          <div>
            <label className="block font-headline text-sm font-bold uppercase tracking-wider mb-2">
              Text Color
            </label>
            <div className="flex items-center gap-4">
              <input
                type="color"
                value={settings.textColor}
                onChange={handleColorChange}
                className="w-16 h-12 border border-secondary/30 cursor-pointer"
              />
              <span className="font-mono text-sm">{settings.textColor}</span>
            </div>
          </div>

          <button
            onClick={resetToDefault}
            className="border border-secondary/30 px-6 py-2.5 text-xs font-bold uppercase hover:bg-secondary/10 transition-all"
          >
            Reset to Default
          </button>
        </div>
      </div>
    </section>
  );
}
