Review.destroy_all
Cocktail.destroy_all
User.destroy_all

user=User.create!(
  email: 'chris@gmail.com',
  password: 'topsecret'
)
user2=User.create!(
  email: 'jhon@gmail.com',
  password: 'topsecret'
)
user3=User.create!(
  email: 'james@gmail.com',
  password: 'topsecret'
)
user4=User.create!(
  email: 'icolas@gmail.com',
  password: 'topsecret'
)
user5=User.create!(
  email: 'julien@gmail.com',
  password: 'topsecret'
)

c1=Cocktail.create!(
  name: 'Piña Colada',
  description: "Dans un shaker, versez les ingrédients.
Secouez énergiquement. Enfin, servez dans un grand verre sur des glaçons.

Astuce: Vous pouvez remplacer le jus d’ananas et le lait de coco par 12 cl de Piña Colada Caraïbos.",
  user_id: user.id,
  image_url: "https://res.cloudinary.com/cdevolder/image/upload/v1549983412/pinacolada_tfqjro.jpg"
)
c2=Cocktail.create!(
  name: 'Margarita',
  description: "Dans un shaker rempli à moitié de glaçons, versez 4 cl de tequila, 2 cl de triple sec et 2 cl de jus de citron vert.
Shakez et versez dans un verre à cocktail.",
  user_id: user.id,
  image_url: "https://res.cloudinary.com/cdevolder/image/upload/v1549983412/margarita_gq1tdd.jpg"
)
c3=Cocktail.create!(
  name: 'Mojito',
  description: "Dans un verre à Mojito, disposez 6 à 8 feuilles de menthe, 1/2 citron vert coupé en dés et 2 cl de sirop de canne.
Pilez et versez 4 cl de rhum blanc 40°.
Ajoutez de la glace pilée et allongez d’eau gazeuse.
Mélangez de bas en haut avec une cuillère à mélange.",
  user_id: user.id,
  image_url: "https://res.cloudinary.com/cdevolder/image/upload/v1549983412/mojito_dzx14e.jpg"
)
c4=Cocktail.create!(
  name: 'Spritz',
  description: "Mettez en premier 3 ou 4 glaçons et une demi-rondelle d’orange, versez ensuite le Prosecco, puis l’Americano et enfin un trait d’eau gazeuse.",
  user_id: user.id,
  image_url: "https://res.cloudinary.com/cdevolder/image/upload/v1549983413/spritz_numjox.jpg"
)
c5=Cocktail.create!(
  name: 'Tequila Sunrise',
  description: "Dans un verre long drink rempli de glaçons, versez 4 cl de tequila, 8 cl de jus d’orange et 2 cl de grenadine.",
  user_id: user.id,
  image_url: "https://res.cloudinary.com/cdevolder/image/upload/v1549983412/tequilasunrise_yqtjsx.jpg"
)
c6=Cocktail.create!(
  name: 'Cosmopolitan',
  description: "Dans un shaker rempli à moitié de glaçons, versez 4 cl de vodka, 1 cl de triple sec, 4 cl de nectar de cranberry, pressez le dé de citron vert.
Shakez et filtrez dans un verre à cocktail.
Ajoutez le dé de citron vert pressé.
Vous pouvez également réaliser ce cocktail avec 4 cl de vodka, 12 cl de Cosmopolitan Caraïbos et un trait de citron vert.",
  user_id: user.id,
  image_url: "https://res.cloudinary.com/cdevolder/image/upload/v1550502467/cosmopolitan_sx9hlc.jpg"
)
c7=Cocktail.create!(
  name: 'Gin Tonic',
  description: "Dans un verre ballon rempli de glaçons, versez 4 cl de gin.
Allongez de tonic frais.
Ajoutez un zeste de citron jaune.",
  user_id: user.id,
  image_url: "https://res.cloudinary.com/cdevolder/image/upload/v1550502464/gintonic_bffdf3.jpg"
)
c8=Cocktail.create!(
  name: 'Sex on the beach',
  description: "Dans un verre tulipe, versez la vodka, la liqueur et la crème sur les glaçons et mélangez.
Versez ensuite les jus, mélangez de nouveau, ajoutez une tranche d’ananas en décoration et vous pouvez servir.",
  user_id: user.id,
  image_url: "https://res.cloudinary.com/cdevolder/image/upload/v1550502458/sexonthebeach_qhicfb.jpg"
)
c9=Cocktail.create!(
  name: 'Rhum arrangé ananas',
  description: "Dans un grand récipient refermable, versez un litre de rhum.
Epluchez l’ananas et coupez-le en morceaux, incorporez la gousse de vanille fendue en deux.
Au bout de 3 mois de macération, ajoutez le sirop de canne et laissez macérer 3 semaines avant consommation.",
  user_id: user.id,
  image_url: "https://res.cloudinary.com/cdevolder/image/upload/v1550502458/sexonthebeach_qhicfb.jpg"
)
c10=Cocktail.create!(
  name: 'Caïpirinha',
  description: "Préparez la caïpirinha directement dans un verre.
Lavez le citron vert et découpez-le en dés, en supprimant la partie blanche centrale.
Placez les morceaux de citron dans le verre, ajoutez le sirop de canne et écrasez le tout à l’aide d’un pilon pour extraire le jus du citron vert.
Ajoutez la glace pilée puis versez la cachaça.
Mélangez avec un agitateur puis servez avec une paille.",
  user_id: user.id,
  image_url: "https://res.cloudinary.com/cdevolder/image/upload/v1550514792/caipirinha_qfue2j.jpg"
)
c11=Cocktail.create!(
  name: 'Maï Taï',
  description: "Dans un shaker rempli de glaçons, versez 2 cl de rhum blanc, 2 cl de rhum ambré, 2 cl de triple sec, 6 cl de jus de citron vert et 1 cl de sirop d’orgeat.
Shakez et versez dans un verre à cocktail. Astuce : vous pouvez remplacer les 6 cl de nectar de citron vert par 3 cl de jus de citron vert.",
  user_id: user.id,
  image_url: "https://res.cloudinary.com/cdevolder/image/upload/v1550514839/maitai_v83qvi.jpg"
)
c12=Cocktail.create!(
  name: 'Ti’ Punch',
  description: "Dans un verre à ti’punch, versez et mélangez du rhum, du sirop de canne et un quartier de citron.",
  user_id: user.id,
  image_url: "https://res.cloudinary.com/cdevolder/image/upload/v1550514791/ti_punch_wlf7gv.jpg"
)
c13=Cocktail.create!(
  name: 'Rhum arrangé vanille cannelle',
  description: "Rompez le bâton de cannelle en 4 morceaux, fendez les gousses de vanille, mélangez-les avec le rhum préalablement versé dans un grand récipient refermable et laissez macérer 4 mois.
Ajoutez le sirop de canne au bout des 4 mois.",
  user_id: user.id,
  image_url: "https://res.cloudinary.com/cdevolder/image/upload/v1550514791/rhumarrangevanillecannelle_hczufi.jpg"
)
c14=Cocktail.create!(
  name: 'Venezzio Spritz',
  description: "Dans un shaker, versez tous les ingrédients, pilez légerement les quartiers d’orange puis ajoutez des glaçons et shakez.
Filtrez dans un verre long drink.",
  user_id: user.id,
  image_url: "https://res.cloudinary.com/cdevolder/image/upload/v1550515172/veneziospritz_drqvya.jpg"
)
c15=Cocktail.create!(
  name: 'Bahama Mama',
  description: "Dans un shaker rempli de glaçons, versez tous les ingrédients et shakez. Versez dans un verre rempli de glace pilée.",
  user_id: user.id,
  image_url: "https://res.cloudinary.com/cdevolder/image/upload/v1550514792/bahama_mama_livuaa.jpg"
)
c16=Cocktail.create!(
  name: 'Mojito Fraise Ambré',
  description: "Dans un verre à Mojito, disposez 6 à 8 feuilles de menthe, 1/2 citron vert coupé en dés et 2 cl de sirop de canne.
Pilez et versez 4 cl de rhum ambré 45°.
Ajoutez de la glace pilée et allongez de jus de fraise.
Mélangez de bas en haut avec une cuillère à mélange.",
  user_id: user.id,
  image_url: "https://res.cloudinary.com/cdevolder/image/upload/v1550514791/mojitofraiseambre_ppwu2g.jpg"
)
c17=Cocktail.create!(
  name: 'Punch Rosé',
  description: "Pour 15 portions environ : dans une vasque, versez le jus de 4 citrons, 3 cl de crème de cassis, 2 bouteilles de vin rosé pétillant frais, 40 cl de gin, 30 cl de nectar de cranberry et une dizaine de glaçons.
Servez bien frais ensuite dans les verres.",
  user_id: user.id,
  image_url: "https://res.cloudinary.com/cdevolder/image/upload/v1550514790/punchrose_zmoygi.jpg"
)
c18=Cocktail.create!(
  name: 'Old Fashioned',
  description: "Au fond du verre Old Fashioned, écrasez le morceau de sucre préalablement imbibé d’un trait de bitter.
Ajoutez des glaçons, versez le whisky et allongez d’eau gazeuse.
Décorez d’un zeste d’orange.",
  user_id: user.id,
  image_url: "https://res.cloudinary.com/cdevolder/image/upload/v1550515063/odfashioned_hcnfpz.jpg"
)
c19=Cocktail.create!(
  name: 'Punch Pot-au-rhum',
  description: "Préparez le cocktail dans une grande coupe.
Ajouter des fruits frais coupés (orange, banane, ananas…).
Au dernier moment, ajoutez des glaçons et servez avec une louche.",
  user_id: user.id,
  image_url: "https://res.cloudinary.com/cdevolder/image/upload/v1550514791/punchpotaurhum_w1pbiz.jpg"
)
c20=Cocktail.create!(
  name: 'Le Grand Bleu',
  description: "Dans un shaker, déposez une rondelle de concombre et un dé de citron vert. Pilez, ajoutez quelques glaçons, puis versez le rhum et le curaçao bleu.
Shakez et flitrez dans un grand verre piscine rempli de glaçons.
Allongez de ginger ale.
Décorez avec une feuille de basilic frais.",
  user_id: user.id,
  image_url: "https://res.cloudinary.com/cdevolder/image/upload/v1550514794/legrandbleu_xkmfsr.jpg"
)

Review.create!(
  content: 'Really enjoyed drinking this cocktail in the pool on holiday!',
  cocktail_id: c20.id,
  user_id: user.id
)
Review.create!(
  content: 'That is really a great cocktail!',
  cocktail_id: c20.id,
  user_id: user2.id
)
Review.create!(
  content: "I'll spend the rest of my life drinking this one.",
  cocktail_id: c20.id,
  user_id: user3.id
)
Review.create!(
  content: 'Awesome',
  cocktail_id: c20.id,
  user_id: user4.id
)
Review.create!(
  content: 'Can be more original!',
  cocktail_id: c20.id,
  user_id: user5.id
)
