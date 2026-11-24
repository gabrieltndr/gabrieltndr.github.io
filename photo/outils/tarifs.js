// Grille tarifaire 2026 — Gabriel Tondeur, photographe sport & communication (Caen)
// Prix nets. En franchise de TVA, HT = TTC. Modifier ici : le devis et la grille se mettent à jour.
window.TARIFS = {
  maj: "Novembre 2026",
  prestations: [
    { id: "match", cat: "1 · Couverture de match (club)", nom: "Couverture de match", prix: 250, unite: "match",
      detail: "De l'échauffement à l'après-match (environ 3 h). 50 photos retouchées minimum, galerie en ligne, livraison sous 48 h." },
    { id: "match-live", cat: "1 · Couverture de match (club)", nom: "Option photos en direct", prix: 60, unite: "match",
      detail: "5 à 8 photos envoyées à la mi-temps et au coup de sifflet final, prêtes pour les réseaux." },
    { id: "pack5", cat: "1 · Couverture de match (club)", nom: "Forfait 5 matchs", prix: 1125, unite: "forfait",
      detail: "5 couvertures de match (225 € le match), dates listées sur le devis. Acompte de 30 % à la signature, solde réparti sur les matchs." },
    { id: "pack10", cat: "1 · Couverture de match (club)", nom: "Forfait saison 10 matchs", prix: 2000, unite: "forfait",
      detail: "10 couvertures de match (200 € le match), dates listées sur le devis. Paiement en 3 fois possible." },
    { id: "joueur", cat: "2 · Couverture d'un joueur", nom: "Match suivi d'un joueur", prix: 220, unite: "match",
      detail: "Tout le match centré sur un seul joueur : 30 photos retouchées de ses actions, duels, émotions, plus 5 portraits avant ou après le match. Livraison sous 48 h." },
    { id: "joueur3", cat: "2 · Couverture d'un joueur", nom: "Forfait 3 matchs joueur", prix: 600, unite: "forfait",
      detail: "3 matchs suivis (200 € le match) : de quoi construire un dossier de recrutement ou une saison sur les réseaux." },
    { id: "event-demi", cat: "3 · Événement de club", nom: "Événement, demi-journée", prix: 450, unite: "demi-journée",
      detail: "Tournoi, gala, fête du club, remise de trophées. Jusqu'à 4 h sur place, 100 photos retouchées minimum, livraison sous 72 h." },
    { id: "event-jour", cat: "3 · Événement de club", nom: "Événement, journée", prix: 750, unite: "journée",
      detail: "Jusqu'à 8 h sur place, 200 photos retouchées minimum, galerie en ligne, livraison sous 72 h." },
    { id: "strat-event", cat: "4 · Conseil en communication", nom: "Stratégie de communication d'un événement", prix: 1200, unite: "forfait",
      detail: "Atelier de cadrage, plan de communication (avant, pendant, après), rétroplanning, calendrier des publications, plan partenaires et indicateurs de réussite. Environ 3 jours de travail." },
    { id: "strat-club", cat: "4 · Conseil en communication", nom: "Stratégie de communication d'un club", prix: 2000, unite: "forfait",
      detail: "Audit des réseaux et de l'image du club, positionnement, plan annuel, ligne éditoriale, calendrier type et offre partenaires. Environ 5 jours de travail, restitution en réunion." },
    { id: "conseil-jour", cat: "4 · Conseil en communication", nom: "Journée de conseil", prix: 450, unite: "jour",
      detail: "Accompagnement à la carte : atelier, formation des bénévoles, suivi de la stratégie." }
  ],
  options: [
    { id: "express", nom: "Livraison express sous 24 h", prix: 50, unite: "prestation", detail: "Galerie complète livrée en moins de 24 h." },
    { id: "photo-sup", nom: "Photo retouchée supplémentaire", prix: 5, unite: "photo", detail: "Au-delà du nombre de photos inclus." },
    { id: "km", nom: "Déplacement au-delà de 30 km de Caen", prix: 0.5, unite: "km", detail: "Kilomètres aller-retour comptés au-delà des 30 premiers km." },
    { id: "pub", nom: "Usage publicitaire payant", prix: 0, unite: "", pct: 50, detail: "+50 % sur la prestation concernée : affichage, publicité payante, revente d'images par un partenaire." }
  ],
  conditions: [
    "Devis gratuit, valable 30 jours.",
    "Acompte de 30 % à la signature pour réserver la ou les dates ; solde à réception de la facture, sous 15 jours, par virement.",
    "Forfaits : les dates sont listées sur le devis. Match reporté (météo, décision de la ligue) : nouvelle date sans frais. Match annulé moins de 48 h avant : il est dû.",
    "Déplacement inclus dans un rayon de 30 km autour de Caen.",
    "Droits photos : cession non exclusive des droits de reproduction et de représentation pour la communication du client (réseaux sociaux, site, affiches, presse), en France, pour 3 ans. Crédit « © Gabriel Tondeur » demandé. Usage publicitaire payant : sur devis.",
    "Les fichiers bruts (RAW) ne sont pas fournis. Les documents de stratégie remis appartiennent au client une fois la facture réglée."
  ]
};
