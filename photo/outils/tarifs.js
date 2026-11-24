// Grille tarifaire 2026 — Gabriel Tondeur, photographe sport & communication (Caen)
// Prix nets. En franchise de TVA, HT = TTC. Modifier ici : le devis et la grille se mettent à jour.
window.TARIFS = {
  maj: "Novembre 2026",
  prestations: [
    { id: "match", cat: "1 · Couverture de match (club)", nom: "Couverture de match", prix: 300, unite: "match",
      accroche: "Immortalisez votre saison pour 20 € par joueur : 300 € partagés entre 14 joueurs et le coach, moins qu'un maillot.",
      detail: "De l'échauffement à l'après-match : action, émotions, vestiaire. Sélection retouchée, galerie en ligne, livraison sous 48 h." },
    { id: "match-live", cat: "1 · Couverture de match (club)", nom: "Option photos en direct", prix: 90, unite: "match",
      detail: "Photos envoyées à la mi-temps et au coup de sifflet final, prêtes pour les réseaux." },
    { id: "joueur", cat: "2 · Couverture d'un joueur", nom: "Match suivi d'un joueur", prix: 250, unite: "match",
      detail: "Tout le match centré sur un seul joueur : actions, duels, émotions, et des portraits avant ou après le match. Livraison sous 48 h." },
    { id: "event", cat: "3 · Événement de club", nom: "Couverture d'un événement", prix: 850, unite: "journée",
      detail: "Tournoi, gala, fête du club, remise de trophées : l'ambiance et les temps forts. Sélection retouchée, galerie en ligne, livraison sous 72 h." },
    { id: "event-reel", cat: "3 · Événement de club", nom: "Option reel de l'événement", prix: 250, unite: "reel",
      detail: "Reel vertical de 15 à 30 s, pensé pour Instagram et TikTok : temps forts, ambiance, musique tendance, sous-titres. Livré sous 48 h." },
    { id: "strat-event", cat: "4 · Conseil en communication", nom: "Stratégie de communication d'un événement", prix: 1800, unite: "forfait",
      detail: "Atelier de cadrage, plan de communication (avant, pendant, après), rétroplanning, calendrier des publications, plan partenaires et indicateurs de réussite." },
    { id: "strat-club", cat: "4 · Conseil en communication", nom: "Stratégie de communication d'un club", prix: 3000, unite: "forfait",
      detail: "Audit des réseaux et de l'image du club, positionnement, plan annuel, ligne éditoriale, calendrier type et offre partenaires. Restitution en réunion." },
    { id: "conseil-jour", cat: "4 · Conseil en communication", nom: "Accompagnement : journée de conseil", prix: 650, unite: "jour",
      detail: "À la carte : atelier, formation des bénévoles, suivi de la stratégie." }
  ],
  options: [
    { id: "express", nom: "Livraison express sous 24 h", prix: 90, unite: "prestation", detail: "Sélection complète livrée en moins de 24 h." },
    { id: "transport", nom: "Frais de transport", prix: 0, unite: "", detail: "Au-delà de 30 km de Caen : trajet (0,60 €/km aller-retour) ou billets de train, ajoutés au devis." },
    { id: "logement", nom: "Frais d'hébergement", prix: 0, unite: "", detail: "Si la prestation l'exige (événement loin de Caen, plusieurs jours) : nuitée et repas ajoutés au devis." },
    { id: "pub", nom: "Usage publicitaire payant", prix: 0, unite: "", pct: 80, detail: "+80 % sur la prestation concernée : affichage, publicité payante, revente d'images par un partenaire." }
  ],
  conditions: [
    "Devis gratuit, valable 30 jours.",
    "Acompte de 30 % à la signature pour réserver la date ; solde à réception de la facture, sous 15 jours, par virement.",
    "Match reporté (météo, décision de la ligue) : nouvelle date sans frais. Annulation moins de 48 h avant : l'acompte reste acquis.",
    "Déplacement inclus dans un rayon de 30 km autour de Caen. Au-delà, transport et hébergement éventuel sont ajoutés au devis.",
    "Droits photos : cession non exclusive des droits de reproduction et de représentation pour la communication du client (réseaux sociaux, site, affiches, presse), en France, pour 3 ans. Crédit « © Gabriel Tondeur » demandé. Usage publicitaire payant : sur devis.",
    "Les fichiers bruts (RAW) ne sont pas fournis. Les documents de stratégie remis appartiennent au client une fois la facture réglée."
  ]
};
