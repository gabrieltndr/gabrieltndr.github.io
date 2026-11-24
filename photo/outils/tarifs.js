// Grille tarifaire 2026 — Gabriel Tondeur, photographe sport (Caen)
// Prix nets. En franchise de TVA, HT = TTC. Modifier ici : le devis et la grille se mettent à jour.
window.TARIFS = {
  maj: "Novembre 2026",
  prestations: [
    { id: "match", cat: "Match", nom: "Couverture de match", prix: 150, unite: "match",
      detail: "Présence de l'échauffement à l'après-match (environ 3 h). 40 photos retouchées minimum, galerie en ligne, livraison sous 48 h." },
    { id: "match-live", cat: "Match", nom: "Match + photos en direct", prix: 190, unite: "match",
      detail: "Couverture de match, plus 5 à 8 photos envoyées à la mi-temps et au coup de sifflet final pour les réseaux." },
    { id: "pack5", cat: "Match", nom: "Pack 5 matchs", prix: 650, unite: "pack",
      detail: "5 couvertures de match sur la saison (130 € le match). Dates à fixer ensemble." },
    { id: "pack10", cat: "Match", nom: "Pack saison 10 matchs", prix: 1200, unite: "pack",
      detail: "10 couvertures de match sur la saison (120 € le match). Dates à fixer ensemble." },
    { id: "mediaday", cat: "Portraits", nom: "Média day équipe", prix: 320, unite: "séance",
      detail: "Jusqu'à 25 joueurs et staff : un portrait retouché par personne, photo d'équipe officielle et 10 photos d'ambiance. Environ 3 h." },
    { id: "joueur-sup", cat: "Portraits", nom: "Personne supplémentaire (média day)", prix: 8, unite: "personne",
      detail: "Portrait retouché supplémentaire au-delà de 25 personnes." },
    { id: "mercato", cat: "Portraits", nom: "Annonce recrue (mercato)", prix: 50, unite: "joueur",
      detail: "Séance de 20 min par joueur, 5 photos retouchées prêtes pour l'annonce sur les réseaux." },
    { id: "shooting", cat: "Portraits", nom: "Shooting joueur", prix: 90, unite: "séance",
      detail: "1 h, en action ou en portrait. 15 photos retouchées pour un profil, les réseaux ou un dossier de recrutement." },
    { id: "event-demi", cat: "Événements", nom: "Événement ou tournoi, demi-journée", prix: 280, unite: "demi-journée",
      detail: "Jusqu'à 4 h sur place. 80 photos retouchées minimum, galerie en ligne, livraison sous 72 h." },
    { id: "event-jour", cat: "Événements", nom: "Événement ou tournoi, journée", prix: 480, unite: "journée",
      detail: "Jusqu'à 8 h sur place. 150 photos retouchées minimum, galerie en ligne, livraison sous 72 h." },
    { id: "sponsor", cat: "Partenaires & réseaux", nom: "Shooting partenaire", prix: 180, unite: "séance",
      detail: "1 h 30 : présentation de maillots, panneaux, activation sponsor. 20 photos retouchées." },
    { id: "reel", cat: "Partenaires & réseaux", nom: "Vidéo courte réseaux", prix: 120, unite: "vidéo",
      detail: "Reel ou TikTok de 30 à 60 s, monté et sous-titré à partir des images de la prestation." }
  ],
  options: [
    { id: "express", nom: "Livraison express sous 24 h", prix: 30, unite: "prestation", detail: "Galerie complète livrée en moins de 24 h." },
    { id: "photo-sup", nom: "Photo retouchée supplémentaire", prix: 4, unite: "photo", detail: "Au-delà du nombre de photos inclus." },
    { id: "km", nom: "Déplacement au-delà de 30 km de Caen", prix: 0.5, unite: "km", detail: "Kilomètres aller-retour comptés au-delà des 30 premiers km." },
    { id: "pub", nom: "Usage publicitaire payant", prix: 0, unite: "", pct: 30, detail: "+30 % sur la prestation concernée : affichage, publicité payante, revente d'images par un partenaire." }
  ],
  conditions: [
    "Devis gratuit, valable 30 jours.",
    "Acompte de 30 % à la signature pour réserver la date ; solde à réception de la facture, sous 15 jours, par virement.",
    "Match reporté (météo, décision de la ligue) : nouvelle date sans frais. Annulation moins de 48 h avant : l'acompte reste acquis.",
    "Déplacement inclus dans un rayon de 30 km autour de Caen.",
    "Droits : cession non exclusive des droits de reproduction et de représentation pour la communication du client (réseaux sociaux, site, affiches, presse), en France, pour 3 ans. Crédit « © Gabriel Tondeur » demandé. Usage publicitaire payant : sur devis.",
    "Les fichiers bruts (RAW) ne sont pas fournis."
  ]
};
