Review.destroy_all
Cocktail.destroy_all
User.destroy_all

user=User.create!(
  email: 'chris@gmail.com',
  password: 'topsecret'
)

c1=Cocktail.create!(
  name: 'Piña Colada',
  description: "La piña colada est un cocktail à base de rhum, de jus d'ananas et de crème de coco.",
  user_id: user.id
)
c2=Cocktail.create!(
  name: 'Margarita',
  description: "La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique.",
  user_id: user.id
)
c3=Cocktail.create!(
  name: 'Mojito',
  description: "Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche.",
  user_id: user.id
)
c4=Cocktail.create!(
  name: 'Spritz',
  description: "Le spritz est un cocktail alcoolisé largement consommé en apéritif dans les grandes villes de la Vénétie et du Frioul-Vénétie julienne, et également répandu dans toute l'Italie.",
  user_id: user.id
)
c5=Cocktail.create!(
  name: 'Tequila Sunrise',
  description: "Le tequila sunrise est un cocktail à base de tequila, de jus d'orange, et de grenadine qui au fond du verre donne l'effet d'un lever de soleil ce qui a inspiré le nom de la boisson.",
  user_id: user.id
)
c6=Cocktail.create!(
  name: 'Cosmopolitan',
  description: "Le Cosmopolitan est un cocktail de couleur rose, classique des cocktail officiel de l'IBA, à base de Vodka, de triple sec, de citron vert, et de jus de canneberge.",
  user_id: user.id
)
c7=Cocktail.create!(
  name: 'Gin Tonic',
  description: "Le gin tonic est un cocktail alcoolisé à base de gin et d'eau tonique, parfois accompagné avec une tranche de citron ou de citron vert, et servi avec de la glace.",
  user_id: user.id
)
c8=Cocktail.create!(
  name: 'Sex on the beach',
  description: "Le Sex on the beach est un cocktail alcoolisé créé par le T.G.I. Friday's.",
  user_id: user.id
)

Review.create!(
  content: 'Really enjoyed drinking this cocktail in the pool on holiday!',
  cocktail_id: c1.id,
  user_id: user.id
)
Review.create!(
  content: 'That is really a bad cocktail!',
  cocktail_id: c1.id,
  user_id: user.id
)
Review.create!(
  content: 'Really enjoyed drinking this cocktail in the pool on holiday!',
  cocktail_id: c1.id,
  user_id: user.id
)
Review.create!(
  content: 'That is really a great cocktail!',
  cocktail_id: c1.id,
  user_id: user.id
)
Review.create!(
  content: 'Really enjoyed drinking this cocktail on holiday!',
  cocktail_id: c1.id,
  user_id: user.id
)
Review.create!(
  content: 'Can be more original!',
  cocktail_id: c1.id,
  user_id: user.id
)
