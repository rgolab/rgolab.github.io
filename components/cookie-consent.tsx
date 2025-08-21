"use client";

import { useState, useEffect } from "react";
import { X, Cookie, Shield, Settings } from "lucide-react";

// Toggle Switch Component
function ToggleSwitch({
  checked,
  onChange,
  disabled = false,
  label,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`
        relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:ring-offset-2
        ${
          checked
            ? "bg-gray-500 dark:bg-gray-400"
            : "bg-gray-200 dark:bg-gray-700"
        }
        ${
          disabled
            ? "cursor-not-allowed opacity-60"
            : "cursor-pointer hover:bg-gray-600 dark:hover:bg-gray-500"
        }
      `}
      aria-label={label}
    >
      <span
        className={`
          inline-block h-4 w-4 transform rounded-full bg-white transition-transform
          ${checked ? "translate-x-6" : "translate-x-1"}
        `}
      />
    </button>
  );
}

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const preferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    setShowConsent(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(cookiePreferences));
    setShowConsent(false);
  };

  const handleDecline = () => {
    const preferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white dark:bg-surface-dark border-t border-gray-200 dark:border-gray-700 shadow-2xl">
      <div className="max-w-7xl mx-auto p-4">
        {!showSettings ? (
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-3 text-primary-600 dark:text-primary-400">
              <Cookie className="h-6 w-6" />
              <span className="font-semibold text-gray-900 dark:text-white">
                Cookie Preferences
              </span>
            </div>

            <div className="flex-1 text-sm text-gray-600 dark:text-gray-300">
              <p>
                We use cookies to enhance your experience, analyze site traffic,
                and personalize content. By clicking "Accept All", you consent
                to our use of cookies.
                <a
                  href="#"
                  className="text-primary-600 dark:text-primary-400 hover:underline ml-1"
                >
                  Learn more
                </a>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
              >
                <Settings className="h-4 w-4 inline mr-1" />
                Customize
              </button>
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
              >
                Decline
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 text-white rounded-lg transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Cookie Settings
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-gray-500 dark:text-gray-400"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white dark:bg-surface-darkElevated rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Necessary Cookies
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Required for basic site functionality
                    </p>
                  </div>
                </div>
                <ToggleSwitch
                  checked={cookiePreferences.necessary}
                  onChange={() => {}} // No-op since necessary cookies are always enabled
                  disabled={true}
                  label="Necessary cookies toggle (always enabled)"
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-white dark:bg-surface-darkElevated rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <Cookie className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Analytics Cookies
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Help us understand how visitors interact with our site
                    </p>
                  </div>
                </div>
                <ToggleSwitch
                  checked={cookiePreferences.analytics}
                  onChange={(checked) =>
                    setCookiePreferences((prev) => ({
                      ...prev,
                      analytics: checked,
                    }))
                  }
                  label="Analytics cookies toggle"
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-white dark:bg-surface-darkElevated rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <Cookie className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Marketing Cookies
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Used to deliver personalized advertisements
                    </p>
                  </div>
                </div>
                <ToggleSwitch
                  checked={cookiePreferences.marketing}
                  onChange={(checked) =>
                    setCookiePreferences((prev) => ({
                      ...prev,
                      marketing: checked,
                    }))
                  }
                  label="Marketing cookies toggle"
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-white dark:bg-surface-darkElevated rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <Settings className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Preference Cookies
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Remember your settings and preferences
                    </p>
                  </div>
                </div>
                <ToggleSwitch
                  checked={cookiePreferences.preferences}
                  onChange={(checked) =>
                    setCookiePreferences((prev) => ({
                      ...prev,
                      preferences: checked,
                    }))
                  }
                  label="Preference cookies toggle"
                />
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
              >
                Back
              </button>
              <button
                onClick={handleAcceptSelected}
                className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 text-white rounded-lg transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
