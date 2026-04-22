/* Manisha Varma Campaign — i18n (EN / FR) */

(function () {
  'use strict';

  var translations = {
    en: {
      /* Top banner */
      'banner-label':           'Election Day · May 11, 2026',
      /* Navbar */
      'nav-about':              'About',
      'nav-platform':           'Platform',
      'nav-gallery':            'Gallery',
      'nav-videos':             'Videos',
      'nav-events':             'Events',
      'nav-vote':               'Vote',
      'nav-contact':            'Contact Us',
      /* Hero */
      'hero-eyebrow':           'Fredericton City Council · Ward 7 – Southwood Park & Lincoln · May 2026',
      'hero-title':             'Elect Manisha Varma',
      'hero-tagline':           'Dedicated  ·  Inclusive  ·  Trusted',
      'hero-cta-contact':       'Contact Us',
      'hero-cta-learn':         'Learn More',
      /* Hero badges */
      'vote-badge-tag':         '⚠ Voting is Open Now',
      'vote-badge-text':        'Advance Polling · May 2 & May 4',
      'vote-badge-addr':        '655 rue Priestman St, Fredericton',
      'event-badge-tag':        '★ Upcoming Event',
      'event-badge-text':       'Meet Your Candidate & Share Your Priorities',
      'event-badge-date':       'Sunday, April 26  ·  4–6 PM  ·  Lincoln Heights Park',
      /* About */
      'about-eyebrow':          'About the Candidate',
      'about-title':            'Meet Manisha Varma',
      'about-lead':             'Manisha Varma is a dedicated community leader running for Fredericton City Council in Ward 7 – Southwood Park & Lincoln. A passionate advocate for inclusivity and community wellbeing, she has spent years building bridges across Fredericton\'s diverse neighbourhoods.',
      'about-p2':               'As a longtime resident of Ward 7, Manisha understands the real challenges facing families in Southwood Park & Lincoln — from housing affordability to accessible services for youth and seniors. She believes every resident deserves a seat at the table.',
      'about-p3':               'Recognized by the City of Fredericton for her community contributions, Manisha brings lived experience, genuine empathy, and a commitment to inclusive leadership to everything she does.',
      'about-btn-platform':     'View Her Platform',
      'about-btn-contact':      'Get Involved',
      /* Platform */
      'platform-eyebrow':       'Election Platform',
      'platform-title':         'Manisha\'s Platform for Ward 7',
      'platform-subtitle':      'Five priorities. One community. Real results for Southwood Park & Lincoln.',
      'platform-1-title':       'Expand the Trail',
      'platform-1-body':        'Connecting our neighbourhoods and keeping green space accessible.',
      'platform-2-title':       'Property Taxes & City Spending',
      'platform-2-body':        'Making sure tax hikes come with clear results.',
      'platform-3-title':       'Traffic Safety',
      'platform-3-body':        'Speeding, traffic lights, and safer crossings for kids and seniors.',
      'platform-4-title':       'City Services',
      'platform-4-body':        'Roads, sidewalks, snow clearing, and downtown safety.',
      'platform-5-title':       'Rehabilitation Centre & Addiction Support',
      'platform-5-body':        'Access to treatment, mental health services, and community impact.',
      /* Gallery */
      'gallery-eyebrow':        'Photo Gallery',
      'gallery-title':          'Manisha in the Community',
      'gallery-subtitle':       'On the ground, with the people, every step of the way.',
      /* Videos */
      'videos-eyebrow':         'Campaign Videos',
      'videos-title':           'Hear From Manisha',
      'videos-subtitle':        'Watch campaign messages, community conversations, and platform highlights.',
      'video-cap-1':            'Campaign Introduction',
      'video-cap-2':            'Community Priorities',
      'video-cap-3':            'Town Hall Highlights',
      /* Recognitions */
      'recog-eyebrow':          'Endorsements & Awards',
      'recog-title':            'Recognitions',
      'recog-subtitle':         'Trusted by community leaders and recognized for her service.',
      'recog-1-title':          'Community Recognition Award',
      'recog-1-org':            'City of Fredericton',
      'recog-1-quote':          'Awarded by the City of Fredericton in recognition of outstanding dedication to the community through the Association of Indo-Canadians Fredericton.',
      'recog-2-title':          'Board Member — MCAF',
      'recog-2-org':            'Multicultural Association of Fredericton',
      'recog-2-quote':          'Proud member of the MCAF leadership, helping celebrate 50 years of multiculturalism and community building in Fredericton.',
      'recog-3-title':          'Guest at Government House',
      'recog-3-org':            'Province of New Brunswick',
      'recog-3-quote':          'Invited to Government House, Fredericton, in recognition of her contributions to the cultural and civic life of New Brunswick.',
      /* Newsletter */
      'newsletter-title':       'Stay in the Loop',
      'newsletter-sub':         'Get campaign updates, event invites, and news delivered to your inbox.',
      'newsletter-name':        'Your name',
      'newsletter-email':       'Your email address',
      'newsletter-btn':         'Subscribe',
      /* Contact */
      'contact-eyebrow':        'Get in Touch',
      'contact-title':          'Contact the Campaign',
      'contact-subtitle':       'Have a question or want to share your thoughts? We\'d love to hear from you.',
      'contact-label-name':     'Your Name',
      'contact-label-email':    'Email Address',
      'contact-label-subject':  'Subject',
      'contact-ph-subject':     'What\'s on your mind?',
      'contact-label-msg':      'Message',
      'contact-ph-msg':         'Share your thoughts, questions, or concerns...',
      'contact-btn-send':       'Send Message',
      'contact-ward':           'Ward 7 – Southwood Park & Lincoln, Fredericton, NB',
      'contact-email-lbl':      'Email',
      'contact-social-lbl':     'Social Media',
      /* Footer */
      'footer-tagline':         'Dedicated · Inclusive · Trusted\nWard 7 – Southwood Park & Lincoln · May 11, 2026',
      'footer-quick-links':     'Quick Links',
      'footer-get-involved':    'Get Involved',
      'footer-election-day':    'Election Day',
      'footer-newsletter':      'Newsletter',
      'footer-contact':         'Contact Us',
      'footer-about':           'About',
      'footer-platform':        'Platform',
      'footer-gallery':         'Gallery',
      'footer-events':          'Events',
      'footer-voting':          'Voting Info',
      'footer-recognitions':    'Recognitions',
      'footer-vote-info':       'Make your voice heard — vote Manisha Varma in Lincoln, NB.',
      'footer-vote-info-ward7': 'Make your voice heard — vote Manisha Varma in Ward 7.',
      'footer-contact-btn':     'Contact Us',
      'footer-copy':            '© 2026 Manisha Varma Campaign. All rights reserved. | Authorized by the official agent of Manisha Varma.',
      'footer-location':        'Lincoln, New Brunswick, Canada',
      /* Events page */
      'events-badge-label':     'UPCOMING EVENT',
      'events-title':           'Meet &amp; Share Your Priorities',
      'events-subtitle':        'A casual outdoor conversation — you set the agenda.',
      'events-date-label':      'Sunday, April 26, 2026',
      'events-time':            '4:00 PM – 6:00 PM (ADT)',
      'events-venue-label':     'Lincoln Heights Park – Open Green Area',
      'events-venue-addr':      '119 Goodine St, Fredericton, NB',
      'events-free-label':      'Free &amp; Open to All',
      'events-free-sub':        'Families welcome · Light refreshments provided',
      'events-body-1':          'Fredericton\'s City Councillor election is coming up, and I\'m running to represent you in Ward 7.',
      'events-body-2':          '<strong>Before you vote, let\'s talk.</strong>',
      'events-body-3':          'Join me at Lincoln Heights Park for <em>"Meet &amp; Share Your Priorities"</em> — a casual, outdoor event where <strong>you set the agenda</strong>. We\'ve identified 5 key issues facing Ward 7. You\'ll see 5 boxes, one for each issue. Grab a sticker and "vote" for your top priority — then tell me why it matters to you.',
      'events-issues-heading':  'The 5 Issues We\'re Tracking',
      'events-issue-1-title':   'Expand the Trail',
      'events-issue-1-body':    'Connecting neighbourhoods and keeping green space accessible.',
      'events-issue-2-title':   'Property Taxes &amp; City Spending',
      'events-issue-2-body':    'Making sure tax hikes come with clear, accountable results.',
      'events-issue-3-title':   'Traffic Safety',
      'events-issue-3-body':    'Speeding, traffic lights, and safer crossings for kids and seniors.',
      'events-issue-4-title':   'City Services',
      'events-issue-4-body':    'Roads, sidewalks, snow clearing, and downtown safety.',
      'events-issue-5-title':   'Rehabilitation Centre &amp; Addiction Support',
      'events-issue-5-body':    'Access to treatment, mental health services, and community impact.',
      'events-note':            'No speeches. No politics as usual. Just real conversations, light refreshments, and your voice shaping my priorities. Bring the kids, bring a neighbour, bring your thoughts. This is about <strong>listening first.</strong>',
      'events-note-attr':       '— Manisha Varma, Your Ward 7 Candidate',
      'events-map-title':       'Location',
      'events-map-btn':         'Open in Google Maps',
      'events-cant-title':      'Can\'t Make It?',
      'events-cant-sub':        'Share your top issue or question — Manisha reads every message.',
      'events-form-name':       'Your Name',
      'events-form-email':      'Email',
      'events-form-issue':      'Your Top Issue',
      'events-form-issue-ph':   '— Select an issue —',
      'events-form-issue-1':    'Expand the Trail',
      'events-form-issue-2':    'Property Taxes &amp; City Spending',
      'events-form-issue-3':    'Traffic Safety',
      'events-form-issue-4':    'City Services',
      'events-form-issue-5':    'Rehabilitation Centre &amp; Addiction Support',
      'events-form-issue-6':    'Other',
      'events-form-msg':        'Tell Me More',
      'events-form-msg-ph':     'Why does this issue matter to you?',
      'events-form-btn':        'Send My Priority',
    },
    fr: {
      /* Top banner */
      'banner-label':           'Jour des élections · 11 mai 2026',
      /* Navbar */
      'nav-about':              'À propos',
      'nav-platform':           'Plateforme',
      'nav-gallery':            'Galerie',
      'nav-videos':             'Vidéos',
      'nav-events':             'Événements',
      'nav-vote':               'Voter',
      'nav-contact':            'Nous contacter',
      /* Hero */
      'hero-eyebrow':           'Conseil municipal de Fredericton · Quartier 7 – Southwood Park & Lincoln · Mai 2026',
      'hero-title':             'Élisez Manisha Varma',
      'hero-tagline':           'Dévouée  ·  Inclusive  ·  De confiance',
      'hero-cta-contact':       'Nous contacter',
      'hero-cta-learn':         'En savoir plus',
      /* Hero badges */
      'vote-badge-tag':         '⚠ Le vote est ouvert',
      'vote-badge-text':        'Vote par anticipation · 2 mai et 4 mai',
      'vote-badge-addr':        '655 rue Priestman St, Fredericton',
      'event-badge-tag':        '★ Événement à venir',
      'event-badge-text':       'Rencontrez la candidate & partagez vos priorités',
      'event-badge-date':       'Dimanche 26 avril  ·  16 h – 18 h  ·  Parc Lincoln Heights',
      /* About */
      'about-eyebrow':          'À propos de la candidate',
      'about-title':            'Rencontrez Manisha Varma',
      'about-lead':             'Manisha Varma est une chef de communauté dévouée qui se présente au Conseil municipal de Fredericton dans le Quartier 7 – Southwood Park & Lincoln. Ardente défenseure de l\'inclusion et du bien-être communautaire, elle a consacré des années à tisser des liens dans les quartiers diversifiés de Fredericton.',
      'about-p2':               'En tant que résidente de longue date du Quartier 7, Manisha comprend les véritables défis auxquels font face les familles de Southwood Park & Lincoln — de l\'abordabilité du logement aux services accessibles pour les jeunes et les aînés. Elle croit que chaque résident mérite une place à la table.',
      'about-p3':               'Reconnue par la Ville de Fredericton pour ses contributions communautaires, Manisha apporte une expérience vécue, une empathie sincère et un engagement envers un leadership inclusif dans tout ce qu\'elle entreprend.',
      'about-btn-platform':     'Voir sa plateforme',
      'about-btn-contact':      'S\'impliquer',
      /* Platform */
      'platform-eyebrow':       'Plateforme électorale',
      'platform-title':         'La plateforme de Manisha pour le Quartier 7',
      'platform-subtitle':      'Cinq priorités. Une communauté. De vrais résultats pour Southwood Park & Lincoln.',
      'platform-1-title':       'Agrandir le sentier',
      'platform-1-body':        'Relier nos quartiers et maintenir les espaces verts accessibles.',
      'platform-2-title':       'Taxes foncières & dépenses municipales',
      'platform-2-body':        'S\'assurer que les hausses de taxes s\'accompagnent de résultats concrets.',
      'platform-3-title':       'Sécurité routière',
      'platform-3-body':        'Excès de vitesse, feux de circulation et traversées plus sécuritaires pour les enfants et les aînés.',
      'platform-4-title':       'Services municipaux',
      'platform-4-body':        'Routes, trottoirs, déneigement et sécurité au centre-ville.',
      'platform-5-title':       'Centre de réadaptation & soutien en dépendances',
      'platform-5-body':        'Accès aux traitements, aux services de santé mentale et impact communautaire.',
      /* Gallery */
      'gallery-eyebrow':        'Galerie photos',
      'gallery-title':          'Manisha dans la communauté',
      'gallery-subtitle':       'Sur le terrain, avec les gens, à chaque étape.',
      /* Videos */
      'videos-eyebrow':         'Vidéos de campagne',
      'videos-title':           'Écoutez Manisha',
      'videos-subtitle':        'Regardez les messages de campagne, les discussions communautaires et les faits saillants de la plateforme.',
      'video-cap-1':            'Introduction de campagne',
      'video-cap-2':            'Priorités communautaires',
      'video-cap-3':            'Points saillants de l\'assemblée',
      /* Recognitions */
      'recog-eyebrow':          'Appuis & prix',
      'recog-title':            'Reconnaissances',
      'recog-subtitle':         'La confiance des leaders communautaires et reconnue pour son service.',
      'recog-1-title':          'Prix de reconnaissance communautaire',
      'recog-1-org':            'Ville de Fredericton',
      'recog-1-quote':          'Décerné par la Ville de Fredericton en reconnaissance de son dévouement exceptionnel envers la communauté à travers l\'Association des Indo-Canadiens de Fredericton.',
      'recog-2-title':          'Membre du conseil d\'administration — AMCF',
      'recog-2-org':            'Association multiculturelle de Fredericton',
      'recog-2-quote':          'Fière membre de la direction de l\'AMCF, contribuant à célébrer 50 ans de multiculturalisme et de développement communautaire à Fredericton.',
      'recog-3-title':          'Invitée à la maison du gouvernement',
      'recog-3-org':            'Province du Nouveau-Brunswick',
      'recog-3-quote':          'Invitée à la maison du gouvernement de Fredericton en reconnaissance de ses contributions à la vie culturelle et civique du Nouveau-Brunswick.',
      /* Newsletter */
      'newsletter-title':       'Restez informée',
      'newsletter-sub':         'Recevez les mises à jour de la campagne, les invitations aux événements et les nouvelles dans votre boîte de réception.',
      'newsletter-name':        'Votre nom',
      'newsletter-email':       'Votre adresse courriel',
      'newsletter-btn':         'S\'abonner',
      /* Contact */
      'contact-eyebrow':        'Entrer en contact',
      'contact-title':          'Contacter la campagne',
      'contact-subtitle':       'Vous avez une question ou souhaitez partager vos réflexions? Nous serions ravis de vous entendre.',
      'contact-label-name':     'Votre nom',
      'contact-label-email':    'Adresse courriel',
      'contact-label-subject':  'Sujet',
      'contact-ph-subject':     'Qu\'avez-vous à l\'esprit?',
      'contact-label-msg':      'Message',
      'contact-ph-msg':         'Partagez vos réflexions, questions ou préoccupations...',
      'contact-btn-send':       'Envoyer le message',
      'contact-ward':           'Quartier 7 – Southwood Park & Lincoln, Fredericton, N.-B.',
      'contact-email-lbl':      'Courriel',
      'contact-social-lbl':     'Médias sociaux',
      /* Footer */
      'footer-tagline':         'Dévouée · Inclusive · De confiance\nQuartier 7 – Southwood Park & Lincoln · 11 mai 2026',
      'footer-quick-links':     'Liens rapides',
      'footer-get-involved':    'S\'impliquer',
      'footer-election-day':    'Jour des élections',
      'footer-newsletter':      'Bulletin',
      'footer-contact':         'Nous contacter',
      'footer-about':           'À propos',
      'footer-platform':        'Plateforme',
      'footer-gallery':         'Galerie',
      'footer-events':          'Événements',
      'footer-voting':          'Info sur le vote',
      'footer-recognitions':    'Reconnaissances',
      'footer-vote-info':       'Faites entendre votre voix — votez Manisha Varma à Lincoln, N.-B.',
      'footer-vote-info-ward7': 'Faites entendre votre voix — votez Manisha Varma au Quartier 7.',
      'footer-contact-btn':     'Nous contacter',
      'footer-copy':            '© 2026 Campagne Manisha Varma. Tous droits réservés. | Autorisé par l\'agent officiel de Manisha Varma.',
      'footer-location':        'Lincoln, Nouveau-Brunswick, Canada',
      /* Events page */
      'events-badge-label':     'ÉVÉNEMENT À VENIR',
      'events-title':           'Rencontrez-moi &amp; partagez vos priorités',
      'events-subtitle':        'Une conversation décontractée en plein air — c\'est vous qui fixez l\'ordre du jour.',
      'events-date-label':      'Dimanche 26 avril 2026',
      'events-time':            '16 h – 18 h (HAD)',
      'events-venue-label':     'Parc Lincoln Heights – Espace vert ouvert',
      'events-venue-addr':      '119 rue Goodine St, Fredericton, N.-B.',
      'events-free-label':      'Gratuit &amp; ouvert à tous',
      'events-free-sub':        'Familles bienvenues · Légers rafraîchissements fournis',
      'events-body-1':          'L\'élection du conseiller municipal de Fredericton approche, et je me présente pour vous représenter au Quartier 7.',
      'events-body-2':          '<strong>Avant de voter, parlons.</strong>',
      'events-body-3':          'Rejoignez-moi au parc Lincoln Heights pour <em>« Rencontrez-moi &amp; partagez vos priorités »</em> — un événement décontracté en plein air où <strong>c\'est vous qui fixez l\'ordre du jour</strong>. Nous avons cerné 5 enjeux clés pour le Quartier 7. Vous verrez 5 boîtes, une pour chaque enjeu. Prenez un autocollant et « votez » pour votre priorité principale — puis dites-moi pourquoi cela compte pour vous.',
      'events-issues-heading':  'Les 5 enjeux que nous suivons',
      'events-issue-1-title':   'Agrandir le sentier',
      'events-issue-1-body':    'Relier les quartiers et maintenir les espaces verts accessibles.',
      'events-issue-2-title':   'Taxes foncières &amp; dépenses municipales',
      'events-issue-2-body':    'S\'assurer que les hausses de taxes s\'accompagnent de résultats clairs et imputables.',
      'events-issue-3-title':   'Sécurité routière',
      'events-issue-3-body':    'Excès de vitesse, feux de circulation et traversées plus sécuritaires pour les enfants et les aînés.',
      'events-issue-4-title':   'Services municipaux',
      'events-issue-4-body':    'Routes, trottoirs, déneigement et sécurité au centre-ville.',
      'events-issue-5-title':   'Centre de réadaptation &amp; soutien en dépendances',
      'events-issue-5-body':    'Accès aux traitements, aux services de santé mentale et impact communautaire.',
      'events-note':            'Pas de discours. Pas de politique habituelle. Juste de vraies conversations, des légers rafraîchissements et votre voix qui façonne mes priorités. Amenez les enfants, amenez un voisin, amenez vos idées. Il s\'agit avant tout <strong>d\'écouter.</strong>',
      'events-note-attr':       '— Manisha Varma, votre candidate du Quartier 7',
      'events-map-title':       'Emplacement',
      'events-map-btn':         'Ouvrir dans Google Maps',
      'events-cant-title':      'Vous ne pouvez pas venir?',
      'events-cant-sub':        'Partagez votre principal enjeu ou votre question — Manisha lit chaque message.',
      'events-form-name':       'Votre nom',
      'events-form-email':      'Courriel',
      'events-form-issue':      'Votre principal enjeu',
      'events-form-issue-ph':   '— Choisissez un enjeu —',
      'events-form-issue-1':    'Agrandir le sentier',
      'events-form-issue-2':    'Taxes foncières &amp; dépenses municipales',
      'events-form-issue-3':    'Sécurité routière',
      'events-form-issue-4':    'Services municipaux',
      'events-form-issue-5':    'Centre de réadaptation &amp; soutien en dépendances',
      'events-form-issue-6':    'Autre',
      'events-form-msg':        'Dites-m\'en plus',
      'events-form-msg-ph':     'Pourquoi cet enjeu compte-t-il pour vous?',
      'events-form-btn':        'Envoyer ma priorité',
    }
  };

  function applyLanguage(lang) {
    var t = translations[lang] || translations.en;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!t[key]) return;
      var attr = el.getAttribute('data-i18n-attr');
      if (attr) {
        el.setAttribute(attr, t[key]);
      } else {
        el.innerHTML = t[key];
      }
    });

    /* placeholders */
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      if (t[key]) el.setAttribute('placeholder', t[key]);
    });

    /* sync toggle buttons */
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });

    localStorage.setItem('mv-lang', lang);
  }

  function init() {
    var saved = localStorage.getItem('mv-lang');
    var preferred = (saved === 'fr' || saved === 'en') ? saved : 'en';
    applyLanguage(preferred);

    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.lang-btn');
      if (!btn) return;
      applyLanguage(btn.getAttribute('data-lang'));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
