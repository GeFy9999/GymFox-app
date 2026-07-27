"use client"; // Nécessaire : écoute d'événements navigateur + localStorage

import { useEffect, useState } from "react";
import { HiDownload } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import { useInstalledDate } from "@/providers/InstalledDateProvider";

// Type de l'événement beforeinstallprompt (non standard dans les libs DOM)
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>; // Affiche la boîte d'installation native
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>; // Choix de l'utilisateur
}

export default function InstallPrompt() {
  // L'événement capturé pour déclencher l'installation plus tard
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  // Date de dernière fermeture de la bannière (epoch en secondes)
  const [installDate, setInstallDate] = useInstalledDate();
  // Horodatage courant au montage (évite de recalculer Date.now() à chaque rendu)
  const [currentDate, setCurrentDate] = useState(() =>
    Math.floor(Date.now() / 1000),
  );

  useEffect(() => {
    // Intercepte l'événement PWA avant que le navigateur n'affiche son propre prompt
    const getInstallPrompt = (event: Event) => {
      event.preventDefault(); // Empêche le mini-infobar par défaut (Chrome)
      setInstallPrompt(event as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", getInstallPrompt);

    // Nettoyage : retire l'écouteur au démontage
    return () => {
      window.removeEventListener("beforeinstallprompt", getInstallPrompt);
    };
  }, []);

  // Fermeture manuelle : masque la bannière et mémorise la date (délai 24 h)
  const handleClose = () => {
    setInstallPrompt(null);
    setInstallDate(currentDate);
  };

  // Lance le dialogue d'installation du navigateur
  const handleInstall = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;

    // Si accepté, on retire la bannière immédiatement
    if (outcome === "accepted") {
      setInstallPrompt(null);
    }
  };

  // Masqué si : pas d'événement PWA, OU moins de 86400 s (24 h) depuis la fermeture
  if (!installPrompt || currentDate - installDate < 86400) {
    return null;
  }

  return (
    <div className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4 py-3">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <button
          type="button"
          onClick={handleInstall}
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 shadow-md shadow-orange-500/30 transition-transform group-hover:scale-105">
            <HiDownload className="text-lg text-white" />
          </span>
          <span className="flex flex-col items-start leading-tight">
            <span className="text-sm font-semibold text-white">
              Installer GymFox
            </span>
            <span className="text-xs text-gray-400">
              Accès rapide depuis votre écran d&apos;accueil
            </span>
          </span>
        </button>

        <button
          type="button"
          onClick={handleClose}
          className="rounded-full p-1 text-gray-500 transition-colors hover:bg-white/5 hover:text-gray-300"
          aria-label="Fermer"
        >
          <IoIosCloseCircle className="text-xl" />
        </button>
      </div>
    </div>
  );
}
