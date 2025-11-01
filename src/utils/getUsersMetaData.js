export const getUserMetadata = async () => {
  const info = {
    language: navigator.language || navigator.userLanguage,
    platform: navigator.platform,
    userAgent: navigator.userAgent,
    timestamp: new Date().toISOString(),
    source: "web",
  };

  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    info.country = data.country_name;
    info.city = data.city;
  } catch (err) {
    info.country = "Unknown";
    info.city = "Unknown";
  }

  return info;
};
