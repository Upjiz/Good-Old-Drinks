/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://good-old-drinks.fr", // Remplace par l'URL de ton site
  generateRobotsTxt: true, // Génère également le fichier robots.txt
  changefreq: "daily",
  priority: 0.7,
};

module.exports = config;
