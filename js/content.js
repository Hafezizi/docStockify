window.DOCS = [
    {
        id: "offre",
        group: "Dossier",
        nav: "Pourquoi Stockify",
        title: "La caisse enfin bouclée, avec le stock",
        lead: "Cette page est écrite pour quelqu’un qui a déjà un outil de caisse, et qui sait ce qui lui manque. Stockify reprend la vente, le tiroir, le versement au magasin et le bénéfice, puis tient le stock qui va avec.",
        body: `
            <aside class="note"><p><strong>Comment lire.</strong> Cette page dit ce que l’application règle. Le menu à gauche est le mode d’emploi : chaque écran, chaque rôle, chaque statut. Prenez le temps des deux.</p></aside>
            <h2>Ce qu’un outil de caisse laisse souvent ouvert</h2>
            <p>Encaisser un ticket ne dit pas où est l’argent le soir. L’espèce est dans le tiroir. Le mobile money est déjà sur un compte. Le crédit n’est pas encore de l’argent. Les frais de la boutique sortent du même tiroir. Et le magasin attend un versement dont personne ne peut montrer les ventes.</p>
            <p>Stockify sépare ces quatre choses, boutique par boutique, en ouguiya.</p>
            <div class="table-wrap"><table>
                <thead><tr><th>Situation habituelle</th><th>Avec Stockify</th></tr></thead>
                <tbody>
                    <tr><td>Le ticket et le tiroir ne se parlent pas.</td><td>Chaque vente espèces alimente l’état de caisse de sa boutique.</td></tr>
                    <tr><td>Bankily, Masrvi, Saddad et Bimbank sont comptés comme du cash.</td><td>Le mobile money est suivi à part. Il n’entre pas dans l’argent à reverser : il est déjà côté magasin.</td></tr>
                    <tr><td>Le crédit ressemble à un encaissement.</td><td>Le crédit et le non-payé restent une créance. Seul ce qui est réellement payé en espèces rejoint le tiroir.</td></tr>
                    <tr><td>On remet une enveloppe sans liste.</td><td>Le versement se rattache aux ventes espèces encore non versées. La facture sort une fois le magasin d’accord.</td></tr>
                    <tr><td>Le loyer et le transport vivent dans un cahier.</td><td>Les dépenses de la boutique entrent dans le bénéfice net.</td></tr>
                    <tr><td>Le stock est un autre logiciel, ou un autre fichier.</td><td>La vente baisse le stock du lieu. L’achat et le transfert le font monter.</td></tr>
                </tbody>
            </table></div>
            <figure class="shot">
                <a href="images/vente.png" target="_blank" rel="noopener">
                    <img src="images/vente.png" alt="Écran Nouvelle vente au détail, avec espèces, Bankily, Masrvi, Saddad, Bimbank, crédit et non payé">
                </a>
                <figcaption>Nouvelle vente au détail. Les espèces, le mobile money et le crédit ne passent pas dans le même tiroir.</figcaption>
            </figure>
            <h2>L’état de caisse, en une formule</h2>
            <p>Pour chaque boutique, Stockify calcule ce qui doit encore revenir au magasin :</p>
            <div class="hero-band">
                <div class="stat">
                    <strong>Reste à reverser</strong>
                    <span>Solde d’ouverture + espèces encaissées − versements déjà validés − fonds de caisse. Le résultat ne descend pas sous zéro.</span>
                </div>
                <div class="stat">
                    <strong>Alerte</strong>
                    <span>Dès que ce reste dépasse deux fois le fonds de caisse laissé en boutique, la caisse est signalée. L’argent a trop attendu dans le tiroir.</span>
                </div>
            </div>
            <p>Le détail affiché à côté n’est pas un seul total :</p>
            <ul>
                <li><strong>Chiffre d’affaires</strong> — toutes les ventes non annulées.</li>
                <li><strong>Espèces</strong> — ventes payées en espèces, plus les compléments en espèces sur une vente qui n’était pas en espèces (un crédit soldé en cash, par exemple).</li>
                <li><strong>Mobile money</strong> — Bankily, Masrvi, Saddad, Bimbank. Suivi, et tenu hors du tiroir.</li>
                <li><strong>Crédit ouvert</strong> — ce qui reste à encaisser sur le crédit et le non-payé.</li>
                <li><strong>Fonds de caisse</strong> — la somme qu’on laisse volontairement dans la boutique pour rendre la monnaie. Elle se règle par boutique.</li>
                <li><strong>Solde d’ouverture</strong> — le point de départ, daté, pour ne pas réinventer l’historique.</li>
            </ul>
            <aside class="ok"><p>Une vente annulée sort du calcul. Une vente déjà rattachée à un versement ne peut pas être versée une seconde fois.</p></aside>
            <figure class="shot">
                <a href="images/versements.png" target="_blank" rel="noopener">
                    <img src="images/versements.png" alt="Écran Versements : état de caisse par boutique, reste à reverser et alerte">
                </a>
                <figcaption>Vue magasin. Chaque boutique a son chiffre, ses espèces, son mobile money, ses versements validés, son fonds de caisse et son reste à reverser. L’alerte s’allume quand le tiroir a trop attendu.</figcaption>
            </figure>
            <h2>Le versement, du tiroir au magasin</h2>
            <p>Quand la boutique remet l’argent, ce n’est pas une ligne dans un tableur. C’est un dossier, référence VER-.</p>
            <ol class="steps">
                <li><strong>La boutique déclare.</strong> Date, montant, et les ventes espèces de la période. On peut les cocher une par une, ou lier celles du jour. Le montant est recalculé par l’application, pas repris aveuglément.</li>
                <li><strong>On voit l’effet.</strong> Stockify note la caisse avant le versement, et ce qui devrait rester après.</li>
                <li><strong>Le magasin tranche.</strong> Brouillon, puis soumis. Le gérant confirme, valide un montant reçu, ou refuse. Valider, confirmer ou rejeter redemande le mot de passe.</li>
                <li><strong>La pièce sort.</strong> Si le versement est validé, ou validé pour une partie seulement, une facture de versement est produite. Elle porte son numéro, et elle se télécharge.</li>
            </ol>
            <div class="table-wrap"><table>
                <thead><tr><th>Statut</th><th>Ce que ça veut dire pour l’argent</th></tr></thead>
                <tbody>
                    <tr><td>Brouillon</td><td>Saisi. Pas encore compté comme remis.</td></tr>
                    <tr><td>Soumis</td><td>La boutique a envoyé le dossier. Le magasin doit répondre.</td></tr>
                    <tr><td>Validé</td><td>Le montant reçu est accepté. Il sort du reste à reverser. La facture est disponible.</td></tr>
                    <tr><td>Partiel</td><td>Le magasin a reçu moins que le déclaré. Seul le reçu est déduit. La facture est quand même émise.</td></tr>
                    <tr><td>Rejeté</td><td>Le dossier ne compte pas. On le reprend.</td></tr>
                </tbody>
            </table></div>
            <p>Le caissier consulte les versements. Il ne les crée pas : la remise au magasin et la validation restent aux comptes autorisés, en pratique le gérant. L’agent, lui, vend. Il n’ouvre pas la caisse centrale.</p>
            <h2>Ce qui sort du tiroir</h2>
            <p>Une caisse complète compte aussi les sorties. Les dépenses d’une boutique — loyer, salaires, déjeuner, transport, divers — sont fixes ou variables, réalisées, prévues ou annulées. Une dépense annulée ne pèse plus. Les autres entrent dans le bénéfice.</p>
            <p>Le tableau de bord, sur la période choisie, aligne alors :</p>
            <ul>
                <li>le chiffre d’affaires, hors ventes annulées ;</li>
                <li>le coût des marchandises vendues ;</li>
                <li>la marge brute ;</li>
                <li>les dépenses, aussi par catégorie ;</li>
                <li>le bénéfice net.</li>
            </ul>
            <p>On voit donc le soir ce que la boutique a vendu, ce que le tiroir doit encore au magasin, et ce qu’il reste une fois les frais retirés.</p>
            <figure class="shot">
                <a href="images/tableau-de-bord.png" target="_blank" rel="noopener">
                    <img src="images/tableau-de-bord.png" alt="Tableau de bord : résultat réel, dépenses par catégorie, cartes et graphiques par boutique">
                </a>
                <figcaption>Le tableau de bord sur une période. Résultat, dépenses par catégorie, nombre de ventes, stock critique, et la tendance de chaque boutique.</figcaption>
            </figure>
            <figure class="shot">
                <a href="images/depenses.png" target="_blank" rel="noopener">
                    <img src="images/depenses.png" alt="Gestion des dépenses : total, charges fixes, charges variables et liste par boutique">
                </a>
                <figcaption>Les dépenses, boutique par boutique : loyer, salaires, déjeuner, transport, divers. Le total hors annulées alimente le bénéfice.</figcaption>
            </figure>
            <h2>Le stock qui suit la même vente</h2>
            <p>La caisse sans stock recompte les mêmes erreurs le lendemain. Ici, la vente directe retire la quantité de la boutique et dépose la facture PDF. Le prix dépend du circuit : détail pour un particulier, gros pour une boutique. Si le prix de gros n’est pas saisi, le détail s’applique.</p>
            <p>La marchandise arrive par un achat fournisseur, entre au magasin central à la réception, puis part en transfert vers la boutique, avec bordereau si on le demande. L’inventaire compare le théorique au compté et, à la clôture, peut aligner le stock réel. Le seuil minimum remonte les ruptures avant le rayon vide.</p>
            <p>Les produits sérialisés se suivent au carton et à l’unité. Les périssables portent une date. Un coût en dollars se convertit avec le taux USD → MRU saisi dans les paramètres.</p>
            <figure class="shot">
                <a href="images/stocks.png" target="_blank" rel="noopener">
                    <img src="images/stocks.png" alt="Écran Stocks : valeur, stock faible, stock central et liste des produits">
                </a>
                <figcaption>Le stock du magasin central et des boutiques : valeur, seuils, et la quantité de chaque produit.</figcaption>
            </figure>
            <figure class="shot">
                <a href="images/alertes.png" target="_blank" rel="noopener">
                    <img src="images/alertes.png" alt="Alertes stock : produits en stock faible à réapprovisionner">
                </a>
                <figcaption>Les alertes listent ce qui est sous le minimum, avant la rupture de rayon.</figcaption>
            </figure>
            <h2>Qui touche à quoi</h2>
            <div class="table-wrap"><table>
                <thead><tr><th>Rôle</th><th>Place dans la maison</th></tr></thead>
                <tbody>
                    <tr><td>Gérant</td><td>Tout le réseau, le magasin central, la validation des versements, les comptes et les paramètres.</td></tr>
                    <tr><td>Caissier</td><td>Ventes au détail et en gros, encaissements, lecture de la caisse de sa boutique, stock et produits. Pas la remise au magasin.</td></tr>
                    <tr><td>Agent</td><td>Nouvelle vente et ses ventes, dans sa boutique seulement. Pas de tableau de bord.</td></tr>
                </tbody>
            </table></div>
            <p>Un compte ne lit pas la caisse, le stock ni les ventes d’une autre boutique. Le journal garde qui a créé la vente, le versement, la dépense ou l’inventaire, avec l’avant et l’après sur les changements sensibles.</p>
            <figure class="shot">
                <a href="images/boutiques.png" target="_blank" rel="noopener">
                    <img src="images/boutiques.png" alt="Espace boutiques : chiffre, valeur de stock et performance de chaque point de vente">
                </a>
                <figcaption>Le réseau des points de vente. Le gérant ouvre une boutique pour sa caisse, ses bordereaux et son stock.</figcaption>
            </figure>
            <h2>Par où continuer</h2>
            <p>Le détail opérationnel est dans les pages du menu. Celles-ci suffisent pour voir le circuit de l’argent, puis le reste.</p>
            <div class="cards">
                <a class="card" href="#versements"><em>Caisse</em><b>Versements</b><span>Brouillon, validation, facture, fonds de caisse.</span></a>
                <a class="card" href="#ventes"><em>Encaissement</em><b>Ventes</b><span>Détail, gros, espèces, mobile money, crédit.</span></a>
                <a class="card" href="#depenses"><em>Sorties</em><b>Dépenses</b><span>Ce qui quitte le tiroir et le bénéfice.</span></a>
                <a class="card" href="#tableau-de-bord"><em>Pilotage</em><b>Tableau de bord</b><span>Marge, dépenses, bénéfice net.</span></a>
                <a class="card" href="#parcours"><em>Ensemble</em><b>Une journée type</b><span>De l’achat fournisseur jusqu’au versement du soir.</span></a>
                <a class="card" href="#roles"><em>Maison</em><b>Rôles et accès</b><span>Gérant, caissier, agent, boutique par boutique.</span></a>
            </div>
        `
    },
    {
        id: "accueil",
        group: "Découvrir",
        nav: "Accueil",
        title: "Stockify, de bout en bout",
        lead: "Stockify centralise le magasin, les boutiques, les ventes, la caisse et les droits d’accès. Ce guide décrit l’application telle qu’elle fonctionne aujourd’hui.",
        body: `
            <div class="hero-band">
                <div class="stat">
                    <strong>Magasin + boutiques</strong>
                    <span>Le stock central n’a pas de boutique. Chaque point de vente a le sien. Un gérant voit l’ensemble, un agent ou un caissier reste sur sa boutique.</span>
                </div>
                <div class="stat">
                    <strong>MRU</strong>
                    <span>Les montants sont en ouguiya. Un taux USD → MRU, saisi dans les paramètres, sert à proposer un prix à partir d’un coût en dollars.</span>
                </div>
            </div>
            <figure class="shot">
                <a href="images/entree.png" target="_blank" rel="noopener">
                    <img src="images/entree.png" alt="Page d’accueil publique de Stockify, avant connexion">
                </a>
                <figcaption>L’entrée de l’application, avant la connexion.</figcaption>
            </figure>
            <h2>Ce que couvre ce guide</h2>
            <p>La présentation Canva décrit le projet. Ces pages suivent le menu réel : quotidien, stock, catalogue, approvisionnement, réseau et administration.</p>
            <div class="cards">
                <a class="card" href="#premiers-pas"><em>Démarrer</em><b>Connexion et premiers écrans</b><span>Compte, code e-mail, attente de rôle.</span></a>
                <a class="card" href="#roles"><em>Accès</em><b>Gérant, agent, caissier</b><span>Ce que chaque rôle voit, et ce qu’il ne voit pas.</span></a>
                <a class="card" href="#ventes"><em>Quotidien</em><b>Vendre</b><span>Détail, gros, paiements locaux, facture.</span></a>
                <a class="card" href="#versements"><em>Caisse</em><b>Verser au magasin</b><span>Brouillon, validation, facture de versement.</span></a>
                <a class="card" href="#stocks"><em>Stock</em><b>Quantités et alertes</b><span>Seuils, entrées, sorties, export.</span></a>
                <a class="card" href="#transferts"><em>Flux</em><b>Magasin vers boutique</b><span>Le transfert qui alimente un point de vente.</span></a>
                <a class="card" href="#securite"><em>Confiance</em><b>Sécurité</b><span>Double vérification, verrouillage, confirmation.</span></a>
                <a class="card" href="#parcours"><em>Terrain</em><b>Une journée type</b><span>De l’achat fournisseur jusqu’au bénéfice du soir.</span></a>
            </div>
            <h2>Les six zones du menu</h2>
            <div class="table-wrap"><table>
                <thead><tr><th>Zone</th><th>Écrans</th><th>À quoi ça sert</th></tr></thead>
                <tbody>
                    <tr><td>Quotidien</td><td>Ventes, versements, dépenses</td><td>Ce qui se passe dans la journée.</td></tr>
                    <tr><td>Stock</td><td>Stocks, alertes, transferts, inventaire</td><td>Savoir ce qui est là, et corriger.</td></tr>
                    <tr><td>Catalogue</td><td>Produits, catégories</td><td>La fiche de ce qui se vend.</td></tr>
                    <tr><td>Approvisionnement</td><td>Achats, fournisseurs</td><td>Faire entrer la marchandise.</td></tr>
                    <tr><td>Réseau</td><td>Points de vente</td><td>Les boutiques et leur tableau de bord.</td></tr>
                    <tr><td>Administration</td><td>Utilisateurs, rôles, autorisations, journaux, paramètres</td><td>Qui a le droit de faire quoi.</td></tr>
                </tbody>
            </table></div>
            <aside class="note"><p><strong>Menu agent.</strong> Un agent ne voit pas ce menu complet. Son écran se limite à Nouvelle vente, Mes ventes et Mon profil.</p></aside>
        `
    },
    {
        id: "premiers-pas",
        group: "Démarrer",
        nav: "Premiers pas",
        title: "Entrer dans Stockify",
        lead: "La connexion ouvre un écran différent selon le rôle. Sans rôle, le compte reste en attente.",
        body: `
            <h2>Se connecter</h2>
            <ol class="steps">
                <li>Ouvrez la page de connexion et saisissez l’e-mail et le mot de passe.</li>
                <li>Si le rôle est soumis à la double vérification, Stockify envoie un code par e-mail.</li>
                <li>Saisissez ce code, ou un code de récupération si l’e-mail n’arrive pas.</li>
            </ol>
            <aside class="warn"><p><strong>Session du code.</strong> Si vous attendez trop longtemps, la vérification expire. Il faut se reconnecter. Le renvoi du code est limité pour éviter les abus.</p></aside>
            <h2>Où vous arrivez</h2>
            <div class="table-wrap"><table>
                <thead><tr><th>Situation</th><th>Écran d’arrivée</th></tr></thead>
                <tbody>
                    <tr><td>Gérant</td><td>Tableau de bord</td></tr>
                    <tr><td>Agent</td><td>Liste des ventes</td></tr>
                    <tr><td>Caissier</td><td>Liste des ventes</td></tr>
                    <tr><td>Compte sans rôle</td><td>Page d’attente de permissions</td></tr>
                    <tr><td>Visiteur non connecté</td><td>Page d’accueil publique</td></tr>
                </tbody>
            </table></div>
            <h2>Mot de passe oublié</h2>
            <p>Le lien « mot de passe oublié » envoie un e-mail de réinitialisation. Le nouveau mot de passe est choisi sur la page reçue dans ce message.</p>
            <h2>Compte en attente</h2>
            <p>Un utilisateur créé sans rôle, ou dont le rôle a été retiré, n’entre pas dans l’application. Un gérant doit lui attribuer un rôle, et en général une boutique, depuis Utilisateurs.</p>
            <h2>Se déconnecter</h2>
            <p>Le bouton est en bas du menu latéral. La session se ferme tout de suite.</p>
        `
    },
    {
        id: "roles",
        group: "Démarrer",
        nav: "Rôles et accès",
        title: "Qui voit quoi",
        lead: "Trois rôles sont livrés avec l’application : gérant, agent et caissier. Le gérant peut ensuite créer d’autres rôles et cocher leurs droits.",
        body: `
            <h2>Les trois rôles de départ</h2>
            <div class="table-wrap"><table>
                <thead><tr><th>Rôle</th><th>Intention</th><th>Dans le menu</th></tr></thead>
                <tbody>
                    <tr><td>Gérant</td><td>Tous les droits, y compris le magasin central.</td><td>Menu complet, tableau de bord, administration.</td></tr>
                    <tr><td>Agent</td><td>Vendre, sans piloter le stock ni la caisse centrale.</td><td>Nouvelle vente, Mes ventes, Mon profil. Pas de tableau de bord.</td></tr>
                    <tr><td>Caissier</td><td>Ventes et encaissement, avec une vue plus large que l’agent.</td><td>Tableau de bord, ventes, consultation des versements, stocks, produits, sa boutique.</td></tr>
                </tbody>
            </table></div>
            <aside class="note"><p><strong>Le caissier ne crée pas le versement vers le magasin.</strong> Il peut consulter les versements. L’enregistrement et la validation sont réservés aux comptes qui ont ces droits, en pratique le gérant.</p></aside>
            <h2>La boutique, une frontière</h2>
            <p>Un agent ou un caissier est rattaché à une boutique. Il ne vend pas ailleurs, et il ne lit pas le stock, les inventaires ou les ventes d’une autre boutique. Le magasin central — le stock sans boutique — est réservé au gérant.</p>
            <h2>Droits que le gérant peut accorder</h2>
            <p>Chaque droit porte un nom précis. Les rôles personnalisés se règlent dans Autorisations, case par case, ou dans la matrice.</p>
            <div class="table-wrap"><table>
                <thead><tr><th>Famille</th><th>Droits</th></tr></thead>
                <tbody>
                    <tr><td>Pilotage</td><td>Tableau de bord, rapports, export, notifications, journaux</td></tr>
                    <tr><td>Catalogue</td><td>Voir, créer, modifier, supprimer produits</td></tr>
                    <tr><td>Stock</td><td>Voir les stocks, ajuster</td></tr>
                    <tr><td>Ventes</td><td>Voir, créer, modifier, supprimer</td></tr>
                    <tr><td>Achats</td><td>Voir, créer, modifier, supprimer</td></tr>
                    <tr><td>Réseau</td><td>Voir, créer, modifier, supprimer les boutiques</td></tr>
                    <tr><td>Caisse</td><td>Voir, créer et valider les versements, régler la caisse</td></tr>
                    <tr><td>Dépenses</td><td>Voir, créer, modifier, supprimer</td></tr>
                    <tr><td>Comptes</td><td>Utilisateurs et rôles : voir, créer, modifier, supprimer. Paramètres du système.</td></tr>
                </tbody>
            </table></div>
            <h2>Détail et gros</h2>
            <p>Le choix entre vente au détail et vente en gros est réservé au gérant et au caissier. L’agent passe par la vente qui lui est ouverte, au prix détail.</p>
        `
    },
    {
        id: "tableau-de-bord",
        group: "Démarrer",
        nav: "Tableau de bord",
        title: "Lire la journée en un écran",
        lead: "Le tableau de bord résume l’argent et le stock sur une période. L’agent n’y a pas accès.",
        body: `
            <div class="path"><span>Menu</span><i>→</i><span>Tableau de bord</span></div>
            <h2>Choisir la période</h2>
            <p>Deux dates, début et fin, filtrent les ventes prises en compte. Les ventes annulées sont écartées du chiffre.</p>
            <h2>Les chiffres affichés</h2>
            <ul>
                <li><strong>Chiffre d’affaires</strong> — total des ventes de la période.</li>
                <li><strong>Coût des marchandises</strong> — ce que ces ventes ont coûté à l’achat.</li>
                <li><strong>Marge brute</strong> — chiffre d’affaires moins ce coût.</li>
                <li><strong>Dépenses</strong> — dépenses de la période, aussi réparties par catégorie.</li>
                <li><strong>Bénéfice net</strong> — marge brute moins les dépenses.</li>
                <li><strong>Nombre de ventes</strong> et <strong>quantités vendues</strong>.</li>
                <li><strong>Valeur du stock</strong> et <strong>nombre de produits au seuil</strong>.</li>
            </ul>
            <figure class="shot">
                <a href="images/tableau-de-bord.png" target="_blank" rel="noopener">
                    <img src="images/tableau-de-bord.png" alt="Tableau de bord Stockify avec le résultat, les dépenses et les graphiques">
                </a>
                <figcaption>Le même écran, filtré par dates. Les cartes reprennent le bénéfice, le chiffre, les dépenses et le stock critique.</figcaption>
            </figure>
            <h2>Produits critiques</h2>
            <p>Un produit est critique quand la somme de ses stocks est inférieure ou égale à son stock minimum. Le tableau en liste dix, les plus bas d’abord. Le détail de toutes les alertes est dans Alertes stock.</p>
            <h2>Courbes</h2>
            <p>Le tableau reconstitue aussi une vue sur les six derniers mois pour suivre l’évolution, pas seulement le jour choisi.</p>
        `
    },
    {
        id: "ventes",
        group: "Quotidien",
        nav: "Ventes",
        title: "Enregistrer une vente",
        lead: "Une vente directe retire le stock de la boutique, calcule le paiement et produit une facture PDF. Un devis, lui, ne touche pas au stock.",
        body: `
            <div class="path"><span>Quotidien</span><i>→</i><span>Ventes</span><i>→</i><span>Nouvelle vente</span></div>
            <h2>Détail ou gros</h2>
            <p>Deux boutons ouvrent le formulaire. <strong>Au détail</strong> s’adresse à un particulier et prend le prix de vente. <strong>En gros</strong> s’adresse à une boutique et prend le prix de gros. Si le prix de gros n’est pas renseigné, Stockify retombe sur le prix détail.</p>
            <aside class="note"><p><strong>Agent.</strong> Le menu agent propose directement Nouvelle vente et Mes ventes. Il ne choisit pas la boutique : c’est la sienne.</p></aside>
            <figure class="shot">
                <a href="images/vente.png" target="_blank" rel="noopener">
                    <img src="images/vente.png" alt="Formulaire de nouvelle vente au détail avec scanner et modes de paiement">
                </a>
                <figcaption>Vente au détail depuis le magasin central. Le scanner, les modes de paiement et le bouton Enregistrer et facturer sont sur le même écran.</figcaption>
            </figure>
            <h2>Composer le panier</h2>
            <ol class="steps">
                <li>Cherchez le produit par nom ou par code. Le bouton scanner lit un code-barres.</li>
                <li>Indiquez la quantité. Stockify refuse la ligne si la boutique n’a pas assez.</li>
                <li>Le prix proposé vient du mode détail ou gros. Vous pouvez l’ajuster sur la ligne.</li>
                <li>Ajoutez une remise globale si besoin.</li>
                <li>Renseignez le client : nom, téléphone, e-mail. Le type de client suit le mode, particulier ou boutique.</li>
            </ol>
            <h2>Vente directe ou devis</h2>
            <p>Le type <strong>Vente directe</strong> est le cas normal. La référence commence par VNT-. Le stock baisse, un mouvement est écrit, une facture est générée et son PDF est conservé.</p>
            <p>Le type <strong>Devis</strong> enregistre une proposition, référence DEV-, valable 30 jours. Le stock ne bouge pas. La liste des devis n’apparaît pas dans le menu : pour encaisser, repassez par une vente directe.</p>
            <h2>Paiement</h2>
            <div class="table-wrap"><table>
                <thead><tr><th>Mode</th><th>Ce que Stockify demande</th></tr></thead>
                <tbody>
                    <tr><td>Espèces</td><td>Rien de plus. C’est le mode proposé par défaut.</td></tr>
                    <tr><td>Bankily, Masrvi, Saddad, Bimbank</td><td>Le numéro mobile du paiement.</td></tr>
                    <tr><td>À crédit</td><td>Le montant du crédit et une date d’échéance. Le statut devient payé, partiel ou en attente selon ce qui a déjà été versé.</td></tr>
                    <tr><td>Non payé</td><td>La vente est marquée impayée.</td></tr>
                </tbody>
            </table></div>
            <p>Le statut de paiement se choisit parmi Payé, Paiement partiel, En attente et Impayé. Un paiement partiel hors crédit demande le montant déjà reçu. Plus tard, sur la fiche de la vente, on peut compléter le paiement : le statut et la facture se mettent à jour.</p>
            <h2>Après l’enregistrement</h2>
            <ul>
                <li>La facture PDF est disponible tout de suite.</li>
                <li>Un bordereau de livraison peut être généré depuis la vente.</li>
                <li>Annuler une vente redemande le mot de passe. Le stock est concerné par cette annulation.</li>
            </ul>
            <h2>Importer des ventes</h2>
            <p>Ventes propose un import et un modèle de fichier. Colonnes attendues : date_vente, boutique, code_produit, quantite, prix_unitaire, client_nom, client_telephone, type_client, mode_paiement, statut_paiement, montant_paye, notes, groupe. Plusieurs lignes qui partagent le même groupe forment une seule vente. Le prix unitaire est optionnel : sinon le catalogue détail ou gros s’applique. La boutique « magasin », « central » ou « dépôt » désigne le magasin central, réservé au gérant.</p>
        `
    },
    {
        id: "versements",
        group: "Quotidien",
        nav: "Versements",
        title: "Ramener la caisse au magasin",
        lead: "Un versement dit combien d’espèces une boutique remet au magasin central, sur une date, et à quelles ventes cet argent correspond.",
        body: `
            <div class="path"><span>Quotidien</span><i>→</i><span>Versements</span></div>
            <figure class="shot">
                <a href="images/versements.png" target="_blank" rel="noopener">
                    <img src="images/versements.png" alt="Liste des versements et état de caisse de chaque boutique">
                </a>
                <figcaption>Chaque carte est une boutique : espèces encaissées, mobile money, versements déjà validés, fonds de caisse et reste à reverser.</figcaption>
            </figure>
            <h2>Avant de saisir</h2>
            <p>L’écran propose la boutique, la date, et un montant suggéré à partir de la position de caisse. Les ventes du jour peuvent être cochées une par une, ou liées en bloc.</p>
            <h2>Brouillon ou reçu tout de suite</h2>
            <ol class="steps">
                <li>Choisissez la boutique et la date de versement. La période reprend cette date si vous ne la changez pas.</li>
                <li>Saisissez le montant reçu. Le montant déclaré reprend cette somme.</li>
                <li>Cochez les ventes à lier, ou demandez de lier les ventes du jour.</li>
                <li>Enregistrez un brouillon, ou confirmez le versement comme déjà reçu.</li>
            </ol>
            <aside class="warn"><p><strong>Confirmer tout de suite n’est pas ouvert à tout le monde.</strong> Seul un compte autorisé à valider peut enregistrer le versement comme reçu. Les autres enregistrent un brouillon, puis le soumettent. La confirmation redemande le mot de passe.</p></aside>
            <h2>Les statuts</h2>
            <div class="table-wrap"><table>
                <thead><tr><th>Statut</th><th>Sens</th></tr></thead>
                <tbody>
                    <tr><td>Brouillon</td><td>Saisi, encore modifiable dans le circuit. On peut le soumettre.</td></tr>
                    <tr><td>Soumis</td><td>Envoyé pour validation par le magasin.</td></tr>
                    <tr><td>Validé</td><td>Le magasin a accepté le montant. La facture de versement devient disponible.</td></tr>
                    <tr><td>Partiel</td><td>Le montant validé ne couvre pas tout le déclaré. La facture est quand même disponible.</td></tr>
                    <tr><td>Rejeté</td><td>Refusé. On peut reprendre le dossier.</td></tr>
                </tbody>
            </table></div>
            <h2>Valider, refuser, facturer</h2>
            <p>Sur la fiche, le validateur saisit le montant réellement reçu et une note. Valider, confirmer un brouillon ou rejeter redemande le mot de passe. La facture PDF porte un numéro propre et ne se télécharge qu’une fois le versement validé ou partiel.</p>
            <p>La fiche montre aussi la position de caisse de la boutique et la liste des ventes liées, avec la somme rattachée.</p>
            <h2>Réglage de caisse</h2>
            <p>Un compte qui gère la caisse peut ajuster les paramètres de caisse de la boutique depuis les versements. Ces réglages influencent le suivi des espèces à remettre.</p>
        `
    },
    {
        id: "depenses",
        group: "Quotidien",
        nav: "Dépenses",
        title: "Noter ce qui sort de la caisse",
        lead: "Les dépenses d’une boutique entrent dans le bénéfice net du tableau de bord. Une dépense annulée ne compte plus.",
        body: `
            <div class="path"><span>Quotidien</span><i>→</i><span>Dépenses</span></div>
            <figure class="shot">
                <a href="images/depenses.png" target="_blank" rel="noopener">
                    <img src="images/depenses.png" alt="Gestion des dépenses avec totaux, charges fixes et variables, et le détail par boutique">
                </a>
                <figcaption>Le total hors annulées, les charges fixes, les charges variables, puis chaque dépense avec sa boutique et son statut.</figcaption>
            </figure>
            <h2>Créer une dépense</h2>
            <ol class="steps">
                <li>Ouvrez Dépenses, puis la création.</li>
                <li>Choisissez la boutique, la date et le mois de rattachement.</li>
                <li>Choisissez la catégorie et la nature, fixe ou variable.</li>
                <li>Saisissez le détail, le montant, le statut et une note si besoin.</li>
            </ol>
            <h2>Catégories et statuts</h2>
            <div class="table-wrap"><table>
                <thead><tr><th>Catégories</th><th>Natures</th><th>Statuts</th></tr></thead>
                <tbody>
                    <tr><td>Loyer, Salaires, Déjeuner, Transport, Divers</td><td>Fixe ou variable</td><td>Réalisé, Prévu, Annulé</td></tr>
                </tbody>
            </table></div>
            <p>La liste se filtre par catégorie. Le tableau de bord regroupe les dépenses de la période selon ces mêmes catégories.</p>
            <h2>Import</h2>
            <p>Le modèle attend : date_depense, mois, categorie, detail, boutique, montant, nature, statut, source, note.</p>
            <h2>Supprimer</h2>
            <p>Supprimer une dépense redemande le mot de passe. Préférez le statut Annulé si vous voulez garder la trace sans qu’elle pèse sur le bénéfice.</p>
        `
    },
    {
        id: "stocks",
        group: "Stock",
        nav: "Stocks",
        title: "Savoir ce qu’il reste",
        lead: "Chaque produit a une quantité par lieu : le magasin central, puis chaque boutique. Le seuil minimum déclenche l’alerte.",
        body: `
            <div class="path"><span>Stock</span><i>→</i><span>Stocks</span></div>
            <h2>Lire la liste</h2>
            <p>La liste montre le produit, le lieu et la quantité disponible. Le magasin central correspond au stock sans boutique. Un compte de boutique ne voit que son lieu.</p>
            <p>Un second écran, le tableau de bord des stocks, résume les niveaux. L’export sort la situation, y compris en PDF.</p>
            <figure class="shot">
                <a href="images/stocks.png" target="_blank" rel="noopener">
                    <img src="images/stocks.png" alt="Liste des stocks avec filtres, valeur et indicateurs de stock faible">
                </a>
                <figcaption>Filtres par boutique et catégorie, valeur du stock, et la ligne de chaque produit avec son stock central et son minimum.</figcaption>
            </figure>
            <h2>Alertes</h2>
            <p>Alertes stock liste les produits dont la quantité est au plus égale au stock minimum de la fiche produit. C’est le même critère que le compteur du tableau de bord général. Corrigez soit en réapprovisionnant, soit en relevant le seuil si le minimum n’est plus juste.</p>
            <figure class="shot">
                <a href="images/alertes.png" target="_blank" rel="noopener">
                    <img src="images/alertes.png" alt="Page Alertes stock avec les produits sous le seuil minimum">
                </a>
                <figcaption>Les produits à réapprovisionner : stock actuel, minimum, prix, et la dernière vente.</figcaption>
            </figure>
            <h2>Entrée et sortie manuelles</h2>
            <p>Depuis les mouvements, une entrée augmente un lieu, une sortie le diminue. Chaque mouvement garde le type, la quantité, le stock avant, le stock après et le motif. Une sortie qui dépasse la quantité disponible est refusée.</p>
            <aside class="note"><p><strong>Les ventes, achats, transferts et inventaires écrivent déjà leurs mouvements.</strong> L’entrée ou la sortie manuelle sert aux cas qui n’ont pas d’écran dédié : casse, don, correction ponctuelle.</p></aside>
            <h2>Recherche rapide</h2>
            <p>La recherche de produit, utilisée dans les écrans de stock et de vente, retrouve une fiche et sa quantité sans quitter le formulaire.</p>
        `
    },
    {
        id: "transferts",
        group: "Stock",
        nav: "Transferts",
        title: "Alimenter une boutique",
        lead: "Un transfert sort la marchandise du magasin central et l’entre dans une boutique. L’ancien nom « entrées de stock » redirige encore vers cet écran.",
        body: `
            <div class="path"><span>Stock</span><i>→</i><span>Transferts magasin → boutique</span></div>
            <h2>Créer le transfert</h2>
            <ol class="steps">
                <li>Choisissez la boutique qui reçoit.</li>
                <li>Ajoutez les produits et les quantités. Elles doivent tenir dans le stock central.</li>
                <li>Indiquez la date. Le règlement demandé à la boutique peut être en espèces ou par mobile money.</li>
                <li>Cochez la génération d’un bordereau si la boutique doit partir avec un document.</li>
                <li>Enregistrez. Le central baisse, la boutique augmente, les deux mouvements sont tracés.</li>
            </ol>
            <aside class="warn"><p>Si le central n’a pas la quantité, le transfert ne passe pas. On ne peut pas promettre à une boutique ce que le magasin n’a pas.</p></aside>
            <h2>Annuler une ligne</h2>
            <p>Supprimer un mouvement de distribution redemande le mot de passe. Une restauration existe aussi, elle aussi protégée par le mot de passe, pour revenir sur une annulation.</p>
            <h2>Bordereau</h2>
            <p>Le bordereau lié se consulte dans Bordereaux de livraison : numéro, boutique, date, produits, quantités et statut. Le PDF s’y télécharge.</p>
        `
    },
    {
        id: "inventaires",
        group: "Stock",
        nav: "Inventaires",
        title: "Compter, puis figer",
        lead: "L’inventaire compare le stock théorique d’une boutique à ce qui est réellement en rayon. Tant qu’il est en cours, les quantités se corrigent. Une fois terminé, il est figé.",
        body: `
            <div class="path"><span>Stock</span><i>→</i><span>Inventaire physique</span></div>
            <h2>Ouvrir un comptage</h2>
            <ol class="steps">
                <li>Choisissez la boutique et la date. La référence a la forme INV-AAAAMMJJ-001.</li>
                <li>Pour chaque produit, Stockify propose la quantité théorique. Saisissez la quantité réelle.</li>
                <li>L’écart se calcule tout seul : réel moins théorique.</li>
                <li>Enregistrez. Le statut est « en cours ».</li>
            </ol>
            <h2>Corriger avant de clôturer</h2>
            <p>Sur la fiche, les quantités réelles se mettent à jour tant que l’inventaire est en cours. Chaque correction est écrite dans le journal, avec l’avant et l’après. Il faut le droit d’ajuster les stocks.</p>
            <h2>Terminer</h2>
            <p>La finalisation passe le statut à « terminé ». Deux choix :</p>
            <ul>
                <li><strong>Sans mise à jour du stock</strong> — le comptage est archivé, les quantités en rayon ne changent pas.</li>
                <li><strong>Avec mise à jour</strong> — chaque produit prend la quantité réelle. Un mouvement « inventaire » explique l’écart, en entrée ou en sortie.</li>
            </ul>
            <aside class="ok"><p>Après clôture, on ne modifie plus les lignes. Un nouvel écart demande un nouvel inventaire.</p></aside>
            <h2>Rapports</h2>
            <p>Le formulaire de rapport filtre par période et par boutique, puis génère ou télécharge le PDF des écarts et des ajustements.</p>
        `
    },
    {
        id: "produits",
        group: "Catalogue",
        nav: "Produits",
        title: "La fiche produit",
        lead: "Rien ne se vend correctement sans fiche : catégorie, prix, seuil, et selon le cas gamme, péremption ou numéro de série.",
        body: `
            <div class="path"><span>Catalogue</span><i>→</i><span>Produits</span></div>
            <h2>Créer la catégorie d’abord</h2>
            <p>Une catégorie range les produits. Certaines catégories activent les gammes : dans ce cas la fiche produit demande aussi une gamme, créée depuis la catégorie. Sans catégorie, le produit n’entre pas dans les listes ni dans les rapports.</p>
            <h2>Les champs qui comptent</h2>
            <div class="table-wrap"><table>
                <thead><tr><th>Champ</th><th>Rôle</th></tr></thead>
                <tbody>
                    <tr><td>Nom, description, image, code</td><td>Identité. Le code sert à la recherche, au scan et à l’import.</td></tr>
                    <tr><td>Prix d’achat</td><td>Coût en MRU, utilisé pour la marge.</td></tr>
                    <tr><td>Prix d’achat USD</td><td>Coût en dollars. Le taux des paramètres le convertit en MRU pour proposer un prix.</td></tr>
                    <tr><td>Prix de vente</td><td>Prix au détail, client particulier.</td></tr>
                    <tr><td>Prix de gros</td><td>Prix boutique. S’il est vide, la vente en gros reprend le prix détail.</td></tr>
                    <tr><td>Stock minimum</td><td>Seuil d’alerte.</td></tr>
                    <tr><td>Stock initial</td><td>Quantité de départ au moment de la création.</td></tr>
                    <tr><td>Périssable et date</td><td>Pour les produits à date limite.</td></tr>
                    <tr><td>Sérialisé</td><td>Le produit se suit carton par carton et unité par unité.</td></tr>
                    <tr><td>Actif</td><td>Une fiche inactive sort du circuit de vente.</td></tr>
                </tbody>
            </table></div>
            <h2>Importer</h2>
            <p>Produits a son propre import et un modèle à télécharger. Utile pour une reprise de catalogue. Le code doit rester unique : c’est la clé que les imports de ventes retrouvent.</p>
            <h2>Modifier et retirer</h2>
            <p>La modification reprend la même fiche. Supprimer un produit n’est possible que si les droits le permettent, et seulement quand il n’est plus au cœur d’opérations en cours. Désactiver est souvent plus sûr.</p>
        `
    },
    {
        id: "series",
        group: "Catalogue",
        nav: "Numéros de série",
        title: "Cartons et unités",
        lead: "Un produit sérialisé ne se compte pas seulement en quantité. Chaque unité a une identité, rangée dans un carton.",
        body: `
            <h2>Recevoir</h2>
            <ol class="steps">
                <li>La fiche produit doit être marquée sérialisée, avec un libellé d’unité si vous voulez un nom plus clair que « unité ».</li>
                <li>Ouvrez Cartons, puis la réception.</li>
                <li>Créez le carton et les unités qu’il contient.</li>
            </ol>
            <h2>Vendre</h2>
            <p>Au moment de la vente, le scan résout le code : carton entier ou unité. Stockify consomme les unités concernées, puis aligne la quantité globale du stock. On ne peut pas vendre une unité déjà sortie.</p>
            <h2>Consulter</h2>
            <p>La liste des cartons, la fiche d’un carton et la fiche d’une unité montrent où en est chaque pièce. C’est le bon endroit quand un client revient avec un produit identifié.</p>
        `
    },
    {
        id: "achats",
        group: "Approvisionnement",
        nav: "Achats",
        title: "Acheter, puis réceptionner",
        lead: "Un achat enregistre la commande fournisseur. Le stock n’augmente qu’à la réception.",
        body: `
            <div class="path"><span>Approvisionnement</span><i>→</i><span>Achats</span></div>
            <h2>Passer l’achat</h2>
            <ol class="steps">
                <li>Créez d’abord le fournisseur si besoin : nom, adresse, téléphone, e-mail, contact.</li>
                <li>Ouvrez un achat. Le fournisseur et la boutique peuvent rester vides : un achat sans boutique vise le magasin central.</li>
                <li>Ajoutez les produits, quantités et prix.</li>
                <li>Enregistrez. L’achat existe, le stock n’a pas encore bougé.</li>
            </ol>
            <h2>Réceptionner</h2>
            <p>Sur la fiche, la réception fait entrer les quantités au lieu prévu et écrit les mouvements. C’est l’étape qui rend la marchandise transférable vers les boutiques.</p>
            <h2>Annuler</h2>
            <p>Supprimer un achat redemande le mot de passe. On ne modifie pas un achat déjà saisi par un simple formulaire d’édition : on le supprime si les droits et la situation le permettent, puis on le recrée.</p>
            <aside class="note"><p>Le fournisseur sert aussi de mémoire : depuis sa fiche, on retrouve les approvisionnements qui lui sont liés.</p></aside>
        `
    },
    {
        id: "boutiques",
        group: "Réseau",
        nav: "Points de vente",
        title: "Les boutiques",
        lead: "Une boutique est un lieu de stock, de vente et de caisse. Le gérant en voit le réseau. Les autres voient la leur.",
        body: `
            <div class="path"><span>Réseau</span><i>→</i><span>Points de vente</span></div>
            <h2>Deux portes d’entrée</h2>
            <p>Un gérant arrive sur le tableau de bord des boutiques, puis ouvre celle qu’il veut. Un utilisateur rattaché à une boutique arrive directement sur la fiche de la sienne.</p>
            <figure class="shot">
                <a href="images/boutiques.png" target="_blank" rel="noopener">
                    <img src="images/boutiques.png" alt="Espace boutiques avec les statistiques globales et une carte par point de vente">
                </a>
                <figcaption>Le réseau : chiffre consolidé, valeur de stock, et pour chaque point de vente le chiffre, les produits et la performance du jour, de la semaine et du mois.</figcaption>
            </figure>
            <h2>Créer une boutique</h2>
            <p>Renseignez le nom, l’adresse, le téléphone, l’e-mail et les informations de contact. Un code est attribué à la boutique. Le statut actif retire un point de vente du circuit sans effacer son historique.</p>
            <h2>Ce que la fiche relie</h2>
            <ul>
                <li>Les utilisateurs affectés, qui ne vendront que là.</li>
                <li>Le stock de ce lieu.</li>
                <li>Les ventes, dépenses, inventaires et versements.</li>
                <li>Les graphiques : ventes du mois, recettes et dépenses, répartition et évolution du stock, radar de performance.</li>
            </ul>
            <aside class="note"><p><strong>Magasin central.</strong> Ce n’est pas une boutique de la liste. C’est le stock sans boutique, visible du gérant, d’où partent les transferts.</p></aside>
        `
    },
    {
        id: "documents",
        group: "Réseau",
        nav: "Documents",
        title: "Factures, bordereaux, PDF",
        lead: "Stockify produit les PDF au fil des opérations et les range pour les retrouver, les voir et les télécharger.",
        body: `
            <h2>Ce qui génère un document</h2>
            <div class="table-wrap"><table>
                <thead><tr><th>Opération</th><th>Document</th></tr></thead>
                <tbody>
                    <tr><td>Vente directe</td><td>Facture PDF, dès l’enregistrement. Préfixe et pied de page viennent des paramètres. L’échéance suit le délai en jours.</td></tr>
                    <tr><td>Vente</td><td>Bordereau de livraison, sur demande depuis la vente.</td></tr>
                    <tr><td>Transfert</td><td>Bordereau, si la case a été cochée.</td></tr>
                    <tr><td>Versement validé ou partiel</td><td>Facture de versement, avec son numéro.</td></tr>
                    <tr><td>Inventaire</td><td>Rapport PDF des écarts.</td></tr>
                    <tr><td>Journal</td><td>Export PDF de l’activité filtrée.</td></tr>
                    <tr><td>Stock</td><td>Export de la situation.</td></tr>
                </tbody>
            </table></div>
            <h2>Le classeur</h2>
            <p>L’écran Documents liste les fichiers déjà produits. On les consulte, on les télécharge, on peut en retirer un du classeur. La pièce comptable d’origine — la vente, le versement — reste la source : régénérez le PDF depuis elle si le fichier a été retiré.</p>
            <h2>Paiements rattachés</h2>
            <p>Les encaissements se suivent aussi comme paiements liés à une facture. Compléter une vente met à jour son statut et son historique de paiement, ce qui évite une seconde saisie contradictoire.</p>
        `
    },
    {
        id: "utilisateurs",
        group: "Administration",
        nav: "Utilisateurs",
        title: "Comptes, rôles, boutique",
        lead: "Un compte sans rôle attend dehors. Un compte sans boutique ne peut pas vendre. Les deux se règlent ici, par le gérant.",
        body: `
            <div class="path"><span>Administration</span><i>→</i><span>Utilisateurs</span></div>
            <h2>Créer</h2>
            <ol class="steps">
                <li>Indiquez le nom, l’e-mail, le téléphone et un mot de passe.</li>
                <li>Attribuez un rôle : gérant, agent, caissier, ou un rôle que vous avez créé.</li>
                <li>Attribuez une boutique aux comptes qui vendent ou encaissent.</li>
            </ol>
            <p>Tant que le rôle manque, la personne se connecte sur la page d’attente. L’e-mail peut servir à la double vérification : un compte qui doit recevoir un code en a besoin.</p>
            <h2>Modifier</h2>
            <p>Le gérant change le rôle ou la boutique depuis la fiche. Retirer le dernier rôle renvoie la personne en attente à la prochaine connexion.</p>
            <h2>Supprimer</h2>
            <p>La suppression redemande le mot de passe. L’historique des ventes déjà passées par cette personne reste dans les journaux.</p>
            <h2>Rôles et autorisations</h2>
            <p>Rôles sert à créer un nom, par exemple un profil intermédiaire, avec une description. Autorisations ouvre ce rôle et coche ce qu’il peut faire : ventes, stock, inventaires, produits, rapports, journaux, utilisateurs, boutiques. La matrice montre tous les rôles d’un coup et permet d’activer ou de couper un droit sans ouvrir chaque fiche.</p>
            <aside class="warn"><p>Ces deux écrans sont réservés au gérant. Donner « supprimer les utilisateurs » ou « valider les versements » à un rôle large, c’est lui ouvrir la caisse et les comptes.</p></aside>
        `
    },
    {
        id: "journaux",
        group: "Administration",
        nav: "Journaux",
        title: "Qui a fait quoi",
        lead: "Chaque création, modification et suppression importante laisse une ligne : qui, quand, sur quel objet, et souvent l’avant / après.",
        body: `
            <div class="path"><span>Administration</span><i>→</i><span>Journaux d’activité</span></div>
            <figure class="shot">
                <a href="images/journaux.png" target="_blank" rel="noopener">
                    <img src="images/journaux.png" alt="Journal d’activité : connexions, créations de ventes et d’achats">
                </a>
                <figcaption>Chaque ligne dit qui a fait l’action, sur quoi, et depuis où. Les connexions, les ventes et les achats y passent.</figcaption>
            </figure>
            <h2>Ce qui est tracé</h2>
            <ul>
                <li>Connexions et échecs, dans la limite du dispositif de sécurité.</li>
                <li>Ventes, devis, versements, dépenses, achats.</li>
                <li>Inventaires : création, changement de quantités, clôture, avec le détail des écarts.</li>
                <li>Produits et autres fiches sensibles, avec la différence entre l’ancienne et la nouvelle valeur.</li>
            </ul>
            <h2>Filtrer et exporter</h2>
            <p>La liste se restreint par utilisateur, date, type d’action et boutique. Un compte de boutique ne parcourt pas le journal des autres lieux. L’export PDF fige le filtre en cours, pour un contrôle ou un archivage.</p>
            <aside class="note"><p>Le journal explique. Il n’annule pas. Pour revenir en arrière, il faut l’opération prévue : restaurer un mouvement de transfert, saisir un inventaire, ou une écriture contraire.</p></aside>
        `
    },
    {
        id: "notifications",
        group: "Administration",
        nav: "Notifications",
        title: "Le fil des alertes",
        lead: "La cloche de l’en-tête appartient à la personne connectée. Elle ne montre pas les alertes d’un autre compte.",
        body: `
            <h2>Lire</h2>
            <p>La cloche ouvre un aperçu. Toute la liste est sur la page Notifications. Le fil se rafraîchit sans recharger tout l’écran.</p>
            <h2>Traiter</h2>
            <ul>
                <li><strong>Consulter</strong> ouvre le sujet et marque le passage.</li>
                <li><strong>Lu</strong> retire l’alerte du non-lu.</li>
                <li><strong>Tout lire</strong> vide le compteur d’un coup.</li>
                <li><strong>Archiver</strong> sort l’alerte du flux courant sans l’effacer de l’historique.</li>
            </ul>
            <p>Les alertes critiques de stock et les événements de versement soumis alimentent ce fil pour les comptes qui ont le droit de les voir.</p>
        `
    },
    {
        id: "parametres",
        group: "Administration",
        nav: "Paramètres",
        title: "Régler la maison",
        lead: "Quatre onglets suffisent : l’identité de la société, le taux de change, la facture et l’e-mail. Réservé au gérant, ou à un rôle qui a le droit de gérer les paramètres.",
        body: `
            <div class="path"><span>Administration</span><i>→</i><span>Paramètres</span></div>
            <h2>Général</h2>
            <p>Nom de l’application, nom de la société, adresse, téléphone, e-mail. Ces textes habillent les documents et l’identité affichée.</p>
            <h2>Prix / change</h2>
            <p>Le taux USD → MRU est saisi à la main. Exemple : 1 dollar pour 28 ouguiyas. Il sert à convertir un coût d’achat en dollars et à proposer un prix de vente. Il ne se met pas à jour tout seul : quand le cours bouge, on le change ici.</p>
            <h2>Facturation</h2>
            <ul>
                <li>Préfixe des factures, par défaut FACT-.</li>
                <li>Délai de paiement en jours, par défaut 15.</li>
                <li>Pied de page, la phrase en bas du PDF.</li>
            </ul>
            <h2>E-mail</h2>
            <p>Nom et adresse d’expéditeur des messages de l’application, dont les codes de connexion. L’envoi réel dépend aussi de la configuration du serveur de mail : un nom d’expéditeur juste ne suffit pas si le serveur n’est pas branché.</p>
        `
    },
    {
        id: "profil",
        group: "Administration",
        nav: "Profil",
        title: "Mon compte et mes ventes",
        lead: "Chaque personne ouvre sa fiche depuis Mon profil. Si elle est rattachée à une boutique, elle y trouve aussi ses performances.",
        body: `
            <div class="path"><span>Mon compte</span><i>→</i><span>Mon profil</span></div>
            <h2>La fiche</h2>
            <p>Nom, e-mail, téléphone, rôle et boutique s’y lisent. La mise à jour du mot de passe se fait depuis le compte. Le rôle, lui, ne se change pas soi-même : c’est le gérant qui l’attribue.</p>
            <h2>Performances</h2>
            <p>Pour un compte avec boutique, Mes performances calcule sur la période :</p>
            <ul>
                <li>le chiffre d’affaires de ses ventes ;</li>
                <li>le nombre de ventes ;</li>
                <li>la vente moyenne, chiffre divisé par le nombre.</li>
            </ul>
            <p>Un gérant peut ouvrir les performances d’un autre utilisateur de boutique. C’est l’écran qui répond à la question « combien cette personne a vendu », sans mélanger les boutiques.</p>
        `
    },
    {
        id: "securite",
        group: "Référence",
        nav: "Sécurité",
        title: "Ce qui protège les opérations",
        lead: "Stockify ne se contente pas d’un mot de passe à l’entrée. Certaines actions en redemandent un, et les rôles sensibles confirment la connexion par e-mail.",
        body: `
            <h2>Double vérification</h2>
            <p>Après un mot de passe correct, les rôles configurés comme sensibles reçoivent un code par e-mail. On peut aussi utiliser un code de récupération, à garder hors ligne. Le code expire, et le renvoi est limité par personne et par adresse réseau.</p>
            <h2>Verrouillage</h2>
            <p>Trop d’échecs de connexion verrouille temporairement le compte. Il faut attendre, puis réessayer. Cela évite qu’on teste des mots de passe en rafale.</p>
            <h2>Mot de passe une seconde fois</h2>
            <p>Ces actions s’arrêtent et demandent de confirmer le mot de passe :</p>
            <ul>
                <li>supprimer un utilisateur, une vente, un achat, une dépense ;</li>
                <li>annuler ou restaurer un mouvement de transfert ;</li>
                <li>confirmer, valider ou rejeter un versement.</li>
            </ul>
            <p>La confirmation est valable un moment. Passé ce délai, Stockify la redemande.</p>
            <h2>Cloisonnement</h2>
            <p>Les écrans filtrent par boutique. Un lien direct vers la vente ou l’inventaire d’une autre boutique est refusé. Le magasin central reste au gérant. Les journaux suivent la même règle.</p>
            <h2>Session</h2>
            <p>La session se ferme à la déconnexion. Sur un poste partagé en boutique, se déconnecter en fin de vacation évite qu’une vente parte au nom de la personne précédente.</p>
        `
    },
    {
        id: "parcours",
        group: "Référence",
        nav: "Une journée type",
        title: "De la commande au bénéfice",
        lead: "Voici un enchaînement complet, dans l’ordre où les écrans se répondent. Chaque étape laisse une trace.",
        body: `
            <ol class="steps">
                <li><strong>Le gérant crée la fiche.</strong> Catégorie, puis produit : code, prix d’achat, prix détail, prix gros, stock minimum. S’il a payé en dollars, il vérifie le taux dans Paramètres.</li>
                <li><strong>Il commande.</strong> Fournisseur, puis achat vers le magasin central. À l’arrivée des colis, il réceptionne : le stock central augmente.</li>
                <li><strong>Il alimente la boutique.</strong> Transfert magasin vers boutique, avec bordereau. Le central baisse, la boutique augmente.</li>
                <li><strong>L’agent vend.</strong> Nouvelle vente, scan, quantité, espèces ou Bankily. La facture sort. Le stock boutique baisse.</li>
                <li><strong>Le caissier encaisse le reste.</strong> Sur la fiche, il complète un paiement partiel. Le statut de la facture suit.</li>
                <li><strong>La boutique note ses frais.</strong> Loyer, transport ou déjeuner, en dépense réalisée.</li>
                <li><strong>Le gérant reçoit la caisse.</strong> Versement du jour, ventes liées, validation, facture de versement.</li>
                <li><strong>En fin de période, on compte.</strong> Inventaire de la boutique, écarts, clôture avec mise à jour du stock si le comptage fait foi.</li>
                <li><strong>Le tableau de bord conclut.</strong> Chiffre, marge, dépenses, bénéfice net, et la liste des produits à recommander.</li>
            </ol>
            <aside class="ok"><p>Si un chiffre surprend, le journal d’activité dit qui a enregistré la vente, le versement ou l’ajustement. On part de là, pas d’une correction silencieuse.</p></aside>
            <h2>Ce que ce guide ne promet pas</h2>
            <p>Stockify ne se branche pas encore sur un logiciel comptable extérieur. Les factures, versements et exports PDF sont les pièces à transmettre. Les rapports avancés au-delà du tableau de bord, des graphiques de boutique et des rapports d’inventaire restent à construire dans l’application.</p>
        `
    }
];
