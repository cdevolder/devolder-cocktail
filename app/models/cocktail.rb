class Cocktail < ApplicationRecord
  belongs_to :user

  validates :name, presence: true, uniqueness: true
  validates :name, presence: true

  def as_json(options = {})
    {
      id: id,
      name: name,
      description: description,
      created_at: created_at,
      user_id: Cocktail.find(id).user.id
    }
  end
end
