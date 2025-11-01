"use client";
import { useState } from "react";
import styles from "./LanguageSelector.module.css";

export function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState("PL");
  return (
    <>
      <p>{`wybrany: ${selectedLanguage}`}</p>
      <select
        className={styles.languageSelector}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        <option value="PL">Polski</option>
        <option value="EN">Angielski</option>
      </select>
    </>
  );
}
